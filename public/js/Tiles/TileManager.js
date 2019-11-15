/**
 * @file TileManager.js
 *
 * Loads and shares sets of map image tiles.
 */
class ImageTiles {
    /**
     * Starts loading all tile image element lists.
     */
    constructor() {
        this._tiles = {};
        const imageURLs = {};
        RegionEnum.forEach((regionType) => {
            this._tiles[regionType] = {};
            imageURLs[regionType] = {};
            MapTypeEnum.forEach((mapType) => {
                this._tiles[regionType][mapType] = {};
                imageURLs[regionType][mapType] = {};
                TileSizeEnum.forEach((sizeType) => {
                    this._tiles[regionType][mapType][sizeType] = [];
                    imageURLs[regionType][mapType][sizeType] = [];
                });
            });
        });
        this._imagesLoading = 0;
        this._totalImages = 0;
        const imageTiles = this;
        const tileRequest = new Request('tiles');
        this._loadingPromise = fetch(tileRequest)
        .then((response) => response.json())
        .then((tileArray) => {
            imageTiles._totalImages = tileArray.length;
            imageTiles._imagesLoading = imageTiles._totalImages;
            tileArray.forEach((tile) => {
                const region = RegionEnum.withProperty("name",
                        tile.region_name);
                const mapType = MapTypeEnum.withProperty("name",
                        tile.map_type);
                const sizeType = TileSizeEnum.withProperty("size",
                        tile.tile_size);
                imageURLs[region][mapType][sizeType].push(tile.image_url);
            });
            // Iterate through each region/map type/size combination and
            // load tile sets:
            const numCombinations = RegionEnum.count * MapTypeEnum.count
                    * TileSizeEnum.count;
            for (let i = 0; i < numCombinations; i++) {
                let factoredIdx = i;
                const sizeIdx = 1 + (factoredIdx % TileSizeEnum.count);
                factoredIdx = Math.floor(factoredIdx / TileSizeEnum.count);
                const typeIdx = 1 + (factoredIdx % MapTypeEnum.count);
                factoredIdx = Math.floor(factoredIdx / MapTypeEnum.count);
                const regionIdx = 1 + factoredIdx;
                const urlSet = imageURLs[regionIdx][typeIdx][sizeIdx];
                imageTiles._tiles[regionIdx][typeIdx][sizeIdx]
                        = new TileSet(urlSet, regionIdx, typeIdx, sizeIdx);
            }
        });
    }

    /**
     * Takes action when the list of tile URLs finishes loading.
     *
     * @param onLoad  A function to run after all tile URLs load. This function
     *                will not be passed any parameters.
     */
    then(onLoad) {
        return this._loadingPromise.then(onLoad);
    }

    /**
     * Gets a specific set of tile image elements.
     *
     * @param region     A RegionEnum value.
     *
     * @param mapType    A MapTypeEnum value.
     *
     * @param sizeType   A TileSizeEnum value.
     *
     * @return           A TileSet with the given region, map type, and size.
     */
    getTileSet(region, mapType, sizeType) {
        assertIsEnum(region, RegionEnum, "ImageTiles.getTileSet");
        assertIsEnum(mapType, MapTypeEnum, "ImageTiles.getTileSet");
        assertIsEnum(sizeType, TileSizeEnum, "ImageTiles.getTileSet");
        return this._tiles[region][mapType][sizeType];
    }
}
