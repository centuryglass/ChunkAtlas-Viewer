describe("DBRegions", function() {
    // Set test DB parameters:
    process.env.PGUSER = "postgres";
    process.env.PGHOST = "localhost"
    process.env.PGDATABASE = "TestMapDB";
    process.env.PGPORT = 5432;

    const db = require("../../src/db/db.js");
    const dbRegions = require("../../src/db/db-regions.js");
    const dbStructure = require("../../src/db/db-structure.js");

    const regionTable = dbStructure.tables.REGIONS;
    const columns = dbStructure.regions;

    // When creating test regions, use this as the default region_id and 
    // display_name
    const testRegionID = "main_test";
    const testDisplayName = "Test Region";

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
            return db.query(query, params)
            .then((dbResult, err) => {
                if (err) {
                    done.fail("Unexpected error setting region IDs: " + err);
                    return;
                }
                return dbRegions.getRegionIds();
            })
            .then((regionIDs) => {
                expect(regionIDs.length).toEqual(testIDs.length);
                for (let i = 0; i < testIDs.length; i++) {
                    expect(regionIDs[i]).toEqual(testIDs[i]);
                }
                done();
            })
            .catch((err) => {
                done.fail("Unexpected error: " + err);
            });
        });

        it("should resolve [] when no regions exist", (done) => {
            return dbRegions.getRegionIds()
            .then((regionIDs) => {
                expect(Array.isArray(regionIDs) && regionIDs.length === 0)
                        .toBe(true);
                done();
            })
            .catch((err) => {
                done.fail("Unexpected error: " + err);
            });
        });
    });

    describe("getRegionData", () => {
        it("should resolve all data for a region", (done) => {
            const displayName = "getRegionData Test";
            return insertTestRegion(undefined, displayName)
            .then(() => {
                return dbRegions.getRegionData(testRegionID);
            })
            .then((region) => {
                expect(region[columns.REGION_ID]).toEqual(testRegionID);
                expect(region[columns.DISPLAY_NAME]).toEqual(displayName);
                expect(region[columns.LAST_UPDATE]).not.toBe(null);
                done();
            })
            .catch((err) => {
                done.fail("Unexpected error: " + err);
            });
        });

        it("should reject with a relevant error if the region isn't found",
                (done) => {
            const expectedErr = "Found no rows in '" + regionTable
                    + "' where '" + columns.REGION_ID + "' = '"
                    + testRegionID + "'";
            return dbRegions.getRegionData(testRegionID)
            .then((regionData) => {
                done.fail("getRegionData should have rejected for missing "
                        + "regionID, but found " + regionData);
            })
            .catch((err) => {
                expect(err).toEqual(expectedErr);
                done();
            });
        });
    });

    describe("regionExists", () => {
        it("should resolve to true if the region id is found, false otherwise",
                (done) => {
            return dbRegions.regionExists(testRegionID)
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
            })
            .catch((err) => {
                done.fail("Unexpected error testing regionExists: " + err);
            });
        });
    });

    describe("isRegionIconSet", () => {
        const testIcon = "/api/" + testRegionID + "/icon.png";
        it("should resolve to true if the icon was set, false otherwise",
                (done) => {
            return insertTestRegion()
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
            })
            .catch((err) => {
                done.fail("Unexpected error testing isRegionIconSet: " + err);
            });
        });
        it("should reject with a relevant error if the region does not exist",
                (done) => {
            const expectedErr = "Error: Region '" + testRegionID
                    + "' was not found";
            return dbRegions.isRegionIconSet(testRegionID)
            .then((isIconSet) => {
                done.fail("isRegionIconSet should have rejected, but it "
                        + "resolved with value " + isIconSet);
            })
            .catch((err) => {
                expect(err.toString()).toEqual(expectedErr);
                done();
            });
        });
    });

    describe("setDisplayName", () => {
        const altTestName    = "Test Region Name";
        const tooLongName = "This name is longer than 32 characters, so "
                + "the database should not allow it.";

        it("should update the correct region row when given a valid name",
                (done) => {
            return insertTestRegion()
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
            })
            .catch((err) => {
                done.fail("Unexpected error testing setDisplayName: " + err);
            });
        });

        it("should reject with a relevant error when given an empty name",
                (done) => {
            return insertTestRegion()
            .then(() => {
                return dbRegions.setDisplayName(testRegionID, "");
            })
            .then(() => {
                done.fail("setDisplayName should not resolve when given an "
                        + "empty string as the name parameter.")
            })
            .catch((err) => {
                const expectedError = "error: new row for relation "
                        + "\"regions\" violates check constraint "
                        + "\"region_nonempty_strings\"";
                expect(err.toString()).toEqual(expectedError);
                done();
            });
        });

        it("should reject with a relevant error when given a name that's "
                + "already in use", (done) => {
            const altRegionID = "alt_region";
            return insertTestRegion()
            .then(() => {
                return insertTestRegion(altRegionID, altTestName);
            })
            .then(() => {
                return dbRegions.setDisplayName(altRegionID, testDisplayName);
            })
            .then(() => {
                done.fail("setDisplayName should not resolve when setting a "
                        + "region display name that's already in use.")
            })
            .catch((err) => {
                const expectedError = "error: duplicate key value violates "
                        + "unique constraint \"region_display_name_unique\"";
                expect(err.toString()).toEqual(expectedError);
                done();
            });
        });

        it("should reject with a relevant error when given a name that's "
                + "longer than 32 characters", (done) => {
            return insertTestRegion()
            .then(() => {
                return dbRegions.setDisplayName(testRegionID, tooLongName);
            })
            .then(() => {
                done.fail("setDisplayName should not resolve when given a "
                        + "name parameter longer than 32 characters.");
            })
            .catch((err) => {
                const expectedError = "error: value too long for type "
                        + "character varying(32)";
                expect(err.toString()).toEqual(expectedError);
                done();
            });
        });
    });

    describe("setIconURI", () => {
        const testURI = "/api/main_test/icon.png";

        it("should update the correct region row when given a valid URI",
                (done) => {
            return insertTestRegion()
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
            })
            .catch((err) => {
                done.fail("Unexpected error testing setIconURI: " + err);
            });
        });

        it("should update the correct region row when given a null URI",
                (done) => {
            return insertTestRegion()
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
            })
            .catch((err) => {
                done.fail("Unexpected error testing setIconURI: " + err);
            });
        });

        it("should reject with a relevant error when given an empty URI",
                (done) => {
            return insertTestRegion()
            .then(() => {
                return dbRegions.setIconURI(testRegionID, "");
            })
            .then(() => {
                done.fail("setIconURI should not resolve if given an empty "
                        + "string as the URI parameter.");
            })
            .catch((err) => {
                const expectedError = "error: new row for relation "
                        + "\"regions\" violates check constraint "
                        + "\"region_nonempty_strings\"";
                expect(err.toString()).toEqual(expectedError);
                done();
            });
        });
    });
});
