/**
 * @file Validator.js
 *
 * Provides functions for checking that values fit expected parameters.
 */


/**
 * Checks if a value is a valid, finite numeric value.
 *
 * @param value  The value to check.
 *
 * @return       Whether the given value is numeric and finite.
 */
function isNumeric(value) {
    // https://stackoverflow.com/questions/6449611/check-whether-a-value-is-a-number-in-javascript-or-jquery#6449623
    return ! isNaN(parseFloat(value)) && isFinite(value);
}

/**
 * Checks if a value is defined.
 *
 * @param value  The value to check.
 * 
 * @return       Whether the value equals anything other than undefined.
 */
function isDefined(value) {
    return typeof value !== "undefined";
}

/**
 * Checks if a value is a valid hex color string.
 *
 * @param value  The value to check.
 *
 * @return       Whether the value is a six-digit RGB hex string starting with
 *               '#'.
 */
function isHexColorString(value) {
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
}

/**
 * Throws an error if an expected condition is not true.
 *
 * @param condition  The condition value that should be true.
 *
 * @param message    The error message to print if the condition is not true.
 */
function assert(condition, message) {
    if (! condition) {
        throw new Error(message || "ASSERTION FAILED");
    }
}

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
function assertIsClass(value, classType, messagePrefix) {
    assert(value instanceof classType && isDefined(value),
            messagePrefix + ": \"" + value + "\" is not an object of type "
            + classType.constructor.name + ".");
}

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
function assertIsEnum(value, enumType, messagePrefix) { 
    assert(enumType.isValid(value), messagePrefix + ": \"" + value
            + "\" is not a valid enum value of type " + enumType.name + ".");
}
