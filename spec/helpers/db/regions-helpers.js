/**
 * @file regions-helpers.js
 *
 * Assists in testing modules that access the database 'regions' table.
 */


// Set test DB parameters:
const testEnv = require("../../support/test-env.js");
testEnv.init();

// general utility:
const logger = require("../../../src/logger.js");
const { assert, isDefined } = require("../../../src/validate.js");

// database modules:
const QueryBuilder = require("../../../src/db/query-builder.js");
const dbWriter = require("../../../src/db/writer/db-writer.js");
const ErrorEnum = require("../../../src/db/error-enum.js");
const regions = require("../../../src/db/structure/regions.js");

// Shared string constants:
const rejectMsg = "should reject with a relevant error ";
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
    missingRegionErr : ErrorEnum.message(ErrorEnum.NO_RESULTS),

    // Insert the test region into the database:
    // If undefined, default values are used in place of regionID and
    // displayName.
    insertTestRegion : (regionID, displayName) => {
        if (regionID === undefined) { regionID = testRegionID; }
        if (displayName === undefined) { displayName = testDisplayName; }
        return dbWriter.insertRows(regions,
                [ regions.REGION_ID, regions.DISPLAY_NAME ],
                [[ regionID, displayName ]]);
    },

    // Clear the regions table, logging the number of deleted rows.
    clearTable : (done) => {
        dbWriter.deleteRows(regions)
        .then((count) => {
            logger.debug("Cleared " + count + " regions.");
            if (isDefined(done)) {
                done();
            }
        })
        .catch((err) => {
            logger.info("Failed to clear regions table: " + err.message);
            done();
        });
    }
}
