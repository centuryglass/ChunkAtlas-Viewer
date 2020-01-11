/**
 * @file map-types.js
 *
 * An Enum type defining all columns in the database's 'map_types' table.
 */

const TableEnumBuilder = require("./table-enum-builder.js");

const builder = new TableEnumBuilder("map_types");
builder.addColumns([ "type_id", "display_name", "icon_uri", "last_update" ]);
module.exports = builder.build();
