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
    const { assert, isDefined, isString } = require("../../src/validate.js");
    const QueryBuilder = require("../../src/dbNew/query-builder.js");
    const Tables = require("../../src/dbNew/structure/tables.js");

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
    const testQueries = require("../support/data/test-queries.js");

    /**
     * Gets the TableEnum class for a particular query's table.
     *
     * @param testQuery  An object defining QueryBuilder parameters and their
     *                   expected result.
     *
     * @return           The TableEnum class defining the columns of the 
     *                   queried database table.
     */
    function getQueryTableEnum(testQuery) {
        const tableValue = Tables.withProperty("tableName", testQuery.table);
        assert(isDefined(tableValue), "Invalid table name '" + testQuery.table
                + "'");
        return tableValue.tableEnum;
    }

    /**
     * Converts all columns specified in a test query to corresponding table
     * column enum values.
     *
     * @param testQuery  An object defining QueryBuilder parameters and their
     *                   expected result.
     *
     * @return           The test query's column array, with each item mapped
     *                   from the column name to the corresponding column enum
     *                   value.
     */
    function getColumnEnumValues(testQuery) {
        const tableEnum = getQueryTableEnum(testQuery);
        if (! isDefined(testQuery.columns)) {
            return [];
        }
        return testQuery.columns.map((columnName) => tableEnum.withProperty(
                "columnName", columnName));
    }

    /**
     * Create a new QueryBuilder, use it to construct a query, and test that
     * the query string and parameters match expected values.
     *
     * @param testQuery    An object defining QueryBuilder parameters and their
     *                     expected result.
     *
     * @param buildAction  A function that calls the tested builder method,
     *                     taking the QueryBuilder as its sole parameter.
     */
    function runTest(testQuery, buildAction) {
        let table;
        try {
            const tableEnum = getQueryTableEnum(testQuery);
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
        expect(lastQuery).toEqual(testQuery.query);
        expect(paramsMatch(testQuery.queryParams)).toBe(true);
    }

    describe("selectQuery", () => {
        it("should assemble basic SELECT queries without errors.", function() {
            testQueries.SELECT.forEach((testQuery) => {
                runTest(testQuery, (builder) => {
                    builder.select(mockPool, getColumnEnumValues(testQuery));
                });
            });
        });
    });

    describe("updateQuery", () => {
        it("should assemble basic UPDATE queries without errors.", function() {
            testQueries.UPDATE.forEach((testQuery) => {
                runTest(testQuery, (builder) => {
                    builder.update(mockPool, testQuery.columnValues);
                });
            });
        });
    });

    describe("insertQuery", () => {
        it("should assemble basic INSERT queries without errors.", function() {
            testQueries.INSERT.forEach((testQuery) => {
                runTest(testQuery, (builder) => {
                    builder.insert(mockPool, getColumnEnumValues(testQuery),
                            testQuery.values);
                });
            });
        });
    });

    describe("deleteQuery", () => {
        it("should assemble basic DELETE queries without errors.", function() {
            testQueries.DELETE.forEach((testQuery) => {
                runTest(testQuery, (builder) => {
                    builder.deleteQuery(mockPool);
                });
            });
        });
    });
});
