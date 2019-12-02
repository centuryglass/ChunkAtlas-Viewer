/**
 * @file db-regions-reader.js
 *
 * Provides methods for reading from the ChunkAtlas database's regions table.
 */

const dbReader = require("./db-reader.js")
const dbStructure = require("../db-structure.js");

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
        return dbReader.getColumnValues(regionTable, idColumn);
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
        return dbReader.getMatchingRow(regionTable, idColumn, regionID);
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
        return dbReader.getCell(regionTable, idColumn, idColumn, regionID)
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
        return dbReader.getCell(regionTable, dbStructure.regions.ICON_URI,
                idColumn, regionID)
        .then((cell) => {
            return cell !== null;
        })
        .catch((err) => {
            const expectedErr = "Error: Failed to find single '"
            + dbStructure.regions.ICON_URI + "' cell in '" + regionTable
            + "' where '" + idColumn + "' = '" + regionID + "'";
            if (err.toString() === expectedErr) {
                throw new Error("Found no rows in '" + regionTable
                        + "' where '" + idColumn + "' = '" + regionID + "'");
            }
            else {
                throw err;
            }
        });
    }
};
