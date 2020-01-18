/**
 * @file condition-enum.js
 *
 * Defines possible SQL condition statement types to use when testing database
 * access.
 */

const EnumBuilder = require("../../src/enum-builder.js");
const { assert, isDefined } = require("../../src/validate.js");
const Tables = require("../../src/dbNew/structure/tables.js");

// ### Enum class properties: ###
const className = "ConditionEnum";

// ### Enum value properties: ###
//  Given a table, return an SQL condition statement that applies the value's
//  condition type to a query statement.
//  E.x. ConditionEnum.CONDITION_TYPE.forTable(ExampleTableEnum);
const builderProperty = "forTable";

// Convenience function for constructing SQL strings:
// Given str, return ' WHERE (str)' for any string str.
function condStr(str) {
    return " WHERE (" + str + ")";
}

// ######## Begin building enum class: ########
const builder = new EnumBuilder(className);
builder.addProperty(builderProperty, "function");

// ######## Define all values: ########
// Until I find a better approach, valid condition strings for each table and
// condition type will just be hard-coded into the forTableEnum function
// properties.


// None: represents an empty condition string.
builder.addValue("NONE", {
    [builderProperty]: function() { return ""; }
});

// Exclude all: a condition that excludes every row within the table.
builder.addValue("EXCLUDE_ALL", {
    [builderProperty]: function(tableType) {
        switch(tableType) {
            case Tables.LOCATIONS:
                return condStr("block_x > 10000");
            case Tables.LOCATION_CATEGORIES:
                return condStr("category_id = 'missing'");
            case Tables.MAP_TYPES:
                return condStr("type_id = 'missing'");
            case Tables.REGIONS:
                return condStr("region_id = 'missing'");
            case Tables.KEY_ITEMS:
            case Tables.KEY_ITEMS_STAGING:
                return condStr("description = 'not found in test data'");
            case Tables.MAP_TILES:
            case Tables.MAP_TILES_STAGING:
            case Tables.TILE_SIZES:
                return condStr("size > 1000");
            default:
                throw new Error("Unhandled table type '" + tableType + "'");
        }
    }
});

// Select one: a condition that selects exactly one row in the table.
builder.addValue("SELECT_ONE", {
    [builderProperty]: function(tableType) {
        switch(tableType) {
            case Tables.LOCATIONS:
                return condStr("region_id = 'overworld' AND block_x = "
                        + "-1024 AND block_z = -1024");
            case Tables.LOCATION_CATEGORIES:
                return condStr("display_name = 'Structure'");
            case Tables.MAP_TYPES:
                return condStr("display_name = 'Biome'");
            case Tables.REGIONS:
                return condStr("region_id = 'overworld'");
            case Tables.KEY_ITEMS:
            case Tables.KEY_ITEMS_STAGING:
                return condStr("region_id = 'nether' AND type_id = "
                        + "'recent_activity'");
            case Tables.MAP_TILES:
            case Tables.MAP_TILES_STAGING:
                return condStr("region_id = 'nether' AND type_id = "
                        + "'recent_activity' AND block_x = -1024 AND "
                        + "block_z = -1024 AND size = 128");
                return condStr("block_x > 0");
            case Tables.TILE_SIZES:
                return condStr("size = 128");
            default:
                throw new Error("Unhandled table type '" + tableType
                        + "'");
        }
    }
});

// Exclude none: selects every row in the table.
builder.addValue("EXCLUDE_NONE", {
    [builderProperty]: function(tableType) {
        switch(tableType) {
            case Tables.LOCATIONS:
                return condStr("block_x < 10000");
            case Tables.LOCATION_CATEGORIES:
            case Tables.MAP_TYPES:
            case Tables.REGIONS:
                return condStr("(display_name = 'fake') IS NOT TRUE");
            case Tables.KEY_ITEMS:
            case Tables.KEY_ITEMS_STAGING:
            case Tables.MAP_TILES:
            case Tables.MAP_TILES_STAGING:
                return condStr("(region_id = 'missing_region') IS NOT TRUE");
            case Tables.TILE_SIZES:
                return condStr("size > 1");
            default:
                throw new Error("Unhandled table type '" + tableType + "'");
        }
    }
});

module.exports = builder.build();
