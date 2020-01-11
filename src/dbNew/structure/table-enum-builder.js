/**
 * @file  table-enum-builder.js
 *
 * @brief  Builds enum classes representing all columns in a database table.
 */

const EnumBuilder = require("../../enum-builder.js");
const { assert, isDefined } = require("../../validate.js");

// table enum properties:
const tableNameProp = "tableName";
const columnNameProp = "columnName";

class TableEnumBuilder extends EnumBuilder {
    /**
     * Creates a builder for a table's column enum class.
     *
     * @param tableName   The database table name.
     *
     * @throws TypeError  If the name is not a string value.
     */
    constructor(tableName) {
        const enumClassName = tableName
                .replace(/(?:^|_)[a-z]/g, (str) =>
                (str.length === 2 ? str.substr(1) : str).toUpperCase())
                .replace(/[^A-Za-z_]/g, "");
        super(enumClassName);
        this.addEnumClassProperty(tableNameProp, tableName);
        this.addProperty(columnNameProp, "string");
    }

    /**
     * Adds a new column value to the enum class.
     *
     * @param name        The database column name.
     *
     * @param properties  A properties object to store with the value. This
     *                    should only contain properties added through the
     *                    addProperty method.
     *
     * @throws TypeError  If name is not a string, properties is defined but
     *                    is not an object, or one of the property values is
     *                    not of the expected type.
     *                    
     * @throws Error      If the properties parameter doesn't exactly match
     *                    the set of properties defined with addProperty, a
     *                    value with this name has already been added, the
     *                    Enum class has already been built, or the value name
     *                    is reserved for an enum class property or method.
     */
    addValue(name, properties) {
        if (! isDefined(properties)) {
            properties = {};
        }
        const valueName = name.toUpperCase();
        properties[columnNameProp] = name;
        super.addValue(valueName, properties);
    }

    addColumns(columnArray) {
        assert(Array.isArray(columnArray), "expected column array, found '"
                + columnArray + "' with type '" + typeof columnArray + "'",
                TypeError);
        for (let column of columnArray) {
            this.addValue(column);
        }
    }
}

module.exports = TableEnumBuilder;
