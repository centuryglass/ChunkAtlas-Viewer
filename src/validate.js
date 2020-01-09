/**
 * @file validate.js
 *
 * Provides functions for validating input/variable values.
 */
const logger = require("./logger.js");
const FormatError = require("./error/format-error.js");

const Validate = {};

// #### Internal utility functions: ####
/*
 * Converts an optional message prefix into a value that can be prepended to
 * the beginning of a message string.
 *
 * @param prefix  A message prefix string, which may be null.
 *
 * @return        The prefix followed by ": " if the prefix is defined, or
 *                the empty string if the prefix is undefined.
 */
function handlePrefix(prefix) {
    if (! Validate.isDefined(prefix)) { return ""; }
    return prefix + ": ";
}

/*
 * Returns the given value, first casting it to a string if it can't be
 * implicitly cast to string. This is only needed to handle the (admittedly
 * rare) case where a value is a symbol, and cannot be implicitly cast.
 *
 * @param value  The value to stringify.
 * 
 * @return       The value, or the value's string form if it can't be
 *               implicitly cast to string.
 */
function valueStr(value) {
    return typeof value === "symbol" ? value.toString() : value;
}


// #### Validation functions: ####
/**
 * Checks if a value is a valid, finite numeric value.
 *
 * @param value  The value to check.
 *
 * @return       Whether the given value is numeric and finite.
 */
Validate.isNumeric = function(value) {
    // https://stackoverflow.com/questions/6449611/check-whether-a-value-is-a-number-in-javascript-or-jquery#6449623
    return ! isNaN(parseFloat(value)) && isFinite(value);
}.bind(Validate);

/**
 * Checks if a value is defined.
 *
 * @param value  The value to check.
 * 
 * @return       Whether the value equals anything other than undefined.
 */
Validate.isDefined = function(value) {
    return typeof value !== "undefined";
}.bind(Validate);

/**
 * Checks if a value is a string.
 *
 * @param value  The value to check.
 *
 * @return       Whether the value is a non-null, defined string value.
 */
Validate.isString = function(value) {
    if (! this.isDefined(value) || value === null) {
        return false;
    }
    return value instanceof String || typeof value === "string";
}.bind(Validate);

/**
 * Checks if a value is a non-empty string.
 *
 * @param value  The value to check.
 *
 * @return       Whether the value is a string with a length greater than
 *               zero.
 */
Validate.isNonEmptyString = function(value) {
    return this.isString(value) && value.length > 0;
}.bind(Validate);

/**
 * Checks if a value is a valid hex color string.
 *
 * @param value  The value to check.
 *
 * @return       Whether the value is a six-digit RGB hex string starting
 *               with '#'.
 */
Validate.isHexColorString = function(value) {
    if (! this.isString(value)) {
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
}.bind(Validate);


// #### Assertions: ####
/**
 * Throws an error if an expected condition is not true.
 *
 * @param condition   The condition value that should be true.
 *
 * @param message     The error message to print if the condition is not
 *                    true.
 *
 * @param errorClass  An optional Error subclass to throw if the assertion
 *                    fails. If not provided, the base Error class is used.
 */
Validate.assert = function(condition, message, errorClass) {
    if (! condition) {
        if (! this.isDefined(message)) { message = "ASSERTION FAILED"; }
        if (! this.isDefined(errorClass)) { errorClass = Error; }
        logger.error(message);
        throw new errorClass(message);
    }
}.bind(Validate);


/**
 * Throws a TypeError if a value that should be a string is not a string.
 *
 * @param value          The value that should be a string.
 *
 * @param messagePrefix  A string to print at the start of the error
 *                       message if the value is not a string.
 */
Validate.assertIsString = function(value, messagePrefix) {
    this.assert(this.isString(value), handlePrefix(messagePrefix)
            + "Expected a string, found '" + valueStr(value)
            + "' with type " + typeof value + ".", TypeError);
}.bind(Validate);

/**
 * Throws a ReferenceError if a value is null or undefined, or a generic
 * Error if the value is the empty string or an empty array.
 *
 * @param value          The value that should be defined, non-null, and
 *                       not an empty string or array.
 *
 * @param messagePrefix  A string to print at the start of the error
 *                       message if the value is undefined, null, or empty.
 */
Validate.assertHasContent = function(value, messagePrefix) {
    this.assert(this.isDefined(value), handlePrefix(messagePrefix)
            + "found unexpected undefined value.", ReferenceError);
    this.assert(value !== null, messagePrefix
            + "found unexpected null value.", ReferenceError);
    if (this.isString(value)) {
        this.assert(value.length > 0, handlePrefix(messagePrefix)
                + "found unexpected empty string.");
    }
    if (Array.isArray(value)) {
        this.assert(value.length > 0, handlePrefix(messagePrefix)
                + "found unexpected empty array.");
    }
}.bind(Validate);

/**
 * Throws a TypeError if a value is not a non-null object of a specific
 * class type.
 *
 * @param value          The value being checked.
 *
 * @param classType      The class that the value should have.
 *
 * @param messagePrefix  A string to print before the error message if the
 *                       assertion fails.
 */
Validate.assertInstanceOf = function(value, classType, messagePrefix) {
    this.assert(this.isDefined(value) && value !== null
            && value instanceof classType, handlePrefix(messagePrefix) + "'"
            + valueStr(value) + "' is not an object of type '"
            + classType.name + "'.", TypeError);
}.bind(Validate);

/**
 * Throws a TypeError if a value does not have a particular expected type.
 *
 * @param value          The value being checked.
 *
 * @param typeName       The name of the value's expected type.
 *
 * @param messagePrefix  A string to print before the error message if the
 *                       assertion fails.
 */
Validate.assertCorrectType = function(value, typeName, messagePrefix) {
    this.assert(typeof value === typeName, handlePrefix(messagePrefix) + "'"
            + valueStr(value) + "' is not a value of type '" + typeName
            + "'.", TypeError);
}.bind(Validate);

/**
 * Throws a TypeError if a value is not valid for a specific enum type.
 *
 * @param value          The value being checked.
 *
 * @param classType      The enum type that the value should belong to.
 *
 * @param messagePrefix  A string to print before the error message if the
 *                       assertion fails.
 */
Validate.assertIsEnumValue = function(value, enumType, messagePrefix) { 
    this.assert(enumType.isValid(value), handlePrefix(messagePrefix) + "'"
            + valueStr(value) + "' is not a valid enum value of type '"
            + enumType.name + "'.", TypeError);
}.bind(Validate);

/**
 * Throws a FormatError if a string doesn't match an expected format
 * rule, or a TypeError if parameters to this function do not have the
 * expected type.
 *
 * @param strValue          The value to check.
 *
 * @param formatPredicate    A function that, when passed a string as a
 *                           parameter, returns true if that string has
 *                           the expected format and false if it does not.
 *
 * @param formatDescription  A string describing the expected format, to
 *                           be printed as part of an error message if the
 *                           string value fails the predicate.
 *
 * @param messagePrefix      An optional string to add at the start of the
 *                           error message if the assertion fails.
 */
Validate.assertCorrectFormat = function(strValue, formatPredicate,
        formatDescription, messagePrefix) {
    this.assert(this.isNonEmptyString(formatDescription), "Invalid format "
            + " description '" + formatDescription + "'", TypeError);
    this.assertIsString(strValue, handlePrefix(messagePrefix) + "'"
            + formatDescription + "' string expected.");
    this.assertCorrectType(formatPredicate, "function", "Invalid string"
            + " format predicate");
    if (! formatPredicate(strValue)) {
        throw new FormatError(strValue, formatDescription, messagePrefix);
    }

}.bind(Validate);

Object.freeze(Validate);
module.exports = Validate;
