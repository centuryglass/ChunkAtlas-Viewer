/**
 * @file MapCanvas.js
 *
 * A wrapper class for an HTML canvas element used to draw tiled map images.
 */

class MapCanvas {
    /**
     * Sets initial map properties.
     *
     * @param canvas         An HTML5 canvas element object.
     *
     * @param imageTiles     An ImageTiles object holding all image elements
     *                       used to draw the map.
     *
     * @param tileSize       Width and height in chunks of each tile.
     */
    constructor(canvas, imageTiles, tileSize) {
        assertIsClass(canvas, HTMLCanvasElement, "MapCanvas.constructor");
        assertIsClass(imageTiles, ImageTiles, "MapCanvas.constructor");
        assert(isNumeric(tileSize) && tileSize > 0, "MapCanvas.constructor:"
                + " invalid tile size " + tileSize);
        this.imageTiles = imageTiles;
        this.tileSize = tileSize;
        this.canvas = canvas;
        this.lastClicked = new Point(0, 0);
        this.updateBounds(1, new Point(0, 0));
        this.dimension = DimensionEnum.OVERWORLD;
        this.mapType = MapTypeEnum.BIOME;
        this.mapPoints = [];
        this.drawPoints = true;
        const mapCanvas = this;
        loadMapPoints().then(list => mapCanvas.mapPoints = list);
    }

    /**
     * Sets whether directory items should be shown or hidden, redrawing the
     * map if the state changes.
     *
     * @param showItems  True if MapPoint directory items should be shown,
     *                   false if they should be hidden.
     */
    showDirectoryItems(showItems) {
        if (this.drawPoints != showItems) {
            this.drawPoints = showItems;
            this.drawMap();
        }
    }

    /**
     * Gets the Minecraft dimension currently set to draw within the map.
     *
     * @return  The map's current selected DimensionEnum value.
     */
    getDimension()
    {
        return this.dimension;
    }

    /**
     * Sets the Minecraft dimension drawn within the map, and redraws the map.
     *
     * @param dimension  A DimensionEnum value to set.
     */
    setDimension(dimension) {
        assertIsEnum(dimension, DimensionEnum, "MapCanvas.setDimension");
        this.dimension = dimension;
        this.drawMap();
    }

    /**
     * Gets the map type currently being drawn within the MapCanvas.
     *
     * @return  The map's current selected MapTypeEnum value.
     */
    getMapType() {
        return this.mapType;
    }

    /**
     * Sets the type of map data to draw, and redraws the map.
     *
     * @param type  A MapTypeEnum value to set.
     */
    setMapType(type) {
        assertIsEnum(type, MapTypeEnum, "MapCanvas.setMapType");
        this.mapType = type;
        this.drawMap();
    }

    /**
     * Restores the initial map position, centered on chunk (0, 0) and drawn at
     * one pixel per chunk.
     */
    reset() {
        this.updateBounds(1, new Point(0, 0));
        this.drawMap();
    }

    /**
     * Gets the current map drawing scale.
     *
     * @return  The multiplier applied to resize map images.
     */
    getScale() {
        return this.drawScale;
    }

    /**
     * Gets the map coordinate aligned with the center of the canvas.
     *
     * @return  The (x, z) coordinate of the chunk at the element's center.
     */
    getCenter() {
        return this.centerPt;
    }

    /**
     * Scrolls the map so that a particular chunk coordinate is located
     * at a specific pixel coordinate within the canvas.
     *
     * @param worldPos       The chunk coordinate used as a reference
     *                       point, as a Point object.
     *
     * @param destCanvasPos  The pixel coordinate where that chunk should
     *                       be drawn, as a Point object.
     *
     * @param scale          An optional new drawing scale to apply. If not
     *                       provided, the current scale will be used.
     */
    scrollChunkToCanvasPt(worldPos, destCanvasPos, scale) {
        assert(worldPos instanceof Point, "MapCanvas.scrollChunkToCanvasPt: "
                + "Invalid chunk position " + worldPos);
        assert(destCanvasPos instanceof Point,
                "MapCanvas.scrollChunkToCanvasPt: Invalid canvas position " 
                + destCanvasPos);
        assert(! isDefined(scale) || (isNumeric(scale) && scale > 0),
                + "MapCanvas.scrollChunkToCanvasPt: Invalid canvas scale "
                + scale);
        // find pixel offsets between destCanvasPos and the canvas center:
        const xOffset = this.canvas.width / 2 - destCanvasPos.x;
        const yOffset = this.canvas.height / 2 - destCanvasPos.y;
        if (! isDefined(scale))
        {
            scale = this.drawScale
        }
        const xCenter = xOffset / scale + worldPos.x;
        const zCenter = yOffset / scale + worldPos.y;
        this.updateBounds(scale, new Point(xCenter, zCenter));
    }

    /**
     * Applies a new scale and center point to the map canvas.
     *
     * @param scale     The multiplier that will be applied to resize map
     *                  images, converting from chunk to pixel coordinates.
     *
     * @param centerPt  The chunk coordinate point that will be drawn at the
     *                  element's center.
     */
    updateBounds(scale, centerPt) {
        assert(isNumeric(scale) && scale > 0, "MapCanvas.updateBounds: invalid"
                + " scale " + scale);
        assert(centerPt instanceof Point, "MapCanvas.updateBounds:"
                + "invalid centerPt \"" + centerPt + "\"");
        this.drawScale = scale;
        this.centerPt = centerPt;
        this.width = this.canvas.width / scale;
        this.height = this.canvas.height / scale;
        this.minPt = new Point(centerPt.x - this.width / 2,
                centerPt.y - this.height / 2);
    }

    /**
     *  Adjusts for element offsets to find the exact pixel coordinates where
     * the canvas was clicked, and optionally saves the clicked world
     * coordinates as the last clicked location.
     *
     * @param inputEvent  A MouseEvent or Touch object registered by the canvas
     *                    element.
     *
     * @param savePos     Whether the click is saved as the last click
     *                    location.
     *
     * @return            A Point holding the click event's pixel coordinates.
     */
    clickedCanvasPoint(inputEvent, savePos) {
        assert(inputEvent instanceof MouseEvent || inputEvent instanceof Touch,
                "MapCanvas.clickedCanvasPoint: inputEvent \"" + inputEvent
                + "\" is not a MouseEvent or Touch object.");
        let xOffset = 0;
        let yOffset = 0;
        let canvasX = 0;
        let canvasY = 0;
        let currentElement = this.canvas;
        do {
            xOffset += currentElement.offsetLeft - currentElement.scrollLeft;
            yOffset += currentElement.offsetTop - currentElement.scrollTop;
        }
        while (currentElement = currentElement.offsetParent)
        canvasX = inputEvent.pageX - xOffset;
        canvasY = inputEvent.pageY - yOffset;
        let canvasPos = new Point(canvasX, canvasY);
        if (savePos) {
            this.clickedMapPoint = undefined;
            this.lastClicked = this.canvasToWorldPos(canvasPos);
            if (this.drawPoints) {
                const mapCanvas = this;
                var closestPt;
                var leastDistance;
                this.mapPoints.forEach(function(mapPt) {
                    if (mapCanvas.dimension !== mapPt.dimension) { return; }
                    const ptCanvasPos = mapCanvas.worldToCanvasPos(
                            mapPt.position);
                    const distance = ptCanvasPos.distance(canvasPos);
                    if (! isDefined(closestPt) || distance < leastDistance) {
                        closestPt = mapPt;
                        leastDistance = distance;
                    }
                });
                if (isDefined(closestPt) && leastDistance
                        <= this.getMapPointDrawSize(closestPt)) {
                    console.log(closestPt.name + " at " 
                            + closestPt.position.multiply(16).toString()
                            + ", " + leastDistance + " px distance.");
                    this.clickedMapPoint = closestPt;
                }
            }
        }
        return canvasPos;
    }

    getClickedMapPoint() {
        return this.clickedMapPoint;
    }

    /**
     * Gets the canvas pixel coordinates of a Minecraft map chunk.
     *
     * @param point  A Point object holding map chunk coordinates.
     *
     * @return       A Point object holding the corresponding canvas pixel
     *               coordinates.
     */
    worldToCanvasPos(point) {
        assert(point instanceof Point, "MapCanvas.worldToCanvasPos: point "
                + point + " is not a valid Point.");
        let relativePt = point.subtract(this.minPt);
        return relativePt.multiply(this.drawScale);
    }

    /**
     * Gets the map chunk coordinate of a canvas pixel coordinate.
     *
     * @param point  A Point object holding canvas pixel coordinates.
     *
     * @return       A Point object holding the corresponding Minecraft chunk
     *               coordinates.
     */
    canvasToWorldPos(point) {
        assert(point instanceof Point, "MapCanvas.canvasToWorldPos: point "
                + point + " is not a valid Point.");
        return new Point(point.x / this.drawScale + this.minPt.x,
               point.y / this.drawScale + this.minPt.y);
    }


    /**
     * Draws the entire map canvas, positioning all map tiles appropriately
     * based on their Minecraft world coordinates, the mapCanvas scale, and the
     * mapCanvas center position.
     */
    drawMap() {
        const ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (this.imageTiles == null) { return; }

        // Draw all tiles at the most appropriate scale:
        const canvasTileSize = this.tileSize * this.drawScale;
        let sizeType = TileSizeEnum.TILES_512;
        for (let i = 1; i <= TileSizeEnum.count; i++) {
            if (canvasTileSize >= TileSizeEnum.properties[i].size) {
                break;
            }
            else {
                sizeType = i;
            }
        }
        let tileList = this.imageTiles.getTileSet(this.dimension, this.mapType,
                sizeType);
        for (let i = 0; i < tileList.length; i++) {
            this.drawTile(tileList[i], ctx);
        }
        
        // Draw the x and z axis:
        this.drawMapAxis(ctx);
        // Draw points of interest:
        if (this.drawPoints) { 
            const mapCanvas = this;
            this.mapPoints.forEach(pt => mapCanvas.drawMapPoint(pt, ctx));
        }

        // Mark the last clicked spot on the map:
        this.drawLastClickedCrosshairs(ctx);
    }

    /* Internal Drawing Functions: */

    /**
     * Checks if a MapPoint is within the current map dimension and bounds, and
     * draws it to the map if it is.
     *
     * @param mapPoint  A point of interest on the map.
     *
     * @param ctx       A 2D drawing context that can be used to draw within
     *                  the map canvas.
     */
    drawMapPoint(mapPoint, ctx) {
        if (this.dimension !== mapPoint.dimension) { return; }
        const canvasPos = this.worldToCanvasPos(mapPoint.position);
        const iconSize = this.getMapPointDrawSize(mapPoint);
        const halfSize = iconSize / 2;
        if (canvasPos.x + halfSize > 0
                && canvasPos.y + halfSize > 0
                && canvasPos.x - halfSize < this.canvas.width
                && canvasPos.y - halfSize < this.canvas.height)
        {
            if (isDefined(mapPoint.icon)) {
                const drawPos = canvasPos.subtract(new Point(halfSize,
                        halfSize));
                ctx.drawImage(mapPoint.icon, drawPos.x, drawPos.y,
                        iconSize, iconSize);
            }
            else {
                ctx.globalAlpha = 0.7;
                ctx.beginPath();
                ctx.arc(canvasPos.x, canvasPos.y, halfSize, 0,
                        2 * Math.PI, false);
                ctx.fillStyle = "yellow";
                ctx.fill();
                ctx.lineWidth = 2;
                ctx.strokeStyle = "black";
                ctx.stroke();
                ctx.globalAlpha = 1;
            }
        }
    }

    /**
     * Gets the size that a mapPoint should be drawn within the canvas.
     *
     * @param mapPoint  The mapPoint to draw.
     *
     * @return          The width and height in pixels to draw the mapPoint,
     *                  selected based on the mapPoint's icon and the relative
     *                  size of the canvas.
     */
    getMapPointDrawSize(mapPoint) {
        let iconSize = this.canvas.width / 20;
        if (isDefined(mapPoint.icon)) { 
            // Allow mapPoint images to potentially be a bit larger than
            // mapPoints without them, but not by much.
            iconSize = Math.max(iconSize, mapPoint.icon.height)
            iconSize = Math.max(iconSize, mapPoint.icon.width);
            iconSize = Math.min(iconSize, this.canvas.width / 18);
        }
        return iconSize;
    }

    /**
     * Draws a single image tile within the map canvas.
     *
     * @param imageTile  A document image element object holding a single map
     *                   tile. The source image name must contain the tile's
     *                   (x, z) chunk coordinates.
     *
     * @param ctx        A 2D drawing context that can be used to draw within
     *                   the map canvas.
     */
    drawTile(imageTile, ctx) {
        assert(imageTile instanceof HTMLImageElement, "MapCanvas.drawTile:"
                + " imageTile \"" + imageTile + "\" is not a valid "
                + "HTMLImageElement.");
        assert(ctx instanceof CanvasRenderingContext2D, "MapCanvas.drawTile:"
                + " ctx \"" + ctx + "\" is not a valid "
                + "CanvasRenderingContext2D.");
        let coordinates = null;
        let coordData = imageTile.getAttribute("data");
        if (coordData == null) {
            const imageName = imageTile.getAttribute("src");
            if (! imageTile.complete) {
                console.log(imageName + " hasn't loaded yet!");
                return;
            }
            let tileValues = imageName.match(/-?[0-9]+/g);
            if (tileValues == null) {
                return;
            }
            let x = tileValues[tileValues.length - 2];
            let z = tileValues[tileValues.length - 1];
            coordinates = new Point(x, z);
            imageTile.setAttribute("data", x + "," + z);
        }
        else if (coordData.length == 0) {
            return;
        }
        else {
            coordData = coordData.split(",");
            coordinates = new Point(coordData[0], coordData[1]);
        }
        const canvasPos = this.worldToCanvasPos(coordinates);
        const sizeOnCanvas = this.tileSize * this.drawScale;
        const x = canvasPos.x, z = canvasPos.y;

        if (x < this.canvas.width && z < this.canvas.height
                && (x + sizeOnCanvas) > 0 && (z + sizeOnCanvas) > 0) {
            if (sizeOnCanvas < 4) {
                // Image data would be scaled too small to be useful, just draw
                // a point there to indicate that there's content that can be
                // zoomed in on.
                
                const fillSize = Math.max(1, sizeOnCanvas);
                ctx.fillStyle = "#000000";
                ctx.fillRect(x, z, fillSize, fillSize);
                return;
            }
            else {
                ctx.drawImage(imageTile, x, z, sizeOnCanvas, sizeOnCanvas);
            }
        }
    }

    /**
     * Draws the axis lines at chunk coordinates x=0 and z=0 to make it easier
     * to find points on the map.
     *
     * @param ctx  A 2D drawing context that can be used to draw within the
     *             map canvas.
     */
    drawMapAxis(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = "red";
        const worldCenter = this.worldToCanvasPos(new Point(0, 0))
        if (worldCenter.x >= 0 && worldCenter.x < this.canvas.width) {
            ctx.moveTo(worldCenter.x, 0);
            ctx.lineTo(worldCenter.x, this.canvas.height);
        }
        if (worldCenter.y >= 0 && worldCenter.y < this.canvas.height) {
            ctx.moveTo(0, worldCenter.y);
            ctx.lineTo(this.canvas.width, worldCenter.y);
        }
        ctx.stroke();
    }

    /**
     * Draws white crosshairs at the last location on the map where the user
     * clicked.
     *
     * @param ctx  A 2D drawing context that can be used to draw within the
     *             map canvas.
     */
    drawLastClickedCrosshairs(ctx) {
        if (this.lastClicked !== null) {
            const clickPos = this.worldToCanvasPos(this.lastClicked);
            if (clickPos.x >= 0 && clickPos.x < this.canvas.width
                    && clickPos.x >= 0
                    && clickPos.x < this.canvas.height) {
                ctx.beginPath();
                ctx.strokeStyle = "white";
                ctx.moveTo(clickPos.x, clickPos.y - 5);
                ctx.lineTo(clickPos.x, clickPos.y + 5);
                ctx.moveTo(clickPos.x - 5, clickPos.y);
                ctx.lineTo(clickPos.x + 5, clickPos.y);
                ctx.stroke();
            }
        }
    }
}
