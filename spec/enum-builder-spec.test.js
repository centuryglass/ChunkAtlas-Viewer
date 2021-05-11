/**
 * @file enum-builder-spec.js
 *
 * Tests the enum-builder module.
 */

describe("EnumBuilder", function() {
    const EnumBuilder = require("../src/enum-builder.js");
    const FormatError = require("../src/error/format-error.js");

    // Disable logging:
    const Logger = require("../src/logger.js");
    beforeAll(function() { Logger.disableLogging(); });
    afterAll(function() { Logger.enableLogging(); });

    // Define valid and invalid parameter values for testing:
    const testClassName = "TestEnum";
    const valid = {
        ENUM_CLASS_NAME: [ "TestEnum", "ValidName", "EnumType", "Va", "NMe" ],
        PROPERTY_NAME:   [ "a", "b", "c", "testProp", "test" ],
        VALUE_NAME:      [ "VAL_ONE", "VAL_TWO", "THREE", "TEST_VALUE", "T" ],
        TYPE_NAME:       [ "number", "string", "boolean", "function",
                                "bigint" ]
    };
    const badFormat = {
        ENUM_CLASS_NAME: [ "", "lowerCC", "lower", "BadCh@r", "N" ],
        PROPERTY_NAME:   [ "", "UpCCb", "UPPER", "badCh@r", "N" ],
        VALUE_NAME:      [ "", "VALUE_TWO_", "Three", "lower", "q" ],
        TYPE_NAME:       [ "Number", "text", "bool", "undef", "invalid" ]
    };
    const invalid = [ 0, false, JSON, undefined, true ];
    const reservedNames = EnumBuilder.getReservedPropertyNames();

    // Create a new enum builder for testing:
    function createTestBuilder() {
        return new EnumBuilder(testClassName);
    }
    
    // Create and return test enum class using a builder, after first adding 
    // the set of valid test values:
    function buildTestEnumClass(builder) {
        for (let value of valid.VALUE_NAME) {
            builder.addValue(value);
        }
        return builder.build();
    }

    describe("constructor", function() {
        it("should resolve without errors if constructed with a valid name.",
                function() {
            for (let name of valid.ENUM_CLASS_NAME) {
                expect(() => new EnumBuilder(name)).not.toThrow();
            }
        });

        it("should throw a FormatError if constructed with an invalid name,"
                + " or a TypeError if constructed with a non-string name.",
                function() {
            for (let name of badFormat.ENUM_CLASS_NAME) {
                expect(() => new EnumBuilder(name)).toThrow(FormatError);
            }
            for (let name of invalid) {
                expect(() => new EnumBuilder(name)).toThrow(TypeError);
            }
        });
    });

    describe("addProperty", function() {
        // Checks that an addProperty call throws no errors.
        function expectSuccess(builder, name, type, classType) {
            expect(() => builder.addProperty(name, type, classType)).not
                    .toThrow();
        }

        // Checks that an addProperty call fails with the expected error type
        function expectError(builder, name, type, classType, errType) {
            expect(() => builder.addProperty(name, type, classType))
                    .toThrow(errType);
        }

        it("should run without errors if given valid parameters and called "
                + "before addValue() or build().", function() {
            const builder = createTestBuilder();
            expectSuccess(builder, "objectParam", "object", String);
            for (let i = 0; i < valid.PROPERTY_NAME.length; i++) {
                expectSuccess(builder, valid.PROPERTY_NAME[i],
                        valid.TYPE_NAME[i], undefined, TypeError);
            }
        });

        it("should throw a TypeError if the property name is not a string.",
                function() {
            const builder = createTestBuilder();
            for (let name of invalid) {
                expectError(builder, name, "number", undefined, TypeError);
            }
        });

        it("should throw a FormatError if the property name is not a "
                + "camelCase string starting with a lowercase letter.",
                function() {
            const builder = createTestBuilder();
            for (let name of badFormat.PROPERTY_NAME) {
                expectError(builder, name, "string", undefined, FormatError);
            }
        });

        it("should throw a TypeError if typeName is not a string.",
                function() {
            const builder = createTestBuilder();
            for (let type of invalid) {
                expectError(builder, valid.PROPERTY_NAME[0], type,
                        undefined, TypeError);
            }
        });

        it("should throw a FormatError if typeName is a string but not a type"
                + " string.", function() {
            const builder = createTestBuilder();
            for (let type of badFormat.TYPE_NAME) {
                expectError(builder, valid.PROPERTY_NAME[0], type,
                        undefined, FormatError);
            }
        });

        it("should throw an Error if typeName is 'undefined'.", function() {
            const builder = createTestBuilder();
            expectError(builder, valid.PROPERTY_NAME[0], "undefined",
                    undefined, Error);
        });

        it("should throw a TypeError if typeName is not object and classType "
                + "isn't undefined.", function() {
            const classes = [ String, Object, JSON, Array ];
            for (let classType of classes) {
                expectError(createTestBuilder(), valid.PROPERTY_NAME[0],
                        "number", classType, TypeError);
            }
        });

        it("should throw a TypeError if typeName is object and classType "
                + "isn't a class.", function() {
            const notClasses = [ 0, false, null, "class", {} ];
            for (let notClass of notClasses) {
                expectError(createTestBuilder(), valid.PROPERTY_NAME[0],
                        "object", notClass, TypeError);
            }
        });

        it("should throw an Error if the enum has already been built.",
                function() {
            const builder = createTestBuilder();
            buildTestEnumClass(builder);
            expectError(builder, "testProp", "string", undefined, Error);
        });

        it("should throw an Error if the property name is a reserved name.",
                function() {
            const builder = createTestBuilder();
            for (let name of reservedNames) {
                expectError(builder, name, "string", undefined, Error);
            }
        });

        it("should throw an Error if enum values have already been added.",
                function() {
            const builder = createTestBuilder();
            builder.addValue("VALUE");
            expectError(builder, "a", "number", undefined, Error);
        });

        it("should throw an Error if the property has already been defined.",
                function() {
            const builder = createTestBuilder();
            expectSuccess(builder, "a", "number");
            expectError(builder, "a", "number", undefined, Error);
            expectSuccess(builder, "b", "string");
            expectError(builder, "b", "string", undefined, Error);
            expectSuccess(builder, "c", "object", String);
            expectError(builder, "c", "object", String, Error);
        });
    });

    describe("addEnumClassProperty", function() {
        // Expect that an addEnumClassProperty call works without errors:
        function expectSuccess(builder, name, value) {
            expect(() => builder.addEnumClassProperty(name, value)).not
                    .toThrow();
        }

        // Expect that an addEnumClassProperty call fails with a certain error
        // type:
        function expectError(builder, name, value, errType) {
            expect(() => builder.addEnumClassProperty(name, value))
                    .toThrow(errType);
        }

        it("should add new properties with valid names without errors.",
                function() {
            const builder = createTestBuilder();
            for (let name of valid.PROPERTY_NAME) {
                expectSuccess(builder, name, 0);
            }
        });


        it("should throw a TypeError if the propertyName is not a string.",
                function() {
            for (let name of invalid) {
                expectError(createTestBuilder(), name, 0, TypeError);
            }
        });

        it("should throw a FormatError if propertyName isn't formatted in "
                + "camelCase, starting with a lowercase letter.", function() {
            for (let name of badFormat.PROPERTY_NAME) {
                expectError(createTestBuilder(), name, 0, FormatError);
            }
        });
        
        it("should throw an Error if propertyName is a reserved name.",
                function() {
            for (let name of reservedNames) {
                expectError(createTestBuilder(), name, 0, Error);
            }
        });

        it("should throw an Error if propertyName was already added as an "
                + "enum class or value property.", function() {
            const builder = createTestBuilder();
            const getValuePropName = (baseName) => baseName + "Value";
            for (let name of valid.PROPERTY_NAME) {
                builder.addEnumClassProperty(name, "initialValue");
                builder.addProperty(getValuePropName(name), "number");
            }
            for (let name of valid.PROPERTY_NAME) {
                expectError(builder, name, 0, Error);
                expectError(builder, getValuePropName(name), 0, Error);
            }
        });

        it("should throw an Error if the enum class has already been built.",
                function() {
            const builder = createTestBuilder();
            for (let value of valid.VALUE_NAME) {
                builder.addValue(value);
            }
            builder.build();
            for (let name of valid.PROPERTY_NAME) {
                expectError(builder, name, 0, Error);
            }
        });
    });

    describe("addValue", function() {
        // Expect that an addValue call works without errors:
        function expectSuccess(builder, value, props) {
            expect(() => builder.addValue(value, props)).not.toThrow();
        }

        // Expect that an addValue call fails with a certain error type:
        function expectError(builder, value, props, errType) {
            expect(() => builder.addValue(value, props)).toThrow(errType);
        }


        it("should run without errors if new values are added with undefined "
                + "properties if the Enum has no properties.", function() {
            const builder = createTestBuilder();
            for (let value of valid.VALUE_NAME) {
                expectSuccess(builder, value);
            }
        });

        it("should run without errors if new values are added with all "
                + "required properties.", function() {
            const properties = [
                { name: "a", type: "number", values: [ 0, 1 ] },
                { name: "b", type: "string", values: [ "a", "" ] },
                { name: "c", type: "boolean", values: [ true, false ] }
            ];
            const builder = createTestBuilder();
            for (let property of properties) {
                builder.addProperty(property.name, property.type);
            }
            for (let i = 0; i < properties[0].values.length; i++) {
                const valueProps = {};
                for (let property of properties) {
                    valueProps[property.name] = property.values[i];
                }
                expectSuccess(builder, valid.VALUE_NAME[i], valueProps);
            }
        });

        it("should throw a FormatError if the new value is not formatted as "
                + "a CONST_CASE string.", function() {
            const builder = createTestBuilder();
            for (let value of badFormat.VALUE_NAME) {
                expectError(builder, value, undefined, FormatError);
            }
        });

        it("should throw a TypeError if a non-string value is given as the "
                + "value name.", function() {
            const builder = createTestBuilder();
            for (let value of invalid) {
                expectError(builder, value, undefined, TypeError);
            }
        });

        it("should throw a TypeError if the properties parameter is not an "
                + "object.", function() {
            const builder = createTestBuilder();
            builder.addProperty(valid.PROPERTY_NAME[0], valid.TYPE_NAME[0]);
            const badProps = [ 0, null, undefined, false, true ];
            for (let props of badProps) {
                expectError(builder, valid.VALUE_NAME[0], props, TypeError);
            }
        });

        it("should throw a TypeError if any property doesn't have the "
                + "expected type or class.", function() {
            const builder = createTestBuilder();
            builder.addProperty("numberProp", "number");
            builder.addProperty("objectProp", "object", String);
            const badTypeProps = [
                { numberProp: null, objectProp: new String() },
                { numberProp: 1, objectProp: {} },
                { numberProp: new String(), objectProp: 1 }
            ];
            for (let props of badTypeProps) {
                expectError(builder, valid.VALUE_NAME[0], props, TypeError);
            }
        });

        it("should throw an Error if expected properties are missing.",
                function() {
            const builder = createTestBuilder();
            builder.addProperty("numberProp", "number");
            builder.addProperty("objectProp", "object", String);
            const incompleteProps = [
                { numberProp: 1 },
                { objectProp: new String() }
            ];
            for (let props of incompleteProps) {
                expectError(builder, valid.VALUE_NAME[0], props, Error);
            }
        });

        it("should throw an Error if unexpected properties are found.",
                function() {
            const builder = createTestBuilder();
            expectError(builder, valid.VALUE_NAME[0], { fakeProp: 1 }, Error);
            builder.addProperty("numberProp", "number");
            expectError(builder, valid.VALUE_NAME[0],
                    { numberProp: 1, fakeProp: 1 }, Error);
        });

        it("should throw an Error if the new value's name has already been "
                + "used.", function() {
            const builder = createTestBuilder();
            for (let name of valid.VALUE_NAME) {
                expectSuccess(builder, name);
                expectError(builder, name, undefined, Error);
            }
        });

        it("should throw an Error if the Enum class has already been built.",
                function() {
            const builder = createTestBuilder();
            builder.addValue("BEFORE_BUILD");
            builder.build();
            for (let name of valid.VALUE_NAME) {
                expectError(builder, name, undefined, Error);
            }
        });
    });

    describe("build", function() {
        it("should throw an Error if called before adding values.",
                function() {
            const builder = createTestBuilder();
            expect(() => builder.build()).toThrow();
        });

        it("should build the Enum class with all provided values and "
                + "properties.", function() {
            const builder = createTestBuilder();
            const testProps = [
                { name: "numVal", type: "number" },
                { name: "boolVal", type: "boolean" },
                { name: "strVal", type: "string" }
            ];
            for (let prop of testProps) {
                expect(() => builder.addProperty(prop.name, prop.type)).not
                        .toThrow();
            }
            const testValues = [
                {
                    name: "VALUE_ONE",
                    props: { numVal: 1, boolVal: false, strVal: "one" }
                },
                {
                    name: "VALUE_TWO",
                    props: { numVal: 2.2, boolVal: true, strVal: "two" }
                },
                {
                    name: "VALUE_THREE",
                    props: { numVal: 3.3, boolVal: true, strVal: "three" }
                }
            ];
            for (let value of testValues) {
                expect(() => builder.addValue(value.name, value.props)).not
                        .toThrow();
            }

            let enumClass;
            expect(() => enumClass = builder.build()).not.toThrow();
            expect(enumClass.className).toEqual(testClassName);
            expect(enumClass.count).toEqual(testValues.length);
            let idx = 0;
            for (let value of enumClass) {
                const valueData = testValues[idx];
                expect(value).toBeDefined();
                expect(value.name).toEqual(valueData.name);
                expect(value.index).toEqual(idx);
                expect(value.enumClass).toBe(enumClass);
                for (let prop of testProps) {
                    expect(value[prop.name]).toEqual(valueData.props
                            [prop.name]);
                }
                idx++;
            }
            expect(idx).toEqual(testValues.length);
        });

        it("should return the same Enum class object if called multiple "
                + "times.", function() {
            const builder = createTestBuilder();
            for (let value of valid.VALUE_NAME) {
                builder.addValue(value);
            }
            const enumClass = builder.build();
            expect(enumClass).toBeDefined();
            for (let i = 0; i < 100; i++) {
                expect(builder.build()).toBe(enumClass);
            }
        });
    });
});
