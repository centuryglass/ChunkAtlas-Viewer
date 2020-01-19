/**
 * @file result-error.js
 *
 *  Represents a case where the database returned a valid result, but that
 * result's data didn't meet expectations.
 */

const ResultErrorEnum = require("./result-error-enum.js");
const { assert, assertIsEnumValue, isDefined } = require("../../validate.js");
const { setConstProperty } = require("../../const-util.js");

const ERROR_TYPE_KEY = "errorType";

/**
 *  An Error subclass used to represent cases where a database query succeeded,
 * but the returned data did not meet expectations.
 *
 * In addition to the regular Error data members and methods, ResultError
 * provides the following:
 *
 * errorType:  A ResultErrorEnum value describing the error.
 */
class ResultError extends Error {
    /**
     * Constructs a ResultError from a ResultErrorEnum value, using the value
     * to select an appropriate error message.
     *
     * @param errorType  A ResultErrorEnum value specifying the specific error
     *                   type.
     *
     * @param message    An optional error message to provide additional
     *                   details.
     */
    constructor(errorType, message) {
        assertIsEnumValue(errorType, ResultErrorEnum,
                "Invalid database result error type");
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
