/**
 * @file result-handler.js
 *
 * Extracts useful data from database results.
 */

const ErrorEnum = require("./error-enum.js");
const DBError = require("./db-error.js");
const { isDefined, assert } = require("../validate.js");


module.exports = {
    /**
     * Check that a result is valid, throwing an INVALID_RESULTS DBError if it
     * is not.
     *
     * @param dbResult  A possible result object.
     */
    _checkResult : function(dbResult) {
        if((typeof dbResult !== "object") || (dbResult === null)
                || (dbResult.constructor.name !== "Result")) {
            throw new DBError(ErrorEnum.INVALID_RESULTS);
        }
    },

    /**
     * Throws any errors returned by the database, possibly standardizing them.
     *
     * @param query  A database query Promise.
     *
     * @return       Another Promise that will resolve with the database query
     *               result if no errors occurred.
     */
    handleErrors : function(query) {
        return query.catch((err) => {
            let dbError;
            ErrorEnum.forEach((errType) => {
                if (ErrorEnum.selector(errType)(err)) {
                    if (errType === ErrorEnum.UNKNOWN_ERROR) {
                        console.log("Unhandled error:");
                        console.dir(err);
                    }
                    throw new DBError(errType)
                }
            });
            throw new DBError(ErrorEnum.UNKNOWN_ERROR);
        });
    },

    /**
     * Checks if a database query result returned any data.
     *
     * @param dbResult  The result object to check.
     *
     * @return          True if at least one row of data was returned, false
     *                  if the result is empty.
     */
    returnedData : function(dbResult) {
        this._checkResult(dbResult);
        return isDefined(dbResult) && isDefined(dbResult.rows)
                && (typeof dbResult.rows.length === "number")
                && dbResult.rows.length > 0;
    },

    /**
     * Gets all rows returned in a database query result.
     *
     * @param dbResult  The result object to check.
     *
     * @return          All returned rows.
     */
    getResultRows : function(dbResult) {
        this._checkResult(dbResult);
        if (module.exports.returnedData(dbResult)) {
            return dbResult.rows;
        }
        else {
            throw new DBError(ErrorEnum.NO_RESULTS);
        }
    },

    /**
     * Gets all values of a specific column from a database query result.
     *
     * @param dbResult         A result returned from a database query.
     *
     * @param tableEnum        The queried table's column enum.
     *
     * @param requestedColumn  The name of a column within the rows returned
     *                         by the database result.
     *
     * @return                 An array containing all of the requested column
     *                         values within the database result.
     */
    getColumnValues : function(dbResult, tableEnum, requestedColumn) {
        this._checkResult(dbResult);
        const values = [];
        if (module.exports.returnedData(dbResult)) {
            const column = tableEnum.column(requestedColumn);
            dbResult.rows.forEach((row) => {
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
     * @param dbResult         A result returned from a database query,
     *                         expected to return only one row.
     *
     * @param tableEnum        The queried table's column enum.
     *
     * @param requestedColumn  The name of a column within the row returned
     *                         by the database result.
     *
     * @return                 The requested column value.
     */
    getCell : function(dbResult, tableEnum, requestedColumn) {
        this._checkResult(dbResult);
        const cellValues = module.exports.getColumnValues(dbResult,
                requestedColumn);
        let err;
        let detailMessage = requestedColumn;
        if (cellValues.length > 1) {
            err = new DBError(ErrorEnum.EXTRA_RESULTS);
            detailMessage += ": Found " + cellValues.length
                    + " matching rows.";
        }
        else if (cellValues.length === 0) {
            err = new DBError(ErrorEnum.NO_RESULTS);
        }
        if (err) {
            err.setDetailMessage(detailMessage);
            throw err;
        }
        return cellValues[0];
    }
};
