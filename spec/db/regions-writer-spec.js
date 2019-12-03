describe("DBRegionsWriter", function() {
    const {
        regionTable,
        columns,
        testRegionID,
        testDisplayName,
        rejectMsg,
        rejectMissingRegionMsg,
        rejectEmptyStringMsg,
        rejectDuplicateValueMsg,
        missingRegionErr,
        insertTestRegion
    } = require("../helpers/db/regions-helper.js");

    const dbWriter = require("../../src/db/writer/db-writer.js");
    const dbRegions = require("../../src/db/writer/regions-writer.js");
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
                return dbWriter.getCell(regionTable, columns.DISPLAY_NAME,
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
                return dbWriter.getCell(regionTable, columns.ICON_URI,
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
                return dbWriter.getCell(regionTable, columns.ICON_URI,
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
