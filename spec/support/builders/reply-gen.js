/**
 * @file reply-gen.js
 *
 * Connects to the test database through node-postgres, sends several queries,
 * and stores data from the Result objects returned by those queries as node
 * modules. These modules can be used to create mock Result objects to use for
 * testing.
 */

const testEnv = require("../test-env.js");
testEnv.init();
    
const Tables = require("../../../src/db/structure/tables.js");
const QueryBuilder = require("../../../src/db/query-builder.js");
const { createEnum } = require("../../../src/create-enum.js");
const saveJsonModule = require("./json-module-saver.js");

const testRows = require("../test-rows.js");

const outPath = "../test-response.js";

// Use a raw node-postgres pool with write access for all necessary queries.
const { Pool, Result } = require("pg");
const pool = new Pool({
    user: process.env.PGWRITER,
    password: process.env.PGWRITER_PASSWORD
});

let lastPromise = new Promise((resolve) => resolve());
Tables.forEach((table) => {
    const builder = new QueryBuilder(Tables.tableEnum(table));
    lastPromise = lastPromise.then(() => builder.deleteQuery(pool));
});

// Queries that should throw various error types:
const errorQueries = [
    // Completely invalid query text:
    "this is absolutely not a valid sql query",
    // Invalid table name errors:
    "SELECT * FROM invalid_table",
    // Invalid column name errors:
    "SELECT invalid_column FROM map_tiles",
    // Invalid ID errors:
    "INSERT INTO regions VALUES ('INVALID', 1)",
    "INSERT INTO map_types VALUES ('INVALID', 'd', '/uri.png')",
    "INSERT INTO location_categories VALUES ('INVALID', 'displayName', '/uri.png')",
    // Invalid foreign key errors:
    "INSERT INTO key_items (region_id, type_id, description, color) VALUES"
            + "('missing_region', 'missing_type', 'd', 'FFFFFF')",
    "INSERT INTO map_tiles VALUES ('missing_region', 'missing_type', 512, "
            + "0, 0, '/uri.png')",
    // Invalid time errors:
    "INSERT INTO regions VALUES ('region', 'Region', null, -1)",
    "INSERT INTO map_types VALUES ('type', 'Type', 'desc', 'now', 'ffffff')"
];

const results = [];
errorQueries.forEach((text) => {
    lastPromise = lastPromise.then(() => {
        return pool.query(text)
        .then((result) => results.push(result))
        .catch((err) => {
            err.query = text;
            results.push(err)
        });
    //}
    //catch (err) {
    //    promise = new Promise((resolve) => resolve(err));
    });
});
lastPromise.then(() => {
    saveJsonModule(results, outPath);
})
.catch((err) => console.log(err));
