/**
 * @file key-items-staging.js
 *
 * An Enum type defining all columns in the database's 'key_items_staging'
 * table.
 */

const TableEnumBuilder = require("./table-enum-builder.js");

const builder = new TableEnumBuilder("key_items_staging");
builder.addColumns([ "region_id", "type_id", "description", "last_update",
        "color", "icon_uri" ]);
module.exports = builder.build();
