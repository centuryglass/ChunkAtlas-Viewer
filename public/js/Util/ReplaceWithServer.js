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
