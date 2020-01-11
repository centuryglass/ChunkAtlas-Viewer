/**
 * @file enum-builder.js
 *
 * Constructs enumerator classes that define lists of values, each optionally
 * stored with custom property values.
 *
 *  Enum classes each represent a fixed set of values. For each value, the
 * class may also define a set of property values. The names and types of
 * property values are guaranteed to be consistent for each value represented
 * by the enum.
 *
 *  Unlike traditional enumerators, enum classes built by EnumBuilder store
 * their values as objects, not integers. As a result, each enum class can
 * distinguish its own values from other enum class values and from unrelated
 * values.
 *
 * // ############### Enum class creation example: ###############
 *
 * // ## Create builder, set enum className: ##
 * // Class name must be a CamelCase string starting with a capital letter.
 * const builder = new EnumBuilder("WeekDayEnum");
 *
 * // ## Define fixed enum class properties: ##
 * //  Property names must be CamelCase strings starting with lowercase
 * // letters.
 * builder.addEnumClassProperty("displayName", "Weekdays");
 * builder.addEnumClassProperty("description", "Days of the week");
 *
 * // ## Define required value properties: ##
 * //  Property names must be CamelCase strings starting with lowercase
 * // letters. Property types may include any string that can be returned by
 * // the 'typeof' operator, except for "undefined".
 *
 * builder.addProperty("displayName", "string");
 * builder.addProperty("shortForm",   "string");
 * builder.addProperty("isWorkDay",   "boolean");
 *
 * // Object-type properties must also specify the expected object class.
 * builder.addProperty("ratings", "object", Array);
 *
 * // ## Define all values: ##
 * //  Value names must be CONST_CASE strings, all capital letters with words
 * // separated with underscores. Each added value must also provide an
 * // associated property object, defining properties with the exact names and
 * // types set through the addProperty method. Once the first value has been
 * // added, the property list cannot be changed.
 *
 * builder.addValue("MONDAY", {
 *         displayName: "Monday",
 *         shortForm:   "MON",
 *         isWorkDay:   true,
 *         ratings:     [ 1, 1, 2 ]
 * });
 * builder.addValue("TUESDAY", {
 *         displayName: "Tuesday",
 *         shortForm:   "TUE",
 *         isWorkDay:   true,
 *         ratings:     [ 3, 7, 2 ]
 * });
 * builder.addValue("WEDNESDAY", {
 *         displayName: "Wednesday",
 *         shortForm:   "WED",
 *         isWorkDay:   true,
 *         ratings:     [ 4, 6, 4 ]
 * });
 * builder.addValue("THURSDAY", {
 *         displayName: "Thursday",
 *         shortForm:   "TH",
 *         isWorkDay:   true,
 *         ratings:     [ 5, 5, 5 ]
 * });
 * builder.addValue("FRIDAY", {
 *         displayName: "Friday",
 *         shortForm:   "FRI",
 *         isWorkDay:   true,
 *         ratings:     [ 8, 9, 7 ]
 *});
 * builder.addValue("SATURDAY", {
 *         displayName: "Saturday",
 *         shortForm:   "SAT",
 *         isWorkDay:   false,
 *         ratings:     [ 10, 10, 9 ]
 * });
 * builder.addValue("SUNDAY", {
 *         displayName: "Sunday",
 *         shortForm:   "SUN",
 *         isWorkDay:   "false",
 *         ratings:     [ 8, 7, 10 ]
 * });
 *
 * // ## Build the enum class: ##
 * // Once built, the enum class is fixed, and no more values can be added.
 * // Each builder object can make only one enum class.
 * const WeekDayEnum = builder.build();
 *
 * // ############### Using enum classes: ###############
 * // Accessing enum class information:
 * const dayTypeName = WeekDayEnum.className;
 * const numDays =     WeekDayEnum.count;
 * console.log(WeekDayEnum.displayName); // prints "Weekday"
 * console.log(WeekDayEnum.description); // prints "Days of the week"
 *
 * // Accessing values:
 * let day = WeekDayEnum.MONDAY; 
 *
 * // Accessing value properties:
 * console.log(day.shortForm);                   // prints "MON"
 * console.log(day.displayName);                 // prints "Monday"
 * console.log(day.ratings.length + " ratings"); // prints "3 ratings"
 *
 * // Enum classes are also iterable.
 * // Print each day's display name in order:
 * for (let day of WeekDayEnum) {
 *     console.log(day.displayName);
 * }
 *
 * // Enum values have several default properties that are automatically 
 * // applied when the enum class is built: 
 * console.log(day.name);                      // prints "MONDAY"
 * console.log(day.index);                     // prints "0"
 * console.log(day.enumClass === WeekDayEnum); // prints "true"
 *
 * ############### Enum class methods: ###############
 * All enum classes provide the following methods:
 * 
 * ## forEach(action) ########################################################
 * # Calls a function for each value within the enum.                        #
 * ###########################################################################
 * # param action:  A function called once for each enum value in order,     #
 * #                passing in a different value parameter each time.        #
 * ###########################################################################
 * # This example creates the same console output as the enum iterator loop  #
 * # example above:                                                          #
 * # WeekDayEnum.forEach((day) => console.log(day.displayName));             #
 * ###########################################################################
 *
 * ## isValid(value) #########################################################
 * # Checks if a variable is one of the values the enum class defines.       #
 * ###########################################################################
 * # param value: A value that may be one of the enum class values.          #
 * #                                                                         #
 * # return:      True if value is one of this enum class's values, false if #
 * #              it isn't.                                                  #
 * ###########################################################################
 *
 * ## withIndex(index) #######################################################
 * # Finds a value of the enum class that has a particular index.            #
 * ###########################################################################
 * # param index:      The index of an enumerated value.                     #
 * #                                                                         #
 * # return:           The value with the given index.                       #
 * #                                                                         #
 * # throw TypeError:  If index is not an integer value.                     #
 * #                                                                         #
 * # throw RangeError: If the index is less than zero, or greater than or    #
 * #                   equal to the number of enum class values.             #
 * ###########################################################################
 *
 * ## withProperty(propName, propValue) ######################################
 * #  Finds the first value of the enum class where a specific property      #
 * #  holds a particular value.                                              #
 * ###########################################################################
 * # param propName:  The name of a property stored for each enum value.     #
 * #                                                                         #
 * # param propValue: The property value to search for within all enum       #
 * #                  values.                                                #
 * #                                                                         #
 * # return:          The first enum value where the selected property       #
 * #                  equals the given value, or undefined if no enum value  #
 * #                  has a matching property.                               #
 * ###########################################################################
 */

const { assert, assertIsString, assertCorrectFormat, assertCorrectType,
        assertInstanceOf, isDefined } = require("./validate.js");
const { isUpperCamelCase, isLowerCamelCase, isTypeString, isConstFormat }
        = require("./text/string-predicates.js");
const { recursiveFreeze } = require("./const-util.js");

// Define class property and method names:
const classPropNames = {
    CLASS_NAME:    "className",
    VALUE_COUNT:   "count",
    VALUES:        "_values",
    FOR_EACH:      "forEach",
    IS_VALID:      "isValid",
    WITH_INDEX:    "withIndex",
    WITH_PROPERTY: "withProperty",
};
Object.freeze(classPropNames);
// These strings cannot be used as custom class property names, as they would
// conflict with default property names:
const reservedClassPropNames = Object.keys(classPropNames).map((key) =>
        classPropNames[key]);
Object.freeze(reservedClassPropNames);

// Define mandatory enum value property names:
const valuePropNames = {
    NAME:       "name",
    ENUM_CLASS: "enumClass",
    INDEX:      "index"
};
Object.freeze(valuePropNames);

// These strings cannot be used as custom value property names, as they would
// conflict with default enum value property names:
const reservedValuePropNames = Object.keys(valuePropNames).map((key) =>
        valuePropNames[key]);
Object.freeze(reservedValuePropNames);

// Technically there's no conflict in allowing values to use names taken by
// default class properties, or in allowing classes to add properties that
// use the same names as default value properties, but the benefits of
// allowing it are outweighed by the potential for confusion. Because of
// this, class properties and value properties will share the same list
// of reserved property names.
const reservedPropertyNames = reservedClassPropNames.concat(reservedValuePropNames);
Object.freeze(reservedPropertyNames);

// Using reserved property names as value names would also cause conflicts,
// and is not allowed. However, no further steps are required to prevent this
// from happening, as property names cannot be in CONST_CASE, and enum values
// must be in CONST_CASE.

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
        this._properties = {};
        this._classProperties = {
            [classPropNames.CLASS_NAME]:  name,
            [classPropNames.VALUE_COUNT]: 0,
            [classPropNames.VALUES]:      []
        };
        this._values = [];
    }

    /**
     * Gets the list of enum value property names that are reserved for
     * default properties and should not be assigned through addProperty().
     *
     * @return  The immutable reserved property name list.
     */
    static getReservedPropertyNames() {
        return reservedPropertyNames;
    }

    // Convenience method for accessing the className:
    _getClassName() {
        return this._classProperties[classPropNames.CLASS_NAME];
    }

    // Test that a new property is valid, throwing an appropriate error if it
    // is not.
    _checkProperty(propertyName, typeName, classType) {
        const errorPrefix = "Enum class '" + this._getClassName()
                + "' property '" + propertyName + "': "
        assertCorrectFormat(propertyName, isLowerCamelCase, "camelCase",
                errorPrefix);
        assert(reservedPropertyNames.indexOf(propertyName) === -1, errorPrefix
                + "Attempted to assign reserved name.");
        assertCorrectFormat(typeName, isTypeString, "typename", errorPrefix
                + "Invalid enum property typeName");
        assert(typeName !== "undefined", errorPrefix + "Attempted to use "
                + "illegal typeName 'undefined'");
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
                    + "' property has already been defined as a value "
                    + "property.");
        assert(! isDefined(this._classProperties[propertyName]), "'"
                    + propertyName + "' property has already been defined as "
                    + "an enum class property.");
    }


    /**
     * Adds a new property that should be defined for each value of the enum
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
        this._checkProperty(propertyName, typeName, classType);
        this._properties[propertyName] = {
            typeName: typeName,
            classType: classType
        };
    }

    /**
     * Adds a new property that will be associated with the enum class.
     *
     * @param propertyName  The name of the new property. This must be a
     *                      camelCase string starting with a lowercase letter,
     *                      that is not on the reserved property name list or
     *                      already defined as a custom enum class property.
     *
     * @param value         The value to store in the enum class under the
     *                      given property key.
     *
     * @throw TypeError     If propertyName is not a string.
     *
     * @throw FormatError   If propertyName is not in camelCase, starting with
     *                      a lowercase letter.
     *
     * @throw Error         If propertyName is reserved, if it is already in
     *                      use, or if the enum class has already been built.
     */
    addEnumClassProperty(propertyName, value) {
        assert(! isDefined(this._enumClass),
                "Properties cannot be added after building the enum class.");
        const typeName = typeof value;
        let classType;
        if (typeName === "object") { classType = Object; }
        this._checkProperty(propertyName, typeName, classType);
        this._classProperties[propertyName] = value;
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
     *                      a value with this name has already been added, the
     *                      Enum class has already been built, or the value
     *                      name is reserved for an enum class property or
     *                      method.
     */
    addValue(valueName, properties) {
        const errorMsgPrefix = "New value '" + valueName
                + "' for enum class '" + this._getClassName() + "' "
        assert(! isDefined(this._enumClass), errorMsgPrefix + "cannot be "
                + "added, the enum class has already been built.");
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
        const newValue = {
            [valuePropNames.NAME]: valueName,
            [valuePropNames.INDEX]: this._values.length
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
        this._values.push(newValue);
        this._classProperties[classPropNames.VALUE_COUNT]++;
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
                + this._getClassName() + " with no values.");
        if (isDefined(this._enumClass)) {
            return this._enumClass;
        }
        // Create initial enum class object:
        const enumClass = {
            [classPropNames.VALUES]: []
        };
        // Add class properties:
        for (let [ key, value ] of Object.entries(this._classProperties)) {
            enumClass[key] = value;
        }
        // Add all enum values:
        for (let value of this._values) {
            value[valuePropNames.ENUM_CLASS] = enumClass;
            enumClass[value[valuePropNames.NAME]] = value;
            enumClass[classPropNames.VALUES].push(value);
        }
        // Define enum class methods:
        enumClass[classPropNames.FOR_EACH] = (action) => {
            for (let value of enumClass[classPropNames.VALUES]) {
                action(value);
            }
        };
        enumClass[classPropNames.IS_VALID] = (value) => {
            return enumClass[classPropNames.VALUES].indexOf(value) !== -1;
        };
        enumClass[classPropNames.WITH_PROPERTY] = (propName, propValue) => {
            const errorPrefix = enumClass[classPropNames.CLASS_NAME]
                    + "." + classPropNames.WITH_PROPERTY + ": ";
            assert(isDefined(propName) && propName.length > 0, errorPrefix
                    + "property name was undefined or empty.", TypeError);
            assert (isDefined(propValue), errorPrefix + " requested property "
                    + "value was undefined.", ReferenceError);
            for (let value of enumClass[classPropNames.VALUES]) {
                if (value[propName] === propValue) {
                    return value;
                }
            }
            return;
        };
        enumClass[classPropNames.WITH_INDEX] = (index) => {
            const errorPrefix = enumClass[classPropNames.CLASS_NAME]
                    + "." + classPropNames.WITH_INDEX + ": ";
            assert(Number.isInteger(index), errorPrefix
                    + "index was not an integer", TypeError);
            assert(index >= 0 && index < enumClass[classPropNames.VALUE_COUNT],
                    errorPrefix + "index was out of bounds", RangeError);
            return enumClass[classPropNames.VALUES][index];
        };
        // Make enum class values iterable:
        enumClass[Symbol.iterator] = function() {
            return enumClass[classPropNames.VALUES][Symbol.iterator]();
        };
        recursiveFreeze(enumClass);
        this._enumClass = enumClass;
        return this._enumClass;
    }
}

module.exports = EnumBuilder;
