/**
 * @file query-builder.js
 *
 * Constructs basic database queries.
 */

const logger = require('../logger.js');

const { isDefined, assert, isNonEmptyString } = require("../validate.js");
const DBTables = require("./structure/tables.js");

class QueryBuilder {
    /**
     * Constructs a query to access a single database table.
     *
     * @param tableEnum  An enum representing the table that the query will
     *                   access.
     */
    constructor(tableEnum) {
        assert(isDefined(DBTables.withProperty("tableEnum", tableEnum)),
                "'" + tableEnum + "' is not a valid database table enum.");
        this._table = tableEnum;
        this._selectDistinct = false;
    }

    // Join an array of values into a single, comma-separated string.
    _joinList(list) {
        assert(Array.isArray(list), "Tried to join non-array parameter '"
                + list + "'.");
        let listStr = "";
        list.forEach((listItem) => {
            if (listStr.length > 0) {
                listStr += ", ";
            }
            listStr += listItem;
        });
        return listStr;
    }

    /**
     * Checks that a set of column values are valid for this QueryBuilder's
     * table, throwing an error if any invalid columns are found.
     *
     * @param   A column value, or an array of potential column values.
     */
    _checkColumns(columns) {
        assert(isDefined(columns), "Expected column array for query to '"
                + this._table.name + "' was not defined.");
        if (! Array.isArray(columns)) {
            columns = [ columns ];
        }
        columns.forEach((column) => {
            assert(this._table.isValid(column), "Column '" + column
                    + "' is not a valid column in table '" + this._table.name
                    + "'.");
        });
    }

    /**
     * Sets if the query should select only unique values.
     *
     * @param distinct  Whether the query should select distinct values.
     */
    setDistinct(distinct) {
        this._selectDistinct = distinct;
    }

    /**
     * Sets a parameterized set of conditions used to filter the rows returned
     * by a query.
     *
     * @param conditions  An SQL condition string, possibly containing
     *                    parameters marked with $1, $2, etc.
     *
     * @param params      An optional parameter or array of parameters that
     *                    will be inserted into the query.
     */
    setConditions(conditions, params) {
        assert(! isDefined(conditions) || isNonEmptyString(conditions),
                "Conditions must be a non-empty string.");
        if (isDefined(params)) {
            assert(isDefined(conditions), "Parameters can't be provided when "
                    + "no conditions are set.");
            if (! Array.isArray(params)) {
                params = [ params ];
            }
        }
        this._conditions = conditions;
        this._params = params;
    }

    /**
     * Performs a database SELECT query, returning a Promise that will resolve
     * to a node-postgres response object, along with a possible error object.
     *
     * @param pool     The database connection pool used to send the query.
     *
     * @param columns  An optional array of column enum values to return. If
     *                 not defined, all table columns will be returned.
     *
     * @return         A Promise that will resolve with a database response
     *                 object and possible error object once the query
     *                 finishes.
     */
    select(pool, columns) {
        if (isDefined(columns)) {
            try { this._checkColumns(columns); }
            catch (err) {
                Error("SELECT failed: " + err.message);
            }
        }
        let text = "SELECT ";
        if (this._selectDistinct) { text += "DISTINCT "; }
        if (Array.isArray(columns) && columns.length > 0) {
            this._checkColumns(columns);
            text += "(" + this._joinList(columns) + ") ";
        }
        else {
            text += "* ";
        }
        text += "FROM " + this._table.name;
        if (isNonEmptyString(this._conditions)) {
            text += " WHERE (" + this._conditions + ")";
        }
        return pool.query(text, this._params);
    }

    /**
     * Performs a database UPDATE query, returning a Promise that will resolve
     * to a node-postgres response object, along with a possible error object.
     *
     * @param pool          The database connection pool used to send the
     *                      query.
     *
     * @param columnValues  An object holding a set of key:value pairs,
     *                      where each key is a column enum value, and each
     *                      value is the parameter that should be assigned to
     *                      that column.
     *
     * @return              A Promise that will resolve with a database
     *                      response object and possible error object once the
     *                      query finishes.
     */
    update(pool, columnValues) {
        //TODO: validate params
        let text = "UPDATE " + this._table.name + " SET ";
        const keys = Object.keys(columnValues);
        assert(Array.isArray(keys) && keys.length > 0,
                "ColumnValues must define at least one column : value pair.");
        try { this._checkColumns(columns); }
        catch (err) {
            Error("UPDATE failed: " + err.message);
        }
        const params = (Array.isArray(this._params) ? this._params : []);
        let setColumns = [];
        keys.forEach((key) => {
            key = Number(key);
            setColumns.push(this._table.column(key) + " = $" + params.length
                    + " ");
            params.push(columnValues[key]);

        });
        text += this._joinList(setColumns);
        if (isNonEmptyString(this._conditions)) {
            text += " WHERE (" + this._conditions + ")";
        }
        return pool.query(text, params);
    }

    /**
     * Performs a database INSERT query, returning a Promise that will resolve
     * to a node-postgres response object, along with a possible error object.
     *
     * @param pool          The database connection pool used to send the
     *                      query.
     *
     * @param columns       The columns to set in the inserted row or rows.
     *
     * @param values        An array of row values to insert. Each row value
     *                      is an array of column values, listed in the same
     *                      order as in the columns parameter.
     *
     * @return              A Promise that will resolve with a database
     *                      response object and possible error object once the
     *                      query finishes.
     */
    insert(pool, columns, values) {
        try { this._checkColumns(columns); }
        catch (err) {
            Error("INSERT failed: " + err.message);
        }
        // TODO: validate 'values' parameter
        let text = "INSERT INTO " + this._table.name + " ("
                + this._joinList(columns) + ") VALUES ";
        let params = {};
        let paramList = [];
        let valueStrings = [];
        values.forEach((valueArray) => {
            let paramSymbols = [];
            valueArray.forEach((param) => {
                if (! isDefined(params[param])) {
                    paramList.push(param);
                    params[param] = "$" + paramList.length;
                }
                paramSymbols.push(params[param]);
            });
            valueStrings.push("(" + this._joinList(paramSymbols) + ")");
        });
        text += this._joinList(valueStrings);
        return pool.query(text, paramList);
    }
}

module.exports = QueryBuilder;
