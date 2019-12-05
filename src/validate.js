/**
 * @file validate/index.js
 *
 * Provides functions for validating input/variable values.
 */
const logger = require("./logger.js");

module.exports = {
    /**
     * Checks if a value is a valid, finite numeric value.
     *
     * @param value  The value to check.
     *
     * @return       Whether the given value is numeric and finite.
     */
    isNumeric: (value) => {
        // https://stackoverflow.com/questions/6449611/check-whether-a-value-is-a-number-in-javascript-or-jquery#6449623
        return ! isNaN(parseFloat(value)) && isFinite(value);
    },

    /**
     * Checks if a value is defined.
     *
     * @param value  The value to check.
     * 
     * @return       Whether the value equals anything other than undefined.
     */
    isDefined: (value) => {
        return typeof value !== "undefined";
    },

    /**
     * Checks if a value is a string.
     *
     * @param value  The value to check.
     *
     * @return       Whether the value is a non-null, defined string value.
     */
    isString : (value) => {
        if (value === null || ! module.exports.isDefined(value)) {
            return false;
        }
        return value instanceof String || typeof value === "string";
    },

    /**
     * Checks if a value is a non-empty string.
     *
     * @param value  The value to check.
     *
     * @return       Whether the value is a string with a length greater than
     *               zero.
     */
    isNonEmptyString : (value) => {
        return module.exports.isString(value) && value !== "";
    },

    /**
     * Checks if a value is a valid hex color string.
     *
     * @param value  The value to check.
     *
     * @return       Whether the value is a six-digit RGB hex string starting
     *               with '#'.
     */
    isHexColorString: (value) => {
        if (! module.exports.isString(value)) {
            return false;
        }
        if (value.length != 7) {
            return false;
        }
        if (value.charAt(0) != "#") {
            return false;
        }
        const validChars = "0123456789ABCDEF";
        for (let i = 1; i < 7; i++) {
            if (! validChars.includes(value.charAt(i).toUpperCase())) {
                return false;
            }
        }
        return true;
    },

    /**
     * Throws an error if an expected condition is not true.
     *
     * @param condition  The condition value that should be true.
     *
     * @param message    The error message to print if the condition is not
     *                   true.
     */
    assert: (condition, message) => {
        if (! condition) {
            if (! message) { message = "ASSERTION FAILED"; }
            logger.error(message);
            throw new Error(message);
        }
    },

    /**
     * Throws an error if a value is not an object of a specific class type.
     *
     * @param value          The value being checked.
     *
     * @param classType      The class that the value should have.
     *
     * @param messagePrefix  A string to print before the error message if the
     *                       assertion fails.
     */
    assertIsClass: (value, classType, messagePrefix) => {
        module.exports.assert(value instanceof classType
                && module.exports.isDefined(value),
                messagePrefix + ": \"" + value
                + "\" is not an object of type "
                + classType.name + ".");
    },

    /**
     * Throws an error if a value is not valid for a specific enum type.
     *
     * @param value          The value being checked.
     *
     * @param classType      The enum type that the value should belong to.
     *
     * @param messagePrefix  A string to print before the error message if the
     *                       assertion fails.
     */
    assertIsEnum: (value, enumType, messagePrefix) => { 
        module.exports.assert(enumType.isValid(value),
                messagePrefix + ": \"" + value
                + "\" is not a valid enum value of type " + enumType.name
                + ".");
    }
};
