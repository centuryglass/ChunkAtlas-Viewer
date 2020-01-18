/**
 * @file table-state-enum.js
 *
 * Defines initial database table states to use when testing database access.
 */

const EnumBuilder = require("../../src/enum-builder.js");
const { assert, isDefined } = require("../../src/validate.js");
const Tables = require("../../src/dbNew/structure/tables.js");
const testRows = require("./data/db-rows.js");

// ### Enum class properties: ###
const className = "TableStateEnum";

// ## Enum value properties: ##
// Holds a function for initializing all test database tables with a given
// TableState.
// E.x. TableStateEnum.STATE_TYPE.initDB(poolOrClient);
const builderProperty = "initDatabase";

// ### Database init functions: ###
// Return a Promise to clear all rows from all test database tables.
function clearTables(client) {
    let lastPromise = new Promise((res) => res());
    Tables.forEach((table) => {
        lastPromise = lastPromise.then(() => {
            return client.query("DELETE FROM " + table.tableName);
        });
    });
    return lastPromise;
}

// Convert a set of row values to a parameterized query string and set of
// parameters
function getQueryParamObject(rows)
{
    const paramObject = {
        str: "",
        params: []
    };
    const paramIndices = {};
    rows.forEach((row) => {
        if (paramObject.str.length > 0) {
            paramObject.str += ", ";
        }
        paramObject.str += "(";
        let rowStr = "";
        row.forEach((value) => {
            if (rowStr.length > 0) {
                rowStr += ", ";
            }
            if (! isDefined(paramIndices[value])) {
                paramObject.params.push(value);
                paramIndices[value] = paramObject.params.length;
            }
            rowStr += "$" + paramIndices[value];
        });
        paramObject.str += rowStr + ")";
    });
    return paramObject;
}

// Return a Promise to insert a set of rows into a test database table.
function insertRows(tableName, rows, client) {
    const paramObject = getQueryParamObject(rows);
    let queryText = "INSERT INTO " + tableName + " VALUES " + paramObject.str;
    return client.query(queryText, paramObject.params);
}

// Initialize test database rows in this order to prevent errors. Tables
// omitted from this list will be initialized automatically.
const tableInsertOrder = [
    "regions",
    "map_types",
    "tile_sizes",
    "key_items_staging",
    "key_items",
    "locations",
    "map_tiles_staging",
    "map_tiles"
];

// Return a Promise to insert a single row into a test database table.
function insertRow(tableName, row, client) {
    return insertRows(tableName, [row], client);
}

// ######## Begin building enum class: ########
const builder = new EnumBuilder(className);
builder.addProperty(builderProperty, "function");

builder.addValue("EMPTY", {
    [builderProperty]: function(client) { return clearTables(client); }
});

builder.addValue("SINGLE_ROW", {
    [builderProperty]: function(client) {
        let lastPromise = clearTables(client);
        tableInsertOrder.forEach((tableName) => {
            lastPromise = lastPromise.then(() => {
                return insertRow(tableName, testRows[tableName][0],
                        client);
            });
        });
        return lastPromise.catch((err) => {
            console.log("Failed to set up single-row tables: " + err);
            throw err;
        });
    }
});

builder.addValue("MULTI_ROW", {
    [builderProperty]: function(client) {
        let lastPromise = clearTables(client);
        tableInsertOrder.forEach((tableName) => {
            lastPromise = lastPromise.then(() => {
                return insertRows(tableName, testRows[tableName], client);
            });
        });
        return lastPromise.catch((err) => {
            console.log("Failed to set up multi-row tables: " + err);
            throw err;
        });
    }
});

module.exports = builder.build();
