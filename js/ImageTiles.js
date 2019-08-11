/**
 * @file  ImageTiles.js
 *
 * Loads and shares sets of map image tiles.
 */

// Enumerates Minecraft dimension types:
const DimensionEnum = createEnum("DimensionEnum",
    ["OVERWORLD", "NETHER", "END"], [
        [["name", "Overworld"]],
        [["name", "Nether"]],
        [["name", "End"]]
    ]
);

// Enumerates generated map types:
const MapTypeEnum = createEnum("MapTypeEnum",
        ["BIOME", "ERROR", "STRUCTURE", "TOTAL_ACTIVITY"], [
            [["name", "Biome"]],
            [["name", "Error"]],
            [["name", "Structure"]],
            [["name", "TotalActivity"]]
        ]
);

// Enumerates tile size options:
const TileSizeEnum = createEnum("TileSizeEnum",
        ["TILES_512", "TILES_128", "TILES_64", "TILES_32"], [
            [["name", "tiles-512"], ["size", 512]],
            [["name", "tiles-128"], ["size", 128]],
            [["name", "tiles-64"], ["size", 64]],
            [["name", "tiles-32"], ["size", 32]],
        ]
);

class ImageTiles {
    /**
     * Starts loading all tile image element lists.
     */
    constructor() {
        this.tiles = {};
        this.imagesLoading = 0;
        this.totalImages = 0;
        // Iterate through each dimension/map type/size combination and load
        // images:
        const numCombinations = DimensionEnum.count * MapTypeEnum.count
                * TileSizeEnum.count;
        let promisedTileSets = [];
        for (let i = 0; i < numCombinations; i++) {
            let factoredIdx = i;
            const dimIdx = 1 + (factoredIdx % DimensionEnum.count);
            factoredIdx = Math.floor(factoredIdx / DimensionEnum.count);
            const typeIdx = 1 + (factoredIdx % MapTypeEnum.count);
            factoredIdx = Math.floor(factoredIdx / MapTypeEnum.count);
            const sizeIdx = 1 + factoredIdx;
            if (typeof this.tiles[dimIdx] === "undefined") {
                this.tiles[dimIdx] = {};
            }
            if (typeof this.tiles[dimIdx][typeIdx] === "undefined") {
                this.tiles[dimIdx][typeIdx] = {};
            }
            if (typeof this.tiles[dimIdx][typeIdx][sizeIdx] === "undefined") {
                this.tiles[dimIdx][typeIdx][sizeIdx] = {};
            }
            const dimType = DimensionEnum.properties[dimIdx].name;
            const mapType = MapTypeEnum.properties[typeIdx].name;
            const sizeType = TileSizeEnum.properties[sizeIdx].size;
            const tileClass = "tile-" + dimType + "-" + mapType + "-"
                    + sizeType;
            const imageTiles = this;
            var tileSetPromise = loadTileURLs(dimIdx, typeIdx, sizeIdx)
                    .then(urlList => loadImageList(urlList))
                    .then(imageList => {
                        imageTiles.tiles[dimIdx][typeIdx][sizeIdx] = imageList;
                    });
            promisedTileSets.push(tileSetPromise);
        }
        this.loadingPromise = Promise.all(promisedTileSets);
    }

    /**
     * Takes action when all image tiles have loaded.
     *
     * @param onLoad  A function to run after all tiles load. This function
     *                will not be passed any parameters.
     */
    then(onLoad) {
        this.loadingPromise.then(onLoad);
    }

    /**
     * Gets a specific set of tile image elements, possibly loading them
     * asynchronously.
     *
     * @param dimension  A DimensionEnum value.
     *
     * @param mapType    A MapTypeEnum value.
     *
     * @param sizeType   A TileSizeEnum value.
     *
     * @return           A Promise returning the set of tiles with the given
     *                   dimension, map type, and size.
     */
    getTileSet(dimension, mapType, sizeType) {
        assertIsEnum(dimension, DimensionEnum, "ImageTiles.getTileSet");
        assertIsEnum(mapType, MapTypeEnum, "ImageTiles.getTileSet");
        assertIsEnum(sizeType, TileSizeEnum, "ImageTiles.getTileSet");
        return this.tiles[dimension][mapType][sizeType];
    }
}
