/**
 * @file Tile.js
 *
 * Manages a single map image tile.
 */
class Tile {
    /**
     * Loads a map tile image from a URL, saving its properties.
     *
     * @param url     The tile image URL. The tile's chunk coordinates should
     *                be embedded as the last two numbers within the URL
     *                string.
     *
     * @param region  The map region that contains this tile, as a RegionEnum
     *                value.
     *
     * @param type    The map type that contains this tile, as a MapTypeEnum
     *                value.
     *
     * @param size    The tile's width and height in pixels, as a TileSizeEnum
     *                value.
     */
    constructor(url, region, type, size) {
        assert(typeof url === "string" || url instanceof String,
                "Tile constructor: url must be a string.");
        assertIsEnum(region, RegionEnum, "Tile constructor");
        assertIsEnum(type, MapTypeEnum, "Tile constructor");
        assertIsEnum(size, TileSizeEnum, "Tile constructor");
        setConstProperty(this, "_url", url);
        setConstProperty(this, "_region", region);
        setConstProperty(this, "_type", type);
        setConstProperty(this, "_size", size);
        const coordinates = url.match(/-?[0-9]+/g);
        if (coordinates === null) {
            console.log("Tile constructor: Found invalid URL " + url);
        }
        else {
            this._x = coordinates[coordinates.length - 2];
            this._z = coordinates[coordinates.length - 1];
        }
        this._image = null;
        const tile = this;
        loadImage(url).then((img) => {
            tile._image = img;
            if (isDefined(tile._onLoad)) {
                tile._onLoad(img);
            }
        });
    }

    /**
     * Checks if the tile has successfully loaded.
     *
     * @return  Whether the tile's image element has finished loading.
     */
    isLoaded() {
        return this._image !== null;
    }
    
    /**
     * Sets a callback function to run when the tile finishes loading.
     *
     * @param onLoadCallback  The callback to run when the tile's image element
     *                        is available.
     */
    setOnLoad(onLoadCallback) {
        this._onLoad = onLoadCallback;
    }

    /**
     * Gets the tile's image element.
     *
     * @return  The tile image, or null if the tile hasn't finished loading.
     */
    getImage() {
        return this._image;
    }

    /**
     * Gets the tile's Minecraft chunk coordinates.
     *
     * @return  A point object holding the (x, z) tile coordinates, or null if
     *          the tile URL didn't hold valid coordinates.
     */
    getCoordinates() {
        if(! isDefined(this._x) || ! isDefined(this._z)) {
            return null;
        }
        return new Point(this._x, this._z);
    }

    /**
     * Gets the tile's Minecraft region type.
     *
     * @return  The RegionEnum value representing the tile's region type.
     */
    getRegion() {
        return this._region;
    }

    /**
     * Gets the tile's map type.
     *
     * @return  The MapTypeEnum value representing the tile's map type.
     */
    getMapType() {
        return this._type;
    }

    /**
     * Gets the tile's resolution.
     *
     * @return  The TileSizeEnum value representing the tile's vertical and
     *          horizontal resolution.
     */
    getSize() {
        return this._size;
    }
}
