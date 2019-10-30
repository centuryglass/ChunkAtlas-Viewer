/**
 * @file db.js
 *
 * Handles all direct database access.
 */
const { Pool } = require('pg');
const pool = new Pool();

pool.on('error', (err, client) => {
    console.log("Postgres error: " + err);    
});

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    }
}
