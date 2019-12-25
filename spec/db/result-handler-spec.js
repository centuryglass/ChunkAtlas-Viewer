/**
 * @file result-handler-spec.js
 *
 * Tests that the result-handler module defined in src/db/result-handler.js
 * processes database results correctly.
 */

describe("ResultHandler", function() {
    const logger = require("../../src/logger.js");
    const { isDefined, isString } = require("../../src/validate.js");
    const { testPromiseResolution, testPromiseRejection }
            = require("../support/promise-testing.js");
    const resultHandler = require("../../src/db/result-handler.js");
    const DBError = require("../../src/db/db-error.js");
    const ErrorEnum = require("../../src/db/error-enum.js");
    const QueryBuilder = require("../../src/db/query-builder.js");

    // Use the regions table for tests:
    const {
        regions,
        column,
        testRegionID,
        rejectMissingRegionMsg,
        missingRegionErr,
        insertTestRegion,
        clearTable
    } = require("../helpers/db/regions-helpers.js");

    // Use a raw node-postgres pool with write access for all necessary
    // queries.
    const { Pool, Result } = require("pg");
    const pool = new Pool({
        user: process.env.PGWRITER,
        password: process.env.PGWRITER_PASSWORD
    });

    // Clear the region table before each test.
    beforeEach((done) => {
        clearTable(done);
    });

    // Returns whether an error is a valid DBError object with an appropriate
    // error type.
    function isDBError(error, errorType) {
        return (error instanceof DBError) && (error.code === errorType)
                && (error.message === ErrorEnum.message(errorType));
    }

    // Invalid result objects to use for tests:
    const invalidResults = [ undefined, null, 0, 1, {}, { rows: [] } ];

    // Return a Promise to select all rows in regions, then process errors.
    function selectPromise() {
        const builder = new QueryBuilder(regions);
        return resultHandler.handleErrors(builder.select(pool));
    }

    describe("handleErrors", function() {
        const fakeResult = [ "this is a fake result" ];

        it("should resolve with a result if no error occurs", function(done) {
            const mockQuery = new Promise((resolve) => {
                resolve(fakeResult);
            });
            const testPromise = resultHandler.handleErrors(mockQuery)
            .then((result) => {
                expect(result).toEqual(fakeResult);
            });
            testPromiseResolution(testPromise, done);
        });

        it("should catch, modify, and throw any errors that occur",
                function(done) {
            const expectedPrefix = "DB result error: ";
            const testError = "test error message";
            const mockQuery = new Promise((resolve, reject) => {
                reject(new Error(testError));
            });
            testPromiseRejection(resultHandler.handleErrors(mockQuery),
                    "testError should have been modified and thrown.",
                    ErrorEnum.message(ErrorEnum.UNKNOWN_ERROR), done);
        });

        it("should reject any invalid query parameter", function() {
            pending("Test not implemented.");
        });
    });

    describe("returnedData", function() {
        it("should return true if a result returned rows.", function(done) {
            const testPromise = insertTestRegion().then(() => {
                return selectPromise();
            })
            .then((result) => {
                expect(resultHandler.returnedData(result)).toBeTrue();
            });
            testPromiseResolution(testPromise, done);
        });

        it("Should return false if a result returned no rows.",
                function(done) {
            const testPromise = selectPromise().then((result) => {
                expect(resultHandler.returnedData(result))
                .withContext(result).toBeFalse();

                done();
            });
            testPromiseResolution(testPromise, done);
        });

        it("Should throw an INVALID_RESULTS DBError if given an invalid "
                + "result object.", function() {
            for (let result of invalidResults) {
                expect(() => { resultHandler.returnedData(result); })
                .toThrowMatching((err) => {
                    return isDBError(err, ErrorEnum.INVALID_RESULTS);
                });
            }
        });
    });

    describe("getResultRows", function() {
        it("should return a set of row values if possible.", function(done) {
            const testPromise = insertTestRegion().then(() => {
                return selectPromise();
            })
            .then((result) => {
                const rows = resultHandler.getResultRows(result);
                expect(rows).toBeInstanceOf(Array);
                expect(rows.length).toEqual(1);
            });
            testPromiseResolution(testPromise, done);
        });

        it("should reject with a NO_RESULTS DBError if no rows were found.",
                function(done) {
            selectPromise().then((result) => {
                resultHandler.getResultRows(result);
                done.fail("An error should have been thrown after "
                        + "getResultRows found nothing.");
            })
            .catch((err) => {
                expect(isDBError(err, ErrorEnum.NO_RESULTS)).toBeTrue();
                done();
            });
        });

        it("should reject with an INVALID_RESULTS DBError the result "
                + "parameter was invalid.", function() {
            for (let result of invalidResults) {
                expect(() => { resultHandler.getResultRows(result); })
                .toThrowMatching((err) => {
                    return isDBError(err, ErrorEnum.INVALID_RESULTS);
                });
            }
        });
    });

    describe("getColumnValues", function() {
        it("should resolve with appropriate table column values.",
                function(done) {
            const testIDs = ["one", "two", "three"];
            const testNames = testIDs.map((id) => "Region "
                    + id.toUpperCase());
            let testPromise = new Promise((res) => res());
            for (let i = 0; i < testIDs.length; i++) {
                testPromise = testPromise.then(() => insertTestRegion(
                            testIDs[i], testNames[i]));
            }
            testPromise = testPromise.then(() => {
                return selectPromise();
            })
            .then((result) => {
                const ids = resultHandler.getColumnValues(result,
                        regions.column(regions.REGION_ID));
                const names = resultHandler.getColumnValues(result,
                        regions.column(regions.DISPLAY_NAME));
                expect(ids.length).toEqual(testIDs.length);
                expect(names.length).toEqual(testNames.length);
                for (let i = 0; i < ids.length; i++) {
                    expect(ids[i]).toEqual(testIDs[i]);
                    expect(names[i]).toEqual(testNames[i]);
                }
                done();
            });
            testPromiseResolution(testPromise, done);

        });

        it("should resolve with an empty array if no values were found.",
                function(done) {
            const testPromise = selectPromise().then((result) => {
                const ids = resultHandler.getColumnValues(result,
                        regions.column(regions.REGION_ID));
                const names = resultHandler.getColumnValues(result,
                        regions.column(regions.DISPLAY_NAME));
                expect(ids.length).toEqual(0);
                expect(names.length).toEqual(0);
                done();
            });
            testPromiseResolution(testPromise, done);
        });

        it("should reject with an INVALID_RESULTS DBError the result "
                + "parameter was invalid.", function() {
            for (let result of invalidResults) {
                expect(() => {
                    resultHandler.getColumnValues(result, 1);
                }).toThrowMatching((err) => {
                    return isDBError(err, ErrorEnum.INVALID_RESULTS);
                });
            }
        });
    });

    describe("getCell", function() {
        const namePrefix = "Test ";
        const idPrefix = "test_";

        // Insert multiple test rows to test single cell selection
        function insertTestRows() {
            return insertTestRegion(idPrefix + "one", namePrefix + "One")
            .then(() => insertTestRegion(idPrefix + "two", namePrefix
                    + "Two"));
        }
        
        // Attempt a database SELECT query with additional conditions
        function cellSelectPromise(conditions, params) {
            const builder = new QueryBuilder(regions);
            builder.setConditions(conditions, params);
            return resultHandler.handleErrors(builder.select(pool));
        }

        it("should return the requested cell if it was found.",
                function(done) {
            const cellID = "test_one";
            const testPromise = insertTestRegion(cellID)
            .then(() => cellSelectPromise(
                    regions.column(regions.REGION_ID) + " = $1",
                    [ cellID ]))
            .then((result) => {
                const cell = resultHandler.getCell(result,
                        regions.column(regions.REGION_ID));
                expect(cell).toEqual(cellID);
            });
            testPromiseResolution(testPromise, done);
        });

        it("should reject with a EXTRA_RESULTS DBError if multiple cells were"
                + " found.", function(done) {
            insertTestRows().then(() => cellSelectPromise())
            .then((result) => {
                resultHandler.getCell(result,
                        regions.column(regions.REGION_ID));
                done.fail("An error should have been thrown after "
                        + "getCell found multiple cells.");
            })
            .catch((err) => {
                expect(isDBError(err, ErrorEnum.EXTRA_RESULTS)).toBeTrue();
                done();
            });
        });

        it("should reject with a NO_RESULTS DBError if no cells were found.",
                function(done) {
            cellSelectPromise()
            .then((result) => {
                resultHandler.getCell(result,
                        regions.column(regions.REGION_ID));
                done.fail("An error should have been thrown after "
                        + "getCell found no cells.");
            })
            .catch((err) => {
                expect(isDBError(err, ErrorEnum.NO_RESULTS)).toBeTrue();
                done();
            });
        });

        it("should reject with an INVALID_RESULTS DBError if the result"
                + " parameter was invalid.", function() {
            for (let result of invalidResults) {
                expect(() => {
                    resultHandler.getColumnValues(result, 1);
                }).toThrowMatching((err) => {
                    return isDBError(err, ErrorEnum.INVALID_RESULTS);
                });
            }
        });
    });

});
