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
const QueryErrorEnum = require("../../../src/dbNew/error/query-error-enum.js");
const Tables = require("../../../src/dbNew/structure/tables.js");
const TableStateEnum = require("../table-state-enum.js");


const outPath = "../data/db-errors.js";

// Use a raw node-postgres pool with write access for all necessary queries.
const { Pool, Result } = require("pg");
const writePool = new Pool({
    user: process.env.PGWRITER,
    password: process.env.PGWRITER_PASSWORD
});
const readPool = new Pool({
    user: process.env.PGREADER,
    password: process.env.PGREADER_PASSWORD
});
let readClient, writeClient, errorQueries;
let lastPromise = writePool.connect()
.then((sharedClient) => writeClient = sharedClient)
.then(() => readPool.connect())
.then((sharedClient) => readClient = sharedClient)
.catch((err) => {
    throw new Error("Error loading clients: " + err);
})
.then(() => TableStateEnum.EMPTY.initDatabase(writeClient))
.then(() => {
    // ## Queries that should generate various error types: ##
    errorQueries = {
        // Completely invalid query text:
        [QueryErrorEnum.INVALID_SQL.name]: {
            client: writeClient,
            queries: [
                "this is absolutely not a valid sql query",
                "SELECT * FROM"
            ]
        },
        // Access errors due to invalid privileges:
        [QueryErrorEnum.MISSING_PRIVILEGE.name]: {
            client: readClient,
            queries: [
                "CREATE DATABASE ILLEGAL",
                "DELETE FROM map_tiles"
            ]
        },
        // Invalid table name errors:
        [QueryErrorEnum.INVALID_TABLE.name]: {
            client: writeClient,
            queries: [
                "SELECT * FROM invalid_table",
                "INSERT INTO fake_table VALUES ('irrelevant', 'data')"
            ]
        },
        // Invalid column name errors:
        [QueryErrorEnum.INVALID_COLUMN.name]: {
            client: writeClient,
            queries: [
                "SELECT invalid_column FROM map_tiles",
                "INSERT INTO map_tiles (region_id, type_id, size, block_x, "
                    + "block_z, tile_uri, last_update, bad_column) VALUES "
                    + "('overworld', 'biome', 512, 0, 0, '/0_0.png', "
                    + "'bad column value')"
            ]
        },
        // Invalid ID errors:
        [QueryErrorEnum.INVALID_ID.name]: {
            client: writeClient,
            queries: [
                "INSERT INTO regions VALUES ('INVALID', 1)",
                "INSERT INTO map_types VALUES ('INVALID', 'd', '/uri.png')",
                "INSERT INTO location_categories VALUES ('INVALID', "
                        + "'displayName', '/uri.png')"
            ]
        },
        // Invalid foreign key errors:
        [QueryErrorEnum.INVALID_FOREIGN_KEY.name]: {
            client: writeClient,
            queries: [
                // Invalid foreign key errors should no longer be possible, as
                // missing foreign keys should automatically be added now.
                /*
                "INSERT INTO key_items (region_id, type_id, description, "
                        + "color) VALUES ('missing_region', 'missing_type', "
                        + "'d', 'FFFFFF')",
                "INSERT INTO map_tiles VALUES ('missing_region', "
                        + "'missing_type', 512, 0, 0, '/uri.png')",
                */
            ]
        },
        // Invalid duplicate column value errors:
        [QueryErrorEnum.DUPLICATE_ENTRY.name]: {
            client: writeClient,
            queries: [
                "INSERT INTO tile_sizes VALUES (5), (5), (5)",
                "INSERT INTO regions (region_id, display_name) VALUES "
                        + "('first', 'Display Name'), "
                        + "('second', 'Display Name')",
                "INSERT INTO map_types (type_id, display_name) VALUES "
                        + "('repeat', 'Display Name'), "
                        + "('repeat', 'Other Name')"
            ]
        },
        // Invalid empty string errors:
        [QueryErrorEnum.EMPTY_STRING.name]: {
            client: writeClient,
            queries: [
                "INSERT INTO regions (region_id, display_name) VALUES ("
                        + "'empty_region', '')",
                "INSERT INTO map_types (type_id, display_name) "
                        + "VALUES ('empty_type', '')"
            ]
        },
        // Excessive string length errors:
        [QueryErrorEnum.STR_TOO_LONG.name]: {
            client: writeClient,
            queries: [
                "INSERT INTO regions (region_id, display_name) VALUES ('id',"
                        + "'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                        + "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                        + "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')",
                "INSERT INTO map_types (type_id, display_name, icon_uri) "
                        + "VALUES ('another_test_type', 'Test again', 'aaaaaa"
                        + "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                        + "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                        + "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                        + "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')"
            ]
        },
        // Other failed constraint errors:
        [QueryErrorEnum.OTHER_CONSTRAINT.name]: {
            client: writeClient,
            queries: [
                "INSERT INTO tile_sizes VALUES (-1)",
                "INSERT INTO key_items (region_id, type_id, description, "
                        + "color) VALUES ('reg', 'typ', 'Test', 'fffffg')"
            ]
        },
        // Catch-all for unanticipated error types:
        [QueryErrorEnum.UNKNOWN_ERROR.name]: { queries: [] }
    };
});

// Clear database tables:
for (let table of Tables) {
    lastPromise = lastPromise.then(() => {
        return writeClient.query("DELETE FROM " + table.tableName);
    });
}

// Generate error objects:
const output = { };
for (let errorType of QueryErrorEnum) {
    const typeName = errorType.name;
    output[typeName] = [];
    lastPromise = lastPromise.then(() => {
        if (! isDefined(errorQueries[typeName])) {
            console.log("Warning: no errors to generate for error type '"
                    + typeName + "'");
            errorQueries[typeName] = { queries: [] };
        }
        const client = errorQueries[typeName].client;
        let errorPromise = new Promise((res) => res());
        for (let queryText of errorQueries[typeName].queries) {
            errorPromise = errorPromise.then(() => {
                return client.query(queryText)
                .then((result) => output.errors[typeName].push(result))
                .catch((err) => {
                    err.query = queryText;
                    output[typeName].push(err);
                });
            });
        }
        return errorPromise;
    });
}

lastPromise.then(() => {
    saveJsonModule(output, outPath);
})
.catch((err) => console.log(err))
.finally(() => {
    readClient.release();
    writeClient.release();
});
