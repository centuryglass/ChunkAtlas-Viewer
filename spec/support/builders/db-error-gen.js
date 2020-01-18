/**
 * @file db-error-gen.js
 *
 * Connects to the test database through node-postgres, sends several invalid
 * queries, and stores data from the Error objects returned by those queries
 * as a node module. This module can be used to create mock Error objects to
 * use for testing.
 */

const testEnv = require("../test-env.js");
testEnv.init();
    
const { assert, isDefined } = require("../../../src/validate.js");
const saveJsonModule = require("./json-module-saver.js");
const ErrorEnum = require("../../../src/dbNew/error/error-enum.js");


const outPath = "../data/db-errors.js";

// Use a raw node-postgres pool with write access for all necessary queries.
const { Pool, Result } = require("pg");
const pool = new Pool({
    user: process.env.PGWRITER,
    password: process.env.PGWRITER_PASSWORD
});
let client;
const clientPromise = pool.connect().then((sharedClient) =>
        client = sharedClient);


// ## Queries that should generate various error types: ##
const errorQueries = {
    // Completely invalid query text:
    [ErrorEnum.INVALID_SQL.name]: [
        "this is absolutely not a valid sql query",
        "SELECT asdf"
    ],
    // Invalid table name errors:
    [ErrorEnum.INVALID_TABLE.name]: [
        "SELECT * FROM invalid_table",
        "INSERT INTO fake_table VALUES ('irrelevant', 'data')"
    ],
    // Invalid column name errors:
    [ErrorEnum.INVALID_COLUMN.name]: [
        "SELECT invalid_column FROM map_tiles",
        "INSERT INTO map_tiles (region_id, type_id, size, block_x, block_z, "
                + "tile_uri, last_update, bad_column) VALUES ('overworld', "
                + "'biome', 512, 0, 0, '/0_0.png', 'bad column value')"
    ],
    // Invalid ID errors:
    [ErrorEnum.INVALID_ID.name]: [
        "INSERT INTO regions VALUES ('INVALID', 1)",
        "INSERT INTO map_types VALUES ('INVALID', 'd', '/uri.png')",
        "INSERT INTO location_categories VALUES ('INVALID', 'displayName', "
                + "'/uri.png')"
    ],
    // Invalid foreign key errors:
    [ErrorEnum.INVALID_FOREIGN_KEY.name] : [
        "INSERT INTO key_items (region_id, type_id, description, color) "
                + "VALUES ('missing_region', 'missing_type', 'd', 'FFFFFF')",
        "INSERT INTO map_tiles VALUES ('missing_region', 'missing_type', 512,"
                + " 0, 0, '/uri.png')",
    ],
    // Invalid time errors:
    [ErrorEnum.OTHER_CONSTRAINT.name]: [
        "INSERT INTO regions VALUES ('region', 'Region', null, -1)",
        "INSERT INTO map_types VALUES ('type', 'Type', 'desc', 'now', "
                + "'ffffff')"
    ]
};
const errorTypes = [];
for (let error of ErrorEnum) {
    errorTypes.push(error.name);
}

// Generate error objects:
const output = { };
let lastPromise = clientPromise;
for (let typeName of errorTypes) {
    output[typeName] = [];
    if (! isDefined(errorQueries[typeName])) {
        console.log("Warning: no errors to generate for error type '"
                + typeName + "'");
        errorQueries[typeName] = [];
    }
    for (let queryText of errorQueries[typeName]) {
        lastPromise = lastPromise.then(() => {
            return client.query(queryText)
            .then((result) => output.errors[typeName].push(result))
            .catch((err) => {
                err.query = queryText;
                output[typeName].push(err);
            });
        });
    }
}

lastPromise.then(() => {
    saveJsonModule(output, outPath);
})
.catch((err) => console.log(err))
.finally(() => client.release());
