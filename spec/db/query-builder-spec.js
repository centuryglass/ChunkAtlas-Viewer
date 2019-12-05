/**
 * @file query-builder-spec.js
 *
 * Tests that the QueryBuilder class defined in src/db/query-builder.js can
 * correctly generate SQL database queries.
 */

describe("QueryBuilder", function() {
    const testEnv = require("../support/test-env.js");
    testEnv.init();

    const logger = require("../../src/logger.js");
    const { isDefined, isString } = require("../../src/validate.js");
    const QueryBuilder = require("../../src/db/query-builder.js");
    const Tables = require("../../src/db/structure/tables.js");

    // Hold the last query built by any QueryBuilder:
    let lastQuery = "";
    // Hold the last query parameters used by any QueryBuilder:
    let lastParams;

    // Return true if and only if expected parameter array expectedParams
    // matches the last constructed parameters.
    const paramsMatch = (expectedParams) => {
        return expectedParams === lastParams || (Array.isArray(lastParams)
                && Array.isArray(expectedParams)
                && lastParams.length === expectedParams.length
                && lastParams.every((elem, idx) =>
                        (elem === expectedParams[idx])));
    };

    // mock database Pool class, used to save query text and parameters to
    // lastQuery and lastParams:
    class Pool {
        query(text, params) {
            lastQuery = text;
            lastParams = params || [];
        }
    }
    const mockPool = new Pool();
    const testQueries = require("../support/test-queries.js");

    /**
     * Create a new builder, use it to construct a query, and test that the
     * query string and parameters match expected values.
     *
     * @param testQuery    An object defining builder parameters and their
     *                     expected results.
     *
     * @param buildAction  A function that calls the tested builder method,
     *                     taking the QueryBuilder as its sole parameter.
     */
    function runTest(testQuery, buildAction) {
        let table;
        try {
            table = Tables.withProperty("table", testQuery.tableEnum);
            const tableEnum = Tables.tableEnum(table);
            const builder = new QueryBuilder(tableEnum);
            if (testQuery.condition !== null) {
                builder.setConditions(testQuery.condition,
                        testQuery.conditionParams);
            }
            buildAction(builder);
        }
        catch(err) {
            console.log("Failed test query on table " + table);
            console.dir(testQuery);
            console.log(err.message);
            throw err;
        }
        paramStr = (params) => isDefined(params)
                && ("[" + params.join(",") + "]") || params;
        getContextStr = () => JSON.stringify(testQuery, null, 1)
            + "\nLast Query: " + lastQuery
            + "\nLast Params: " + paramStr(lastParams);
        expect(lastQuery).withContext(getContextStr())
                .toEqual(testQuery.query);
        expect(paramsMatch(testQuery.queryParams)).withContext(
                getContextStr()).toBeTrue();
    }

    describe("selectQuery", () => {
        it("should assemble basic SELECT queries without errors.", function() {
            testQueries.selectQuery.forEach((testQuery) => {
                runTest(testQuery, (builder) => {
                    builder.select(mockPool, testQuery.columns);
                });
            });
        });
    });

    describe("updateQuery", () => {
        it("should assemble basic UPDATE queries without errors.", function() {
            testQueries.updateQuery.forEach((testQuery) => {
                runTest(testQuery, (builder) => {
                    builder.update(mockPool, testQuery.columnValues);
                });
            });
        });
    });

    describe("insertQuery", () => {
        it("should assemble basic INSERT queries without errors.", function() {
            testQueries.insertQuery.forEach((testQuery) => {
                runTest(testQuery, (builder) => {
                    builder.insert(mockPool, testQuery.columns,
                            testQuery.values);
                });
            });
        });
    });

    describe("deleteQuery", () => {
        it("should assemble basic DELETE queries without errors.", function() {
            testQueries.deleteQuery.forEach((testQuery) => {
                runTest(testQuery, (builder) => {
                    builder.deleteQuery(mockPool);
                });
            });
        });
    });

});
