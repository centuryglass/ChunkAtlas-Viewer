/**
 * @file db-row-gen.js
 *
 * Generates test row data for all database tables.
 */

const Tables = require("../../../src/dbNew/structure/tables.js");
const { isDefined } = require("../../../src/validate.js");
const saveJsonModule = require("./json-module-saver.js");
const testEnv = require("../test-env.js");
testEnv.init();

const rowModulePath = "../data/db-rows.js";

// Test region values:
const regions = [ 
    { id: "overworld", displayName: "Overworld" },
    { id: "the_end",   displayName: "The End" },
    { id: "nether",    displayName: "Nether" }
];

// Test map type values:
const types = [
    { id: "biome",           displayName: "Biome" },
    { id: "total_activity",  displayName: "Total Activity" },
    { id: "recent_activity", displayName: "Recent Activity" }
];

// Test update time value:
const lastUpdate = "1/1/1970";


// Test map key data:
const keyItems = [
    { description: "First key item",  color: "ffffff" },
    { description: "Second key item", icon_uri: "icon.png" },
    { description: "Third key item",  color: "00ff00" }
];

// Test tile coordinates:
const coords = [ -1024, -512, 0, 512, 1024 ];


const rows = {
    [Tables.LOCATIONS.tableName] : [],
    [Tables.LOCATION_CATEGORIES.tableName] : [ 
        [ "structure", "Structure", "/structure.png", lastUpdate],
        [ "user", "User-added", "/user.png", lastUpdate ]
    ],
    [Tables.MAP_TYPES.tableName] : [],
    [Tables.REGIONS.tableName] : [],
    [Tables.TILE_SIZES.tableName] : [ [128], [256], [512] ],
};

// Add test data for each region/type combination:
function setTypeRegionRows(type, region) {
    // build key item rows:
    const keyItemRows = []
    for (let keyItem of keyItems) {
        keyItemRows.push([region.id, type.id, keyItem.description, lastUpdate,
                keyItem.color, keyItem.icon_uri]);
    }
    rows[Tables.KEY_ITEMS_STAGING.tableName] = keyItemRows;
    rows[Tables.KEY_ITEMS.tableName] = keyItemRows;

    // build map tile and location rows:
    const tileRows = [];
    const sizeCount = rows.tile_sizes.length;
    const columnComboCount = sizeCount * coords.length * coords.length;
    for (let i = 0; i < columnComboCount; i++) {
        let idx = i;
        const size = rows.tile_sizes[idx % sizeCount][0];
        idx = Math.floor(idx / sizeCount);
        const xCoord = coords[idx % coords.length];
        const zCoord = coords[Math.floor(idx / coords.length)];
        tileRows.push([region.id, type.id, size, xCoord, zCoord, region.id
                + "_" + xCoord + "_" + zCoord + ".png", lastUpdate]);
        // Only insert locations for the first size and type, otherwise there
        // will be duplicates.
        if (size === rows.tile_sizes[0][0] && type === types[0]) {
            rows.locations.push([region.id, rows.location_categories[i % 2][0],
                    xCoord, zCoord, "Location " + i, "ffffff",
                    "/placeIcon" + i + ".png", lastUpdate]);
        }
    }
    rows[Tables.MAP_TILES.tableName] = tileRows;
    rows[Tables.MAP_TILES_STAGING.tableName] = tileRows;
}

regions.forEach((region) => {
    rows.regions.push([region.id, region.displayName,
            "/" + region.displayName + ".png", lastUpdate]);
});

types.forEach((type) => {
    rows.map_types.push([type.id, type.displayName, 
            "/" + type.displayName + "./png", lastUpdate]);
});

for (let region of regions) {
    for (let type of types) {
        setTypeRegionRows(type, region);
    }
}

saveJsonModule(rows, rowModulePath);
