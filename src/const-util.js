/**
 * @file const-util.js
 *
 * Applies constant values to objects.
 */

module.exports = {
    /**
     * Sets an object property to a constant value.
     *
     * @param object  The object where the property will be set.
     *
     * @param name    The name of the property to set.
     *
     * @param value   The value the property will hold.
     */
    setConstProperty: (object, name, value) => {
        Object.defineProperty(object, name, {
            value: value,
            writable: false,
            enumerable: true,
            configurable: false
        });
    },

    /**
     * Recursively freezes an object and all of its child objects.
     *
     * @param object  An object that should be frozen, preventing its
     *                properties from being added, removed, or changed.
     *
     * @param frozen  The list of objects that have already been recursively
     *                frozen, used to prevent endless recursion if objects
     *                contain references to their parents.
     *
     * @return        The object parameter.
     */
    recursiveFreeze: (object, frozen) => {
        if (object === null || typeof object !== "object") {
            return object;
        }
        if (! Array.isArray(frozen)) {
            frozen = [];
        }
        else if (frozen.indexOf(object) !== -1) {
            return object;
        }
        frozen.push(object);
        for (let key of Object.keys(object)) {
            module.exports.recursiveFreeze(object[key], frozen);
        }
        return Object.freeze(object);
    }
}
