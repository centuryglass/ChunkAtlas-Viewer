/**
 * @file ChunkAtlas.js
 *
 * The main ChunkAtlas page script.
 */

document.addEventListener("DOMContentLoaded", pageLoaded);

// Map canvas element object manager:
var mapCanvas;
// Map key element manager:
var keyManager;
// Image tile collection object:
var imageTiles;
// User input handler object:
var inputHandler;
// Tile size in chunks:
const TILE_SIZE = 512;
// width/height ratio where the map switches between portrait and canvas mode:
const DISPLAY_TRANSITION_RATIO = 1.25;
// Classes with portrait/landscape specific modes:
const ASPECT_SPECIFIC_CLASSES = [
    "mainContent",
    "majorPanel",
    "controlPanel",
    "mapButtonGroup",
    "mapButtonGroupLabel",
    "navPanel",
    "infoPanel",
    "keyContainer",
    "horizontalPanel",
    "buttonGrid"
];

/**
 * Initialize the MapCanvas and set up other event managers when the DOM loads.
 */
function pageLoaded() {
    console.log("Page content loaded.");
    imageTiles = new ImageTiles();
    keyManager = new MapKeyManager();
    imageTiles.then(function() {
        console.log("Image tiles loaded.");
        const canvas = document.getElementById("mapCanvas");
        mapCanvas = new MapCanvas(canvas, imageTiles, TILE_SIZE);
        inputHandler = new MapInput(mapCanvas, canvas);
        const resetButton = document.getElementById("resetButton");
        resetButton.onclick = function() {mapCanvas.reset();};
        scaleCanvas();
        keyManager.then(function() {
            console.log("Map keys loaded.");
            keyManager.setDisplayedKey(mapCanvas.getRegion(),
                    mapCanvas.getMapType());
        })
        .catch((err) => {
            console.log("ChunkAtlas: Error loading map keys:");
            console.dir(err);
        });
        highlightSelectedButtons();
    })
    .catch((err) => {
        console.log("ChunkAtlas: Error loading map tiles:");
        console.dir(err);
    });
    window.onload = updateWindow;
    window.onresize = updateWindow;

    // Set up region button handlers:
    function setRegion(region) {
        assertIsEnum(region, RegionEnum,
                "setRegion in ChunkAtlas.pageLoaded");
        if (mapCanvas != null) {
            mapCanvas.setRegion(region);
            keyManager.then(() => keyManager.setDisplayedKey(
                    region, mapCanvas.getMapType()));
            highlightSelectedButtons();
        }
    }
    document.getElementById("Overworld").onclick
            = function() { setRegion(RegionEnum.OVERWORLD); };
    document.getElementById("Nether").onclick
            = function() { setRegion(RegionEnum.NETHER); };
    document.getElementById("End").onclick
            = function() { setRegion(RegionEnum.END); };

    // Set up map type button handlers:
    function setMapType(type) {
        assertIsEnum(type, MapTypeEnum,
                "setMapType in ChunkAtlas.pageLoaded");
        if (mapCanvas != null) {
            mapCanvas.setMapType(type);
            keyManager.then(() => keyManager.setDisplayedKey(
                    mapCanvas.getRegion(), type));
            highlightSelectedButtons();
        }
    }

    document.getElementById("Biome").onclick
        = function() { setMapType(MapTypeEnum.BIOME); };
    document.getElementById("Structure").onclick
            = function() { setMapType(MapTypeEnum.STRUCTURE); };
    document.getElementById("RecentActivity").onclick
        = function() { setMapType(MapTypeEnum.RECENT_ACTIVITY); };
    document.getElementById("TotalActivity").onclick
            = function() { setMapType(MapTypeEnum.TOTAL_ACTIVITY); };

    // Set up directory checkbox handler:
    let dirCheckbox = document.getElementById("directoryCheckbox");
    dirCheckbox.checked = true;
    dirCheckbox.addEventListener("change", function() {
        if (! isDefined(mapCanvas)) { return; }
        mapCanvas.showDirectoryItems(dirCheckbox.checked);
    });
    updateWindow();
}

/**
 * Ensures that the selected Region and Map Type buttons are highlighted.
 */
function highlightSelectedButtons() {
    if (! isDefined(mapCanvas)) { return; }
    const highlightColor = "var(--map-highlight)";
    const normalColor = "var(--map-shadow)"
    const buttonSets = [
        { buttonClass: "regionButton", type: RegionEnum,
                selected: mapCanvas.getRegion() },
        { buttonClass: "typeButton", type: MapTypeEnum,
            selected: mapCanvas.getMapType() }
    ];
    buttonSets.forEach(buttonSet =>
    {
        const selected = buttonSet.selected;
        const enumType = buttonSet.type;
        const buttonList = document.getElementsByClassName(
                buttonSet.buttonClass);
        for (let i = 0; i < buttonList.length; i++) {
            const button = buttonList.item(i);
            const buttonId = button.id;
            let shadowColor = normalColor;
            if (button.id === enumType.properties[selected].name) {
                shadowColor = highlightColor;
            }
            button.style["box-shadow"] = "0.5vmin 0.5vmin " + shadowColor;
        }
    });
}

/**
 * Adjust element layout to fit the page orientation.
 *
 * @param isLandscape  A boolean setting if the page is in landscape mode.
 *                     If undefined, window aspect ratios will be used to pick
 *                     the page mode.
 */
function setOrientation(isLandscape) {
    if (typeof isLandscape === 'undefined') {
        const displayRatio = window.innerWidth / window.innerHeight;
        isLandscape = displayRatio > DISPLAY_TRANSITION_RATIO;
    }
    const addedSuffix = isLandscape ? "-landscape" : "-portrait";
    const removedSuffix = isLandscape ? "-portrait" : "-landscape";
    for (let classIdx = 0; classIdx < ASPECT_SPECIFIC_CLASSES.length;
            classIdx++) {
        const baseClass = ASPECT_SPECIFIC_CLASSES[classIdx];
        const added = baseClass + addedSuffix;
        const removed = baseClass + removedSuffix;
        let convertedElements = document.getElementsByClassName(baseClass);
        for (let elemIdx = 0; elemIdx < convertedElements.length; elemIdx++) {
            let converted = convertedElements[elemIdx];
            converted.classList.remove(removed);
            converted.classList.add(added);
        }
    }
}

/**
 * Resize the canvas to fit within its container.
 */
function scaleCanvas() {
    const canvasHolder = document.getElementById("mapFrame");
    const canvas = document.getElementById("mapCanvas");
    const smallestSide = (canvasHolder.offsetWidth > canvasHolder.offsetHeight)
            ? canvasHolder.offsetHeight : canvasHolder.offsetWidth;
    canvas.width = smallestSide * 0.8;
    canvas.height = smallestSide * 0.8;
    if (typeof mapCanvas != 'undefined') {
        mapCanvas.drawMap();
    }
}

/**
 * Scales the canvas and checks page orientation when the page is resized.
 */
function updateWindow() {
    setOrientation();
    scaleCanvas();
}

