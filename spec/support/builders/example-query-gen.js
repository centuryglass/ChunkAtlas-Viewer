/**
 * @file example-query-gen.js
 *
 * Generates a set of SQL query-type/condition/parameter combinations, along
 * with the complete SQL query that combination should create.
 *
 * This file is meant to run as a standalone node application, and should not
 * be required by other files.
 */

// Use all tables in tests:
const tables = require("../../../src/dbNew/structure/tables.js");
const { assert, isDefined } = require("../../../src/validate.js");
const { writeFileSync } = require("fs");
const QueryEnum = require("../query-enum.js");
const saveJsonModule = require("./json-module-saver.js");
const testEnv = require("../test-env.js");
testEnv.init();

const queryModulePath = "../data/test-queries.js";

/**
 * Joins an array of column enum values into a column name string, optionally
 * adding an operator and value after each column.
 *
 * @param columns     An array of column enum values to combine.
 *
 * @param separator   A string to place between each column name.
 *
 * @param getOp       A function that, given a column value in the columns
 *                    array, returns an appropriate operator to print after
 *                    that column's name. If undefined, no operator will be
 *                    added.
 *
 * @param value       A function that, given a column value in the columns
 *                    array, returns an appropriate value to print after that
 *                    column's operator. If undefined, no value will be added.
 *
 * @return            The constructed column string, enclosed in parentheses,
 *                    or the empty string if columns is empty or not defined.
 */
function getColumnListStr(columns, separator, getOp, getValue) {
    if (! isDefined(columns) || columns.length === 0) {
        return "";
    }
    if (! isDefined(separator)) {
        separator = ", ";
    }
    if (! isDefined(getOp)) {
        getOp = () => "";
    }
    if (! isDefined(getValue)) {
        getValue = () => "";
    }
    let columnStrs = [];
    for (let column of columns) {
        columnStrs.push(column.columnName + getOp(column) + getValue(column));
    }
    return " (" + columnStrs.join(separator) + ")";
}

// Comparison operations and parameters to combine to form different SQL
// test conditions:
const testConditions = [
    { op: " = ",      param: "str", paramStr: "'str'" },
    { op: " IS_NOT ", param: true,  paramStr: "TRUE" },
    { op: " < ",      param: 5,     paramStr: "5" },
    { op: " >= ",     param: 0,     paramStr: "0" },
    { op: " IS ",     param: null,  paramStr: "NULL" }
];

// Gets the rvalue to use with a column condition or assignment operation,
// replacing it with a parameter reference instead if its index is less than
// the number of parameters.
function getRValue(i, numParams) {
    return (i < numParams) ? ("$" + (i + 1)) : testConditions[i].paramStr;
}

/**
 * Build an SQL test condition string composed of "lValue CMP rValue" boolean
 * condition statements.
 *
 * @param testColumns  Table column enum values used to select the lValue in
 *                     each comparison within the condition.
 *
 * @params numParams   The number of comparison rValues that should be
 *                     parameterized.
 *
 * @return             The resulting condition string.
 */ 
function getConditionStr(testColumns, numParams) {
    if (! isDefined(testColumns) || testColumns.length === 0) {
        return "";
    }
    return " WHERE" + getColumnListStr(testColumns, " AND ",
            (column) => testConditions[column.index].op,
            (column) => getRValue(column.index, numParams));
}

/**
 * Build an SQL test column assignment string.
 *
 * @param columns     The columns that will be assigned new values.
 *
 * @param numParams   The number of condition parameters that the query will
 *                    contain.
 *
 * @return            The resulting assignment string.
 */
function getAssignmentStr(columns, numParams) {
    if (! isDefined(columns) || columns.length === 0) {
        return "";
    }
    columns = columns.slice().sort();
    let paramIdx = numParams;
    let assignStr = getColumnListStr(columns, ", ", () => " = ",
            () => {
                paramIdx++;
                return "$" + paramIdx;
            });
    return assignStr.substring(2, assignStr.length - 1);
}

/**
 * Build an SQL test column assignment object.
 *
 * @param columns     The columns that will be assigned new values.
 *
 * @return            The resulting assignment object, mapping table column
 *                    number keys to their corresponding values.
 */
function getAssignments(columns) {
    if (! isDefined(columns) || columns.length === 0) {
        return;
    }
    const assignments = {};
    for (let i = 0; i < columns.length; i++) {
        assignments[columns[i]] = testConditions[i].param;
    }
    return assignments;
}

// Given a parameter count, return the corresponding array of test params.
function getParams(paramCount) {
    return testConditions.slice(0, paramCount).map((obj) =>  obj.param);
}

// Extract the comma-separated list of conditions from an SQL condition string.
function trimConditionStr(condStr) {
    return condStr.substring(condStr.indexOf("(") + 1, condStr.indexOf(")"))
        || null;
}

/**
 * Generate the basis for a test query object, used to store the input
 * parameters and expected results of a single test query. The resulting object
 * is incomplete, but may be used as a basis for constructing a more specific
 * query.
 *
 * @param tableEnum         The table accessed by the condition's query.
 *
 * @param columns           The main set of column enum values accessed,
 *                          changed, or otherwise specified by the query.
 *
 * @param conditionColumns  The set of column enum values that will be
 *                          referenced in the query's condition, if relevant.
 *
 * @param numParams         The number of values within the query condition
 *                          that will be parameterized.
 *
 * @return                  The incomplete test query object.
 */
function getGenericTestQuery(tableEnum, columns, conditionColumns, numParams) {
    const testQuery = {};
    const condStr = getConditionStr(conditionColumns, numParams);
    testQuery.query = condStr;
    testQuery.condition = trimConditionStr(condStr);
    testQuery.queryParams = getParams(numParams);
    if (isDefined(conditionColumns)) {
        testQuery.conditionParams = testQuery.queryParams.slice();
    }
    testQuery.tableEnum = tableEnum.name;
    return testQuery;
}

// Test SQL statement generator functions for each supported type of query.
// These functions refine objects produced by getGenericTestQuery, and use
// the same set of parameters as that function. If called with invalid
// parameters, they will return undefined.
const queryBuilders = {
    [QueryEnum.SELECT.name] : (tableEnum, columns, conditionColumns, numParams) => {
        const testQuery = getGenericTestQuery(tableEnum, columns,
                conditionColumns, numParams);
        testQuery.query = "SELECT"
            + (getColumnListStr(columns, ", ") || " *") + " FROM "
            + tableEnum.tableName + testQuery.query;
        if (isDefined(columns)) {
            testQuery.columns = columns.map((c) => c.columnName);
        }
        return testQuery;
    },
    [QueryEnum.UPDATE.name] : (tableEnum, columns, conditionColumns, numParams) => {
        if (! isDefined(columns) || columns.length === 0) {
            return;
        }
        const assignStr = getAssignmentStr(columns, numParams);
        const testQuery = getGenericTestQuery(tableEnum, columns,
                conditionColumns, numParams);
        testQuery.query = "UPDATE " + tableEnum.tableName + " SET " + assignStr
                + testQuery.query;
        testQuery.columnValues = getAssignments(columns);
        const orderedColumns = columns.slice().sort();
        for (let i = 0; i < orderedColumns.length; i++) {
            testQuery.queryParams.push(testQuery.columnValues
                    [orderedColumns[i]]);
        }
        return testQuery;
    },
    [QueryEnum.INSERT.name] : (tableEnum, columns, conditionColumns, numParams) => {
        if (! isDefined(columns) || columns.length === 0) { return; }
        if (! isDefined(conditionColumns) || conditionColumns.length === 0)
                { return; }
        if (conditionColumns.length > columns.length) { return; }
        // We don't need conditionColumns for INSERT. However, we do need a
        // set of insert values, and we can select a good set of those using
        // condition column indices. 
        // TODO: find a more elegant way to do this.
        const values = conditionColumns.map((c) =>
                testConditions[c.index].param);
        const testQuery = getGenericTestQuery(tableEnum, columns,
                undefined, numParams);
        testQuery.columns = columns.map((c) => c.columnName);
        testQuery.queryParams = values;
        testQuery.values = [values];
        const paramValues = values.map((v, i) => ("$" + (i + 1)));
        testQuery.query = "INSERT INTO " + tableEnum.tableName
                + getColumnListStr(columns) + " VALUES ("
                + paramValues.join(", ") + ")";
        return testQuery;
    },
    // Delete replaces the "columns" parameter with "unused" because DELETE
    // queries don't need to act on a particular column set.
    [QueryEnum.DELETE.name] : (tableEnum, unused, conditionColumns, numParams) => {
        const testQuery = getGenericTestQuery(tableEnum, unused,
                conditionColumns, numParams);
        testQuery.query = "DELETE FROM " + tableEnum.tableName
                + testQuery.query;
        return testQuery;
    }
};


// Column number combinations to reuse:
const columnSets = [undefined, [0], [2, 1], [0, 2, 1], [0, 1, 2, 3, 4]];

const testQueries = {};

// Create tests for all valid combinations of query type, database table,
// column set, and parameterized value count.
tables.forEach((t) => {
    const tableEnum = t.tableEnum
    const standardCount = Math.pow(columnSets.length, 2);
    const deleteCount = columnSets.length;
    QueryEnum.forEach((queryType) => {
        if (! isDefined(testQueries[queryType.name])) {
            testQueries[queryType.name] = [];
        }
        const count = (queryType === QueryEnum.DELETE) ? deleteCount
                : standardCount;
        for (let i = 0; i < count; i++) {
            const getColumnSet = (idx) => {
                if (! isDefined(columnSets[idx])) {
                    return;
                }
                return columnSets[idx].map((i) => tableEnum.withIndex(i));
            };
            let queryColumns, condColumns;
            try {
                queryColumns = getColumnSet(Math.floor(i / columnSets.length));
                condColumns = getColumnSet(i % columnSets.length);
            }
            catch (err) {
                //console.log(err);
                // Too many columns in columnSet for this table, just skip
                // it.
                continue;
            }
            for (let pCount = 0; pCount === 0 || (isDefined(condColumns) 
                    && pCount <= condColumns.length); pCount++) {
                const testQuery = queryBuilders[queryType.name](tableEnum,
                        queryColumns, condColumns, pCount);
                if (isDefined(testQuery)) {
                    testQueries[queryType.name].push(testQuery);
                }
            }
        }
    });
});

saveJsonModule(testQueries, queryModulePath);
