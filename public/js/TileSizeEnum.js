/*
 * @file TileSizeEnum.js
 *
 * Enumerates map tile size options.
 */
const TileSizeEnum = createEnum("TileSizeEnum",
        ["TILES_32", "TILES_64", "TILES_128", "TILES_512"], [
            [["name", "tiles-32"], ["size", 32]],
            [["name", "tiles-64"], ["size", 64]],
            [["name", "tiles-128"], ["size", 128]],
            [["name", "tiles-512"], ["size", 512]],
        ]
);
