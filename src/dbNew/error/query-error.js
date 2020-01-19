/**
 * @file query-error.js
 *
 * Represents an error created by an invalid database query.
 */

const QueryErrorEnum = require("./query-error-enum.js");
const { assert, assertIsEnumValue, isDefined } = require("../../validate.js");
const { setConstProperty } = require("../../const-util.js");

const ERROR_TYPE_KEY = "errorType";

/**
 * An Error subclass used to represent database access problems.
 *
 * In addition to the regular Error data members and methods, QueryError
 * provides the following:
 *
 * ErrorType:  A QueryErrorEnum value describing the error.
 */
class DBQueryError extends Error {
    /**
     * Constructs a QueryError from a QueryErrorEnum value, using the value to
     * select an appropriate error message.
     *
     * @param errorType  A QueryErrorEnum value specifying the specific error
     *                   type.
     *
     * @param message    An optional message string to provide additional
     *                   information about the error.
     */
    constructor(errorType, message) {
        assertIsEnumValue(errorType, QueryErrorEnum,
                "Invalid database error type");
        if (isDefined(message)) {
            super(errorType.message + ":" + message);
        }
        else {
            super(errorType.message);
        }
        setConstProperty(this, ERROR_TYPE_KEY, errorType);
    }
}

module.exports = DBError;
