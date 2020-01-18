/**
 * @file column-set-enum.js
 *
 * Represents different types of table column sets used in testing.
 */


const EnumBuilder = require("../../src/enum-builder.js");
const { assert, isDefined, assertCorrectType }
        = require("../../src/validate.js");

// ## Enum class properties: ##
const className = "ColumnSetEnum";

// ## Enum value properties: ##
// For a given column set and tableEnum, build a column name set.
// E.g. ColumnSetEnum.TYPE.buildColumnNameList(tableEnum)
const builderProperty = "buildColumnNameList";

// ##### Convenience functions for constructing column name sets: #####
/**
 * Passes tableEnum column names to an array using a variable array method,
 * optionally applying each column value only if it satisfies an additional
 * predicate function.
 *
 * @param tableEnum    An enum data structure representing database table 
 *                     columns.
 *
 * @param buildMethod  The name of an array method used to apply each column
 *                     to an array.
 *
 * @param predicate    If provided, each column name will be applied to the
 *                     array if predicate(tableEnum, columnEnumValue) returns
 *                     true.
 *
 * @return             The array, after all column names have been applied
 *                     using the buildMethod.
 */
function collectColumns(tableEnum, buildMethod, predicate) {
    const columns = [];
    assertCorrectType(columns[buildMethod], "function",
            "Invalid array method parameter");
    for (let column of tableEnum) {
        if (! isDefined(predicate) || predicate(tableEnum, column)) {
            columns[buildMethod](column.columnName);
        }
    }
    return columns;
}

// A predicate function that will only return true for a column value if it is
// either the only column in the table, or it is not the last column in the
// table.
function skipLast(tableEnum, column) {
    return tableEnum.count === 1 || column.index < (tableEnum.count - 1);
}

// ######## Begin building enum class: ########
const builder = new EnumBuilder(className);
builder.addProperty(builderProperty, "function");

// ######## Define all values: ########

// Default column set: Return the empty list, the database will generally
// assume the column set is all table columns, in the default order.
builder.addValue("DEFAULT", {
    [builderProperty]: function(tableEnum) { return []; }
});

// Full column set: Explicitly list all columns in order.
builder.addValue("FULL", {
    [builderProperty]: function(tableEnum) {
        return collectColumns(tableEnum, "push");
    }
});

// Alternate column set: List all columns in reverse order.
builder.addValue("ALT", {
    [builderProperty]: function(tableEnum) {
        return collectColumns(tableEnum, "unshift");
    }
});

// Partial column set: All columns in order, skipping the last column as long
// as the table has more than one column.
builder.addValue("PARTIAL", {
    [builderProperty]: function(tableEnum) {
        return collectColumns(tableEnum, "push", skipLast);
    }
});

// Partial alternate column set: The same set of columns as
// ColumnSetEnum.PARTIAL, but in reverse order.
builder.addValue("PARTIAL_ALT", {
    [builderProperty]: function(tableEnum) {
        return collectColumns(tableEnum, "push", skipLast);
    }
});

module.exports = builder.build();;
