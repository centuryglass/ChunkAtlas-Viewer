/**
 * @file response-handler.js
 *
 * Extracts useful data from database responses.
 */

const ErrorEnum = require("./error-enum.js");
const { isDefined, assert } = require("../validate.js");


module.exports = {
    /**
     * Throws any errors returned by the database, possibly standardizing them.
     *
     * @param query  A database query Promise.
     *
     * @return       Another Promise that will resolve with the database query
     *               response if no errors occurred.
     */
    handleErrors : function(query) {
        return query.then((dbResponse, err) => {
            if (err) {
                // TODO: improve error management.
                throw err;
            }
            return dbResponse;
        });
    },

    /**
     * Checks if a database query response returned any data.
     *
     * @param dbResponse  The response object to check.
     *
     * @return            True if at least one row of data was returned, false
     *                    if the response is empty, invalid, or undefined.
     */
    returnedData : function(dbResponse) {
        return isDefined(dbResponse) && isDefined(dbResponse.rows)
                && (typeof dbResponse.rows.length === "number")
                && dbResponse.rows.length > 0;
    },

    /**
     * Gets all rows returned in a database query response.
     *
     * @param dbResponse  The response object to check.
     *
     * @return            All returned rows.
     */
    getResponseRows : function(dbResponse) {
        if (module.exports.returnedData(dbResponse)) {
            return dbResponse.rows;
        }
        else {
            throw new Error(ErrorEnum.message(ErrorEnum.NO_RESULTS));
        }
    },

    /**
     * Gets all values of a specific column from a database query response.
     *
     * @param dbResponse       A response returned from a database query.
     *
     * @param requestedColumn  The name of a column within the rows returned by
     *                         the database response.
     *
     * @return                 An array containing all of the requested column
     *                         values within the database response.
     */
    getColumnValues : function(dbResponse, requestedColumn) {
        const values = [];
        if (module.exports.returnedData(dbResponse)) {
            dbResponse.rows.forEach((row) => {
                values.push(row[requestedColumn]);
            });
        }
        return values;
    },

    /**
     * Attempts to get a single cell within a database query response
     * that returned a single row.
     *
     * @param dbResponse       A response returned from a database query,
     *                         expected to return only one row.
     *
     * @param requestedColumn  The name of a column within the row returned
     *                         by the database response.
     *
     * @return                 The requested column value.
     */
    getCell : function(dbResponse, requestedColumn) {
        const cellValues = module.exports.getResponseValues(dbResponse,
                requestedColumn);
        let err;
        if (cellValues.length > 1) {
            err = new Error(ErrorEnum.message(ErrorEnum.EXTRA_RESULTS));
            err.count = cellValues.length;
        }
        else if (cellValues.length === 0) {
            err = new Error(ErrorEnum.message(ErrorEnum.NO_RESULTS));
        }
        if (err) {
            err.column = requestedColumn;
            throw err;
        }
        return cellValues[0];
    }
};
