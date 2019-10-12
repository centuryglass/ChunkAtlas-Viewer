/**
 * @file const-util/index.js
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
     * @return        The object parameter.
     */
    recursiveFreeze: (object) => {
        if (object === null || typeof object !== "object") {
            return object;
        }
        const keys = Object.keys(object);
        keys.forEach((key) => {
            module.exports.recursiveFreeze(object[key]);
        });
        return Object.freeze(object);
    }
}
