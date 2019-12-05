/**
 * @file test-row-gen.js
 *
 * Generates test row data for all database tables.
 */

const Tables = require("../../../src/db/structure/tables.js");
const { isDefined } = require("../../../src/validate.js");
const saveJsonModule = require("./json-module-saver.js");

const rowModulePath = "../test-rows.js";

// Convenience function for accessing table names:
function table(tableValue) { return Tables.table(tableValue); }

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
const lastUpdate = 100;


// Test map key data:
const keyItems = [
    { description: "First key item",  color: "ffffff" },
    { description: "Second key item", icon_uri: "icon.png" },
    { description: "Third key item",  color: "00ff00" }
];

// Test tile coordinates:
const coords = [ -1024, -512, 0, 512, 1024 ];


const rows = {
    [table(Tables.LOCATIONS)] : [],
    [table(Tables.LOCATION_CATEGORIES)] : [ 
        [ "structure", "Structure", "/structure.png", lastUpdate],
        [ "user", "User-added", "/user.png", lastUpdate ]
    ],
    [table(Tables.MAP_TYPES)] : [],
    [table(Tables.REGIONS)] : [],
    [table(Tables.TILE_SIZES)] : [ [128], [256], [512] ],
    
};

// Add test data for each region/type combination:
function setTypeRegionRows(type, region) {
    // build key item rows:
    const keyItemRows = []
    for (let keyItem of keyItems) {
        keyItemRows.push([region.id, type.id, keyItem.description, lastUpdate,
                keyItem.color, keyItem.icon_uri]);
    }
    rows[table(Tables.KEY_ITEMS_STAGING)] = keyItemRows;
    rows[table(Tables.KEY_ITEMS)] = keyItemRows;

    // build map tile rows:
    const tileRows = [];
    const sizeCount = rows.tile_sizes.length;
    const columnComboCount = sizeCount * coords.length * coords.length;
    for (let i = 0; i < columnComboCount; i++) {
        let idx = i;
        const size = rows.tile_sizes[idx % sizeCount][0];
        idx /= sizeCount;
        const xCoord = coords[idx % coords.length];
        const zCoord = coords[idx / coords.length];
        tileRows.push([region.id, type.id, size, xCoord, zCoord,
                xCoord + "_" + zCoord + ".png", lastUpdate]);
        rows.locations.push([region.id, rows.location_categories[i % 2][0],
                xCoord, zCoord, "Location " + i, "ffffff",
                "/placeIcon" + i + ".png", lastUpdate]);
    }
    rows[table(Tables.MAP_TILES)] = tileRows;
    rows[table(Tables.MAP_TILES_STAGING)] = tileRows;
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
