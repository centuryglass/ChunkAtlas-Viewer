/**
 * @file db-regions.js
 *
 * Provides methods for handling access to the ChunkAtlas database's regions
 * table.
 */

const db = require("./db-regions.js")
const dbStructure = require("./db-structure.js");

const { isDefined } = require("../validate.js");

const regionTable = dbStructure.tables.REGIONS;

module.exports = {
    /**
     * Asynchronously gets the list of Region IDs.
     *
     * @return  A Promise that will pass the RegionID string array to its
     *          success callback.
     */
    getRegionIds : () => {
        return db.query("SELECT $1 FROM " + regionTable,
                [ dbStructure.regions.REGION_ID ])
        .then((dbResponse, err) => {
            const regionIDs = [];
            if (db.responseReturnedData(dbResponse)) {
                dbResponse.rows.forEach((row) => {
                    regionIDs.push(row[dbStructure.regions.REGION_ID]);
                }
            }
            return new Promise((onSuccess, onFailure) => {
                if (err) { onFailure(err); }
                else { onSuccess(regionIDs); }
            });
        });
    }

    /**
     * Asynchronously gets all information about a single region.
     *
     * @param regionID  A region's ID string.
     *
     * @return          A Promise that will pass the region data object to its
     *                  success callback.
     */
    getRegionData : (regionID) => {
        return db.query("SELECT * FROM " + regionTable + " WHERE ($1 = $2)",
                [ dbStructure.region.REGION_ID, regionID ])
        .then((dbResponse, err) => {
            let region = null;
            if (db.responseReturnedData(dbResponse)) {
                region = dbResponse.rows[0];
            }
            return new Promise((onSuccess, onFailure) => {
                if (err) { onFailure(err); }
                else { onSuccess(region); }
            });
        });
    }
};
