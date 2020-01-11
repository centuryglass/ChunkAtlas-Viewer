/**
 * @file tile_sizes.js
 *
 * An Enum type defining all columns in the database's 'tile_sizes' table.
 */

const TableEnumBuilder = require("./table-enum-builder.js");

const builder = new TableEnumBuilder("tile_sizes");
builder.addValue("size");
module.exports = builder.build();
