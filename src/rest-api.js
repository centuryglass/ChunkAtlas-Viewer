/**
 * @file rest-api.js
 *
 * Server API more closely following RESTful procedures.
 */

// Creating const data objects:
const constUtils = require("./const-util.js");

/*
 * ### Interface overview: ###
 * Names beginning with '$' represent variables provided by the previous
 * directory level:
 *
 * /maps
 *  - Provides information about all mapped regions.
 * /maps/$Region
 *  - Provides information about all map types and locations within a region.
 * /maps/%Region/$Icon
 *  - Provides access to a region's display icon.
 *
 * Locations:
 * /maps/$Region/$LocationCategory
 *  - Provides information about all points of interest within a region map.
 * /maps/$Region/$LocationCategory/$Location
 *  - Provides information about a single point of interest.
 * /maps/$Region/$LocationCategory/$Location/$Icon
 *  - Provides access to an icon used by a single point of interest.
 *
 *  Map Types and Tiles:
 * /maps/$Region/$Type
 *  - Provides information about a map type within a mapped region.
 * /maps/$Region/$Type/$Icon
 *  - Provides access to a map type's display icon.
 * /maps/$Region/$Type/$TilePoint
 *  - Provides information about a map tile at a set of block coordinates.
 * /maps/$Region/$Type/$TilePoint/$TileImage
 *  - Provides access to one of a map tile's images.
 *
 *  Map Keys:
 * /maps/$Region/$Type/$KeyItem
 *   - Provides the display text, color, and/or icon used by an item in a map
 *     type's key.
 */

// The base URI for the entire RESTful interface:
const BasePath = "/maps";

// At each level of the API, the returned media type is JSON unless otherwise
// specified. If the returned media type is an image, the image will use the
// .png file format.

// Store the API's expected JSON data structures in an unchanging dictionary:
const JSONKeys = {}
// Root interface map data:
JSONKeys.maps = {
    // List of map region URIs:
    REGION_URIS: "regions"
};
// Region data:
JSONKeys.region = {
    // Name of the mapped region:
    NAME = "name",
    // The region's icon resource URI:
    ICON_URI = "icon",
    // List of location category URIs within the region:
    LOCATION_CATEGORY_URIS = "locationCategories"
};
// Location Category data:
JSONKeys.locationCategory = {
    // Name of the category:
    NAME = "name",
    // List of location URIs within the category:
    LOCATION_URIS = "locations"
};
// Location data:
JSONKeys.locationPt = {
    // A location's x-coordinate, measured in blocks:
    X_COORD: "x",
    // A location's z-coordinate, measured in blocks:
    Z_COORD: "z",
    // A location's name string (optional):
    NAME: "name",
    // A location's display color (optional):
    COLOR: "color",
    // A location's icon URI (optional):
    ICON_URI: "icon"
};
// Map type data:
JSONKeys.mapType = {
    // The map type name:
    NAME = "name".
    // The map's tile URI mappings:
    // Key/Value pairs in this object are formatted as
    // "X_Z" : URI
    // Where X and Z are the tile's block coordinates, and URI is the tile's
    // resource URI.
    TILE_URI_OBJECTS = "tiles",
    // The displayed map key resource URIs for this map type:
    KEY_ITEM_URIS = "keys"
};
// Map tile data:
JSONKeys.tile = {
    // A location's x-coordinate, measured in blocks:
    X_COORD: "x",
    // A location's z-coordinate, measured in blocks:
    Z_COORD: "z",
    // The list of available tile resource sizes, each mapped to a
    // corresponding image resource URI:
    IMAGE_SIZE_URIS: "imageSizes"
};
// Key item data:
JSONKeys.keyItem = {
    // The key item's display text:
    TEXT: "text",
    // The key item's display color:
    COLOR: "color",
    // The key item's icon resource URI (optional):
    ICON_URI: "icon
};
constUtils.recursiveFreeze(JSONKeys);
