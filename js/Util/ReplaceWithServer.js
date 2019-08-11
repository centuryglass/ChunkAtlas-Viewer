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
        keys.biomes.addValue("Ocean",
                "#1A00FE");
        keys.biomes.addValue("Deep Ocean",
                "#160150");
        keys.biomes.addValue("Frozen Ocean",
                "#C2BBFF");
        keys.biomes.addValue("Deep Frozen Ocean",
                "#2A3659");
        keys.biomes.addValue("Cold Ocean",
                "#7667FF");
        keys.biomes.addValue("Deep Cold Ocean",
                "#2A3659");
        keys.biomes.addValue("Lukewarm Ocean",
                "#0081FF");
        keys.biomes.addValue("Deep Lukewarm Ocean",
                "#003451");
        keys.biomes.addValue("Warm Ocean",
                "#00A4FF");
        keys.biomes.addValue("Deep Warm Ocean",
                "#003451");
        keys.biomes.addValue("River",
                "#726FFF");
        keys.biomes.addValue("Frozen River",
                "#C6C5FF");
        keys.biomes.addValue("Beach",
                "#9C9F88");
        keys.biomes.addValue("Stone Shore",
                "#515345");
        keys.biomes.addValue("Snowy Beach",
                "#E2E6C8");
        keys.biomes.addValue("Forest",
                "#0BA10C");
        keys.biomes.addValue("Wooded Hills",
                "#0CB903");
        keys.biomes.addValue("Flower Forest",
                "#FA93FF");
        keys.biomes.addValue("Birch Forest",
                "#73B674");
        keys.biomes.addValue("Birch Forest Hills",
                "#7ECD7F");
        keys.biomes.addValue("Tall Birch Forest",
                "#7BB87C");
        keys.biomes.addValue("Tall Birch Hills",
                "#A4E9A5");
        keys.biomes.addValue("Dark Forest",
                "#365F36");
        keys.biomes.addValue("Dark Forest Hills",
                "#4A834A");
        keys.biomes.addValue("Jungle",
                "#004A4A");
        keys.biomes.addValue("Jungle Hills",
                "#026262");
        keys.biomes.addValue("Jungle+",
                "#168181");
        keys.biomes.addValue("Jungle Edge",
                "#45897A");
        keys.biomes.addValue("Jungle Edge+",
                "#5CBFB7");
        keys.biomes.addValue("Bamboo Jungle",
                "#9E968D");
        keys.biomes.addValue("Bamboo Jungle Hills",
                "#BFB3A6");
        keys.biomes.addValue("Taiga",
                "#543836");
        keys.biomes.addValue("Taiga Hills",
                "#714C49");
        keys.biomes.addValue("Taiga Mountains",
                "#BD7D79");
        keys.biomes.addValue("Snowy Taiga",
                "#958989");
        keys.biomes.addValue("Snowy Taiga Hills",
                "#C2B1B1");
        keys.biomes.addValue("Snowy Taiga Mountains",
                "#DEC2C2");
        keys.biomes.addValue("Giant Tree Taiga",
                "#401613");
        keys.biomes.addValue("Giant Tree Taiga Hills",
                "#6C231E");
        keys.biomes.addValue("Giant Spruce Taiga",
                "#7D5046");
        keys.biomes.addValue("Giant Spruce Taiga Hills",
                "#996356");
        keys.biomes.addValue("Mushroom Fields",
                "#A10B2C");
        keys.biomes.addValue("Mushroom Fields Shore",
                "#E26681");
        keys.biomes.addValue("Swamp",
                "#491D5E");
        keys.biomes.addValue("Swamp Hills",
                "#8630AF");
        keys.biomes.addValue("Savanna",
                "#90670C");
        keys.biomes.addValue("Savanna Plateau",
                "#B17E0E");
        keys.biomes.addValue("Shattered Savanna",
                "#B39042");
        keys.biomes.addValue("Shattered Savanna Plateau",
                "#F8CF75");
        keys.biomes.addValue("Plains",
                "#B4FF00");
        keys.biomes.addValue("Sunflower Plains",
                "#E0FB96");
        keys.biomes.addValue("Desert",
                "#CEBB00");
        keys.biomes.addValue("Desert Hills",
                "#FFE800");
        keys.biomes.addValue("Desert Lakes",
                "#FBF6C4");
        keys.biomes.addValue("Snowy Tundra",
                "#AEBABA");
        keys.biomes.addValue("Snowy Mountains",
                "#CFEAEB");
        keys.biomes.addValue("Ice Spikes",
                "#556A6F");
        keys.biomes.addValue("Mountains",
                "#7E7A7A");
        keys.biomes.addValue("Wooded Mountains",
                "#7E8A7E");
        keys.biomes.addValue("Gravelly Mountains",
                "#5C635C");
        keys.biomes.addValue("Gravelly Mountains+",
                "#424442");
        keys.biomes.addValue("Mountain Edge",
                "#333633");
        keys.biomes.addValue("Badlands",
                "#D82D04");
        keys.biomes.addValue("Badlands Plateau",
                "#E95E42");
        keys.biomes.addValue("Badlands Plateau+",
                "#F7866F");
        keys.biomes.addValue("Wooded Badlands Plateau",
                "#681100");
        keys.biomes.addValue("Wooded Badlands Plateau+",
                "#BF2200");
        keys.biomes.addValue("Eroded Badlands",
                "#841A00");
        keys.biomes.addValue("Nether",
                "#FF1858");
        keys.biomes.addValue("The End",
                "#CEC8AB");
        keys.biomes.addValue("Small End Islands",
                "#CDC28E");
        keys.biomes.addValue("End Midlands",
                "#B4AB7F");
        keys.biomes.addValue("End Highlands",
                "#F4F0DA");
        keys.biomes.addValue("End Barrens",
                "#91908A");
        keys.biomes.addValue("The Void",
                "#000000");

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
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.-1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.1024.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Error/tiles-512/overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.-1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.1024.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Error/tiles-128/overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.-1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.1024.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Error/tiles-64/overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.-1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.1024.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Error/tiles-32/overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.-1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.1024.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/TotalActivity/tiles-512/overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.-1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.1024.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/TotalActivity/tiles-128/overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.-1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.1024.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/TotalActivity/tiles-64/overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.-1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.1024.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/TotalActivity/tiles-32/overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.-1024.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.1024.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.-1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.-1536.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.1024.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.1024.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.6144.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.2560.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.3584.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.0.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.512.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.1024.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.3584.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.0.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.512.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.0.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Structure/tiles-512/overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.-1024.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.1024.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.-1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.-1536.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.1024.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.1024.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.6144.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.2560.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.3584.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.0.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.512.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.1024.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.3584.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.0.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.512.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.0.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Structure/tiles-128/overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.-1024.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.1024.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.-1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.-1536.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.1024.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.1024.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.6144.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.2560.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.3584.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.0.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.512.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.1024.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.3584.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.0.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.512.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.0.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Structure/tiles-64/overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.-1024.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.1024.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.-1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.-1536.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.1024.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.1024.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.6144.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.2560.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.3584.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.0.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.512.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.1024.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.3584.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.0.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.512.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.0.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Structure/tiles-32/overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Overworld/Biome/tiles-512/overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Overworld/Biome/tiles-128/overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Overworld/Biome/tiles-64/overworld.-512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.0.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.6144.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.-2048.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.-1024.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.-512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.3072.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.512.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.2560.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.-1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.3072.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.62464.62464.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.-1536.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.26112.26112.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.6144.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.-3584.3072.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.0.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.-1024.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.-3584.-3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.0.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.-2048.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.-1536.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.26112.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.0.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.-512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.5632.6144.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.-2048.-2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.5632.5632.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.1536.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.4096.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.-1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.512.-512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.2048.2048.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.512.-1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.1536.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.1024.3584.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.1536.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.-512.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.-2048.1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.-1536.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.512.0.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.0.2560.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.4096.4096.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.-512.-1536.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.-1024.512.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.1024.1024.png");
        tileURLs[DimensionEnum.OVERWORLD][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Overworld/Biome/tiles-32/overworld.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/Error/tiles-512/nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/Error/tiles-512/nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/Error/tiles-512/nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/Error/tiles-512/nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/Error/tiles-512/nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/Error/tiles-512/nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/Error/tiles-512/nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/Error/tiles-128/nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/Error/tiles-128/nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/Error/tiles-128/nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/Error/tiles-128/nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/Error/tiles-128/nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/Error/tiles-128/nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/Error/tiles-128/nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/Error/tiles-64/nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/Error/tiles-64/nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/Error/tiles-64/nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/Error/tiles-64/nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/Error/tiles-64/nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/Error/tiles-64/nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/Error/tiles-64/nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/Error/tiles-32/nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/Error/tiles-32/nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/Error/tiles-32/nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/Error/tiles-32/nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/Error/tiles-32/nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/Error/tiles-32/nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/Error/tiles-32/nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/TotalActivity/tiles-512/nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/TotalActivity/tiles-512/nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/TotalActivity/tiles-512/nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/TotalActivity/tiles-512/nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/TotalActivity/tiles-512/nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/TotalActivity/tiles-512/nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/TotalActivity/tiles-512/nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/TotalActivity/tiles-128/nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/TotalActivity/tiles-128/nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/TotalActivity/tiles-128/nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/TotalActivity/tiles-128/nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/TotalActivity/tiles-128/nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/TotalActivity/tiles-128/nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/TotalActivity/tiles-128/nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/TotalActivity/tiles-64/nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/TotalActivity/tiles-64/nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/TotalActivity/tiles-64/nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/TotalActivity/tiles-64/nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/TotalActivity/tiles-64/nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/TotalActivity/tiles-64/nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/TotalActivity/tiles-64/nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/TotalActivity/tiles-32/nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/TotalActivity/tiles-32/nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/TotalActivity/tiles-32/nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/TotalActivity/tiles-32/nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/TotalActivity/tiles-32/nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/TotalActivity/tiles-32/nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/TotalActivity/tiles-32/nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/Structure/tiles-512/nether.512.1024.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/Structure/tiles-512/nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/Structure/tiles-512/nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/Structure/tiles-512/nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/Structure/tiles-512/nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/Structure/tiles-512/nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/Structure/tiles-512/nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/Structure/tiles-512/nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/Structure/tiles-128/nether.512.1024.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/Structure/tiles-128/nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/Structure/tiles-128/nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/Structure/tiles-128/nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/Structure/tiles-128/nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/Structure/tiles-128/nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/Structure/tiles-128/nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/Structure/tiles-128/nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/Structure/tiles-64/nether.512.1024.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/Structure/tiles-64/nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/Structure/tiles-64/nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/Structure/tiles-64/nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/Structure/tiles-64/nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/Structure/tiles-64/nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/Structure/tiles-64/nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/Structure/tiles-64/nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/Structure/tiles-32/nether.512.1024.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/Structure/tiles-32/nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/Structure/tiles-32/nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/Structure/tiles-32/nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/Structure/tiles-32/nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/Structure/tiles-32/nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/Structure/tiles-32/nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/Structure/tiles-32/nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/Biome/tiles-512/nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/Biome/tiles-512/nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/Biome/tiles-512/nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/Biome/tiles-512/nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/Biome/tiles-512/nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/Biome/tiles-512/nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/Nether/Biome/tiles-512/nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/Biome/tiles-128/nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/Biome/tiles-128/nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/Biome/tiles-128/nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/Biome/tiles-128/nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/Biome/tiles-128/nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/Biome/tiles-128/nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/Nether/Biome/tiles-128/nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/Biome/tiles-64/nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/Biome/tiles-64/nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/Biome/tiles-64/nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/Biome/tiles-64/nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/Biome/tiles-64/nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/Biome/tiles-64/nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/Nether/Biome/tiles-64/nether.512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/Biome/tiles-32/nether.512.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/Biome/tiles-32/nether.-512.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/Biome/tiles-32/nether.1024.512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/Biome/tiles-32/nether.0.0.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/Biome/tiles-32/nether.-512.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/Biome/tiles-32/nether.0.-512.png");
        tileURLs[DimensionEnum.NETHER][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/Nether/Biome/tiles-32/nether.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/End/Error/tiles-512/end.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/End/Error/tiles-512/end.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/End/Error/tiles-512/end.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/End/Error/tiles-512/end.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_512].push("resources/images/tiles/End/Error/tiles-512/end.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/End/Error/tiles-128/end.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/End/Error/tiles-128/end.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/End/Error/tiles-128/end.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/End/Error/tiles-128/end.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_128].push("resources/images/tiles/End/Error/tiles-128/end.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/End/Error/tiles-64/end.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/End/Error/tiles-64/end.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/End/Error/tiles-64/end.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/End/Error/tiles-64/end.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_64].push("resources/images/tiles/End/Error/tiles-64/end.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/End/Error/tiles-32/end.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/End/Error/tiles-32/end.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/End/Error/tiles-32/end.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/End/Error/tiles-32/end.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.ERROR][TileSizeEnum.TILES_32].push("resources/images/tiles/End/Error/tiles-32/end.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/End/TotalActivity/tiles-512/end.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/End/TotalActivity/tiles-512/end.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/End/TotalActivity/tiles-512/end.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/End/TotalActivity/tiles-512/end.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_512].push("resources/images/tiles/End/TotalActivity/tiles-512/end.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/End/TotalActivity/tiles-128/end.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/End/TotalActivity/tiles-128/end.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/End/TotalActivity/tiles-128/end.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/End/TotalActivity/tiles-128/end.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_128].push("resources/images/tiles/End/TotalActivity/tiles-128/end.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/End/TotalActivity/tiles-64/end.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/End/TotalActivity/tiles-64/end.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/End/TotalActivity/tiles-64/end.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/End/TotalActivity/tiles-64/end.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_64].push("resources/images/tiles/End/TotalActivity/tiles-64/end.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/End/TotalActivity/tiles-32/end.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/End/TotalActivity/tiles-32/end.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/End/TotalActivity/tiles-32/end.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/End/TotalActivity/tiles-32/end.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.TOTAL_ACTIVITY][TileSizeEnum.TILES_32].push("resources/images/tiles/End/TotalActivity/tiles-32/end.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/End/Structure/tiles-512/end.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/End/Structure/tiles-512/end.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/End/Structure/tiles-512/end.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/End/Structure/tiles-512/end.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_512].push("resources/images/tiles/End/Structure/tiles-512/end.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/End/Structure/tiles-128/end.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/End/Structure/tiles-128/end.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/End/Structure/tiles-128/end.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/End/Structure/tiles-128/end.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_128].push("resources/images/tiles/End/Structure/tiles-128/end.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/End/Structure/tiles-64/end.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/End/Structure/tiles-64/end.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/End/Structure/tiles-64/end.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/End/Structure/tiles-64/end.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_64].push("resources/images/tiles/End/Structure/tiles-64/end.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/End/Structure/tiles-32/end.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/End/Structure/tiles-32/end.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/End/Structure/tiles-32/end.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/End/Structure/tiles-32/end.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.STRUCTURE][TileSizeEnum.TILES_32].push("resources/images/tiles/End/Structure/tiles-32/end.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/End/Biome/tiles-512/end.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/End/Biome/tiles-512/end.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/End/Biome/tiles-512/end.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/End/Biome/tiles-512/end.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_512].push("resources/images/tiles/End/Biome/tiles-512/end.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/End/Biome/tiles-128/end.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/End/Biome/tiles-128/end.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/End/Biome/tiles-128/end.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/End/Biome/tiles-128/end.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_128].push("resources/images/tiles/End/Biome/tiles-128/end.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/End/Biome/tiles-64/end.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/End/Biome/tiles-64/end.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/End/Biome/tiles-64/end.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/End/Biome/tiles-64/end.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_64].push("resources/images/tiles/End/Biome/tiles-64/end.-512.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/End/Biome/tiles-32/end.-512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/End/Biome/tiles-32/end.0.-512.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/End/Biome/tiles-32/end.512.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/End/Biome/tiles-32/end.0.0.png");
        tileURLs[DimensionEnum.END][MapTypeEnum.BIOME][TileSizeEnum.TILES_32].push("resources/images/tiles/End/Biome/tiles-32/end.-512.-512.png");
        // IMAGES END
    }
    return new Promise(resolve =>
            resolve(tileURLs[dimension][mapType][tileSize]));
}
