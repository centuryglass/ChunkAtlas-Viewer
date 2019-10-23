const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const db = require("./db.js");
const constUtils = require("./const-util.js");
const validate = require("./validate.js");
const httpCrypto = require("./http-crypto.js");

// Path constants:
const Paths = {};
// Incoming requests:
Paths.In = {
    // Used for sending JSON update status messages:
    UPDATE:       "/update",
    // Used for uploading map images:
    IMAGE_UPLOAD: "/imageUpload"
};
// Server data paths:
Paths.Data = {};
// Main project directory:
Paths.Data.PROJECT    = path.dirname(__dirname);
// Main public data directory:
Paths.Data.PUBLIC     = path.join(__dirname, "public");
// Main file resource directory:
Paths.Data.RESOURCES  = path.join(Paths.Data.PUBLIC, "resources");
// Main image resource directory:
Paths.Data.IMAGES     = path.join(Paths.Data.RESOURCES, "images");
// Uploaded image resource directory:
Paths.Data.IMG_UPLOAD = path.join(Paths.Data.IMAGES, "upload");
// Uploaded map tile image directory:
Paths.Data.TILES      = path.join(Paths.Data.IMG_UPLOAD, "tiles");
// Uploaded location icon image directory:
Paths.Data.ICONS      = path.join(Paths.Data.IMG_UPLOAD, "icons");
constUtils.recursiveFreeze(Paths);


// JSON key constants:
const JSONKeys = {};
JSONKeys.In = {
    // Epoch time associated with an update:
    UPDATE_TIME:          "updateTime",
    // Holds the map key item list:
    MAP_KEYS:             "keys",
    // Holds the map tile list:
    TILES:                "tiles",
    // Holds a key item's region name:
    REGION:               "region",
    // Holds a key item's map type:
    MAP_TYPE:             "type",
    // Holds a key item's description:
    MAP_KEY_DESCRIPTION:  "name",
    // Holds a key item's image path:
    MAP_KEY_ICON:         "image",
    // Holds a key item's assigned color:
    MAP_KEY_COLOR:        "color"
};
constUtils.recursiveFreeze(JSONKeys);

// SQL constants:
const SQL = {
    // Beginning of the statement used to insert map key items:
    KEY_INSERT:       "INSERT INTO staging_key_items (description, region_name"
                      + ", map_type, icon_resource_id, color)\nVALUES\n",
    // Beginning of the statement used to insert updated tiles:
    TILE_INSERT:      "INSERT INTO staging_map_tiles (image_resource_id, "
                      + "region_name, map_type, tile_size, chunk_coordinates)"
                      + "\nVALUES\n",
    // Gets the list of image resources that need to be uploaded to the web
    // server:
    /*
    FIND_MISSING_IMG: "SELECT image_url FROM image_resources WHERE "
                      + "resource_loaded IS FALSE",
    */
    FIND_MISSING_IMG: "SELECT image_url "
                      + "FROM image_resources ir "
                      + "LEFT OUTER JOIN staging_map_tiles mt "
                      + "ON ir.resource_id = mt.image_resource_id "
                      + "WHERE ir.resource_loaded IS FALSE "
                      + "OR mt.tile_id IS NOT NULL",
    // Finds or adds an image resource key in the database:
    IMG_FIND_OR_ADD:  "image_resources_find_or_add",
    // Applies staged updates:
    APPLY_STAGING:    "START TRANSACTION; SELECT apply_staging(); "
                      + "END TRANSACTION;"
};
constUtils.recursiveFreeze(SQL);

// Init express server:
const app = express();
const port = 8080;
app.use(bodyParser.raw({
    limit: "1000kb",
    type: () => true
}));
app.use(bodyParser.raw({
    limit: "1000kb",
    type:  "*/image"
}));
app.use(httpCrypto.decrypt);
app.use(express.static(Paths.Data.PUBLIC));

// Pending image files:
var pendingImages = {};

// Handle JSON update data:
app.post(Paths.In.UPDATE, (req, res) => {
    const updateMessage = req.body;
    if (! updateMessage || Object.keys(updateMessage).length === 0)
    {
        console.log("Invalid update message received and ignored.");
        res.end();
        return;
    }

    // Build updated key insertion query:
    const keyList = updateMessage[JSONKeys.In.MAP_KEYS];
    let keyInsert = SQL.KEY_INSERT;
    const keyInsertValues = [];
    let keyInsertIdx = 1;
    keyList.forEach(key => {
        if (keyInsertIdx > 2) {
            keyInsert += ",\n";
        }
        keyInsert += "("
                + "$" + (keyInsertIdx) + ", "
                + "$" + (keyInsertIdx + 1) + ", "
                + "$" + (keyInsertIdx + 2) + ", "
                + SQL.IMG_FIND_OR_ADD + "($" + (keyInsertIdx + 3) + "),"
                + "$" + (keyInsertIdx + 4) + ")";
        keyInsertValues.push(key[JSONKeys.In.MAP_KEY_DESCRIPTION]);
        keyInsertValues.push(key[JSONKeys.In.REGION]);
        keyInsertValues.push(key[JSONKeys.In.MAP_TYPE]);
        keyInsertValues.push(key[JSONKeys.In.MAP_KEY_ICON]);
        keyInsertValues.push(key[JSONKeys.In.MAP_KEY_COLOR]);
        keyInsertIdx += 5;
    });

    // Build updated tile insertion query:
    const tileList = updateMessage[JSONKeys.In.TILES]
    let tileInsert = SQL.TILE_INSERT;
    let firstValueInserted = false;
    const tileInsertValues = [];
    let tileInsertIdx = 1;
    const regions = Object.keys(tileList);
    regions.forEach((region) => {
        tileInsertValues.push(region);
        const regionIdx = tileInsertIdx;
        tileInsertIdx++;
        const types = Object.keys(tileList[region]);
        types.forEach((mapType) => {
            tileInsertValues.push(mapType);
            const typeIdx = tileInsertIdx;
            tileInsertIdx++;
            const sizes = Object.keys(tileList[region][mapType]);
            sizes.forEach((size) => {
                tileInsertValues.push(size);
                const sizeIdx = tileInsertIdx;
                tileInsertIdx++;
                const tileGroup = tileList[region][mapType][size];
                tileGroup.forEach((tile) => {
                    // read coordinates from the last numbers in the file name:
                    const coordRegex = /(-?\d+)\.(-?\d+)\.png$/g;
                    const match = coordRegex.exec(tile);
                    if (typeof match[1] === "undefined"
                            || typeof match[2] === "undefined") {
                        console.log("Warning: found invalid tile \"" + tile
                                + "\".");
                        res.end();
                        return;
                    }
                    const coordinates = match[1] + ", " + match[2];
                    // Add value insert row for tile:
                    if (firstValueInserted) {
                        tileInsert += ",\n";
                    }
                    else {
                        firstValueInserted = true;
                    }
                    tileInsert += "(" + SQL.IMG_FIND_OR_ADD + "($"
                            + tileInsertIdx + ")," + "$" + regionIdx + ", $"
                            + typeIdx + ", $" + sizeIdx + ", $"
                            + (tileInsertIdx + 1) + ")";
                    tileInsertValues.push(tile);
                    tileInsertValues.push(coordinates);
                    tileInsertIdx += 2;
                });
            });
        });
    });

    // Add all map keys to the database, saving region and map types:
    let updateQuery = db.query(keyInsert, keyInsertValues).then(() => {
        // For each region and type, add all map tiles to the database:
        return db.query(tileInsert, tileInsertValues);
    }).then(() => { // Get the list of images that need to be loaded:
        return db.query(SQL.FIND_MISSING_IMG, (err, pendingRes) => {
            const urls = [];
            pendingRes.rows.forEach(row => {
                urls.push(row.image_url);
                pendingImages[row.image_url] = true;
            });
            httpCrypto.signResponse(res, JSON.stringify(urls));
            res.json(urls);
        });
    }).catch(e => console.error(e.stack));
});

// Handle image uploads:
app.post(Paths.In.IMAGE_UPLOAD, (req, res) => {
    const imagePath = req.headers.path;
    if (imagePath.includes("..") || imagePath.includes("~")
            || ! validate.isDefined(pendingImages[imagePath])) {
        console.error("Illegal path " + imagePath);
        res.end();
        return;
    }
    const outPath = path.join(Paths.Data.IMG_UPLOAD, req.headers.path);
    const parentDir = path.dirname(outPath);
    if (! fs.existsSync(parentDir) || ! fs.statSync(parentDir).isDirectory()) {
        fs.mkdirSync(parentDir, { recursive: true });
    }
    const writeStream = fs.createWriteStream(outPath);
    writeStream.write(req.body);
    delete pendingImages[imagePath];
    const keyCount = Object.keys(pendingImages).length;
    if (keyCount == 0) {
        console.log("All images loaded, committing changes:");
        db.query(SQL.APPLY_STAGING, (err, dbRes) => {
            console.log("update committed to database.");
        });
    }
    else {
        console.log("Received " + imagePath + ", " + keyCount
                + " images remaining.");
    }
    res.end();
});

app.listen(port, () => console.log('listening on port ' + port));
