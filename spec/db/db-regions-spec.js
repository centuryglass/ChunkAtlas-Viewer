describe("DBRegions", function() {
    // Set test DB parameters:
    process.env.PGUSER = "postgres";
    process.env.PGHOST = "localhost"
    process.env.PGDATABASE = "TestMapDB";
    process.env.PGPORT = 5432;

    const db = require("../../src/db/db.js");
    const dbRegions = require("../../src/db/db-regions.js");
    const dbStructure = require("../../src/db/db-structure.js");

    const { testPromiseResolution, testPromiseRejection }
            = require("../../src/testing/promise-testing.js");

    const regionTable = dbStructure.tables.REGIONS;
    const columns = dbStructure.regions;

    // When creating test regions, use this as the default region_id and 
    // display_name
    const testRegionID = "main_test";
    const testDisplayName = "Test Region";

    // Descriptions of tests repeated in multiple contexts:
    const rejectMsg = "should reject with a relevant error ";
    const rejectMissingRegionMsg = rejectMsg
            + "if the region doesn't exist";
    const rejectEmptyStringMsg = rejectMsg
            + "if it tries to set a value to the empty string.";
    const rejectDuplicateValueMsg = rejectMsg
            + "if it tries to set a value that is already in use.";

    // Expected error strings needed more than once:
    const missingRegionErr = "Error: Found no rows in '" + regionTable
            + "' where '" + columns.REGION_ID + "' = '" + testRegionID + "'";

    // Insert the test region into the database:
    // If undefined, default values are used in place of regionID and
    // displayName.
    const insertTestRegion = (regionID, displayName) => {
        if (regionID === undefined) { regionID = testRegionID; }
        if (displayName === undefined) { displayName = testDisplayName; }
        const query = "INSERT INTO " + regionTable + " (" + columns.REGION_ID
            + ", " + columns.DISPLAY_NAME + ") VALUES ($1, $2)";
        return db.query(query, [ regionID, displayName ])
        .then((dbResponse, err) => {
            if (err) {
                throw err;
            }
        });
    };

    // Clear the region table before each test.
    beforeEach((done) => {
        return db.query("DELETE FROM " + regionTable)
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
            const testPromise = db.query(query, params)
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
                return db.setColumnValues(regionTable, columns.ICON_URI,
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

    describe("setDisplayName", () => {
        const altTestName    = "Test Region Name";
        const tooLongName = "This name is longer than 32 characters, so "
                + "the database should not allow it.";

        it("should update the correct region row when given a valid name",
                (done) => {
            const testPromise = insertTestRegion()
            .then(() => {
                return dbRegions.setDisplayName(testRegionID, altTestName);
            })
            .then(() => {
                return db.getCell(regionTable, columns.DISPLAY_NAME,
                        columns.REGION_ID, testRegionID);
            })
            .then((displayName) => {
                expect(displayName).toEqual(altTestName);
                done();
            });
            return testPromiseResolution(testPromise, done);
        });

        it(rejectMissingRegionMsg, (done) => {
            const testPromise
                    = dbRegions.setDisplayName(testRegionID, testDisplayName);
            const description = "setDisplayName " + rejectMissingRegionMsg;
            return testPromiseRejection(testPromise, description,
                    missingRegionErr, done);
        });

        it(rejectEmptyStringMsg, (done) => {
            const testPromise = insertTestRegion()
            .then(() => {
                return dbRegions.setDisplayName(testRegionID, "");
            });
            const description = "setDisplayName " + rejectEmptyStringMsg;
            const expectedErr = "error: new row for relation \"regions\" "
                    + "violates check constraint \"region_nonempty_strings\"";
            return testPromiseRejection(testPromise, description, expectedErr,
                    done);
        });

        it(rejectDuplicateValueMsg, (done) => {
            const altRegionID = "alt_region";
            const testPromise = insertTestRegion()
            .then(() => {
                return insertTestRegion(altRegionID, altTestName);
            })
            .then(() => {
                return dbRegions.setDisplayName(altRegionID, testDisplayName);
            });
            const description = "setDisplayName " + rejectDuplicateValueMsg;
            const expectedErr = "error: duplicate key value violates "
                    + "unique constraint \"region_display_name_unique\"";
            return testPromiseRejection(testPromise, description, expectedErr,
                    done);
        });

        const rejectLongNameMsg = rejectMsg + "when given a name that's "
                + "longer than 32 characters";
        it(rejectLongNameMsg, (done) => {
            const testPromise = insertTestRegion()
            .then(() => {
                return dbRegions.setDisplayName(testRegionID, tooLongName);
            });
            const description = "setDisplayName " + rejectLongNameMsg;
            const expectedErr = "error: value too long for type character "
                    + "varying(32)";
            return testPromiseRejection(testPromise, description, expectedErr,
                    done);
        });
    });

    describe("setIconURI", () => {
        const testURI = "/api/main_test/icon.png";

        it("should update the correct region row when given a valid URI",
                (done) => {
            const testPromise = insertTestRegion()
            .then(() => {
                return dbRegions.setIconURI(testRegionID, testURI);
            })
            .then(() => {
                return db.getCell(regionTable, columns.ICON_URI,
                        columns.REGION_ID, testRegionID);
            })
            .then((iconURI) => {
                expect(iconURI).toEqual(testURI);
                done();
            });
            return testPromiseResolution(testPromise, done);
        });

        it("should update the correct region row when given a null URI",
                (done) => {
            const testPromise = insertTestRegion()
            .then(() => {
                return dbRegions.setIconURI(testRegionID, testURI);
            })
            .then(() => {
                return dbRegions.setIconURI(testRegionID, null);
            })
            .then(() => {
                return db.getCell(regionTable, columns.ICON_URI,
                        columns.REGION_ID, testRegionID);
            })
            .then((iconURI) => {
                expect(iconURI).toEqual(null);
                done();
            });
            return testPromiseResolution(testPromise, done);
        });

        it(rejectEmptyStringMsg, (done) => {
            const testPromise = insertTestRegion()
            .then(() => {
                return dbRegions.setIconURI(testRegionID, "");
            });
            const description = "setIconURI " + rejectEmptyStringMsg;
            const expectedErr = "error: new row for relation \"regions\" "
                    + "violates check constraint \"region_nonempty_strings\"";
            return testPromiseRejection(testPromise, description, expectedErr,
                    done);
        });
    });
});
