/**
 * @file format-error.js
 *
 * Represents an error caused by an improperly formatted string.
 */

const messageBeforeErrorStr  = "Invalid string formatting on '";
const messageBeforeFormatStr = "'. Expected format: '";
const messageAfterFormatStr  = "'';

class FormatError extends Error {
    /**
     * Builds a new FormatError for an invalid string.
     *
     * @param invalidStr      The string that triggered the format error.
     *
     * @param expectedFormat  A string describing the expected format of the
     *                        error string.
     */
    constructor(invalidStr, expectedFormat) {
        super(messageBeforeErrorStr + invalidStr + messageBeforeFormatStr
                + expectedFormat + messageAfterFormatStr);
    }

}
FormatError.prototype.name = "FormatError";

module.exports = FormatError;
