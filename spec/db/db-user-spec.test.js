/**
 * @file db-user-spec.js
 *
 * Tests that the db-user module defined in src/db/db-user.js handles database
 * read queries correctly.
 */

xdescribe("DBUser", function() {
    const DBUser = require("../../src/dbNew/db-user.js");
    const { assert, assertCorrectType, isString, isDefined }
            = require("../../src/validate.js");
    const { testPromiseResolution, testPromiseRejection }
            = require("../support/promise-testing.js");
    const ResultHandler = require("../../src/dbNew/result-handler.js");

    // Import tools for building mock Result and error objects:
    const TableStateEnum = require("../support/table-state-enum.js");
    const QueryEnum = require("../support/query-enum.js");
    const Tables = require("../../src/dbNew/structure/tables.js");
    const ColumnSetEnum = require("../support/column-set-enum.js");
    const ConditionEnum = require("../support/condition-enum.js");
    const MockResult = require("../support/mock/result.js");
    const MockErrors = require("../support/data/db-errors.js");
    const DBRows = require("../support/data/db-rows.js");

    // MockDBUser overrides the internal _select method of the DBUser class,
    // returning a promise that resolves with a saved MockResult object instead
    // of actually connecting to the database.
    let nextResult;
    class MockDBUser extends DBUser {
        _select(tableEnum, resultColumns, conditions, params, getDistinct) {
            assert(isDefined(Tables.withProperty("tableEnum", tableEnum)),
                    "Invalid TableEnum '" + tableEnum + "'");
            if (isDefined(resultColumns)) {
                assert(Array.isArray(resultColumns),
                        "resultColumns was not an array.");
                for (let column of resultColumns) {
                    assert(tableEnum.isValid(column), "Invalid column value '"
                            + column + "'");
                }
            }
            if (typeof conditions === "object") {
                console.dir(conditions);
            }
            assert(isString(conditions) || (! isDefined(conditions)),
                    "Conditions must be a string or undefined, found '"
                    + conditions + "'(" + (typeof conditions) + ")");
            if (isDefined(params)) {
                assert(isDefined(conditions), "Params cannot be defined if "
                        + "conditions are undefined.");
                assert(Array.isArray(params), "Params must be an array.");
            }
            if (isDefined(getDistinct)) {
                assertCorrectType(getDistinct, "boolean",
                        "Invalid 'getDistinct parameter");
            }
            assert(isDefined(nextResult),
                    "next result must be set before DBUser calls");
            const mockResult = nextResult;
            nextResult = undefined;
            return new Promise((res) => res(mockResult));
        }
    }
    const dbUser = new MockDBUser();

    // Performs an action on the results of every test SELECT query.
    function foreachResult(resultAction) {
        for (let table of Tables) {
            for (let state of TableStateEnum) {
                for (let columnSet of ColumnSetEnum) {
                    for (let condition of ConditionEnum) {
                        const tableEnum = table.tableEnum
                        const columnNames = columnSet.buildColumnNameList(
                                tableEnum);
                        const columnValues = columnNames.map((columnName) =>
                                tableEnum.withProperty("columnName",
                                columnName));
                        const result = new MockResult(state, QueryEnum.SELECT,
                                table, columnSet, condition);
                        resultAction(tableEnum, columnValues, result);
                    }
                }
            }
        }
    }

    describe("selectRows", function() {
        it("should return a promise that resolves with ResultHandler."
                + "getResultRows(result)", function(done) {
            let nextPromise = new Promise((res) => res());
            foreachResult((tableEnum, columnValues, result) => {
                nextPromise = nextPromise.then(() => {
                    nextResult = result;
                    const expectedRows = ResultHandler.getResultRows(result);
                    dbUser.selectRows(tableEnum, columnValues)
                    .then((rows) => {
                        expect(rows).toEqual(expectedRows);
                    })
                    .catch((err) => done.fail("Unexpected error: " + err));
                });
            });
            nextPromise = nextPromise.then(() => done());
        });
    });

    describe("selectRow", function() {
        it("should resolve if a single row is found, or reject appropriately"
                + " if zero or multiple rows are found", function(done) {
            let nextPromise = new Promise((res) => res());
            foreachResult((tableEnum, columnValues, result) => {
                nextPromise = nextPromise.then(() => {
                    nextResult = result;
                    const expectedRows = ResultHandler.getResultRows(result);
                    dbUser.selectRow(tableEnum, columnValues)
                    .then((rows) => {
                        expect(rows).toEqual(expectedRows);
                        expect(rows.length).toEqual(1);
                    })
                    .catch((err) => {
                        expect(expectedRows.length).not.toEqual(1);
                        expect(err).toBeInstanceOf(ResultError);
                        if (expectedRows.length === 0) {
                            expect(err.errorType).toEqual(
                                    ResultErrorEnum.NO_RESULTS);
                        }
                        else {
                            expect(err.errorType).toEqual(
                                    ResultErrorEnum.EXTRA_RESULTS);
                        }
                    });
                });
            });
            nextPromise = nextPromise.then(() => done());
            
        });

        xit("should reject with a NO_RESULTS DBError if no row matches "
                + "the provided condition.", function(done) {
        });

        xit("should reject with an EXTRA_RESULTS DBError if multiple rows"
                + " match the provided condition.", function(done) {
        });
    });

    describe("selectColumnValues", function() {
    });

    describe("selectCell", function() {
    });
});
