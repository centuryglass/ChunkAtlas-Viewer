/**
 * @file MapPoint.js
 *
 * Stores a point of interest drawn at a specific coordinate on the map.
 */

class MapPoint {
    /**
     * @param name       The name of a point of interest on the map.
     *
     * @param position   The Minecraft (x, z) block coordinates of the
     *                   MapPoint, as a Point object.
     *
     * @param dimension  A DimensionEnum value specifying what dimension the
     *                   point is in.
     *
     * @param icon       An optional Image used to represent the MapPoint on
     *                   the MapCanvas.
     */
    constructor(name, position, dimension, icon) {
        assertIsClass(position, Point, "MapPoint.constructor");
        assertIsEnum(dimension, DimensionEnum, "MapPoint.constructor");
        assert(icon instanceof Promise || ! isDefined(icon),
                "MapPoint.constructor: icon \"" + icon
                + "\" is not a valid Image object.");
        const chunkPoint = position.multiply(1/16);
        setConstProperty(this, "name", name);
        setConstProperty(this, "position", chunkPoint);
        setConstProperty(this, "dimension", dimension);
        if (isDefined(icon)) {
            setConstProperty(this, "iconPromise", icon);
            let mapPoint = this;
            icon.then(image => {
                assertIsClass(image, Image, "MapPoint.constructor");
                setConstProperty(mapPoint, "icon", image);
            });
        }
    }
}
