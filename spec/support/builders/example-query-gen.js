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
const tables = require("../../../src/db/structure/tables.js");
const { assert, isDefined } = require("../../../src/validate.js");
const { writeFileSync } = require("fs");
const saveJsonModule = require("./json-module-saver.js");

const queryModulePath = "../test-queries.js";

/**
 * Joins an array of column enum values into a column name string, optionally
 * adding an operator and value after each column.
 *
 * @param tableEnum   The table enum referred to by columnNums.
 *
 * @param columnNums  An array of column enum values to combine.
 *
 * @param separator   A string to place between each column name.
 *
 * @param getOp       A function that, given an index in the columnNums array,
 *                    returns an appropriate operator to print after that
 *                    column's name. If undefined, no operator will be added.
 *
 * @param value       A function that, given an index in the columnNums array,
 *                    returns an appropriate value to print after that
 *                    column's operator. If undefined, no value will be added.
 *
 * @return            The constructed column string, enclosed in parentheses,
 *                    or the empty string if columnNums is not defined.
 */
function getColumnStr(tableEnum, columnNums, separator, getOp, getValue) {
    if (! isDefined(columnNums) || columnNums.length === 0) {
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
    for (let i = 0; i < columnNums.length; i++) {
        columnStrs.push(tableEnum.column(columnNums[i]) + getOp(i)
                + getValue(i));
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
 * @param tableEnum   The table accessed by the condition's query.
 * 
 * @param testColumns  Table column enum values used to select the lValue in
 *                     each comparison within the condition.
 *
 * @params numParams   The number of comparison rValues that should be
 *                     parameterized.
 *
 * @return             The resulting condition string.
 */ 
function getConditionStr(tableEnum, testColumns, numParams) {
    if (! isDefined(testColumns) || testColumns.length === 0) {
        return "";
    }
    return " WHERE" + getColumnStr(tableEnum, testColumns, " AND ",
            (i) => testConditions[i].op,
            (i) => getRValue(i, numParams));
}

/**
 * Build an SQL test column assignment string.
 *
 * @param tableEnum   The table accessed by the condition's query.
 *
 * @param columns     The columns that will be assigned new values.
 *
 * @param numParams   The number of condition parameters that the query will
 *                    contain.
 *
 * @return            The resulting assignment string.
 */
function getAssignmentStr(tableEnum, columns, numParams) {
    if (! isDefined(columns) || columns.length === 0) {
        return "";
    }
    columns = columns.slice().sort();
    let paramIdx = numParams;
    let assignStr = getColumnStr(tableEnum, columns, ", ", () => " = ",
            (i) => {
                paramIdx++;
                return "$" + paramIdx;
            });
    return assignStr.substring(2, assignStr.length - 1);
}

/**
 * Build an SQL test column assignment object.
 *
 * @param tableEnum   The table accessed by the condition's query.
 *
 * @param columns     The columns that will be assigned new values.
 *
 * @return            The resulting assignment object, mapping table column
 *                    number keys to their corresponding values.
 */
function getAssignments(tableEnum, columns) {
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
 * @param columnNums        The main set of column enum values accessed,
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
function getGenericTestQuery(tableEnum, columnNums, conditionColumns,
        numParams) {
    const testQuery = {};
    const condStr = getConditionStr(tableEnum, conditionColumns, numParams);
    testQuery.query = condStr;
    testQuery.condition = trimConditionStr(condStr);
    testQuery.conditionParams = getParams(numParams);
    testQuery.queryParams = testQuery.conditionParams.slice();
    testQuery.tableEnum = tableEnum.name;
    return testQuery;
}

// Test SQL statement generator functions for each supported type of query.
// These functions refine objects produced by getGenericTestQuery, and use
// the same set of parameters as that function. If called with invalid
// parameters, they will return undefined.
const queryBuilders = {
    selectQuery : (tableEnum, columnNums, conditionColumns, numParams) => {
        const testQuery = getGenericTestQuery(tableEnum, columnNums,
                conditionColumns, numParams);
        testQuery.query = "SELECT"
            + (getColumnStr(tableEnum, columnNums, ", ") || " *") + " FROM "
            + tableEnum.name + testQuery.query;
        testQuery.columns = columnNums;
        return testQuery;
    },
    updateQuery : (tableEnum, columnNums, conditionColumns, numParams) => {
        if (! isDefined(columnNums) || columnNums.length === 0) {
            return;
        }
        const assignStr = getAssignmentStr(tableEnum, columnNums, numParams);
        const testQuery = getGenericTestQuery(tableEnum, columnNums,
                conditionColumns, numParams);
        testQuery.query = "UPDATE " + tableEnum.name + " SET " + assignStr
                + testQuery.query;
        testQuery.columnValues = getAssignments(tableEnum, columnNums);
        const orderedColumns = columnNums.slice().sort();
        for (let i = 0; i < orderedColumns.length; i++) {
            testQuery.queryParams.push(testQuery.columnValues
                    [orderedColumns[i]]);
        }
        return testQuery;
    },
    insertQuery : (tableEnum, columnNums, values, numParams) => {
        if (! isDefined(columnNums) || columnNums.length === 0) { return; }
        if (! isDefined(values) || values.length === 0) { return; }
        if (values.length > columnNums.length) { return; }
        const testQuery = getGenericTestQuery(tableEnum, columnNums,
                values, numParams);
        testQuery.conditionParams = undefined;
        testQuery.columns = columnNums;
        testQuery.queryParams = values;
        testQuery.values = [values];
        values = values.map((v, i) => ("$" + (i + 1)));
        testQuery.query = "INSERT INTO " + tableEnum.name
                + getColumnStr(tableEnum, columnNums) + " VALUES ("
                + values.join(", ") + ")";
        return testQuery;
    },
    // Delete replaces the "columnNums" parameter with "unused" because DELETE
    // queries don't need to act on a particular column set.
    deleteQuery : (tableEnum, unused, conditionColumns, numParams) => {
        const testQuery = getGenericTestQuery(tableEnum, unused,
                conditionColumns, numParams);
        testQuery.query = "DELETE FROM " + tableEnum.name + testQuery.query;
        return testQuery;
    }
};


// Column number combinations to reuse:
const columnSets = [undefined, [1], [3, 2], [1, 3, 2], [1, 2, 3, 4, 5]];

const queryTypes = [ "selectQuery", "updateQuery", "insertQuery",
        "deleteQuery" ];
const testQueries = {};

// Create tests for all valid combinations of query type, database table,
// column set, and parameterized value count.
tables.forEach((t) => {
    const tableEnum = tables.tableEnum(t);
    const standardCount = Math.pow(columnSets.length, 2);
    const deleteCount = columnSets.length;
    queryTypes.forEach((queryType) => {
        if (! isDefined(testQueries[queryType])) {
            testQueries[queryType] = [];
        }
        const count = (queryType === "deleteQuery") ? deleteCount
                : standardCount;
        for (let i = 0; i < count; i++) {
            const queryColumns = columnSets[Math.floor(i / columnSets.length)];
            const condColumns = columnSets[i % columnSets.length];
            for (let pCount = 0; pCount === 0 || (isDefined(condColumns) 
                    && pCount <= condColumns.length); pCount++) {
                try {
                    const testQuery = queryBuilders[queryType](tableEnum,
                            queryColumns, condColumns, pCount);
                    if (isDefined(testQuery)) {
                        testQueries[queryType].push(testQuery);
                    }
                }
                catch (err) {
                    // Too many columns in columnSet for this table, just skip
                    // it.
                    if (queryType === "deleteQuery") {
                        console.log(queryType + " not added: " + err.message);
                    }
                }
            }
        }
    });
});

saveJsonModule(testQueries, queryModulePath);
