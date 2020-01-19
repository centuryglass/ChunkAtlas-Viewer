/**
 * @file db-result-gen.js
 *
 * Connects to the test database through node-postgres, sends several queries,
 * and stores data from the Result objects returned by those queries as a node
 * module. This module can be used to create mock Result objects to use for
 * testing.
 */

const { isDefined } = require("../../../src/validate.js");
const saveJsonModule = require("./json-module-saver.js");
const testEnv = require("../test-env.js");
testEnv.init();
    
// Use test database contents to initialize the testing database:
const testRows = require("../data/db-rows.js");
// Path to save result objects as JSON
const outPath = "../data/db-results.js";

// Use a raw node-postgres pool with write access for all necessary queries.
const { Pool, Result } = require("pg");
const pool = new Pool({
    user: process.env.PGWRITER,
    password: process.env.PGWRITER_PASSWORD
});
let client;
const clientPromise = pool.connect().then((sharedClient) =>
        client = sharedClient);

// ## Query data combinations that should resolve without errors: ##
//  Queries are generated from all possible combinations of the following
//  options:
//    tableState: Initial state of all database tables, either EMPTY,
//                SINGLE_ROW, or MULTI_ROW.
//
//    table:      Each table within the test database.
//
//    query:      SELECT, UPDATE, INSERT, or DELETE query type.
//
//    columns:    Specified query columns, either DEFAULT, FULL, ALT, PARTIAL,
//                or PARTIAL_ALT. Queries that do not use a set of column
//                values use only the DEFAULT or FULL option, whichever is
//                most appropriate.
//
//    condition:  Conditions applied to the query, either NONE, EXCLUDE_ALL,
//                EXCLUDE_SOME, or EXCLUDE_NONE. Queries that do not accept a
//                condition will use only the NONE option.

// # TableState: #
// Provide functions for initializing the database with empty tables,
// single-row tables, and multi-row tables.
const TableStateEnum = require("../table-state-enum.js");

// # Tables : #
// Test queries on all avaliable database tables.
const Tables = require("../../../src/dbNew/structure/tables.js");

// # Query: #
// Test each SQL query type:
const QueryEnum = require("../query-enum.js");

// # ColumnSet: #
// For any tableEnum, create a test query column list that select the default
// column set, a reordered column set, a partial column set, or a reordered
// partial column set.
const ColumnSetEnum = require("../column-set-enum.js");

// # Condition: #
// If relevant, create test queries that use table-specific condition sets
// that select all, some, or no test table rows.
const ConditionEnum = require("../condition-enum.js");


// ### Begin result generation: ###
const output = {};

let lastPromise = clientPromise;

// Generate valid replies:
for (let tableState of TableStateEnum) {
    lastPromise = lastPromise.then(() => {
        console.log("Generating test replies on " + tableState.name
                + " tables.");
    });
    output[tableState.name] = {};
    const stateReplies = output[tableState.name];
    for (let queryType of QueryEnum) {
        lastPromise = lastPromise.then(() => {
            console.log("  Building " + queryType.name + " replies.");
        });
        stateReplies[queryType.name] = {};
        const queryReplies = stateReplies[queryType.name];
        for (let table of Tables) {
            lastPromise = lastPromise.then(() => {
                console.log("    Building " + table.tableName + " replies.");
            });
            const tableEnum = table.tableEnum;
            queryReplies[table.tableName] = {};
            const tableReplies = queryReplies[table.tableName];
            for (let columnSetType of ColumnSetEnum) {
                tableReplies[columnSetType.name] = {};
                const columnReplies = tableReplies[columnSetType.name];
                for (let conditionType of ConditionEnum) {
                    // Reset database between queries:
                    lastPromise = lastPromise.then(() => {
                        return tableState.initDatabase(client);
                    });
                    const queryText = queryType.build(tableEnum,
                            columnSetType, conditionType);
                    if (! isDefined(queryText)) { continue; }

                    lastPromise = lastPromise.then(() => {
                        return client.query(queryText);
                    })
                    .then((result) => {
                        // remove unneeded result fields that don't need
                        // to be saved:
                        result._parsers = undefined;
                        result._types = undefined;
                        columnReplies[conditionType.name] = result;
                    })
                    .catch((err) => {
                        const errText = String(err);
                        console.log("Unexpected database error: "
                                + errText);
                        console.log("  Last query(probably): "
                                + queryText);
                        console.dir(err);
                        columnReplies[conditionType.name] = "Error";
                    });
                }
            }
        }
    }
}

lastPromise.then(() => {
    saveJsonModule(output, outPath);
})
.catch((err) => console.log(err))
.finally(() => client.release());
