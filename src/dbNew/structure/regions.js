/**
 * @file regions.js
 *
 * An Enum type defining all columns in the database's 'regions' table.
 */

const TableEnumBuilder = require("./table-enum-builder.js");

const builder = new TableEnumBuilder("regions");
builder.addColumns(["region_id", "display_name", "icon_uri", "last_update" ]);
module.exports = builder.build();
