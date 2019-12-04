/**
 * @file map-tiles-staging.js
 *
 * An Enum type defining all columns in the database's 'map_tiles_staging'
 * table.
 */

const { createTableEnum } = require("../../create-enum.js");

module.exports = createTableEnum("map_tiles_staging", [ "region_id",
        "type_id", "size", "block_x", "block_z", "tile_uri", "last_update" ]);
