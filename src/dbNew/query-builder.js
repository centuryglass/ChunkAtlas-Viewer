/**
 * @file query-builder.js
 *
 * Constructs basic database queries.
 */

const logger = require("../logger.js");
const { Pool } = require("pg");

const { isDefined, assert, assertIsClass, assertHasContent, assertCorrectType,
        assertIsEnumValue, isNonEmptyString } = require("../validate.js");
const Tables = require("./structure/tables.js");

class QueryBuilder {
    /**
     * Constructs a query to access a single database table.
     *
     * @param tableEnum  An enum representing the table that the query will
     *                   access.
     */
    constructor(tableEnum) {
        assert(isDefined(Tables.withProperty("tableEnum", tableEnum)),
                "'" + tableEnum + "' is not a valid database table enum.",
                TypeError);
        this._table = tableEnum;
        this._selectDistinct = false;
    }

    /**
     * Checks that a set of column values are valid for this QueryBuilder's
     * table, throwing an error if any invalid columns are found.
     *
     * @param   A column value, or an array of potential column values.
     */
    _checkColumns(columns) {
        assertHasContent(columns, "Invalid column array for query to table '"
                + this._table.name + "'");
        if (! Array.isArray(columns)) {
            columns = [ columns ];
        }
        columns.forEach((column) => {
            assertIsEnumValue(column, this._table, "Invalid query column");
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
                "Conditions must be a non-empty string or undefined, found '"
                + conditions + "'");
        this._conditions = conditions;
        if (isDefined(params)) {
            assertHasContent(conditions, "Parameters were provided for "
                    + "a missing condition string.");
            assert(isDefined(conditions), "Parameters can't be provided when "
                    + "no conditions are set.");
            if (! Array.isArray(params)) {
                params = [ params ];
            }
            this._params = params;
        }
        else { this._params = []; }
    }

    /**
     * Performs a database SELECT query, returning a Promise that will resolve
     * to a node-postgres result object, along with a possible error object.
     *
     * @param pool     The database connection pool used to send the query.
     *
     * @param columns  An optional array of column enum values to return. If
     *                 not defined, all table columns will be returned.
     *
     * @return         A Promise that will resolve with a database result
     *                 object and possible error object once the query
     *                 finishes.
     */
    select(pool, columns) {
        let text = "SELECT ";
        assert(! isDefined(columns) || Array.isArray(columns),
                "Selected columns must be undefined or an array, found '"
                + columns + "'");
        if (this._selectDistinct) { text += "DISTINCT "; }
        if (isDefined(columns) && Array.isArray(columns)
                && columns.length > 0) {
            try { this._checkColumns(columns); }
            catch (err) {
                throw new Error("SELECT failed: " + err.message);
            }
            const columnNames = columns.map(col => col.columnName);
            text += "(" + columnNames.join(", ") + ") ";
        }
        else {
            text += "* ";
        }
        text += "FROM " + this._table.tableName;
        if (isNonEmptyString(this._conditions)) {
            text += " WHERE (" + this._conditions + ")";
        }
        logger.debug("Sending SELECT query '" + text + "' with params '"
                + this._params + "'");
        return pool.query(text, this._params);
    }

    /**
     * Performs a database UPDATE query, returning a Promise that will resolve
     * to a node-postgres result object, along with a possible error object.
     *
     * @param pool          The database connection pool used to send the
     *                      query.
     *
     * @param columnValues  An object holding a set of key:value pairs,
     *                      where each key is a column name, and each value is
     *                      the parameter that should be assigned to that
     *                      column.
     *
     * @return              A Promise that will resolve with a database
     *                      result object and possible error object once the
     *                      query finishes.
     */
    update(pool, columnValues) {
        let text = "UPDATE " + this._table.tableName + " SET ";
        assertCorrectType(columnValues, "object", "Invalid UPDATE column "
                + "definitions");
        const columnNames = Object.keys(columnValues);
        assert(Array.isArray(columnNames) && columnNames.length > 0,
                "ColumnValues must define at least one column:value pair.");
        try {
            this._checkColumns(columnNames.map(n => this._table.withProperty(
                    "columnName", n)));
        }
        catch (err) {
            throw new Error("UPDATE failed: " + err.message);
        }
        const params = (Array.isArray(this._params) ? this._params : []);
        let setColumns = [];
        columnNames.forEach((columnName) => {
            setColumns.push(columnName + " = $" + (params.length + 1));
            params.push(columnValues[columnName]);

        });
        text += setColumns.join(", ");
        if (isNonEmptyString(this._conditions)) {
            text += " WHERE (" + this._conditions + ")";
        }
        logger.debug("Sending UPDATE query '" + text + "' with params '"
                + params + "'");
        return pool.query(text, params);
    }

    /**
     * Performs a database INSERT query, returning a Promise that will resolve
     * to a node-postgres result object, along with a possible error object.
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
     * @return              A Promise that will resolve with a database result
     *                      object and possible error object once the query
     *                      finishes.
     */
    insert(pool, columns, values) {
        try { this._checkColumns(columns); }
        catch (err) {
            throw new Error("INSERT failed: " + err.message);
        }
        // validate 'values' parameter:
        assert(Array.isArray(values), "Values must be an array of column "
                + "values, or an array of column value arrays.", TypeError);
        let allArrays = true;
        let noArrays = true;
        for (let value of values) {
            if (Array.isArray(value)) {
                noArrays = false;
            }
            else {
                allArrays = false;
            }
        }
        assert(noArrays !== allArrays,
                "Found invalid mix of array and non-array values.", TypeError);
        if (noArrays) {
            values = [ values ];
        }
        for (let value of values) {
            assert(Array.isArray(value), "Values must be an array of column "
                    + "values.", TypeError);
            if (isDefined(columns)) {
                assert(value.length <= columns.length, "'" + columns.length
                        + "' column names stated, but found '" + value.length
                        + "' column values.");
            }
        }
        let columnNames = "";
        if (isDefined(columns)) {
             columnNames = columns.map(col => col.columnName)
                .join(", ");
            if (columnNames.length !== 0) {
                columnNames = " (" + columnNames + ")"
            };
        }
        let text = "INSERT INTO " + this._table.tableName + columnNames
                + " VALUES ";
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
            valueStrings.push("(" + paramSymbols.join(", ") + ")");
        });
        text += valueStrings.join(", ");
        logger.debug("Sending INSERT query '" + text + "' with params '"
                + paramList + "'");
        return pool.query(text, paramList);
    }

    /**
     * Performs a database DELETE query, returning a Promise that will resolve
     * to a node-postgres result object, along with a possible error object.
     *
     * @param pool          The database connection pool used to send the
     *                      query.
     *
     * @return              A Promise that will resolve with a database result
     *                      object and possible error object once the query 
     *                      finishes.
     */
    deleteQuery(pool) {
        let text = "DELETE FROM " + this._table.tableName;
        if (isNonEmptyString(this._conditions)) {
            text += " WHERE (" + this._conditions + ")";
        }
        logger.debug("Sending DELETE query '" + text + "' with params '"
                + this._params + "'");
        return pool.query(text, this._params);
    }
}

module.exports = QueryBuilder;
