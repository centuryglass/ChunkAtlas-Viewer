/**
 * @file resource_patterns.js
 *
 * Provides a unified, immutable structure defining patterns used to match
 * REST resource URIs.
 */

const resourceTypes
        = require("./resource-types.js");
const { setConstProperty }
        = require("../const-util.js");

// Define valid resource URI patterns and substrings:
// ### General: ###
// Root API resource URI:
const apiRoot = "\/api";
// Resource icon sub-URI:
const iconResource = "\/icon\\.png";
// Match most intermediate resource IDs:
const validIdPattern = "[a-z](_?[a-z])*[a-z]";

// ### Regions: ###
// Match map regions:
const regionPattern = apiRoot + "\/" + validIdPattern;
// Match map region icons:
const regionIconPattern = regionPattern + iconResource;

// ### Locations: ###
// Match map region locations:
const locPattern = regionPattern + "\/locations";
// Match map region location categories:
const locCatPattern = locPattern + "\/" + validIdPattern;
// Match individual location URIs:
const singleLocPattern = locCatPattern + "\/-?\\d+_-?\\d+";
// Match individual location icons:
const singleLocIconPattern = singleLocPattern + iconResource;

// ### Map Types: ###
// Match map types, making sure to not match locations:
const typePattern = "(?!locations$)" + regionPattern + "\/" + validIdPattern;
// Match map type icons:
const typeIconPattern = typePattern + iconResource;

// ### Map Keys: ###
// Match map key item resources:
const keyItemPattern = typePattern + "\/key_\\d+";
// Match map key item icons:
const keyItemIconPattern = keyItemPattern + iconResource;

// ### Map Tiles: ###
// Match tile resources:
const tilePattern = typePattern + "\/tile_-?\\d+_-?\\d+";
// Match tile image resources:
const tileImgPattern = tilePattern + "\/img_\\d+\\.png";

// Make all patterns anchored, and add them immutably to the module:
const namePatternPairs = [
    [ resourceTypes.PRIMARY,           apiRoot ],
    [ resourceTypes.REGION,            regionPattern ],
    [ resourceTypes.REGION_ICON,       regionIconPattern ],
    [ resourceTypes.LOCATION_GROUPS,   locPattern ],
    [ resourceTypes.LOCATION_CATEGORY, locCatPattern ],
    [ resourceTypes.LOCATION,          singleLocPattern ],
    [ resourceTypes.LOCATION_ICON,     singleLocIconPattern ],
    [ resourceTypes.MAP_TYPE,          typePattern ],
    [ resourceTypes.MAP_TYPE_ICON,     typeIconPattern ],
    [ resourceTypes.KEY_ITEM,          keyItemPattern ],
    [ resourceTypes.KEY_ITEM_ICON,     keyItemIconPattern ],
    [ resourceTypes.MAP_TILE,          tilePattern ],
    [ resourceTypes.MAP_TILE_IMAGE,    tileImgPattern ]
];

const patterns = {};

namePatternPairs.forEach((pair) => {
    setConstProperty(patterns, pair[0], "^" + pair[1] + "$");
});
module.exports = patterns;
