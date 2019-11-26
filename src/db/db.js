/**
 * @file db.js
 *
 * Handles all direct database access.
 */
const { Pool } = require('pg');
const logger = require('./logger.js');
const pool = new Pool();

const { isDefined } = require("../validate.js");

pool.on('error', (err, client) => {
    logger.error("Postgres error: " + err);    
});

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    }

    /**
     * Checks if a database query response returned any data.
     *
     * @return  True if at least one row of data was returned, false if the
     *          response is empty, invalid, or undefined.
     */
    responseReturnedData(dbResponse) => {
        return isDefined(dbResponse) && isDefined(dbResponse.rows)
                && (typeof dbResponse.rows.length === "number")
                && dbResponse.rows.length > 0;
    }
}
