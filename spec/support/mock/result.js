/**
 * @file result.js
 *
 * Creates mock node-postgresql database Result objects to use for testing.
 *
 *  Result objects are selected by initial table state, query type, table,
 * selected column set, and query condition type. All Result data is
 * pre-generated from actual database replies using
 * ../builders/db-result-gen.js.
 */

const TableStateEnum = require("../table-state-enum.js");
const QueryEnum = require("../query-enum.js");
const Tables = require("../../../src/dbNew/structure/tables.js");
const ColumnSetEnum = require("../column-set-enum.js");
const ConditionEnum = require("../condition-enum.js");

const { assert, isDefined } = require("../../../src/validate.js");
const { setConstProperty } = require("../../../src/const-util.js");

// pre-generated result data:
const resultData = require("../data/db-results.js");

class Result
{
    /**
     * Initializes a Result with appropriate data for a simulated database
     * query.
     *
     * @param state          The initial database state before the simulated
     *                       query, as a TableStateEnum value.
     *
     * @param queryType      The simulated SQL query type, as a QueryEnum
     *                       value.
     *
     * @param table          The database table accessed by the simulated
     *                       query, as a TableEnum value.
     *
     * @param columnSetType  The columns selected in the simulated query, as a
     *                       ColumnSetEnum value.
     *
     * @param conditionType  The type of conditions applied to the simulated
     *                       query, as a ConditionEnum value.
     */
    constructor(state, queryType, table, columnSetType, conditionType) {
        assert(TableStateEnum.isValid(state), "Invalid table state '"
                + state + "'");
        // organize parameter data:
        const params = [state, queryType, table, columnSetType, conditionType];
        const paramTypes = [TableStateEnum, QueryEnum, Tables, ColumnSetEnum,
                ConditionEnum];
        for (let i = 0; i < params.length; i++) {
            assert(paramTypes[i].isValid(params[i]), "Invalid "
                    + paramTypes[i].name + " value '" + params[i] + "'");
        }
        let resultDataObject = resultData;
        for (let param of params) {
            resultDataObject = resultDataObject[param.name];
            assert(isDefined(resultDataObject), "Missing '"
                    + param.enumClass.name + "' value, params = "
                    + params.map((p) => "[" + p.enumClass.name + "="
                    + p.name + "]").join(", "));
        }
        const resultKeys = Object.keys(resultDataObject);
        for (let key of resultKeys) {
            setConstProperty(this, key, resultDataObject[key]);
        }
    }
}

module.exports = Result;
