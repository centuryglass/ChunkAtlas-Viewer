/**
 * @file regions-helpers.js
 *
 * Assists in testing modules that access the database 'regions' table.
 */

// Clear the region table before each test.
beforeEach((done) => {
    return dbWriter._pool.query("DELETE FROM " + regions.name)
    .then(() => {
        done();
    });
});

// Set test DB parameters:
process.env.PGREADER = "db_reader";
process.env.PGWRITER = "postgres";
process.env.PGHOST = "localhost"
process.env.PGDATABASE = "TestMapDB";
process.env.PGPORT = 5432;

const dbWriter = require("../../../src/db/writer/db-writer.js");

const rejectMsg = "should reject with a relevant error ";
const regions = require("../../../src/db/structure/regions.js");
const { assert } = require("../../../src/validate.js");

const testRegionID = "main_test";
const testDisplayName = "Test Region";

/**
 * A convenience function for accessing region column names.
 *
 * @param colValue  A regions column enum value.
 *
 * @return          The corresponding name string.
 */
const column = function(colValue) {
    return regions.column(colValue);
}


module.exports = {
    regions : regions,
    column : column,

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

    // Expected error message strings needed more than once:
    missingRegionErr : "Found no rows in '" + regions.name + "' where '"
            + column(regions.REGION_ID) + "' = '" + testRegionID + "'",

    // Insert the test region into the database:
    // If undefined, default values are used in place of regionID and
    // displayName.
    insertTestRegion : (regionID, displayName) => {
        if (regionID === undefined) { regionID = testRegionID; }
        if (displayName === undefined) { displayName = testDisplayName; }
        return dbWriter.insertRows(regions,
                [ regions.REGION_ID, regions.DISPLAY_NAME ],
                [[ regionID, displayName ]]);
    }
}
