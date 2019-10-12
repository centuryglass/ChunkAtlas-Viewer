/**
 * @file Enum.js
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
 *
 * - Mandatory properties defined for each Enum type: -
 *
 *  name:           A name string used to describe the Enum type.
 *
 *  count:          The number of distinct values the Enum type may represent.
 *
 *  foreach(fn):    A function property, used to call an arbitrary function for
 *                  each of the values the Enum type may represent.
 *
 *  isValid(value): A function property that returns true if and only if the
 *                  parameter passed to it is a valid value the enum type may
 *                  represent.
 */

/**
 * Creates an unchanging object usable as an enum.
 *
 * @param name         A name string used to represent the new enum type.
 *
 * @param values       A list of all values represented by the enum.
 *                     By convention, these should be all uppercase names, with
 *                     words separated with underscores.
 *
 * @param properties   An optional list of properties to store with the enum.
 *                     If provided, this list must be equal in length to the 
 *                     list of enum values. Each item in the list should be
 *                     another list of [key, value] pairs to apply to the value
 *                     with the same index.
 */
function createEnum(name, values, properties) {
    assert(Array.isArray(values), "createEnum: value list is not an array!");
    assert(! isDefined(properties) || (Array.isArray(properties)
            && properties.length == values.length), "createEnum: property list"
            + " defined, but it is not an array, or not equal in length to the"
            + " value list.");
    assert(values.length > 0, "createEnum: value list is empty!");
    let enumObject = {};
    let propertyList = null;
    let expectedProperties = [];
    if (isDefined(properties)) {
        propertyList = {};
        properties[0].forEach(pair => expectedProperties.push(pair[0]));
    }
    setConstProperty(enumObject, "name", name);
    setConstProperty(enumObject, "count", values.length);
    for (let i = 0; i < values.length; i++) {
        let formatMatch = /^[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)*$/;
        assert(values[i].match(formatMatch), "createEnum: Value " + values[i]
                + " does not match enum value naming conventions (all caps, "
                + "words separated by underscores, first word not starting "
                + "with a number).");
        // Start at index 1 so that all enum values evaluate as true. 
        setConstProperty(enumObject, values[i], i + 1);
        if (propertyList !== null) {
            let valueProperties = {};
            let propertiesFound = [];
            properties[i].forEach(propertyPair => {
                propertiesFound.push(propertyPair[0]);
                setConstProperty(valueProperties, propertyPair[0],
                        propertyPair[1]);
            });
            if (i > 0) {
                assert (arraysAreEqual(expectedProperties, propertiesFound),
                        "createEnum: Enum value " + values[i] + " has "
                        + "unexpected property list "
                        + propertiesFound.toString() + ", expected "
                        + expectedProperties.toString());
            }
            setConstProperty(propertyList, i + 1, valueProperties);
        }
    }
    if (propertyList !== null) {
        setConstProperty(enumObject, "properties", propertyList);
    }
    setConstProperty(enumObject, "forEach", action => {
        for (let i = 1; i <= enumObject.count; i++) {
            action(i);
        }
    });
    setConstProperty(enumObject, "isValid", value => {
        return Number.isInteger(value) && value > 0
                && value <= enumObject.count;
    });
    return enumObject;
}
