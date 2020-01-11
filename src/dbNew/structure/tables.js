/**
 * @file tables.js
 *
 * An Enum type defining all tables in the database.
 */

const EnumBuilder = require("../../enum-builder.js");

const key_items_staging = require("./key-items-staging.js");
const key_items = require("./key-items.js");
const location_categories = require("./location-categories.js");
const locations = require("./locations.js");
const map_tiles_staging = require("./map-tiles-staging.js");
const map_tiles = require("./map-tiles.js");
const map_types = require("./map-types.js");
const regions = require("./regions.js");
const tile_sizes = require("./tile-sizes.js");

const tableList = [
    key_items_staging,
    key_items,
    location_categories,
    locations,
    map_tiles_staging,
    map_tiles,
    map_types,
    regions,
    tile_sizes
];

const builder = new EnumBuilder("Tables");
builder.addProperty("tableEnum", "object", Object);
builder.addProperty("tableName", "string");
for (let tableEnum of tableList) {
    const valueName = tableEnum.tableName.toUpperCase();
    builder.addValue(valueName, {
        tableEnum: tableEnum,
        tableName: tableEnum.tableName
    });
}
module.exports = builder.build();
