/**
 * @file db.js
 *
 * Handles all direct database access.
 */
const { Pool } = require('pg');
const logger = require('./logger.js');
const pool = new Pool();

pool.on('error', (err, client) => {
    logger.error("Postgres error: " + err);    
});

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    }
}
