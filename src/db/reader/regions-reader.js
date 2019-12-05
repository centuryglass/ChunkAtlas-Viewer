/**
 * @file regions-reader.js
 *
 * Provides methods for reading from the ChunkAtlas database's regions table.
 */

const dbReader = require("./db-reader.js")
const regions = require("../structure/regions.js");
const ErrorEnum = require("../error-enum.js");
const DBError = require("../db-error.js");
const idColumn = regions.column(regions.REGION_ID);

module.exports = {
    /**
     * Asynchronously gets the list of Region IDs.
     *
     * @return  A Promise that will pass the RegionID string array to its
     *          success callback.
     */
    getRegionIds : () => {
        try {
            return dbReader.selectColumnValues(regions, regions.REGION_ID);
        }
        catch (err) {
            throw new Error("Failed to get region IDs: " + err.message);
        }
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
        return dbReader.selectRow(regions, idColumn + " = $1", [ regionID ])
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
        return dbReader.selectCell(regions, regions.column(regions.REGION_ID),
                idColumn + " = $1", [ regionID ])
        .then((cell) => true)
        .catch((err) => false);
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
        return dbReader.selectCell(regions, regions.column(regions.ICON_URI),
                idColumn + " = $1", [ regionID ])
        .then((cell) => {
            return cell !== null;
        });
    }
};
