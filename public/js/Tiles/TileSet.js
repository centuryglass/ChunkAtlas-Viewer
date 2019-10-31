/**
 * @file TileSet.js
 *
 * Initializes and manages a set of map tiles with a shared map type, region,
 * and size.
 */
class TileSet {
    /**
     * Initializes a set of Tile objects with shared properties.
     *
     * @param tileURLs  The set of tile image URLS to load.
     *
     * @param region    The map region containing the tiles, as a RegionEnum
     *                  value.
     *
     * @param type      The map type containing the tiles, as a MapTypeEnum
     *                  value.
     *
     * @param size      The width and height in pixels of each tile, as a
     *                  TileSizeEnum value.
     */
    constructor(tileURLs, region, type, size) {
        assertIsEnum(region, RegionEnum, "Tile constructor");
        assertIsEnum(type, MapTypeEnum, "Tile constructor");
        assertIsEnum(size, TileSizeEnum, "Tile constructor");
        setConstProperty(this, "_urls", tileURLs);
        setConstProperty(this, "_region", region);
        setConstProperty(this, "_type", type);
        setConstProperty(this, "_size", size);
        this._tiles = new Map();
        for (let url of tileURLs) {
            const tile = new Tile(url, region, type, size);
            const coords = tile.getCoordinates();
            if (coords !== null) {
                this._tiles.set(coords.toString(), tile);
            }

        }
    }

    /**
     * Gets an iterator over all tiles in the set.
     *
     * @return  An iterator that steps over all Tile objects.
     */
    [Symbol.iterator]() {
        const tileSet = this;
        const iter = {
            _mapIter: tileSet._tiles[Symbol.iterator](),
            next: function () {
                let result = this._mapIter.next();
                if (isDefined(result.value)) {
                    result.value = result.value[1];
                }
                return result;
            }
        }
        return iter;
    }

    /**
     * Gets the map tile at a specific set of coordinates.
     *
     * @param coordinates  The (x, z) chunk coordinates of a Tile object.
     *
     * @return             The Tile at those coordinates, or undefined if no
     *                     such tile exists.
     */
    getTile(coordinates) {
        assertIsClass(coordinates, Point, "TileSet.getTile");
        return this._tiles.get(coordinates.toString());
    }

    /**
     * Gets the tile set's Minecraft region type.
     *
     * @return  The RegionEnum value representing the tile set's region type.
     */
    getRegion() {
        return this._region;
    }

    /**
     * Gets the tile set's map type.
     *
     * @return  The MapTypeEnum value representing the tile set's map type.
     */
    getMapType() {
        return this._type;
    }

    /**
     * Gets the tile set's resolution.
     *
     * @return  The TileSizeEnum value representing each tile's vertical and
     *          horizontal resolution.
     */
    getSize() {
        return this._size;
    }
}
