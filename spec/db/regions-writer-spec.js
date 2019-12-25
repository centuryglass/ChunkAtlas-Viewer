describe("DBRegionsWriter", function() {
    const {
<<<<<<< HEAD
=======
        regions,
>>>>>>> ccc61c4d9f556ffa9a4fcb8f6d7b1cd52c161236
        column,
        testRegionID,
        testDisplayName,
        rejectMsg,
        rejectMissingRegionMsg,
        rejectEmptyStringMsg,
        rejectDuplicateValueMsg,
        missingRegionErr,
<<<<<<< HEAD
        insertTestRegion,
        clearTable
    } = require("../helpers/db/regions-helpers.js");

    const dbWriter = require("../../src/db/writer/db-writer.js");
    const regionsWriter = require("../../src/db/writer/regions-writer.js");
    const regions = require("../../src/db/structure/regions.js");
=======
        insertTestRegion
    } = require("../helpers/db/regions-helpers.js");

    const dbWriter = require("../../src/db/writer/db-writer.js");
    const dbRegions = require("../../src/db/writer/regions-writer.js");
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
    describe("setDisplayName", () => {
        const altTestName    = "Test Region Name";
        const tooLongName = "This name is longer than 32 characters, so "
                + "the database should not allow it.";

        it("should update the correct region row when given a valid name",
                (done) => {
            const testPromise = insertTestRegion()
            .then(() => {
                return regionsWriter.setDisplayName(testRegionID, altTestName);
            })
            .then(() => {
<<<<<<< HEAD
                return dbWriter.selectCell(regions, regions.DISPLAY_NAME,
                        regions.column(regions.REGION_ID) + " = $1",
                        testRegionID);
=======
                return dbWriter.getCell(regions.name,
                        column(regions.DISPLAY_NAME),
                        column(regions.REGION_ID), testRegionID);
>>>>>>> ccc61c4d9f556ffa9a4fcb8f6d7b1cd52c161236
            })
            .then((displayName) => {
                expect(displayName).toEqual(altTestName);
                done();
            });
            return testPromiseResolution(testPromise, done);
        });

        it(rejectMissingRegionMsg, (done) => {
            const testPromise
                    = regionsWriter.setDisplayName(testRegionID, testDisplayName);
            const description = "setDisplayName " + rejectMissingRegionMsg;
            return testPromiseRejection(testPromise, description,
                    missingRegionErr, done);
        });

        it(rejectEmptyStringMsg, (done) => {
            const testPromise = insertTestRegion()
            .then(() => {
                return regionsWriter.setDisplayName(testRegionID, "");
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
                return regionsWriter.setDisplayName(altRegionID, testDisplayName);
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
                return regionsWriter.setDisplayName(testRegionID, tooLongName);
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
                return regionsWriter.setIconURI(testRegionID, testURI);
            })
            .then(() => {
<<<<<<< HEAD
                return dbWriter.selectCell(regions, regions.ICON_URI,
                        regions.REGION_ID, testRegionID);
=======
                return dbWriter.getCell(regions.name,
                        column(regions.ICON_URI),
                        column(regions.REGION_ID), testRegionID);
>>>>>>> ccc61c4d9f556ffa9a4fcb8f6d7b1cd52c161236
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
                return regionsWriter.setIconURI(testRegionID, testURI);
            })
            .then(() => {
                return regionsWriter.setIconURI(testRegionID, null);
            })
            .then(() => {
<<<<<<< HEAD
                return dbWriter.selectCell(regions, regions.ICON_URI,
                        regions.REGION_ID, testRegionID);
=======
                return dbWriter.getCell(regions.name,
                        column(regions.ICON_URI), column(regions.REGION_ID),
                        testRegionID);
>>>>>>> ccc61c4d9f556ffa9a4fcb8f6d7b1cd52c161236
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
                return regionsWriter.setIconURI(testRegionID, "");
            });
            const description = "setIconURI " + rejectEmptyStringMsg;
            const expectedErr = "error: new row for relation \"regions\" "
                    + "violates check constraint \"region_nonempty_strings\"";
            return testPromiseRejection(testPromise, description, expectedErr,
                    done);
        });
    });
});
