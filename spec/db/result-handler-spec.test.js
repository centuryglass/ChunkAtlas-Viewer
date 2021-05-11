/**
 * @file result-handler-spec.js
 *
 * Tests that the result-handler module defined in src/db/result-handler.js
 * processes database results correctly.
 */

describe("ResultHandler", function() {
    const logger = require("../../src/logger.js");
    const { isDefined, isString, assertIsEnumValue, assertCorrectType }
            = require("../../src/validate.js");
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
    const DBRows = require("../support/data/db-rows.js");


    // Checks that an action throws with an appropriate error class and error
    // type.
    function checkError(action, errorClass, errorType) {
        let thrown = false;
        try {
            action();
        }
        catch(err) {
            expect(err).toBeInstanceOf(errorClass);
            expect(err.errorType).toEqual(errorType);
            thrown = true;
        }
        expect(thrown).toBe(true);
    }

    // Performs an action on the results of SELECT queries for each table.
    function foreachResult(conditionType, resultAction) {
        assertIsEnumValue(conditionType, ConditionEnum);
        assertCorrectType(resultAction, "function", "Invalid resultAction");
        for (let table of Tables) {
            const dbState       = TableStateEnum.MULTI_ROW;
            const query         = QueryEnum.SELECT;
            const columnSetType = ColumnSetEnum.DEFAULT;
            const result = new MockResult(dbState, query, table,
                    columnSetType, conditionType);
            resultAction(result, table);
        }
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
            let nextPromise = new Promise((res) => res());
            for (let errorType of QueryErrorEnum) {
                for (let error of MockErrors[errorType.name]) {
                    const mockQuery = new Promise((resolve, reject) => {
                        reject(error);
                    });
                    nextPromise = nextPromise.then(() => {
                        return ResultHandler.handleErrors(mockQuery);
                    })
                    .then(() => {
                        done.fail("Promise should not have resolved.");
                    })
                    .catch((err) => {
                        expect(err.errorType.name).toEqual(errorType.name);
                    });
                }
            }

            nextPromise.then(() => done());
        });

        it("should reject any invalid query parameter", function() {
            const notQueries = [ "Query", [], 1, null ];
            for (let notQuery of notQueries) {
                expect(() => ResultHandler.handleErrors(notQuery)).toThrow();
            }
        });
    });

    describe("returnedData", function() {
        it("should return true if a result returned rows.", function() {
            foreachResult(ConditionEnum.EXCLUDE_NONE, (result) => {
                expect(ResultHandler.returnedData(result)).toBe(true);
            });
        });

        it("Should return false if a result returned no rows.", function() {
            foreachResult(ConditionEnum.EXCLUDE_ALL, (result) => {
                expect(ResultHandler.returnedData(result)).toBe(false);
            });
        });

        it("Should throw an INVALID_RESULT ResultError if given an invalid "
                + "result object.", function() {
            for (let result of invalidResults) {
                checkError(() => ResultHandler.returnedData(result),
                        ResultError, ResultErrorEnum.INVALID_RESULT);
            }
        });
    });

    describe("getResultRows", function() {
        it("should return a set of row values if possible.", function() {
            foreachResult(ConditionEnum.SELECT_ONE, (result) => {
                const rows = ResultHandler.getResultRows(result);
                expect(rows).toBeInstanceOf(Array);
                expect(rows.length).toEqual(1);
            });
        });

        it("should return an empty array if no rows were found.",
                function() {
            foreachResult(ConditionEnum.EXCLUDE_ALL, (result) => {
                const rows = ResultHandler.getResultRows(result);
                expect(rows).toBeInstanceOf(Array);
                expect(rows.length).toEqual(0);
            });
        });

        it("should reject with an INVALID_RESULT ResultError if the result "
                + "parameter was invalid.", function() {
            for (let result of invalidResults) {
                checkError(() => ResultHandler.getResultRows(result),
                        ResultError, ResultErrorEnum.INVALID_RESULT);
            }
        });
    });

    describe("getColumnValues", function() {
        it("should resolve with appropriate table column values.",
                function() {
            foreachResult(ConditionEnum.EXCLUDE_NONE, (result, table) => {
                const tableRows = result.rows;
                for (let column of table.tableEnum) {
                    const colValueMap = {};
                    for (let row of tableRows) {
                        colValueMap[row[column.columnName]] = false;
                    }
                    let columnValues;
                    expect(() => columnValues = ResultHandler.getColumnValues(
                            result, column)).
                    not.toThrow();
                    expect(columnValues.length).toEqual(tableRows.length);
                    for (let columnValue of columnValues) {
                        expect(colValueMap[columnValue]).not.toBeUndefined();
                        colValueMap[columnValue] = true;
                    }
                    for (let key of Object.keys(colValueMap)) {
                        expect(colValueMap[key]).toBe(true);
                    }
                }
            });
        });

        it("should resolve with an empty array if no values were found.",
                function() {
            foreachResult(ConditionEnum.EXCLUDE_ALL, (result, table) => {
                for (let column of table.tableEnum) {
                    let columns;
                    expect(() => columns = ResultHandler.getColumnValues(
                            result, table.tableEnum, column))
                    .not.toThrow();
                    expect(Array.isArray(columns)).toBe(true);
                    expect(columns.length).toBe(0);
                }
            });
        });

        it("should reject with an INVALID_RESULT ResultError if the result "
                + "parameter was invalid.", function() {
            for (let result of invalidResults) {
                checkError(() => ResultHandler.getColumnValues(result, 1),
                        ResultError, ResultErrorEnum.INVALID_RESULT);
            }
        });
    });

    describe("getCell", function() {
        it("should return the requested cell if it was found.", function() {
            foreachResult(ConditionEnum.SELECT_ONE, (result, table) => {
                for (let column of table.tableEnum) {
                    let cell;
                    expect(() => cell = ResultHandler.getCell(result, column))
                    .not.toThrow();

                    expect(cell).toEqual(result.rows[0][column.columnName]);
                }
            });
        });

        it("should reject with a EXTRA_RESULTS ResultError if multiple cells"
                + " were found.", function() {
            foreachResult(ConditionEnum.EXCLUDE_NONE, (result, table) => {
                for (let column of table.tableEnum) {
                    checkError(() => ResultHandler.getCell(result, column),
                            ResultError, ResultErrorEnum.EXTRA_RESULTS);
                }
            });
        });

        it("should reject with a NO_RESULTS ResultError if no cells were "
                + "found.", function() {
            foreachResult(ConditionEnum.EXCLUDE_ALL, (result, table) => {
                for (let column of table.tableEnum) {
                    checkError(() => ResultHandler.getCell(result, column),
                            ResultError, ResultErrorEnum.NO_RESULTS);
                }
            });
        });

        it("should reject with an INVALID_RESULT ResultError if the result"
                + " parameter was invalid.", function() {
            for (let result of invalidResults) {
                checkError(() => ResultHandler.getColumnValues(result, 1),
                        ResultError, ResultErrorEnum.INVALID_RESULT);
            }
        });
    });
});
