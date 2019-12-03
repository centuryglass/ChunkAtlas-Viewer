/**
 * @file regions-writer.js
 *
 * Provides methods for writing to the ChunkAtlas database's regions table.
 */

const dbWriter = require("./db-writer.js")
const dbStructure = require("../db-structure.js");

const regionTable = dbStructure.tables.REGIONS;
const idColumn = dbStructure.regions.REGION_ID;

module.exports = {
    /**
     * Sets a specific region's display name.
     *
     * @param regionID     The specific region to update.
     *
     * @param displayName  The new display name to apply. This name must be a
     *                     unique string between 1 and 32 characters,
     *                     inclusive.
     */
    setDisplayName : (regionID, displayName) => {
        return dbWriter.setColumnValues(regionTable,
                dbStructure.regions.DISPLAY_NAME,
                displayName,
                idColumn,
                regionID);
    },

    /**
     * Sets a specific region's icon URI.
     *
     * @param regionID  The specific region to update.
     *
     * @param iconURI   The new icon URI to set.
     */
    setIconURI : (regionID, iconURI) => {
        return dbWriter.setColumnValues(regionTable,
                dbStructure.regions.ICON_URI,
                iconURI,
                idColumn,
                regionID);
    }
};
