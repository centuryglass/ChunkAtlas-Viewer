/**
 * @file validate-spec.js
 *
 * Tests the validation module.
 */

describe("Validate", function() {
    const Validate = require("../src/validate.js");
    const EnumBuilder = require("../src/enum-builder.js");

    // Disable logging:
    const Logger = require("../src/logger.js");
    beforeAll(function() { Logger.disableLogging(); });
    afterAll(function() { Logger.enableLogging(); });

    /**
     * Tests a predicate function against a set of values, expecting them to
     * either all return true, or all return false.
     *
     * @param values        A list of values to check against the predicate.
     *
     * @param predicate     A function that takes a single parameter and
     *                      returns a boolean value.
     *
     * @param shouldBeTrue  Sets whether the predicate is expected to return
     *                      true or false.
     */
    function testPredicate(values, predicate, shouldBeTrue) {
        try  {
        for (let value of values) {
            if (shouldBeTrue) {
                expect(predicate(value)).toBe(true);
            }
            else {
                expect(predicate(value)).toBe(false);
            }
        }
        }
        catch (err) {
            console.dir(values);
            throw err;
        }
    }

    // Reusable value sets:
    const values = {
        NUMERIC:         [ 0, 0.1, 99, "101", "-50", -5, -5.5 ],
        NONNUMERIC:      [ null, undefined, "one", "s", false, this ],
        STRING:          [ "", "s", "str", new String("string object"),
                                this.toString() ],
        NONSTRING:       [ 0, 1, null, undefined, true, Object ],
        NONEMPTY_STRING: [ "s", "string", this.toString(), new String("s") ],
        EMPTY_STRING:    [ "", new String() ],
        HAS_CONTENT:     [ "str", 0, 1, false, function(){}, this, [ null ] ],
        NO_CONTENT:      [ null, undefined, "", []]
    };

    describe("isNumeric", function() {
        it("should return true for numeric values.", function() {
            testPredicate(values.NUMERIC, Validate.isNumeric, true);
        });

        it("should return false for non-numeric values.", function() {
            testPredicate(values.NONNUMERIC, Validate.isNumeric, false);
        });
    });

    describe("isString", function() {
        it("should return true for all strings.", function() {
            testPredicate(values.STRING, Validate.isString, true);
        });

        it("should return false for all non-string values.", function() {
            testPredicate(values.NONSTRING, Validate.isString, false);
        });
    });

    describe("isNonEmptyString", function() {
        it("should return true for all non-empty strings.", function() {
            testPredicate(values.NONEMPTY_STRING, Validate.isNonEmptyString,
                    true);
        });

        it("should return false for empty strings.", function() {
            testPredicate(values.EMPTY_STRING, Validate.isNonEmptyString,
                    false);
        });

        it("should return false for all non-string values.", function() {
            testPredicate(values.NONSTRING, Validate.isNonEmptyString,
                    false);
        });
    });

    describe("isHexColorString", function() {
        it("should return true for all hex color strings starting with #",
                function() {
            const colorValues = [];
            const charOptions = ['0', '1', '2', '3', '4', '5', '6', '7', '8',
                    '9', 'a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D', 'E',
                    'F' ];
            // Testing all possible combinations is excessive, just randomly
            // select a large number to test.
            const numColors = Math.pow(charOptions.length, 6);
            const testedColorCount = 5000;
            for (let i = 0; i < testedColorCount; i++) {
                let colorStr = '#';
                let iFactored = Math.floor(Math.random() * numColors);
                const init = iFactored;
                for (let charIdx = 0; charIdx < 6; charIdx++) {
                    colorStr += charOptions[iFactored % charOptions.length];
                    iFactored -= iFactored % charOptions.length;
                    iFactored /= charOptions.length;
                }
                colorValues.push(colorStr);
            }
            testPredicate(colorValues, Validate.isHexColorString, true);
        });

        it("should return false for values that are not correctly formatted"
                + " color strings.", function() {
                const colorValues = [ "#fffff", "0x00ff00", "111111", 0xffffff,
                        null, "red", "", this, Object, [], true ];
                testPredicate(colorValues, Validate.isHexColorString, false);
        });
    });

    describe("assert", function() {
        it("should not throw an error if the condition is true.", function() {
            expect(() => Validate.assert(true)).not.toThrow();
            expect(() => Validate.assert(true, "with message param"))
                    .not.toThrow();
            expect(() => Validate.assert(true, "msg", TypeError))
                    .not.toThrow();
        });

        it("should throw an error if the condition is false.", function() {
            expect(() => Validate.assert(false)).toThrow();
            expect(() => Validate.assert(1 === 0)).toThrow();
            expect(() => Validate.assert(Arrays.isArray(this))).toThrow();
        });
        it("should use the provided message parameter if an error is thrown,"
                + " or a generic message if none is given.", function() {
            const DEFAULT_MESSAGE = "ASSERTION FAILED";
            expect(() => Validate.assert(false)).toThrow(DEFAULT_MESSAGE);
            const messages = [ "", DEFAULT_MESSAGE, "test message" ];
            for (let message of messages) {
                expect(() => Validate.assert(false, message))
                        .toThrow(message);
            }
        });
        it("should use the provided error class if an error is thrown, or "
                + "the Error class if none is given.", function() {
            expect(() => Validate.assert(false)).toThrow(Error);
            const errorTypes = [ Error, RangeError, ReferenceError,
                    SyntaxError, TypeError, URIError ];
            for (let errType of errorTypes) {
                expect(() => Validate.assert(false, "", errType))
                    .toThrow(errType);
            }
        });
    });

    describe("assertIsString", function() {
        it("should not throw if the tested value is a string.", function() {
            for (let str of values.STRING) {
                expect(() => Validate.assertIsString(str)).not.toThrow();
            }
        });
        it("should throw a TypeError if the tested value is not a string.",
                function() {
            for (let nonStr of values.NONSTRING) {
                expect(() => Validate.assertIsString(nonStr))
                        .toThrow(TypeError);
            }
        });
    });

    describe("assertHasContent", function() {
        it("should not throw if the tested value is defined, non-null, and "
                + "non-empty.", function() {
            for (let value of values.HAS_CONTENT) {
                expect(() => Validate.assertHasContent(value)).not.toThrow();
            }
        });

        it("should throw an Error if the tested value is null, undefined, or "
                + "empty.", function() {
            for (let value of values.NO_CONTENT) {
                expect(() => Validate.assertHasContent(value)).toThrow();
            }
        });
    });

    describe("assertInstanceOf", function() {
        class TestClass { constructor() {} }
        const testObject = new TestClass();
        const testStr = new String();

        it("should not throw if the tested value has the given class type.",
                function() {
            expect(() => Validate.assertInstanceOf(testObject, TestClass)).not
                    .toThrow();
            expect(() => Validate.assertInstanceOf(testStr, String)).not
                    .toThrow();
        });

        it("should throw a TypeError if the tested value is not an object of "
                + "the given class type.", function() {
            expect(() => Validate.assertInstanceOf(testStr, TestClass))
                    .toThrow(TypeError);
            expect(() => Validate.assertInstanceOf(testObject, String))
                    .toThrow(TypeError);
            expect(() => Validate.assertInstanceOf(null, TestClass))
                    .toThrow(TypeError);
            expect(() => Validate.assertInstanceOf(this, TestClass))
                    .toThrow(TypeError);
        });
    });

    describe("assertCorrectType", function() {
        const typeExamples = [
            [ "undefined", undefined ],
            [ "object", this ],
            [ "boolean", false ],
            [ "number", 0 ],
            [ "bigint", 0n ],
            [ "string", "" ],
            [ "symbol", Symbol.match ],
            [ "function", function(){} ]
        ];
        it("should not throw if the tested value has the given type.",
                function() {
            for (let [ typeName, value ] of typeExamples) {
                expect(() => Validate.assertCorrectType(value, typeName)).not
                        .toThrow();
            }
        });

        it("should throw a TypeError if the tested value is not an object of "
                + "the given type.", function() {
            for (let typeIdx = 0; typeIdx < typeExamples.length; typeIdx++) {
                let valueIdx = typeIdx + 1;
                if (valueIdx === typeExamples.length) { valueIdx = 0; }
                const type = typeExamples[typeIdx][0];
                const value = typeExamples[valueIdx][1];
                expect(() => Validate.assertCorrectType(value, type))
                        .toThrow(TypeError);
            }
        });
    });

    describe("assertIsEnumValue", function() {
        // create a basic enum class for testing:
        const builder = new EnumBuilder("TestEnum");
        builder.addValue("FIRST");
        builder.addValue("SECOND");
        builder.addValue("THIRD");
        const TestEnum = builder.build();

        it("should not throw for any valid value of the given enum class.",
                function() {
            for (let value of TestEnum) {
                expect(() => Validate.assertIsEnumValue(value, TestEnum)).not
                        .toThrow();
            }
        });

        it("should throw a TypeError for any value not of the given enum "
                + "class.", function() {
            const invalidValues = [ 0, TestEnum.count + 1, "", this ];
            for (let value of invalidValues) {
                expect(() => Validate.assertIsEnumValue(value, TestEnum))
                        .toThrow(TypeError);
            }
        });
    });

    describe("assertCorrectFormat", function() {
        // Test with a predicate that accepts all strings with length 1:
        const testPredicate = function(str) { return str.length === 1; }
        // Test format description:
        const testFormat = "length = 1";
        // Values to test against the predicate:
        const passingStrings = [ "a", "b", "1", " ", "@", new String("x") ];
        const failingStrings = [ "", " a", "one", new String() ];
        const FormatError = require("../src/error/format-error.js");

        it("should not throw for any string value that satisfies the "
                + "predicate.", function() {
            for (let str of passingStrings) {
                expect(() => Validate.assertCorrectFormat(str, testPredicate,
                        testFormat)).not.toThrow();
            }
        });

        it("should throw a TypeError if the value given is not a string "
                + "or the predicate is not a function.", function() {

            expect(() => Validate.assertCorrectFormat("", "", testFormat))
                    .toThrow(TypeError);
            for (let value of values.NONSTRING) {
                expect(() => Validate.assertCorrectFormat(value, testPredicate,
                            testFormat)).toThrow(TypeError);
            }
        });

        it("should throw a FormatError if the value given fails the "
                + "predicate.", function() {
            for (let str of failingStrings) {
                expect(() => Validate.assertCorrectFormat(str, testPredicate,
                            testFormat)).toThrow(FormatError);
            }
        });

    });
});
