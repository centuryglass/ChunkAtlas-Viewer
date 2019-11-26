/**
 * @file db-structure.js
 *
 *  Defines all relevant tables, table columns, and functions used by the 
 * ChunkAtlas database, using a set of immutable objects.
 */

const { recursiveFreeze } = require("./const-util.js");

// Initially list all database constants in a set of named arrays:
const dbConstants = {
    // All database table names:
    tables : [
        "regions",
        "map_types",
        "tile_sizes",
        "locations",
        "location_categories",
        "map_tiles",
        "key_items",
        "map_tiles_staging",
        "key_items_staging"
    ],
    // Relevant or potentially relevant function names:
    functions : [
        "apply_staging",
        "check_color",
        "check_id_format"
    ],
    // Database table arrays, each defining their table columns:
    regions : [
        "region_id",
        "display_name",
        "icon_uri",
        "last_update"
    ],
    map_types : [
        "type_id",
        "display_name",
        "icon_uri",
        "last_update",
    ],
    tile_sizes : [ "size" ],
    locations : [
        "region_id",
        "category_id",
        "block_x",
        "block_z",
        "display_name",
        "color",
        "icon_uri",
        "last_update"
    ],
    location_categories : [
        "category_id",
        "display_name",
        "icon_uri",
        "last_update"
    ],
    map_tiles : [
        "region_id",
        "type_id",
        "size",
        "block_x",
        "block_z",
        "tile_uri",
        "last_update"
    ],
    key_items : [
        "region_id",
        "type_id",
        "description",
        "last_update",
        "color",
        "icon_uri"
    ]
};
dbConstants.map_tiles_staging = dbConstants.map_tiles;
dbConstants.key_items_staging = dbConstants.key_items;

module.exports = {};

// Convert array values into objects, so that they can be made immutable using
// const_util.recursiveFreeze.
Object.keys(dbConstants).forEach((key) => {
    module.exports[key] = {};
    dbConstants[key].forEach((constValue) => {
        module.exports[key][constValue.toUpperCase()] = constValue;
    });
    recursiveFreeze(module.exports[key]);
});
