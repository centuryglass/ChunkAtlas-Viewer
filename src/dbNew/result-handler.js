/**
 * @file result-handler.js
 *
 * Extracts useful data from database results.
 */

const QueryErrorEnum = require("./error/query-error-enum.js");
const QueryError = require("./error/query-error.js");
const ResultErrorEnum = require("./error/result-error-enum.js");
const ResultError = require("./error/result-error.js");
const Tables = require("./structure/tables.js");
const { isDefined, assert } = require("../validate.js");

const ResultHandler = {
    /**
     * Validates that a value is a database result object.
     *
     * @param result     A possible result object.
     *
     * @throw TypeError  If the result is not an actual database result
     *                   object.
     */
    _checkResult : function(result) {
        if((typeof result !== "object") || (result === null)
                || (result.constructor.name !== "Result")) {
            throw new ResultError(ResultErrorEnum.INVALID_RESULT);
        }
    },

    /**
     * Throws any errors returned by the database, possibly standardizing them.
     *
     * @param query      A database query Promise.
     *
     * @return           Another Promise that will resolve with the database
     *                   query result if no errors occurred, or reject with an
     *                   appropriate QueryError.
     *
     * @throw TypeError  If the query parameter is not a valid Promise object.
     */
    handleErrors : function(query) {
        assert(typeof query === "object" && isDefined(query.then),
                "Query must be a Promise or Promise-like object.", TypeError);
        return query.catch((err) => {
            for (let errType of QueryErrorEnum) {
                if (errType.predicate(err)) {
                    if (errType === QueryErrorEnum.UNKNOWN_ERROR) {
                        console.log("Unhandled error:");
                        console.dir(err);
                    }
                    throw new QueryError(errType)
                }
            }
            throw new QueryError(ErrorEnum.UNKNOWN_ERROR);
        });
    },

    /**
     * Checks if a database query result returned any data.
     *
     * @param Result      The result object to check.
     *
     * @return            True if at least one row of data was returned, false
     *                    if the result is empty.
     *
     * @throws TypeError  If the result parameter is not a valid database
     *                    result object.
     */
    returnedData : function(result) {
        this._checkResult(result);
        return isDefined(result) && isDefined(result.rows)
                && (typeof result.rows.length === "number")
                && result.rows.length > 0;
    },

    /**
     * Gets all rows returned in a database query result.
     *
     * @param result      The result object to check.
     *
     * @return            All returned rows, or an empty array if no results
     *                    were returned.
     *
     * @throws TypeError  If the result is not an actual database result
     *                    object.
     */
    getResultRows : function(result) {
        this._checkResult(result);
        if (this.returnedData(result)) {
            return result.rows;
        }
        else {
            return [];
        }
    },

    /**
     * Gets all values of a specific column from a database query result.
     *
     * @param result           A result returned from a database query.
     *
     * @param requestedColumn  A column enum value within the rows returned by
     *                         the database result.
     *
     * @return                 An array containing all of the requested column
     *                         values within the database result.
     *
     * @throw TypeError        If any of the parameters are not of the correct
     *                         type.
     */
    getColumnValues : function(result, requestedColumn) {
        this._checkResult(result);
        const values = [];
        if (this.returnedData(result)) {
            const column = requestedColumn.columnName;
            result.rows.forEach((row) => {
                if (! isDefined(row[column])) {
                    console.log("Invalid column " + column);
                }
                values.push(row[column]);
            });
        }
        return values;
    },

    /**
     * Attempts to get a single cell within a database query result that
     * returned a single row.
     *
     * @param result           A result returned from a database query,
     *                         expected to return only one row.
     *
     * @param requestedColumn  A column enum value within the row returned by
     *                         the database result.
     *
     * @return                 The requested column value.
     *
     * @throw TypeError        If any of the parameters do not have the
     *                         expected type.
     *
     * @throws ResultError     If no rows were returned, or multiple rows were
     *                         returned.
     */
    getCell : function(result, requestedColumn) {
        this._checkResult(result);
        const cellValues = this.getColumnValues(result, requestedColumn);
        const errorEnd = " matching rows for column '" 
                + requestedColumn.columnName + "'";
        if (cellValues.length > 1) {
            throw new ResultError(ResultErrorEnum.EXTRA_RESULTS,
                    "Found " + cellValues.length + errorEnd);
        }
        else if (cellValues.length === 0) {
            throw new DBQueryError(ErrorEnum.NO_RESULTS, "Found no "
                    + errorEnd);
        }
        return cellValues[0];
    }
};
Object.freeze(ResultHandler);
module.exports = ResultHandler;
