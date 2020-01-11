/**
 * @file location-categories.js
 *
 * An Enum type defining all columns in the database's 'location_categories'
 * table.
 */

const TableEnumBuilder = require("./table-enum-builder.js");

const builder = new TableEnumBuilder("location_categories");
builder.addColumns([ "category_id", "display_name", "icon_uri",
        "last_update" ]);
module.exports = builder.build();
