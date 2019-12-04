/**
 * @file tables.js
 *
 * An Enum type defining all tables in the database.
 */

const { createTableEnum } = require("../../create-enum.js");

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

const tableNames = [];
const tableProperties = [];
const enumKey = "columns";
tableList.forEach((tableEnum) => {
    tableNames.push(tableEnum.name);
    tableProperties.push([[ enumKey, tableEnum ]]);
});

module.exports = createTableEnum("tables", tableNames, tableProperties);
