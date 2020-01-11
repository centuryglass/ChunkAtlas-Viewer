/**
 * @file locations.js
 *
 * An Enum type defining all columns in the database's 'locations' table.
 */

const TableEnumBuilder = require("./table-enum-builder.js");

const builder = new TableEnumBuilder("locations");
builder.addColumns([ "region_id", "category_id", "block_x", "block_z",
        "display_name", "color", "icon_uri", "last_update" ]);
module.exports = builder.build();
