/**
 * @file db-error.js
 *
 * Represents a database access error.
 */

const ErrorEnum = require("./error-enum.js");
const { assert, isDefined } = require("../validate.js");
const { setConstProperty } = require("../const-util.js");

/**
 * An Error subclass used to represent database access problems.
 *
 * In addition to the regular Error data members and methods, DBError provides
 * the following:
 *
 * code:          A ErrorEnum code value.
 *
 * detailMessage: Possible extra information about the error, useful for
 *                logging and debugging.
 */
class DBError extends Error {
    /**
     * Constructs a DBError from an ErrorEnum value, using the value to
     * select an appropriate error message.
     *
     * @param errorEnum  An ErrorEnum value specifying the specific error type.
     */
    constructor(errorEnum) {
        assert(ErrorEnum.isValid(errorEnum), "'" + errorEnum
                + "' is not a valid database error type.");
        super(errorEnum.message);
        setConstProperty(this, "code", errorEnum);
    }

    /**
     * Sets an optional detailed error message, used to provide additional
     * context about the cause of this error. Once set, the detail message
     * will not change.
     *
     * @param message  The detailed error message to save.
     */
    setDetailMessage(message) {
        if(isDefined(this.detailMessage)) {
            Error("Tried to set error detail message twice.");
        }
        setConstProperty(this, "detailMessage", errorEnum);
    }
}

module.exports = DBError;
