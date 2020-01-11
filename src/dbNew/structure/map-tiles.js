/**
 * @file map-tiles.js
 *
 * An Enum type defining all columns in the database's 'map_tiles' table.
 */

const TableEnumBuilder = require("./table-enum-builder.js");

const builder = new TableEnumBuilder("map_tiles");
builder.addColumns([ "region_id", "type_id", "size", "block_x", "block_z",
        "tile_uri", "last_update" ]);
module.exports = builder.build();
