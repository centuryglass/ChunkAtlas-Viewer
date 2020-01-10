/**
 * @file create-enum.js
 *
 * Creates immutable objects that can be used as enumerator types.
 */

/*
 * --- Enum interface: ---
 *  Each Enum has a fixed set of values it is used to represent. These
 * properties are named in all capital letters, with underscores separating
 * words. These properties hold numeric integer values. These values start at
 * one, to ensure that enum values always evaluate as true.
 *
 *  Enums may optionally define a set of properties that apply to each value.
 * Any property applied to one enum value should also be applied to all others.
 * For each property key, the Enum type object will be assigned a function
 * parameter using that key. That function will take a single parameter,
 * one of that Enum type's values, and return the associated value of the
 * parameter used to create that property. As a result, property keys cannot
 * have the same name as any existing functions or properties of the Enum type
 * object.
 *
 * - Mandatory properties defined for each Enum type: -
 *
 *  name:                       A name string used to describe the Enum type.
 *
 *  count:                      The number of distinct values the Enum type
 *                              may represent.
 *
 *  forEach(fn):                When called, forEach calls an arbitrary
 *                              function 'fn' for each of the values the Enum
 *                              type may represent. If 'fn' returns false, the
 *                              loop will exit early.
 *
 *  isValid(value):             A function that returns true if and only if
 *                              the 'value' parameter passed to it is one of
 *                              the values represented by the Enum type.
 *                             
 *
 *  withProperty(key, value):   A function property that returns the first
 *                              Enum value with a property named 'key' that
 *                              exactly matches 'value'. Returns undefined if
 *                              no match is found.
 */

const { assert, isDefined, isNonEmptyString } = require("../validate.js");
const { setConstProperty } = require("../const-util.js");

/**
 * Validates that all parameters used to construct an Enum type are valid,
 * throwing an error if any problems are found.
 *
 * @param name        The new Enum type's name, a non-empty string.
 *
 * @param values      The list of Enum value names.
 *                    
 *                    This list must be a non-empty array of name strings.
 *                    Name strings must be in all caps, words separated by
 *                    underscores, not starting with a number, and may only
 *                    use uppercase letters, numbers, and underscore
 *                    characters. Name strings must be unique and non-empty.
 *
 * @param properties  A list of optional properties to save for each Enum
 *                    value.
 *
 *                    If defined, the property list should be an array holding
 *                    one item for each Enum value. Each item in the list
 *                    should be another array, holding a list of [key, value]
 *                    array pairs, where key is a non-empty string value that
 *                    is not repeated within the value's property list.
 *                    Each property key must be defined for all Enum values.
 */
function validateEnumParams(name, values, properties) {
    // Check name:
    assert(isNonEmptyString(name), "'" + name + "' is not a valid Enum "
            + "type name, type names must be non-empty string values.");
    // Check values:
    assert(Array.isArray(values), "Value list is not an array.");
    assert(values.length > 0, "Value list is empty.");
    const valuesFound = {};
    values.forEach((value) => {
        assert(isNonEmptyString(value), "Value name '" + value
                + "' was not a non-empty string.");
        assert(! isDefined(valuesFound[value]), "Value '" + value
                + "' was used more than once.");
        valuesFound[value] = true;
        const formatMatch = /^[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)*$/;
        assert(value.match(formatMatch), "Value '" + value + "' does not "
                + "match enum value naming conventions (all caps, words "
                + "separated by underscores, first word not starting with a "
                + "number).");
    });
    assert(! isDefined(properties) || (Array.isArray(properties)),
            "Property list defined, but it is not an array.");
    assert(! isDefined(properties) || properties.length == values.length,
            "Property list defined, but it is not equal in length to the "
            + "value list.");
    if (! isDefined(properties)) { return; }
    const propertyKeys = {};
    for (let i = 0; i < properties.length; i++) {
        const valueProps = properties[i];
        assert(Array.isArray(valueProps), "Property list for Enum value " + i
                + " is not an array.");
        if (i > 0) {
            const expectedKeys = Object.keys(propertyKeys).length;
            assert(valueProps.length === expectedKeys, "Enum value "
                    + i + " has " + valueProps.length + " properties, "
                    + "expected " + expectedKeys + ".");
        }
        const valueKeys = {};
        valueProps.forEach((propPair) => {
            assert(Array.isArray(propPair) && propPair.length == 2
                    && isNonEmptyString(propPair[0]), "Invalid property "
                    + "key/value pair '" + propPair.toString() + "'. "
                    + "Properties should be defined as [key, value] arrays, "
                    + "where the key is a non-empty string.");
            const key = propPair[0];
            assert(! isDefined(valueKeys[key]), "Enum value " + i
                    + " uses property key '" + key + "' more than once.");
            valueKeys[key] = true;
            if (i === 0) {
                propertyKeys[key] = true;
            }
            else {
                assert(isDefined(valueKeys[key]), "Enum value " + i
                        + " uses property key '" + key + "' that was not "
                        + "found in previous values.");
            }
        });
    }
}

module.exports = {
    /**
     * Creates an unchanging object usable as an enum.
     *
     * @param name         A name string used to represent the new enum type.
     *
     * @param values       A list of all values represented by the enum. See
     *                     the validateEnumParams function's Javadoc for the
     *                     required format of this parameter.
     *
     * @param properties   An optional list of value properties to store with
     *                     the Enum type.
     *
     *                      If defined, the property list should be an array
     *                     holding one item for each Enum value. Each item in
     *                     the list should be another array, holding a list of
     *                     [key, value] array pairs, where key is a non-empty
     *                     string value that is not repeated within the
     *                     value's property list. Each property key must be
     *                     defined for all Enum values.
     *
     * @return             The new Enum type object.
     */
    createEnum : function(name, values, properties) {
        try {
            validateEnumParams(name, values, properties);
        }
        catch (err) {
            throw new Error("Unable to create '" + name + "' enum type: "
                    + err.message);
        }
        let enumObject = {};
        setConstProperty(enumObject, "name", name);
        setConstProperty(enumObject, "count", values.length);
        const propertySet = (isDefined(properties) ? {} : undefined);
        for (let i = 0; i < values.length; i++) {
            // Start at index 1 so that all enum values evaluate as true. 
            setConstProperty(enumObject, values[i], i + 1);
            if (isDefined(propertySet)) {
                let valueProperties = {};
                properties[i].forEach((propertyPair) => {
                    setConstProperty(valueProperties, propertyPair[0],
                            propertyPair[1]);
                });
                setConstProperty(propertySet, i + 1, valueProperties);
            }
        }
        if (isDefined(propertySet)) {
            setConstProperty(enumObject, "properties", propertySet);
        }
        setConstProperty(enumObject, "forEach", action => {
            for (let i = 1; i <= enumObject.count; i++) {
                if (action(i) === false) {
                    break;
                }
            }
        });
        setConstProperty(enumObject, "withProperty", (name, value) => {
            assert (isDefined(name) && name.length > 0,
                    "withProperty: property name was undefined or empty.");
            let match = undefined;
            if (enumObject.properties)
            {
                enumObject.forEach(enumType => {
                    if (enumObject.properties[enumType][name] === value) {
                        match = enumType;
                        return false;
                    }
                });
            }
            return match;
        });
        setConstProperty(enumObject, "isValid", value => {
            return Number.isInteger(value) && value > 0
                    && value <= enumObject.count;
        });
        // Set accessor functions for all properties:
        if (isDefined(propertySet)) {
            const propertyKeys = Object.keys(propertySet["1"]);
            propertyKeys.forEach((key) => {
                assert(! isDefined(enumObject[key]), "Unable to create '"
                        + name + "' enum type: '" + key
                        + "' is not a valid parameter name.");
                const keyAccess = (enumValue) => {
                    assert(enumObject.isValid(enumValue), "Tried to access "
                            + "property '" + key + "' from Enum type '" + name
                            + "' for invalid enum value '" + enumValue + "'.");
                    return enumObject.properties[enumValue][key];
                };
                setConstProperty(enumObject, key, keyAccess);
            });
        }
        return enumObject;
    },

    /**
     * Creates an Enum type representing elements in a database.
     * Each represented value will have a property holding that value's name
     * in the database.
     *
     * @param name             The name of the database table, used to
     *                         represent the new enum type.
     *
     * @param tableColumns     The list of columns within the table.
     *
     * @param extraProperties  An optional list of other properties that the
     *                         Enum values will have. See the
     *                         validateEnumParam function's Javadoc for the
     *                         required format of this parameter.
     *
     * @param elementName      The type of element represented by each Enum
     *                         value, used as the key for the database name
     *                         property.  If undefined, "column" will be used.
     */
    createTableEnum : function(name, tableColumns, extraProperties,
            elementName) {
        const valueCount = (Array.isArray(tableColumns)
                ? tableColumns.length : 0);
        const properties = (isDefined(extraProperties)
                ? extraProperties : []);
        while (properties.length < valueCount) {
            properties.push([]);
        }
        if (! isDefined(elementName)) {
            elementName = "column";
        }
        const values = [];
        for (let i = 0; i < valueCount; i++) {
            const name = tableColumns[i];
            if (isNonEmptyString(name)) {
                values.push(name.toUpperCase());
                properties[i].push([ elementName, name ]);
            }
        }
        return module.exports.createEnum(name, values, properties);
    }
}
