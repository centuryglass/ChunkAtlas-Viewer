/**
 * @file db-reader.js
 *
 * Handles unprivileged database access, used for queries that should not be
 * able to change the database.
 */
const { Pool } = require('pg');
const pool = new Pool({
    user: process.env.PGREADER,
    password: process.env.PGREADER_PASSWORD
});

pool.on('error', (err, client) => {
    logger.error("Postgres error: " + err);    
});

const DBUser = require("../db-user.js");
module.exports = new DBUser(pool);
