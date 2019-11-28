/**
 * @file db-regions.js
 *
 * Provides methods for handling access to the ChunkAtlas database's regions
 * table.
 */

const db = require("./db.js")
const dbStructure = require("./db-structure.js");

const { isDefined } = require("../validate.js");

const regionTable = dbStructure.tables.REGIONS;
const idColumn = dbStructure.regions.REGION_ID;

module.exports = {
    /**
     * Asynchronously gets the list of Region IDs.
     *
     * @return  A Promise that will pass the RegionID string array to its
     *          success callback.
     */
    getRegionIds : () => {
        return db.getColumnValues(regionTable, idColumn);
    },

    /**
     * Asynchronously gets all information about a single region.
     *
     * @param regionID  A region's ID string.
     *
     * @return          A Promise that will pass the region data object to its
     *                  success callback.
     */
    getRegionData : (regionID) => {
        return db.getMatchingRow(regionTable, idColumn, regionID);
    },

    /**
     * Checks if a region with a specific ID exists in the database.
     *
     * @param regionID  A potential region ID string.
     *
     * @return          A Promise that will pass true to its success callback
     *                  if the region was found, false if it was not.
     */
    regionExists : (regionID) => {
        return db.getCell(regionTable, idColumn, idColumn, regionID)
        .then((cell) => { return true; })
        .catch(() => { return false; });
    },

    /**
     * Checks if a specific region's icon URI is set to a non-null value.
     *
     * @param regionID  A region's ID string.
     *
     * @return          A Promise that will pass true to its success callback
     *                  if the region icon was found, false if it was not. The
     *                  Promise will reject if the region is not found in the
     *                  database.
     */
    isRegionIconSet : (regionID) => {
        return db.getCell(regionTable, dbStructure.regions.ICON_URI,
                idColumn, regionID)
        .then((cell) => {
            return cell !== null;
        })
        .catch((err) => {
            const expectedErr = "Failed to find single '"
            + dbStructure.regions.ICON_URI + "' cell in '" + regionTable
            + "' where '" + idColumn + "' = '" + regionID + "'";
            if (err === expectedErr) {
                throw new Error("Region '" + regionID + "' was not found");
            }
            else {
                throw err;
            }
        });
    },

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
        return db.setColumnValues(regionTable,
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
        return db.setColumnValues(regionTable,
                dbStructure.regions.ICON_URI,
                iconURI,
                idColumn,
                regionID);
    }
};
