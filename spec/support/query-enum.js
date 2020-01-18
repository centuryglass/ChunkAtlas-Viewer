/**
 * @file query-enum.js
 *
 * Defines possible SQL query types to use when testing database access.
 */

const EnumBuilder = require("../../src/enum-builder.js");
const { assert, isDefined, assertHasContent }
        = require("../../src/validate.js");
const Tables = require("../../src/dbNew/structure/tables.js");
const ConditionEnum = require("./condition-enum.js");
const ColumnSetEnum = require("./column-set-enum.js");
const testRows = require("./data/db-rows.js");

// ## Enum class properties: ##
const className = "QueryEnum";

// ## Enum value properties: ##
// Holds a function for building a test query of each query type, returning
// either a query string, or undefined if the columnSet/conditionType
// combination can't be applied to the given query type.
// E.x. QueryEnum.TYPENAME.build(tableEnum, columnSetType, conditionType);
const builderProperty = "build";

// ##### Convenience functions: #####
// Return a string with the last n characters removed:
function trimStr(str, n) {
    return str.subString(0, str.length - n);
}

// Check if a table column is an id column:
function isIdColumn(tableEnum, columnName) {
    assert(isDefined(tableEnum.withProperty("column", columnName)),
            "'" + columnName + "' is not a valid column" + " for table '"
            + tableEnum.name + "'");
    return columnName.endsWith("_id");
}

// Check if a table column is a foreign key id column:
function isForeignIDColumn(tableEnum, columnName) {
    if (isIdColumn(tableEnum, columnName)) {
        // remove "_id" suffix:
        let idName = trimStr(columnName, 3);
        let tableName = tableEnum.name;
        // Remove plural suffixes from idName and tableName, so we can
        // always identify if an ID column belongs to the current table by
        // checking if idName contains tableName or tableName contains
        // idName.
        function removePlural(name) {
            if (name.endsWith("ies")) { return trimStr(name, 3); }
            if (name.endsWith("s")) { return trimStr(name, 1); }
            return name;
        }
        idName = removePlural(idName);
        tableName = removePlural(tableName);
        return idName.search(tableName) === -1 && tableName.search(idName)
                === -1;
    }
    return false;
}

// For a tableEnum and columnType, generate a list of altered column values to
// insert or update.
function getTestColumnValues(tableEnum, columnSetType) {
    // Column values will come from the first row of test table data, slightly
    // altering it by replacing the last letter of strings.
    const columnNames = ColumnSetEnum.FULL.buildColumnNameList(tableEnum);
    const values = testRows[tableEnum.tableName][0].map((v, idx) => {
        if (v === null) { return "null"; }
        assertHasContent (v, "Missing value for table '"
                + tableEnum.tableName + "' at index " + idx + ".");
        // If last character is numeric, increment it by one:
        if (typeof v === "number") {
            return "'" + (v + 1) + "'";
        }
        const baseStr = v.slice(0, v.length - 1);
        const lastChar = v.slice(-1);
        if (lastChar >= '0' && lastChar <= '9') {
            return "'" + baseStr + (Number(lastChar) + 1) + "'";
        }
        // Otherwise, just append 'a'.
        return "'" + baseStr + "a'";
    });
    // Get the column indexes used for this table and columnSetType:
    const columnIndexes = columnSetType.buildColumnNameList(tableEnum).map(
            (name) => {
        // Convert name to column index.
        return tableEnum.withProperty("columnName", name).index;
    });
    return columnIndexes.map((idx) => values[idx]);
}

// Checks that the parameters passed to QueryEnum.build(queryType)() are
// valid.
function validateQueryParams(queryType, tableEnum, columnSetType,
        conditionType) {
    const tableValue = Tables.withProperty("tableEnum", tableEnum);
    assert(isDefined(tableValue), "Found invalid tableEnum '"
            + tableEnum + "'");
    assert(QueryEnum.isValid(queryType),
            "Found invalid query type '" + queryType + "'");
    assert(ColumnSetEnum.isValid(columnSetType),
            "Found invalid column set type '" + columnSetType + "'");
    assert(ConditionEnum.isValid(conditionType),
            "Found invalid query condition type '" + conditionType + "'");
}

// Gets the set of columns that a test query should use.
function getColumnNames(columnSetType, tableEnum) {
    return columnSetType.buildColumnNameList(tableEnum);
}

// Assembles a set of column values into an SQL table column string.
function getColumnStr(columns) {
    if (columns.length === 0) { return ""; }
    return " (" + columns.join(", ") + ")";
}

// Creates an appropriate conditional statement for a table and conditionType.
function getConditionStr(conditionType, tableEnum) {
    const tableValue = Tables.withProperty("tableEnum", tableEnum);
    return conditionType.forTable(tableValue);
}

// ######## Begin building enum class: ########
const builder = new EnumBuilder(className);
builder.addProperty(builderProperty, "function");

// ######## Define all values: ########
builder.addValue("INSERT", {
    [builderProperty]: function(tableEnum, columnSetType, conditionType) {
        validateQueryParams(QueryEnum.INSERT, tableEnum, columnSetType,
                conditionType);
        // Conditional statements aren't used with INSERT queries.
        if (conditionType !== ConditionEnum.NONE) { return; }

        const valueStr = getTestColumnValues(tableEnum,
                (columnSetType === ColumnSetEnum.DEFAULT)
                ? ColumnSetEnum.FULL : columnSetType).join(", ");
        return "INSERT INTO " + tableEnum.tableName
                + getColumnStr(getColumnNames(columnSetType, tableEnum))
                + " VALUES (" + valueStr + ")";
    }
});
builder.addValue("SELECT", {
    [builderProperty]: function(tableEnum, columnSetType, conditionType) {
        validateQueryParams(QueryEnum.SELECT, tableEnum, columnSetType,
                conditionType);

        const columnStr = getColumnStr(getColumnNames(columnSetType,
                tableEnum)) || " *";
        return "SELECT " + columnStr + " FROM " + tableEnum.tableName
                + getConditionStr(conditionType, tableEnum);
    }
});
builder.addValue("UPDATE", {
    [builderProperty]: function(tableEnum, columnSetType, conditionType) {
        validateQueryParams(QueryEnum.UPDATE, tableEnum, columnSetType,
                conditionType);
        // UPDATE queries require a non-empty column list.
        if (columnSetType === ColumnSetEnum.DEFAULT) { return; }
        // UPDATE queries will break unique value constraints if they try
        // to set multiple rows to the same value, so just don't test
        // UPDATE statements that select more than one row.
        if (! (conditionType === ConditionEnum.EXCLUDE_ALL
                || conditionType === ConditionEnum.SELECT_ONE)) {
            return;
        }

        const columns = getColumnNames(
                (columnSetType === ColumnSetEnum.DEFAULT)
                ? ColumnSetEnum.FULL : columnSetType, tableEnum);
        const values = getTestColumnValues(tableEnum, columnSetType);

        const assignments = values.map((v, idx) =>
        {
            const column = columns[idx];
            assert(isDefined(column), "Failed to find column at index '"
                    + idx + "', columns = '" + columns + "'");
            return column + " = " + v;
        });
        return "UPDATE " + tableEnum.tableName + " SET "
                + assignments.join(", ")
                + getConditionStr(conditionType, tableEnum);
    }
});
builder.addValue("DELETE", {
    [builderProperty]: function(tableEnum, columnSetType,
            conditionType) {
        validateQueryParams(QueryEnum.DELETE, tableEnum, columnSetType,
                conditionType);
        // DELETE queries don't use a column list.
        if (columnSetType !== ColumnSetEnum.DEFAULT) { return; }

        return "DELETE FROM " + tableEnum.tableName
                + getConditionStr(conditionType, tableEnum);
    }
});

const QueryEnum = builder.build();
module.exports = QueryEnum;
