/**
 * @file ReplaceWithServer.js
 *
 * Locally provides data that should eventually be loaded dynamically from the
 * server. This is a temporary measure, included only because I want to wait
 * to implement most server-side functionality until the client-side interface
 * is relatively complete.
 */

/**
 * Loads all points of interest on the map.
 *
 * @return  A Promise that loads all directory points when it resolves.
 */
function loadMapPoints() {
    return new Promise(resolve => {
        const points = [];
        points.push(new MapPoint("Spawn", new Point(420, 666),
                    DimensionEnum.OVERWORLD,
                    loadImage("resources/images/icons/star.png")));
        points.push(new MapPoint("Community Crop Farm", new Point(419, 809),
                    DimensionEnum.OVERWORLD,
                    loadImage("resources/images/icons/wheat.png")));
        points.push(new MapPoint("Warpzone", new Point(420, 522),
                    DimensionEnum.OVERWORLD,
                    loadImage("resources/images/icons/warp.png")));
        points.push(new MapPoint("Public Nether Portal",
                    new Point(428, 509),
                    DimensionEnum.OVERWORLD,
                    loadImage("resources/images/icons/portal.png")));
        points.push(new MapPoint("Stronghold",
                    new Point(1227, 1223),
                    DimensionEnum.OVERWORLD,
                    loadImage("resources/images/icons/enderFrame.png")));
        points.push(new MapPoint("Free Stuff Village",
                    new Point(241, 666),
                    DimensionEnum.OVERWORLD,
                    loadImage("resources/images/icons/bell.png")));
        points.push(new MapPoint("BNHA Town",
                    new Point(527, -83),
                    DimensionEnum.OVERWORLD,
                    loadImage("resources/images/icons/bnha.png")));
        points.push(new MapPoint("ClownHeim",
                    new Point(350, 1048),
                    DimensionEnum.OVERWORLD));
        points.push(new MapPoint("Flowertown",
                    new Point(-638, 198),
                    DimensionEnum.OVERWORLD,
                    loadImage("resources/images/icons/flower.png")));
        points.push(new MapPoint("Wizard Tower",
                    new Point(2590, -781),
                    DimensionEnum.OVERWORLD));
        points.push(new MapPoint("Campsiteville",
                    new Point(15996, 13308),
                    DimensionEnum.OVERWORLD));
        points.push(new MapPoint("Bart",
                    new Point(9563, 9114),
                    DimensionEnum.OVERWORLD));
        points.push(new MapPoint("Bumblebee",
                    new Point(14138, 18042),
                    DimensionEnum.OVERWORLD,
                    loadImage("resources/images/icons/bee.png")));
        points.push(new MapPoint("DanganRonpa",
                    new Point(13867, 19004),
                    DimensionEnum.OVERWORLD));
        points.push(new MapPoint("Spire",
                    new Point(14550, 18108),
                    DimensionEnum.OVERWORLD));
        points.push(new MapPoint("Guardian Farm (WIP)",
                    new Point(2266, -1144),
                    DimensionEnum.OVERWORLD,
                    loadImage("resources/images/icons/guardian.png")));
        points.push(new MapPoint("Witch Farm (WIP)",
                    new Point(707, 377),
                    DimensionEnum.OVERWORLD,
                    loadImage("resources/images/icons/potion.png")));
        points.push(new MapPoint("Ender Ender",
                    new Point(274, 0),
                    DimensionEnum.END,
                    loadImage("resources/images/icons/enderYell.png")));
        points.push(new MapPoint("Gold Farm",
                    new Point(638, 647),
                    DimensionEnum.NETHER,
                    loadImage("resources/images/icons/gold.png")));
        resolve(points);
    });
}

/**
 * Initialize all map key values.
 */
function loadAllMapKeys() {
    return new Promise(resolve => {
        const keys = {
            biomes:        new MapKey(),
            structures:    new MapKey(),
            error:         new MapKey(),
            totalActivity: new MapKey()
        };
        // Biome:
        const biomeTiles = "resources/images/biomeTile/";
        keys.biomes.addValue("Plains",
                biomeTiles + "PLAINS.png");
        keys.biomes.addValue("Sunflower Plains",
                biomeTiles + "SUNFLOWER_PLAINS.png");
        keys.biomes.addValue("Forest",
                biomeTiles + "FOREST.png");
        keys.biomes.addValue("Wooded Hills",
                biomeTiles + "WOODED_HILLS.png");
        keys.biomes.addValue("Flower Forest",
                biomeTiles + "FLOWER_FOREST.png");
        keys.biomes.addValue("Birch Forest",
                biomeTiles + "BIRCH_FOREST.png");
        keys.biomes.addValue("Birch Forest Hills",
                biomeTiles + "BIRCH_FOREST_HILLS.png");
        keys.biomes.addValue("Tall Birch Forest",
                biomeTiles + "TALL_BIRCH_FOREST.png");
        keys.biomes.addValue("Tall Birch Hills",
                biomeTiles + "TALL_BIRCH_HILLS.png");
        keys.biomes.addValue("Dark Forest",
                biomeTiles + "DARK_FOREST.png");
        keys.biomes.addValue("Dark Forest Hills",
                biomeTiles + "DARK_FOREST_HILLS.png");
        keys.biomes.addValue("Swamp",
                biomeTiles + "SWAMP.png");
        keys.biomes.addValue("Swamp Hills",
                biomeTiles + "SWAMP_HILLS.png");
        keys.biomes.addValue("Ocean",
                biomeTiles + "OCEAN.png");
        keys.biomes.addValue("Deep Ocean",
                biomeTiles + "DEEP_OCEAN.png");
        keys.biomes.addValue("Frozen Ocean",
                biomeTiles + "FROZEN_OCEAN.png");
        keys.biomes.addValue("Deep Frozen Ocean",
                biomeTiles + "DEEP_FROZEN_OCEAN.png");
        keys.biomes.addValue("Cold Ocean",
                biomeTiles + "COLD_OCEAN.png");
        keys.biomes.addValue("Deep Cold Ocean",
                biomeTiles + "DEEP_COLD_OCEAN.png");
        keys.biomes.addValue("Lukewarm Ocean",
                biomeTiles + "LUKEWARM_OCEAN.png");
        keys.biomes.addValue("Deep Lukewarm Ocean",
                biomeTiles + "DEEP_LUKEWARM_OCEAN.png");
        keys.biomes.addValue("Warm Ocean",
                biomeTiles + "WARM_OCEAN.png");
        keys.biomes.addValue("Deep Warm Ocean",
                biomeTiles + "DEEP_WARM_OCEAN.png");
        keys.biomes.addValue("River",
                biomeTiles + "RIVER.png");
        keys.biomes.addValue("Frozen River",
                biomeTiles + "FROZEN_RIVER.png");
        keys.biomes.addValue("Beach",
                biomeTiles + "BEACH.png");
        keys.biomes.addValue("Stone Shore",
                biomeTiles + "STONE_SHORE.png");
        keys.biomes.addValue("Snowy Beach",
                biomeTiles + "SNOWY_BEACH.png");
        keys.biomes.addValue("Jungle",
                biomeTiles + "JUNGLE.png");
        keys.biomes.addValue("Jungle Hills",
                biomeTiles + "JUNGLE_HILLS.png");
        keys.biomes.addValue("Jungle+",
                biomeTiles + "MODIFIED_JUNGLE.png");
        keys.biomes.addValue("Jungle Edge",
                biomeTiles + "JUNGLE_EDGE.png");
        keys.biomes.addValue("Jungle Edge+",
                biomeTiles + "MODIFIED_JUNGLE_EDGE.png");
        keys.biomes.addValue("Bamboo Jungle",
                biomeTiles + "BAMBOO_JUNGLE.png");
        keys.biomes.addValue("Bamboo Jungle Hills",
                biomeTiles + "BAMBOO_JUNGLE_HILLS.png");
        keys.biomes.addValue("Taiga",
                biomeTiles + "TAIGA.png");
        keys.biomes.addValue("Taiga Hills",
                biomeTiles + "TAIGA_HILLS.png");
        keys.biomes.addValue("Taiga Mountains",
                biomeTiles + "TAIGA_MOUNTAINS.png");
        keys.biomes.addValue("Snowy Taiga",
                biomeTiles + "SNOWY_TAIGA.png");
        keys.biomes.addValue("Snowy Taiga Hills",
                biomeTiles + "SNOWY_TAIGA_HILLS.png");
        keys.biomes.addValue("Snowy Taiga Mountains",
                biomeTiles + "SNOWY_TAIGA_MOUNTAINS.png");
        keys.biomes.addValue("Giant Tree Taiga",
                biomeTiles + "GIANT_TREE_TAIGA.png");
        keys.biomes.addValue("Giant Tree Taiga Hills",
                biomeTiles + "GIANT_TREE_TAIGA_HILLS.png");
        keys.biomes.addValue("Giant Spruce Taiga",
                biomeTiles + "GIANT_SPRUCE_TAIGA.png");
        keys.biomes.addValue("Giant Spruce Taiga Hills",
                biomeTiles + "GIANT_SPRUCE_TAIGA_HILLS.png");
        keys.biomes.addValue("Mushroom Fields",
                biomeTiles + "MUSHROOM_FIELDS.png");
        keys.biomes.addValue("Mushroom Fields Shore",
                biomeTiles + "MUSHROOM_FIELDS_SHORE.png");
        keys.biomes.addValue("Savanna",
                biomeTiles + "SAVANNA.png");
        keys.biomes.addValue("Savanna Plateau",
                biomeTiles + "SAVANNA_PLATEAU.png");
        keys.biomes.addValue("Shattered Savanna",
                biomeTiles + "SHATTERED_SAVANNA.png");
        keys.biomes.addValue("Shattered Savanna Plateau",
                biomeTiles + "SHATTERED_SAVANNA_PLATEAU.png");
        keys.biomes.addValue("Desert",
                biomeTiles + "DESERT.png");
        keys.biomes.addValue("Desert Hills",
                biomeTiles + "DESERT_HILLS.png");
        keys.biomes.addValue("Desert Lakes",
                biomeTiles + "DESERT_LAKES.png");
        keys.biomes.addValue("Snowy Tundra",
                biomeTiles + "SNOWY_TUNDRA.png");
        keys.biomes.addValue("Snowy Mountains",
                biomeTiles + "SNOWY_MOUNTAINS.png");
        keys.biomes.addValue("Ice Spikes",
                biomeTiles + "ICE_SPIKES.png");
        keys.biomes.addValue("Mountains",
                biomeTiles + "MOUNTAINS.png");
        keys.biomes.addValue("Wooded Mountains",
                biomeTiles + "WOODED_MOUNTAINS.png");
        keys.biomes.addValue("Gravelly Mountains",
                biomeTiles + "GRAVELLY_MOUNTAINS.png");
        keys.biomes.addValue("Gravelly Mountains+",
                biomeTiles + "MODIFIED_GRAVELLY_MOUNTAINS.png");
        keys.biomes.addValue("Mountain Edge",
                biomeTiles + "MOUNTAIN_EDGE.png");
        keys.biomes.addValue("Badlands",
                biomeTiles + "BADLANDS.png");
        keys.biomes.addValue("Badlands Plateau",
                biomeTiles + "BADLANDS_PLATEAU.png");
        keys.biomes.addValue("Badlands Plateau+",
                biomeTiles + "MODIFIED_BADLANDS_PLATEAU.png");
        keys.biomes.addValue("Wooded Badlands Plateau",
                biomeTiles + "WOODED_BADLANDS_PLATEAU.png");
        keys.biomes.addValue("Wooded Badlands Plateau+",
                biomeTiles + "MODIFIED_WOODED_BADLANDS_PLATEAU.png");
        keys.biomes.addValue("Eroded Badlands",
                biomeTiles + "ERODED_BADLANDS.png");
        keys.biomes.addValue("Nether",
                biomeTiles + "NETHER.png");
        keys.biomes.addValue("The End",
                biomeTiles + "THE_END.png");
        keys.biomes.addValue("Small End Islands",
                biomeTiles + "SMALL_END_ISLANDS.png");
        keys.biomes.addValue("End Midlands",
                biomeTiles + "END_MIDLANDS.png");
        keys.biomes.addValue("End Highlands",
                biomeTiles + "END_HIGHLANDS.png");
        keys.biomes.addValue("End Barrens",
                biomeTiles + "END_BARRENS.png");
        keys.biomes.addValue("The Void",
                biomeTiles + "THE_VOID.png");

        // Structure:
        keys.structures.addValue("Ocean Monument",   "#00E2AA");
        keys.structures.addValue("Woodland Mansion", "#AE5C28");
        keys.structures.addValue("Swamp Hut",        "#054C3E");
        keys.structures.addValue("Mineshaft",        "#850603");
        keys.structures.addValue("Igloo",            "#0DE0EC");
        keys.structures.addValue("Stronghold",       "#A30CCC");
        keys.structures.addValue("Desert Pyramid",   "#D0FF00");
        keys.structures.addValue("Jungle Pyramid",   "#9D9709");
        keys.structures.addValue("Pillager Outpost", "#9D9709");
        keys.structures.addValue("Village",          "#B1AEAE");
        keys.structures.addValue("Ocean Ruin",       "#000D55");
        keys.structures.addValue("Shipwreck",        "#5C253E");
        keys.structures.addValue("Buried Treasure",  "#FFB600");
        keys.structures.addValue("End City",         "#E5D7D7");
        keys.structures.addValue("Nether Fortress",  "#A04E44");

        // Error:
        keys.error.addValue("No errors",          "#00FF00");
        keys.error.addValue("Bad data offset",    "#FFFF00");
        keys.error.addValue("Missing chunk data", "#0000FF");
        keys.error.addValue("Invalid NBT",        "#FF0000");

        // Total Activity:
        keys.totalActivity.addValue("No activity",             "#000000");
        keys.totalActivity.addValue("One minute or less",      "#0000FF");
        keys.totalActivity.addValue("Ten minutes or less",     "#00FFFF");
        keys.totalActivity.addValue("One hour or less",        "#FF00FF");
        keys.totalActivity.addValue("Five hours or less",      "#FF0000");
        keys.totalActivity.addValue("One day or less",         "#FFA500");
        keys.totalActivity.addValue("More than one day",       "#FFFF00");
        keys.totalActivity.addValue("Greatest total activity", "#FFFFFF");
        resolve(keys);
    });
}

var tileURLs;

function loadTileURLs(dimension, mapType, tileSize) {
    assertIsEnum(dimension, DimensionEnum, "loadTileURLs");
    assertIsEnum(mapType, MapTypeEnum, "loadTileURLs");
    assertIsEnum(tileSize, TileSizeEnum, "loadTileURLs");
    if (! isDefined(tileURLs))
    {
        tileURLs = {};
        DimensionEnum.forEach(dim => {
            tileURLs[dim] = {};
            MapTypeEnum.forEach(type => {
                tileURLs[dim][type] = {};
                TileSizeEnum.forEach(size => {
                    tileURLs[dim][type][size] = [];
                });
            });
        });
        // IMAGES BEGIN
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/biome/tiles-512/Overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/biome/tiles-128/Overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/biome/tiles-64/Overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/biome/tiles-32/Overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.-1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.1024.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/activity/tiles-512/Overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.-1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.1024.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/activity/tiles-128/Overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.-1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.1024.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/activity/tiles-64/Overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.-1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.1024.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/activity/tiles-32/Overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.1024.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.-1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.1024.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.3584.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.-1536.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.2560.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.512.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.3584.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.0.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.6144.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.1024.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.1024.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.0.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.-1024.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.512.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.0.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/structure/tiles-512/Overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.1024.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.-1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.1024.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.3584.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.-1536.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.2560.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.512.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.3584.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.0.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.6144.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.1024.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.1024.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.0.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.-1024.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.512.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.0.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/structure/tiles-128/Overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.1024.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.-1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.1024.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.3584.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.-1536.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.2560.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.512.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.3584.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.0.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.6144.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.1024.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.1024.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.0.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.-1024.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.512.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.0.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/structure/tiles-64/Overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.1024.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.-1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.1024.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.3584.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.-1536.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.2560.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.512.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.3584.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.0.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.6144.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.1024.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.1024.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.0.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.-1024.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.512.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.0.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/structure/tiles-32/Overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.-1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.1024.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/errors/tiles-512/Overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.-1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.1024.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/errors/tiles-128/Overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.-1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.1024.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/errors/tiles-64/Overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.-1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.1024.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/errors/tiles-32/Overworld.-1536.1536.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/biome/tiles-512/Nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/biome/tiles-512/Nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/biome/tiles-512/Nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/biome/tiles-512/Nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/biome/tiles-512/Nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/biome/tiles-512/Nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/biome/tiles-512/Nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/biome/tiles-128/Nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/biome/tiles-128/Nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/biome/tiles-128/Nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/biome/tiles-128/Nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/biome/tiles-128/Nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/biome/tiles-128/Nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/biome/tiles-128/Nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/biome/tiles-64/Nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/biome/tiles-64/Nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/biome/tiles-64/Nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/biome/tiles-64/Nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/biome/tiles-64/Nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/biome/tiles-64/Nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/biome/tiles-64/Nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/biome/tiles-32/Nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/biome/tiles-32/Nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/biome/tiles-32/Nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/biome/tiles-32/Nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/biome/tiles-32/Nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/biome/tiles-32/Nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/biome/tiles-32/Nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/activity/tiles-512/Nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/activity/tiles-512/Nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/activity/tiles-512/Nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/activity/tiles-512/Nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/activity/tiles-512/Nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/activity/tiles-512/Nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/activity/tiles-512/Nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/activity/tiles-128/Nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/activity/tiles-128/Nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/activity/tiles-128/Nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/activity/tiles-128/Nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/activity/tiles-128/Nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/activity/tiles-128/Nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/activity/tiles-128/Nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/activity/tiles-64/Nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/activity/tiles-64/Nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/activity/tiles-64/Nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/activity/tiles-64/Nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/activity/tiles-64/Nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/activity/tiles-64/Nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/activity/tiles-64/Nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/activity/tiles-32/Nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/activity/tiles-32/Nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/activity/tiles-32/Nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/activity/tiles-32/Nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/activity/tiles-32/Nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/activity/tiles-32/Nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/activity/tiles-32/Nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/structure/tiles-512/Nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/structure/tiles-512/Nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/structure/tiles-512/Nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/structure/tiles-512/Nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/structure/tiles-512/Nether.512.1024.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/structure/tiles-512/Nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/structure/tiles-512/Nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/structure/tiles-512/Nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/structure/tiles-128/Nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/structure/tiles-128/Nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/structure/tiles-128/Nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/structure/tiles-128/Nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/structure/tiles-128/Nether.512.1024.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/structure/tiles-128/Nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/structure/tiles-128/Nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/structure/tiles-128/Nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/structure/tiles-64/Nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/structure/tiles-64/Nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/structure/tiles-64/Nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/structure/tiles-64/Nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/structure/tiles-64/Nether.512.1024.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/structure/tiles-64/Nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/structure/tiles-64/Nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/structure/tiles-64/Nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/structure/tiles-32/Nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/structure/tiles-32/Nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/structure/tiles-32/Nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/structure/tiles-32/Nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/structure/tiles-32/Nether.512.1024.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/structure/tiles-32/Nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/structure/tiles-32/Nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/structure/tiles-32/Nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/errors/tiles-512/Nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/errors/tiles-512/Nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/errors/tiles-512/Nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/errors/tiles-512/Nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/errors/tiles-512/Nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/errors/tiles-512/Nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/errors/tiles-512/Nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/errors/tiles-128/Nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/errors/tiles-128/Nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/errors/tiles-128/Nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/errors/tiles-128/Nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/errors/tiles-128/Nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/errors/tiles-128/Nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/errors/tiles-128/Nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/errors/tiles-64/Nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/errors/tiles-64/Nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/errors/tiles-64/Nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/errors/tiles-64/Nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/errors/tiles-64/Nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/errors/tiles-64/Nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/errors/tiles-64/Nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/errors/tiles-32/Nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/errors/tiles-32/Nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/errors/tiles-32/Nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/errors/tiles-32/Nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/errors/tiles-32/Nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/errors/tiles-32/Nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/errors/tiles-32/Nether.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/End/biome/tiles-512/End.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/End/biome/tiles-512/End.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/End/biome/tiles-512/End.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/End/biome/tiles-512/End.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/End/biome/tiles-512/End.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/End/biome/tiles-128/End.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/End/biome/tiles-128/End.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/End/biome/tiles-128/End.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/End/biome/tiles-128/End.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/End/biome/tiles-128/End.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/End/biome/tiles-64/End.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/End/biome/tiles-64/End.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/End/biome/tiles-64/End.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/End/biome/tiles-64/End.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/End/biome/tiles-64/End.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/End/biome/tiles-32/End.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/End/biome/tiles-32/End.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/End/biome/tiles-32/End.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/End/biome/tiles-32/End.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/End/biome/tiles-32/End.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/End/activity/tiles-512/End.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/End/activity/tiles-512/End.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/End/activity/tiles-512/End.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/End/activity/tiles-512/End.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/End/activity/tiles-512/End.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/End/activity/tiles-128/End.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/End/activity/tiles-128/End.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/End/activity/tiles-128/End.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/End/activity/tiles-128/End.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/End/activity/tiles-128/End.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/End/activity/tiles-64/End.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/End/activity/tiles-64/End.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/End/activity/tiles-64/End.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/End/activity/tiles-64/End.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/End/activity/tiles-64/End.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/End/activity/tiles-32/End.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/End/activity/tiles-32/End.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/End/activity/tiles-32/End.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/End/activity/tiles-32/End.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/End/activity/tiles-32/End.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/End/structure/tiles-512/End.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/End/structure/tiles-512/End.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/End/structure/tiles-512/End.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/End/structure/tiles-512/End.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/End/structure/tiles-512/End.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/End/structure/tiles-128/End.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/End/structure/tiles-128/End.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/End/structure/tiles-128/End.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/End/structure/tiles-128/End.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/End/structure/tiles-128/End.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/End/structure/tiles-64/End.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/End/structure/tiles-64/End.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/End/structure/tiles-64/End.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/End/structure/tiles-64/End.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/End/structure/tiles-64/End.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/End/structure/tiles-32/End.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/End/structure/tiles-32/End.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/End/structure/tiles-32/End.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/End/structure/tiles-32/End.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/End/structure/tiles-32/End.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/End/errors/tiles-512/End.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/End/errors/tiles-512/End.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/End/errors/tiles-512/End.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/End/errors/tiles-512/End.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/End/errors/tiles-512/End.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/End/errors/tiles-128/End.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/End/errors/tiles-128/End.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/End/errors/tiles-128/End.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/End/errors/tiles-128/End.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/End/errors/tiles-128/End.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/End/errors/tiles-64/End.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/End/errors/tiles-64/End.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/End/errors/tiles-64/End.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/End/errors/tiles-64/End.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/End/errors/tiles-64/End.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/End/errors/tiles-32/End.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/End/errors/tiles-32/End.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/End/errors/tiles-32/End.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/End/errors/tiles-32/End.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/End/errors/tiles-32/End.0.-512.png");
        // IMAGES END
    }
    return new Promise(resolve =>
            resolve(tileURLs[dimension][mapType][tileSize]));
}
