/**
 * @file enum-builder.js
 *
 * Helps in constructing complicated enumerator classes with multiple
 * properties.
 */

const { assert, assertIsString, assertCorrectFormat, assertCorrectType,
        assertInstanceOf, isDefined } = require("../validate.js");
const { isUpperCamelCase, isLowerCamelCase, isTypeString, isConstFormat }
        = require("../text/string-predicates.js");
const { recursiveFreeze } = require("../const-util.js");
const { createEnum } = require("./create-enum.js");

// These values cannot be used as property names, as they would conflict with
// a standard enum property or method:
const reservedPropertyNames = [
    "name",
    "count",
    "forEach",
    "isValid",
    "withProperty"
];

class EnumBuilder {
    /**
     * Creates an empty enumerator builder.
     *
     * @param name          The name that will be assigned to the new Enum
     *                      class. 
     *
     * @throws TypeError    If the name is not a string value.
     *
     * @throws FormatError  If the name is not a non-empty camel case string.
     */
    constructor(name)
    {
        assertCorrectFormat(name, isUpperCamelCase, "CamelCase",
                "Invalid Enum class name");
        this._name = name;
        this._properties = {};
        this._values = [];
    }

    // Test that a new property is valid, throwing an appropriate error if it
    // is not.
    _testProperty(propertyName, typeName, classType) {
        assertCorrectFormat(propertyName, isLowerCamelCase, "camelCase",
                "Invalid enum property name");
        assert(reservedPropertyNames.indexOf(propertyName) === -1,
                "Attempted to add property with reserved name '"
                + propertyName + "'");
        assertCorrectFormat(typeName, isTypeString, "typename",
                "Invalid parameter type");
        assert(typeName !== "undefined", "Attempted to add an enum property "
                + "with illegal typeName 'undefined'");
        if (typeName === "object") {
            assert(typeof classType === "function"
                    && isDefined(classType.prototype),
                    "Invalid enum property class", TypeError);
        }
        else {
            assert(! isDefined(classType), "classType provided for property "
                    + "that expects value type '" + typeName + "'", TypeError);
        }
        assert(! isDefined(this._properties[propertyName]), "'" + propertyName
                    + "' property has already been defined.");
        assert(this._valueNameProperty !== propertyName, "'"  + propertyName
                    + "' property has already been defined as the Enum class "
                    + "value name property.");
    }


    /**
     * Adds a new property that should be defined for all values of the enum
     * class. Properties can only be added before adding enum values with
     * addValue.
     *
     * @param propertyName  The name of the new property, which should be
     *                      a non-empty camelCase string. Property names
     *                      must not equal any of the standard property or
     *                      method names used by all enum classes.
     *
     * @param typeName      The type that each value of this property should
     *                      hold, as returned by the typeof operator. This
     *                      may be any type except for 'undefined'.
     *
     * @param classType     If type is 'object', this should be a valid class
     *                      where (value instanceof classType) is true for
     *                      each of this property's values. Otherwise, this
     *                      should be undefined.
     *
     * @throws TypeError    If propertyName or typeName are not strings, if
     *                      classType is not a class when typeName is 'object',
     *                      or if classType is not undefined when typeName is
     *                      not 'object'.
     *
     * @throws FormatError  If the property name is not a non-capitalized
     *                      camelCase string, or the type is any string that
     *                      is not a valid typename.
     *
     * @throws Error        If the enum has already been constructed, if the 
     *                      named property has already been defined, if enum
     *                      values have already been defined, if the property
     *                      attempts to use a reserved name, or the property
     *                      attempts to use "undefined" as its type.
     */
    addProperty(propertyName, typeName, classType) {
        assert(this._values.length === 0,
                "Properties may only be added before adding values.");
        assert(! isDefined(this._enumClass),
                "Properties cannot be added after building the enum class.");
        this._testProperty(propertyName, typeName, classType);
        this._properties[propertyName] = {
            typeName: typeName,
            classType: classType
        };
    }

    /**
     * Adds a string property to the enum class that will hold each property
     * name, so that EnumClass.propertyName(EnumClass.EXAMPLE_VALUE) returns
     * "EXAMPLE_VALUE".
     *
     * This function will work successfully even after values have been added
     * with addValue(), but will throw an error if called after the enum class
     * has been built.
     *
     * @param propertyName  The name of the property used to store each enum
     *                      value's name. This value must follow all the same
     *                      formatting rules required when passing property
     *                      names to the addProperty() method.
     *
     * @throw TypeError     If propertyName is not a string.
     *
     * @throw FormatError   If propertyName is not a camelCase string,
     *                      starting with a lowercase letter.
     *
     * @throw Error         If propertyName has already been added as a
     *                      property, if propertyName is a reserved name, if
     *                      addValueNameProperty() was already called
     *                      successfully, or if the enum class was already
     *                      created with the build() method.
     */
    addValueNameProperty(propertyName) {
        assert(! isDefined(this._enumClass), "Value name property cannot be "
                + "added after building the enum class.");
        assert(! isDefined(this._valueNameProperty), "Attempted to set value"
                + " name property more than once.");
        this._testProperty(propertyName, "string");
        this._valueNameProperty = propertyName;
    }

    /**
     * Adds a new value to the list of values the enum class will define.
     *
     * @param valueName     The name of the new value, a CONST_CASE string
     *                      that is not already in use.
     *
     * @param properties    An object defining the names and values of each
     *                      property associated with this value. These values
     *                      and their types must exactly match the list of
     *                      properties defined with addProperty.
     *
     * @throws FormatError  If the value name is not formatted as a CONST_CASE
     *                      string.
     *
     * @throws TypeError    If valueName is not a string, properties is not
     *                      an object, or one of the property values is not
     *                      of the expected type.
     *                    
     * @throws Error        If the properties parameter doesn't exactly match
     *                      the set of properties defined with addProperty,
     *                      a value with this name has already been added, or
     *                      the Enum class has already been built.
     */
    addValue(valueName, properties) {
        const errorMsgPrefix = "New value '" + valueName
                + "' for enum class '" + this._name + "' "
        assert(! isDefined(this._enumClass), errorMsgPrefix + "cannot be "
                + "added, class that has already been built.");
        assertCorrectFormat(valueName, isConstFormat, "CONST_CASE",
                errorMsgPrefix + "is formatted incorrectly");
        for (let value of this._values) {
            assert(value.name !== valueName, errorMsgPrefix
                    + "has already been added.");
        }
        // Allow properties parameter to be undefined if and only if this
        // enum class has no properties:
        if (Object.keys(this._properties).length === 0
                && ! isDefined(properties)) {
            properties = {};
        }
        assertCorrectType(properties, "object", errorMsgPrefix
                + "added with invalid property parameter");
        for (let key of Object.keys(this._properties)) {
            assert(isDefined(properties[key]), errorMsgPrefix
                    + "does not define required property '" + key + "'.");
        }
        const addedKeys = Object.keys(properties);
        const newValue = {
            name: valueName
        };
        for (let [key, value] of Object.entries(properties)) {
            assert(isDefined(this._properties[key]), errorMsgPrefix
                    + "defines unexpected property '" + key + "'.");
            const wrongTypeMsg = errorMsgPrefix + "provides invalid value for"
                    + " property '" + key + "'";
            assertCorrectType(value, this._properties[key].typeName,
                    wrongTypeMsg);        
            if (this._properties[key].typeName === "object") {
                assertInstanceOf(value, this._properties[key].classType,
                        wrongTypeMsg);
            }
            newValue[key] = value;
        }
        assert(isDefined(newValue.name), "Undefined value name!");
        recursiveFreeze(newValue);
        this._values.push(newValue);
    }

    /**
     * Constructs an enum class from the name, properties and values added to
     * this builder, or returns a previously constructed enum class value.
     * After calling the build method, the enum class cannot be modified, and
     * calling the addValue or addProperty methods will throw an error.
     *
     * @return        The enum class value constructed by this builder.
     *
     * @throws Error  If called before any values have been added.
     */
    build() {
        assert(this._values.length > 0, "Attempted to build enum class '"
                + this._name + " with no values.");
        if (isDefined(this._enumClass)) {
            return this._enumClass;
        }
        const values = [];
        const usesProperties = Object.keys(this._properties).length > 0
                || isDefined(this._valueNameProperty);
        const properties = (usesProperties ? [] : undefined);
        for (let value of this._values) {
            assert(isDefined(value.name), "Undefined value name: "
                    + JSON.stringify(value, null, 2));
            values.push(value.name);
            if (usesProperties) {
                const valueProps = [];
                for (let key of Object.keys(this._properties)) {
                    valueProps.push([key, value[key]]);
                }
                if (isDefined(this._valueNameProperty)) {
                    valueProps.push([this._valueNameProperty, value.name]);
                }
                properties.push(valueProps);
            }
        }
        this._enumClass = createEnum(this._name, values, properties);
        return this._enumClass;
    }
}

module.exports = EnumBuilder;
