/**
 * @file db-query-error.js
 *
 * Represents a database query error.
 */

const ErrorEnum = require("./error-enum.js");
const { assert, assertIsEnumValue, isDefined } = require("../../validate.js");
const { setConstProperty } = require("../../const-util.js");

/**
 * An Error subclass used to represent database access problems.
 *
 * In addition to the regular Error data members and methods, DBQueryError
 * provides the following:
 *
 * code:          A ErrorEnum code value.
 *
 * detailMessage: Possible extra information about the error, useful for
 *                logging and debugging.
 */
class DBQueryError extends Error {
    /**
     * Constructs a DBQueryError from an ErrorEnum value, using the value to
     * select an appropriate error message.
     *
     * @param errorType  An ErrorEnum value specifying the specific error type.
     */
    constructor(errorType) {
        assertIsEnumValue(errorType, ErrorEnum, "Invalid database error type");
        super(errorType.message);
        setConstProperty(this, "code", errorType);
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
            throw new Error("Tried to set error detail message twice.");
        }
        setConstProperty(this, "detailMessage", message);
    }
}

module.exports = DBError;
