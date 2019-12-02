describe("DBRegionsReader", function() {
    const {
        regionTable,
        columns,
        testRegionID,
        rejectMissingRegionMsg,
        missingRegionErr,
        insertTestRegion
    } = require("../helpers/db/db-regions-helper.js");

    const dbWriter = require("../../src/db/writer/db-writer.js");
    const dbRegions = require("../../src/db/reader/db-regions-reader.js");
    const dbStructure = require("../../src/db/db-structure.js");

    const { testPromiseResolution, testPromiseRejection }
            = require("../../src/testing/promise-testing.js");

    // Clear the region table before each test.
    beforeEach((done) => {
        return dbWriter.query("DELETE FROM " + regionTable)
        .then(() => {
            done();
        });
    });

    describe("getRegionIds", () => {
        const testIDs = [ testRegionID, "overworld", "nether", "the_end" ];

        it("should resolve the full ID list", (done) => {
            let query = "INSERT INTO " + regionTable + " ("
                    + columns.REGION_ID + ", " + columns.DISPLAY_NAME
                    + ") VALUES ";
            let paramIdx = 1;
            const params = [];
            for (let regionID of testIDs) {
                if (paramIdx > 1) { query += ", "; }
                query += "($" + paramIdx + ", $" + paramIdx + ")";
                paramIdx++;
                params.push(regionID);
            }
            const testPromise = dbWriter.query(query, params)
            .then((dbResult, err) => {
                if (err) {
                    throw new Error("Unexpected error setting region IDs: "
                            + err);
                    return;
                }
                return dbRegions.getRegionIds();
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
            const testPromise = dbRegions.getRegionIds()
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
                return dbRegions.getRegionData(testRegionID);
            })
            .then((region) => {
                expect(region[columns.REGION_ID]).toEqual(testRegionID);
                expect(region[columns.DISPLAY_NAME]).toEqual(displayName);
                expect(region[columns.LAST_UPDATE]).not.toBe(null);
            });
            return testPromiseResolution(testPromise, done);
        });

        it(rejectMissingRegionMsg, (done) => {
            const description = "getRegionData " + rejectMissingRegionMsg;
            return testPromiseRejection(dbRegions.getRegionData(testRegionID),
                    description, missingRegionErr, done);
        });
    });

    describe("regionExists", () => {
        it("should resolve to true if the region id is found, false otherwise",
                (done) => {
            const testPromise = dbRegions.regionExists(testRegionID)
            .then((foundRegion) => {
                expect(foundRegion).toBe(false);
                return insertTestRegion();
            })
            .then(() => {
                return dbRegions.regionExists(testRegionID);
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
                return dbRegions.isRegionIconSet(testRegionID);
            })
            .then((isIconSet) => {
                expect(isIconSet).toBe(false);
                return dbWriter.setColumnValues(regionTable, columns.ICON_URI,
                        testIcon, columns.REGION_ID, testRegionID)
                        .then(() => dbRegions.isRegionIconSet(testRegionID));
            })
            .then((isIconSet) => {
                expect(isIconSet).toBe(true);
                done();
            });
            return testPromiseResolution(testPromise, done);
        });

        it(rejectMissingRegionMsg, (done) => {
            const description = "isRegionIconSet " + rejectMissingRegionMsg;
            return testPromiseRejection(
                    dbRegions.isRegionIconSet(testRegionID), description,
                    missingRegionErr, done);
        });
    });
});
