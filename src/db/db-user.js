/**
 * @file db-user.js
 *
 * Provides convenience functions to simplify database access.
 */

const logger = require('../logger.js');

const ErrorEnum = require("./error-enum.js");
<<<<<<< HEAD
const DBError = require("./db-error.js");
const QueryBuilder = require("./query-builder.js");
const resultHandler = require("./result-handler.js");
=======
const QueryBuilder = require("./query-builder.js");
const responseHandler = require("./response-handler.js");
>>>>>>> ccc61c4d9f556ffa9a4fcb8f6d7b1cd52c161236
const { isDefined, assert } = require("../validate.js");

class DBUser {
    constructor(pool) {
        this._pool = pool;
    }


    /**
     * Selects a set of values from a database table, optionally rearranging
     * or filtering columns, or applying one or more conditions that returned
     * rows should meet.
     *
     * @param tableEnum        An Enum type representing a database table.
     *
<<<<<<< HEAD
     * @param resultColumns  A tableEnum column value, or array of tableEnum
=======
     * @param responseColumns  A tableEnum column value, or array of tableEnum
>>>>>>> ccc61c4d9f556ffa9a4fcb8f6d7b1cd52c161236
     *                         column values, specifying the names and order
     *                         of columns to be returned by the database. If
     *                         undefined, returned rows will include all table
     *                         columns.
     *
     * @param conditions       An SQL condition statement that should be true
     *                         for all returned rows. Statements may include
     *                         parameterized data using the same notation as
     *                         typical node-postgres queries. If no conditions
     *                         are defined, all table rows will be returned.
     *
     * @param params           A set of parameters to be used to construct the
     *                         database query. This may be undefined if the
     *                         query does not require any parameters.
<<<<<<< HEAD
     *
     * @param getDistinct      Optionally specify whether the query should
     *                         specifically select distinct values.
     *
     * @return                 A promise that will resolve with the returned 
     *                         database result object.
     */
    _select(tableEnum, resultColumns, conditions, params, getDistinct) {
        const builder = new QueryBuilder(tableEnum);
        builder.setConditions(conditions, params);
        builder.setDistinct(getDistinct);
        return resultHandler.handleErrors(builder.select(this._pool,
                    this.resultColumns));
    }

    /**
     * Selects a set of rows from a database table.
     *
     * @param tableEnum        An Enum type representing a database table.
     *
     * @param resultColumns    An optional list of table columns to include
     *                         in the result's returned rows.
=======
     *
     * @param getDistinct      Optionally specify whether the query should
     *                         specifically select distinct values.
     *
     * @return                 A promise that will resolve with the returned 
     *                         database response object.
     */
    _select(tableEnum, responseColumns, conditions, params, getDistinct) {
        const builder = new QueryBuilder(tableEnum);
        builder.setConditions(conditions, params);
        builder.setDistinct(getDistinct);
        return responseHandler.handleErrors(builder.select(this._pool,
                    this.responseColumns));
    }

    /**
     * Selects a set of rows from a database table.
     *
     * @param tableEnum        An Enum type representing a database table.
     *
     * @param responseColumns  An optional list of table columns to include
     *                         in the response's returned rows.
>>>>>>> ccc61c4d9f556ffa9a4fcb8f6d7b1cd52c161236
     *
     * @param conditions       An optional SQL condition statement used to
     *                         filter the returned rows.
     *
     * @param params           An optional set of parameters to be inserted
     *                         into the query.
     *
     * @param getDistinct      Optionally specify whether the query should
     *                         specifically select distinct values.
     *
     * @return                 A promise that will resolve with the returned 
     *                         set of database rows.
     */
<<<<<<< HEAD
    selectRows(tableEnum, resultColumns, conditions, params, getDistinct) {
        return this._select(tableEnum, resultColumns, conditions, params,
                getDistinct)
        .then((dbResult) => {
            return resultHandler.getResultRows(dbResult);
        })
        .catch((err) => {
            Error("Failed to select rows: " + err.message);
=======
    selectRows(tableEnum, responseColumns, conditions, params, getDistinct) {
        return this._select(tableEnum, responseColumns, conditions, params,
                getDistinct)
        .then((dbResponse) => {
            return responseHandler.getResponseRows(dbResponse);
>>>>>>> ccc61c4d9f556ffa9a4fcb8f6d7b1cd52c161236
        });
    }

    /**
     * Selects a single row from a database table.
     *
     * @param tableEnum  An Enum type representing a database table.
     *
     * @param condition  An SQL condition string used to select a single row
     *                   in the table.
     *
     * @param params     An optional array of parameters to insert into the
     *                   query.
<<<<<<< HEAD
     *
     * @return           A promise that will resolve with the selected row, or
     *                   reject with an appropriate DBError if no rows are
     *                   found or multiple rows are found.
     */
    selectRow(tableEnum, condition, params) {
        return this.selectRows(tableEnum, undefined, condition, params)
        .then((rows) => {
            if (! isDefined(rows) || rows.length === 0) {
                throw new DBError(ErrorEnum.NO_RESULTS);
            }
            else if (rows.length > 1) {
                throw new DBError(ErrorEnum.EXTRA_RESULTS);
            }
            return rows[0];
        })
        .catch((err) => {
            if (err instanceof DBError) {
                // Found an expected error, pass it along:
                throw err;
            }
            throw new Error("Unexpected error selecting database row: "
                    + err.message);
=======
     */
    selectRow(tableEnum, condition, params) {
        return this.selectRows(tableEnum, "*", condition, params)
        .then((rows) => {
            if (rows.length > 1) {
                throw new Error(ErrorEnum.message(ErrorEnum.EXTRA_RESULTS));
            }
            return rows[0];
>>>>>>> ccc61c4d9f556ffa9a4fcb8f6d7b1cd52c161236
        });
    }

    /**
     * Selects a set of column values from a database table.
<<<<<<< HEAD
     *
     * @param tableEnum    An Enum type representing a database table.
     *
     * @param column       The column containing the desired values.
     *
     * @param condition    An optional SQL condition string used to select 
     *                     specific rows in the table.
     *
     * @param params       An optional array of parameters to insert into the
     *                     query.
     *
=======
     *
     * @param tableEnum    An Enum type representing a database table.
     *
     * @param column       The column containing the desired values.
     *
     * @param condition    An optional SQL condition string used to select 
     *                     specific rows in the table.
     *
     * @param params       An optional array of parameters to insert into the
     *                     query.
     *
>>>>>>> ccc61c4d9f556ffa9a4fcb8f6d7b1cd52c161236
     * @param getDistinct  Optionally specify whether the query should only
     *                     select distinct values.
     *
     * @return             A promise that will resolve with all matching table
     *                     column values.
     */
    selectColumnValues(tableEnum, column, condition, params, getDistinct) {
        return this._select(tableEnum, [column], condition, params,
                getDistinct)
<<<<<<< HEAD
        .then((dbResult) => {
            return resultHandler.getColumnValues(dbResult,
                    tableEnum.column(column));
        })
        .catch((err) => {
            Error("Failed to select column values: " + err.message);
=======
        .then((dbResponse) => {
            return responseHandler.getColumnValues(dbResponse, column);
>>>>>>> ccc61c4d9f556ffa9a4fcb8f6d7b1cd52c161236
        });
    }

    /**
     * Selects a single cell from a database table.
     *
     * @param tableEnum    An Enum type representing a database table.
     *
     * @param column       The column containing the desired cell.
     *
     * @param condition    A SQL condition string used to select the cell's
     *                     row in the table.
     *
     * @param params       An optional array of parameters to insert into the
     *                     query.
     *
     * @return             A promise that will resolve with all matching table
     *                     column values.
     */
<<<<<<< HEAD
    selectCell(tableEnum, column, condition, params) {
        return this._select(tableEnum, [column], condition, params)
        .then((dbResult) => {
            return resultHandler.getCell(dbResult, tableEnum.column(column));
=======
    selectCell(tableEnum, column, condition, params, getDistinct) {
        return this._select(tableEnum, [column], condition, params,
                getDistinct)
        .then((dbResponse) => {
            return responseHandler.getCell(dbResponse, column);
>>>>>>> ccc61c4d9f556ffa9a4fcb8f6d7b1cd52c161236
        });
    }
}

module.exports = DBUser;
