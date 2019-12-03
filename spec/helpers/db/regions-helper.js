
// Set test DB parameters:
process.env.PGREADER = "db_reader";
process.env.PGWRITER = "postgres";
process.env.PGHOST = "localhost"
process.env.PGDATABASE = "TestMapDB";
process.env.PGPORT = 5432;

const dbWriter = require("../../../src/db/writer/db-writer.js");
const dbStructure = require("../../../src/db/db-structure.js");

const rejectMsg = "should reject with a relevant error ";
const regionTable = dbStructure.tables.REGIONS;
const columns = dbStructure.regions;

const testRegionID = "main_test";
const testDisplayName = "Test Region";

module.exports = {
    regionTable : regionTable,
    columns : columns,

    // When creating test regions, use this as the default region_id and 
    // display_name
    testRegionID : testRegionID,
    testDisplayName : testDisplayName,

    // Descriptions of tests repeated in multiple contexts:
    rejectMsg : rejectMsg,
    rejectMissingRegionMsg : rejectMsg
            + "if the region doesn't exist",
    rejectEmptyStringMsg : rejectMsg
            + "if it tries to set a value to the empty string.",
    rejectDuplicateValueMsg : rejectMsg
            + "if it tries to set a value that is already in use.",

    // Expected error strings needed more than once:
    missingRegionErr : "Error: Found no rows in '" + regionTable
            + "' where '" + columns.REGION_ID + "' = '" + testRegionID + "'",

    // Insert the test region into the database:
    // If undefined, default values are used in place of regionID and
    // displayName.
    insertTestRegion : (regionID, displayName) => {
        if (regionID === undefined) { regionID = testRegionID; }
        if (displayName === undefined) { displayName = testDisplayName; }
        const query = "INSERT INTO " + regionTable + " (" + columns.REGION_ID
            + ", " + columns.DISPLAY_NAME + ") VALUES ($1, $2)";
        return dbWriter.query(query, [ regionID, displayName ])
        .then((dbResponse, err) => {
            if (err) {
                throw err;
            }
        });
    }

}
