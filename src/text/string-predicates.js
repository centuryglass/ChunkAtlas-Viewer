/**
 * @file  string-predicates.js
 *
 * Defines functions used to check if a single string satisfies a particular
 * condition.
 */

const { isString } = require("../validate.js");

/**
 * Checks that a string value matches a regular expression.
 *
 * @param str    A string to test.
 *
 * @param regex  The regular expression used to test the string.
 *
 * @return       Whether str is a string value that matches the given
 *               regex.
 */
function matchesRegex(str, regex) {
    return isString(str) && str.match(regex) !== null;
}

module.exports = {
    /**
     * Checks that a string value is written in CamelCase, starting with an
     * uppercase letter.
     *
     * @param str  A string to test.
     *
     * @return     Whether str is a string written in CamelCase.
     */
    isUpperCamelCase: function(str) {
        return matchesRegex(str, /^(:?[A-Z][a-z]*)+[a-z]+$/);
    },

    /**
     * Checks that a string value is written in camelCase, starting with a
     * lowercase letter.
     *
     * @param str  A string to test.
     *
     * @return     Whether str is a string written in camelCase.
     */
    isLowerCamelCase: function(str) {
        return matchesRegex(str, /^(:?[a-z]+)+[a-z]+$/);
    },

    /**
     * Checks that a string is formatted in all caps, words separated with
     * underscores, and words not beginning with numbers, as is appropriate
     * for the names of constant values.
     *
     * @param str  A string to test.
     *
     * @return     Whether str is written in CONST_STRING_FORMAT.
     */
    isConstFormat: function(str) {
        return matchesRegex(str, /^[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)*$/);
    },

    /**
     * Checks that a string value matches one of the possible return values of
     * the JavaScript typeof operator.
     *
     * @param str  A string to test.
     *
     * @return     Whether the string matches one of the standard JavaScript
     *             type strings returned by 'typeof'.
     */
    isTypeString: function(str) {
        // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
        const validTypes = [
            "undefined",
            "object",
            "boolean",
            "number",
            "bigint",
            "string",
            "symbol",
            "function"
        ];
        for (let type of validTypes) {
            if (type === str) {
                return true;
            }
        }
        return false;
    }
};
