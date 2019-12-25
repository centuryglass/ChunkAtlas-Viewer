/**
 * @file regions-reader-spec.js
 *
 * Tests that src/db/reader/regions-reader.js correctly processes data from
 * the database regions table.
 */
describe("DBRegionsReader", function() {
    const {
        regions,
        column,
        testRegionID,
        rejectMissingRegionMsg,
        missingRegionErr,
<<<<<<< HEAD
        insertTestRegion,
        clearTable
    } = require("../helpers/db/regions-helpers.js");

    const dbWriter = require("../../src/db/writer/db-writer.js");
    const regionReader = require("../../src/db/reader/regions-reader.js");
=======
        insertTestRegion
    } = require("../helpers/db/regions-helpers.js");

    const dbWriter = require("../../src/db/writer/db-writer.js");
    const dbRegions = require("../../src/db/reader/regions-reader.js");
>>>>>>> ccc61c4d9f556ffa9a4fcb8f6d7b1cd52c161236

    const { testPromiseResolution, testPromiseRejection }
            = require("../support/promise-testing.js");

<<<<<<< HEAD
    const logger = require("../../src/logger.js");
    // Clear the region table before each test.
    beforeEach((done) => {
        clearTable(done);
    });

=======
>>>>>>> ccc61c4d9f556ffa9a4fcb8f6d7b1cd52c161236
    describe("getRegionIds", () => {
        const testIDs = [ testRegionID, "overworld", "nether", "the_end" ];
        const testValues = [];
        testIDs.forEach((id) => {
            testValues.push([id, id]);
        });
        it("should resolve the full ID list", (done) => {
            let testPromise = dbWriter.insertRows(regions,
                    [ regions.REGION_ID, regions.DISPLAY_NAME ], testValues)
            .then((addedRows) => {
                if (addedRows !== testIDs.length) {
                    throw new Error("Tried to add " + testIDs.length
                            + " rows, but " + addedRows + " added.");
                    return;
                }
                return regionReader.getRegionIds();
            })
            .then((regionIDs) => {
                expect(regionIDs.length).toEqual(testIDs.length);
                for (let i = 0; i < testIDs.length; i++) {
                    expect(regionIDs[i]).toEqual(testIDs[i]);
                }
            });
            return testPromiseResolution(testPromise, done);
        });

        it("should resolve [] when no regions exist", (done) => {
            const testPromise = regionReader.getRegionIds()
            .then((regionIDs) => {
                expect(Array.isArray(regionIDs) && regionIDs.length === 0)
                        .toBe(true);
            });
            return testPromiseResolution(testPromise, done);
        });
    });

    describe("getRegionData", () => {
        it("should resolve all data for a region", (done) => {
            const displayName = "getRegionData Test";
            const testPromise = insertTestRegion(undefined, displayName)
            .then(() => {
                return regionReader.getRegionData(testRegionID);
            })
            .then((region) => {
                expect(region[column(regions.REGION_ID)])
                        .toEqual(testRegionID);
                expect(region[column(regions.DISPLAY_NAME)])
                        .toEqual(displayName);
                expect(region[column(regions.LAST_UPDATE)]).not.toBe(null);
            });
            return testPromiseResolution(testPromise, done);
        });

        it(rejectMissingRegionMsg, (done) => {
            const description = "getRegionData " + rejectMissingRegionMsg;
            return testPromiseRejection(
                    regionReader.getRegionData(testRegionID),
                    description, missingRegionErr, done);
        });
    });

    describe("regionExists", () => {
        it("should resolve to true if the region id is found, false otherwise",
                (done) => {
            const testPromise = regionReader.regionExists(testRegionID)
            .then((foundRegion) => {
                expect(foundRegion).toBe(false);
                return insertTestRegion();
            })
            .then(() => {
                console.log("ok");
                return regionReader.regionExists(testRegionID);
            })
            .then((foundRegion) => {
                expect(foundRegion).toBe(true);
                done();
            });
            return testPromiseResolution(testPromise, done);
        });
    });

    describe("isRegionIconSet", () => {
        const testIcon = "/api/" + testRegionID + "/icon.png";
        it("should resolve to true if the icon was set, false otherwise",
                (done) => {
            const testPromise = insertTestRegion()
            .then(() => {
                return regionReader.isRegionIconSet(testRegionID);
            })
            .then((isIconSet) => {
                expect(isIconSet).toBe(false);
<<<<<<< HEAD
                return dbWriter.setColumnValues(regions, {
                        [regions.ICON_URI]: testIcon },
                        column(regions.REGION_ID) + " = $1", [testRegionID])
                        .then(() => regionReader.isRegionIconSet(testRegionID));
=======
                return dbWriter.setColumnValues(regions.name,
                        column(regions.ICON_URI), testIcon,
                        column(regions.REGION_ID), testRegionID)
                        .then(() => dbRegions.isRegionIconSet(testRegionID));
>>>>>>> ccc61c4d9f556ffa9a4fcb8f6d7b1cd52c161236
            })
            .then((isIconSet) => {
                expect(isIconSet).toBe(true);
            });
            return testPromiseResolution(testPromise, done);
        });

        it(rejectMissingRegionMsg, (done) => {
            const description = "isRegionIconSet " + rejectMissingRegionMsg;
            return testPromiseRejection(
                    regionReader.isRegionIconSet(testRegionID), description,
                    missingRegionErr, done);
        });
    });
});
