/**
 * @file db-writer.js
 *
 * Handles privileged database access that may create or update database
 * values.
 */

const { Pool } = require('pg');
const pool = new Pool({
    user: process.env.PGWRITER,
    password: process.env.PGWRITER_PASSWORD
});

pool.on('error', (err, client) => {
    logger.error("Postgres error: " + err);    
});

const DBUser = require("../db-user.js");
const writer = new DBUser(pool);

/**
 * Sets one or more cell values within a specific table, column, and row.
 *
 * @param table        The table containing the cell(s) to update.
 *
 * @param column       The column containing the cell(s) to update
 *
 * @param newValue     The new value to save to the given column in all
 *                     matching rows.
 *
 * @param rowIDColumn  A column used to select the correct row(s).
 *
 * @param rowID        A rowIDColumn value held by only the rows that should
 *                     be assigned the new column value.
 *
 * @return             A Promise that may be used to find if and when the new
 *                     value is successfully applied. If no rows are changed
 *                     or a database error occurs, the promise will reject.
 */
writer.setColumnValues = (table, column, newValue, rowIDColumn, rowID) => {
    writer.testDBVar([ table, column, rowIDColumn ]);
    return writer.query("UPDATE " + table + " SET " + column
           + " = $1 WHERE (" + rowIDColumn + " = $2)", [newValue, rowID ])
    .then((dbResponse, err) => {
        if (err) { throw err; }
        else if (dbResponse.rowCount === 0) {
            throw new Error("Found no rows in '" + table + "' where '"
                    + rowIDColumn + "' = '" + rowID + "'");
        }
    });
};

module.exports = writer;
