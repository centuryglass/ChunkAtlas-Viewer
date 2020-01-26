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
    const testEnv = require("../support/test-env.js");
    testEnv.init();

    // Import ResultHandler and associated Error classes and values:
    const ResultHandler = require("../../src/dbNew/result-handler.js");
    const QueryError = require("../../src/dbNew/error/query-error.js");
    const QueryErrorEnum
            = require("../../src/dbNew/error/query-error-enum.js");
    const ResultError = require("../../src/dbNew/error/result-error.js");
    const ResultErrorEnum
            = require("../../src/dbNew/error/result-error-enum.js");

    // Import tools for building mock Result and error objects:
    const TableStateEnum = require("../support/table-state-enum.js");
    const QueryEnum = require("../support/query-enum.js");
    const Tables = require("../../src/dbNew/structure/tables.js");
    const ColumnSetEnum = require("../support/column-set-enum.js");
    const ConditionEnum = require("../support/condition-enum.js");
    const MockResult = require("../support/mock/result.js");
    const MockErrors = require("../support/data/db-errors.js");


    // Checks that an error has an appropriate error class and error type.
    function checkError(error, errorClass, errorType) {
        return (error instanceof errorClass)
                && (error.errorType === errorType);
    }

    // Invalid result objects to use for tests:
    const invalidResults = [ undefined, null, 0, 1, {}, { rows: [] } ];

    describe("handleErrors", function() {
        const fakeResult = new MockResult(TableStateEnum.MULTI_ROW, 
                QueryEnum.SELECT, Tables.REGIONS, ColumnSetEnum.DEFAULT,
                ConditionEnum.EXCLUDE_NONE);

        it("should resolve with a result if no error occurs", function(done) {
            const mockQuery = new Promise((resolve) => {
                resolve(fakeResult);
            });
            const testPromise = ResultHandler.handleErrors(mockQuery)
            .then((result) => {
                expect(result).toEqual(fakeResult);
            });
            testPromiseResolution(testPromise, done);
        });

        it("should catch any error and throw an appropriate QueryError.",
                function(done) {
            let nextPromise;
            for (let errorType of QueryErrorEnum) {
                for (let error of MockErrors[errorType.name]) {
                    const mockQuery = new Promise((resolve, reject) => {
                        reject(error);
                    });
                    if (! isDefined(nextPromise)) {
                        nextPromise = ResultHandler.handlerErrors(mockQuery);
                    }
                }
            }
            
            const expectedPrefix = "DB result error: ";
            const testError = "test error message";
            const mockQuery = new Promise((resolve, reject) => {
                reject(new Error(testError));
            });
            testPromiseRejection(ResultHandler.handleErrors(mockQuery),
                    "testError should have been modified and thrown.",
                    QueryErrorEnum.UNKNOWN_ERROR.message, done);
        });

        it("should reject any invalid query parameter", function() {
            pending("Test not implemented.");
        });
    });

    describe("returnedData", function() {
        it("should return true if a result returned rows.", function() {
            for (let table of Tables) {
                const dbState       = TableStateEnum.MULTI_ROW;
                const query         = QueryEnum.SELECT;
                const columnSetType = ColumnSetEnum.DEFAULT;
                const conditionType = ConditionEnum.EXCLUDE_NONE;
                const result = new MockResult(dbState, query, table,
                        columnSetType, conditionType);
                expect(ResultHandler.returnedData(result))
                        .withContext().toBeTrue();
            }
        });

        it("Should return false if a result returned no rows.", function() {
            for (let table of Tables) {
                const dbState       = TableStateEnum.MULTI_ROW;
                const query         = QueryEnum.SELECT;
                const columnSetType = ColumnSetEnum.DEFAULT;
                const conditionType = ConditionEnum.EXCLUDE_ALL;
                const result = new MockResult(dbState, query, table,
                        columnSetType, conditionType);
                expect(ResultHandler.returnedData(result)).withContext(result)
                        .toBeFalse();
            }

        it("Should throw an INVALID_RESULT ResultError if given an invalid "
                + "result object.", function() {
            for (let result of invalidResults) {
                expect(() => { ResultHandler.returnedData(result); })
                .toThrowMatching((err) => {
                    return checkError(err, QueryError,
                            QueryErrorEnum.INVALID_RESULTS);
                });
            }
        });
    });

    describe("getResultRows", function() {
        it("should return a set of row values if possible.", function(done) {
            for (let table of Tables) {
                const dbState       = TableStateEnum.MULTI_ROW;
                const query         = QueryEnum.SELECT;
                const columnSetType = ColumnSetEnum.DEFAULT;
                const conditionType = ConditionEnum.SELECT_ONE;
                const result = new MockResult(dbState, query, table,
                        columnSetType, conditionType);
                const rows = ResultHandler.getResultRows(result);
                expect(rows).toBeInstanceOf(Array);
                expect(rows.length).toEqual(1);
            }
        });

        it("should throw a NO_RESULTS ResultError if no rows were found.",
                function() {
            for (let table of Tables) {
                const dbState       = TableStateEnum.MULTI_ROW;
                const query         = QueryEnum.SELECT;
                const columnSetType = ColumnSetEnum.DEFAULT;
                const conditionType = ConditionEnum.EXCLUDE_ALL;
                const result = new MockResult(dbState, query, table,
                        columnSetType, conditionType);
                expect(ResultHandler.getResultRows(result)).toThrowMatching(
                        (err) => err instanceof ResultError
                        && err.errorType === ResultErrorEnum.NO_RESULTS);
            }
        });

        it("should reject with an INVALID_RESULT ResultError if the result "
                + "parameter was invalid.", function() {
            for (let result of invalidResults) {
                expect(() => { ResultHandler.getResultRows(result); })
                .toThrowMatching((err) => {
                    return checkError(err, ResultError,
                            ResultErrorEnum.INVALID_RESULTS);
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
                const ids = ResultHandler.getColumnValues(result, Regions,
                        Regions.REGION_ID);
                const names = ResultHandler.getColumnValues(result, Regions,
                        Regions.DISPLAY_NAME);
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
                const ids = ResultHandler.getColumnValues(result, Regions,
                        Regions.REGION_ID);
                const names = ResultHandler.getColumnValues(result, Regions,
                        Regions.DISPLAY_NAME);
                expect(ids.length).toEqual(0);
                expect(names.length).toEqual(0);
                done();
            });
            testPromiseResolution(testPromise, done);
        });

        it("should reject with an INVALID_RESULT ResultError if the result "
                + "parameter was invalid.", function() {
            for (let result of invalidResults) {
                expect(() => {
                    ResultHandler.getColumnValues(result, 1);
                }).toThrowMatching((err) => {
                    return checkError(err, ResultError,
                            ResultErrorEnum.INVALID_RESULT);
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
            const builder = new QueryBuilder(Regions);
            builder.setConditions(conditions, params);
            return ResultHandler.handleErrors(builder.select(pool));
        }

        it("should return the requested cell if it was found.",
                function(done) {
            const cellID = "test_one";
            const testPromise = insertTestRegion(cellID)
            .then(() => cellSelectPromise(
                    Regions.column(Regions.REGION_ID) + " = $1",
                    [ cellID ]))
            .then((result) => {
                const cell = ResultHandler.getCell(result, Regions,
                        Regions.REGION_ID);
                expect(cell).toEqual(cellID);
            });
            testPromiseResolution(testPromise, done);
        });

        it("should reject with a EXTRA_RESULTS ResultError if multiple cells"
                + " were found.", function(done) {
            insertTestRows().then(() => cellSelectPromise())
            .then((result) => {
                ResultHandler.getCell(result, Regions, Regions.REGION_ID);
                done.fail("An error should have been thrown after "
                        + "getCell found multiple cells.");
            })
            .catch((err) => {
                expect(checkError(err, ResultError,
                        ResultErrorEnum.EXTRA_RESULTS)).toBeTrue();
                done();
            });
        });

        it("should reject with a NO_RESULTS ResultError if no cells were "
                + "found.", function(done) {
            cellSelectPromise()
            .then((result) => {
                ResultHandler.getCell(result, Regions, Regions.REGION_ID);
                done.fail("An error should have been thrown after "
                        + "getCell found no cells.");
            })
            .catch((err) => {
                expect(checkError(err, ResultError,
                            ResultErrorEnum.NO_RESULTS)).toBeTrue();
                done();
            });
        });

        it("should reject with an INVALID_RESULT ResultError if the result"
                + " parameter was invalid.", function() {
            for (let result of invalidResults) {
                expect(() => {
                    ResultHandler.getColumnValues(result, 1);
                }).toThrowMatching((err) => {
                    return checkError(err, ResultError,
                            ResultErrorEnum.INVALID_RESULT);
                });
            }
        });
    });
});
