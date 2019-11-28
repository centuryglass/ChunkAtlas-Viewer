/**
 * @file db.js
 *
 * Handles all direct database access.
 */
const { Pool } = require('pg');
const logger = require('../logger.js');
const pool = new Pool();

const { isDefined, assert } = require("../validate.js");

pool.on('error', (err, client) => {
    logger.error("Postgres error: " + err);    
});

/**
 * Throws an error if a table name or column name contains any invalid 
 * characters.
 *
 * Although it is possible to have table or column names that don't pass this
 * test, database design should follow the convention of only using lowercase
 * letters, numbers, and underscores within table and column names.
 *
 * @param dbVar  A database table or column name, or array of names.
 */
function testDBVar(dbVar) {
    const test = (v) => {
        assert(v.match(/^[a-z\d_]+$/), "Invalid database column or row '"
            + v + "'");
    }
    if (Array.isArray(dbVar)) {
        dbVar.forEach((v) => test(v));
    }
    else {
        test(dbVar);
    }
}

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    },

    /**
     * Checks if a database query response returned any data.
     *
     * @return  True if at least one row of data was returned, false if the
     *          response is empty, invalid, or undefined.
     */
    responseReturnedData : (dbResponse) => {
        return isDefined(dbResponse) && isDefined(dbResponse.rows)
                && (typeof dbResponse.rows.length === "number")
                && dbResponse.rows.length > 0;
    },

    /**
     * Asynchronously gets a list of single column entries from a table.
     *
     * @param table        The table to query for data.
     *
     * @param column       The name of the ID column to get from the table
     *
     * @param getDistinct  Optionally specify whether the query should
     *                     specifically query for distinct values.
     *
     * @return             A Promise that will pass the table column value
     *                     array to its success callback.
     */
    getColumnValues : (table, column, getDistinct) => {
        testDBVar([ table, column ]);
        let queryStart = "SELECT ";
        if (getDistinct) { queryStart += "DISTINCT " }
        return module.exports.query(queryStart + column + " FROM " + table)
        .then((dbResponse, err) => {
            const values = [];
            if (module.exports.responseReturnedData(dbResponse)) {
                dbResponse.rows.forEach((row) => {
                    values.push(row[column]);
                });
            }
            return new Promise((onSuccess, onFailure) => {
                if (err) { onFailure(err); }
                else { onSuccess(values); }
            });
        });
    },

    /**
     * Asynchronously gets all rows in a table where a specific value is found.
     *
     * @param table          The table to query for data.
     *
     * @param checkedColumn  The name of the column used to filter table rows.
     *
     * @param columnValue    The value that each row should have in the given
     *                       column.
     *
     * @return               A Promise that will pass the table row array to
     *                       its success callback.
     */
    getMatchingRows : (table, checkedColumn, columnValue) => {
        testDBVar([ table, checkedColumn ]);
        return module.exports.query(
                "SELECT * FROM " + table + " WHERE (" + checkedColumn
                + " = $1)", [ columnValue ])
        .then((dbResponse, err) => {
            return new Promise((onSuccess, onFailure) => {
                if (err) {
                    onFailure(err);
                }
                else if (! module.exports.responseReturnedData(dbResponse)) {
                    onFailure("Found no rows in '" + table + "' where '"
                            + checkedColumn + "' = '" + columnValue + "'");
                }
                else {
                    onSuccess(dbResponse.rows);
                }
            });
        });
    },

    /**
     * Asynchronously gets the single row in a table where a specific value is
     * found.  If more than one matching row is found, this Promise will be
     * rejected.
     *
     * @param table          The table to query for data.
     *
     * @param checkedColumn  The name of the column used to filter table rows.
     *
     * @param columnValue    The value that the row should have in the given
     *                       column.
     *
     * @return               A Promise that will pass the matching table row
     *                       its success callback.
     */
    getMatchingRow : (table, checkedColumn, columnValue) => {
        testDBVar([ table, checkedColumn ]);
        return module.exports.getMatchingRows(table, checkedColumn,
                columnValue)
        .then((matchingRows) => {
            return new Promise((onSuccess, onFailure) => {
                if (matchingRows.length === 0) {
                    onFailure("Found no row in '" + table + "' where '"
                            + checkedColumn + "' = '" + columnValue + "'");
                }
                else if (matchingRows.length === 1) {
                    onSuccess(matchingRows[0]);
                }
                else {
                    onFailure("Expected no more than one row in table '"
                            + table + "' where column '" + checkedColumn
                            + "' = '" + columnValue + "', found "
                            + matchingRows.length + ".");

                }
            });
        });
    },

    /**
     * Gets a single cell within a specific table, row, and column
     *
     * @param table          The table containing the requested cell.
     *
     * @param column         The column to be checked.
     *
     * @param rowIDColumn    A column used to select a single row in the table.
     *
     * @param rowID          A rowIDColumn value held by exactly one row in
     *                       the table. If this does not select exactly one
     *                       row, the returned Promise will reject.
     *
     * @return               A Promise, passing the cell's value to its
     *                       success callback.
     */
    getCell : (table, column, rowIDColumn, rowID) => {
        testDBVar([ table, column, rowIDColumn ]);
        return module.exports.query("SELECT " + column + " FROM " + table
                + " WHERE (" + rowIDColumn + " = $1)", [ rowID ])
        .then((dbResponse, err) => {
            return new Promise((onSuccess, onFailure) => {
                if (err) { onFailure(err); }
                else if (module.exports.responseReturnedData(dbResponse)
                        && dbResponse.rows.length === 1) {
                    onSuccess(dbResponse.rows[0][column]);
                }
                else {
                    onFailure("Failed to find single '" + column
                            + "' cell in '" + table + "' where '"
                            + rowIDColumn + "' = '" + rowID + "'");
                }
            });
        });
    },
 
    /**
     * Sets one or more cell values within a specific table, column, and row.
     *
     * @param table        The table containing the cell(s) to update.
     *
     * @param column       The column containing the cell(d) to update
     *
     * @param newValue     The new value to save to the given column in all
     *                     matching rows.
     *
     * @param rowIDColumn  A column used to select the correct row(s).
     *
     * @param rowID        A rowIDColumn value held by only the rows that
     *                     should be assigned the new column value.
     *
     * @return             A Promise that may be used to find if and when
     *                     the new value is successfully applied.
     */
    setColumnValues : (table, column, newValue, rowIDColumn, rowID) => {
        testDBVar([ table, column, rowIDColumn ]);
        return module.exports.query("UPDATE " + table + " SET " + column
               + " = $1 WHERE (" + rowIDColumn + " = $2)", [newValue, rowID ]);
    }
}
