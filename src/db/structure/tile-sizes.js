/**
 * @file map_tiles.js
 *
 * An Enum type defining all columns in the database's 'tile_sizes' table.
 */

const { createTableEnum } = require("../../create-enum.js");

module.exports = createTableEnum("tile_sizes", [ "size" ]);
