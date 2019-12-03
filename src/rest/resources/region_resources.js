/**
 * @file  region-resource.js
 *
 * Handles requests sent to any map region resource.
 */

const logger = require("../../logger.js");
const path = require("path");

const resourceTypes = require("../resource-types.js");
const dbStructure = require("../../db/db-structure.js");
const dbRegionsReader = require("../../db/reader/regions-reader.js");
const dbRegionsWriter = require("../../db/writer/regions-writer.js");
const dbMapTypeReader = require("../../db/reader/map-type-reader.js");

const RESTResource
        = require("../rest-resource.js");
const { isDefined, hasClass }
        = require("../../validate.js");
const { recursiveFreeze }
        = require("../../const-util.js");

const resourceType = resourceTypes.REGION;

const resourcePath = path.join(__dirname, "..", "..", "..", "resources");

// Resource header keys:
const headerKeys = {
    MAP_TYPE_COUNT : "map_type_count",
    ICON_LOCATION  : "Location"
};
recursiveFreeze(headerKeys);

// Resource JSON keys:
const resourceKeys = {
    REGION_ID     : dbStructure.regions.REGION_ID,
    DISPLAY_NAME  : dbStructure.regions.DISPLAY_NAME,
    ICON_URI      : dbStructure.regions.ICON_URI,
    LAST_UPDATE   : dbStructure.regions.LAST_UPDATE,
    MAP_TYPE_URIS : "map_type_uris"
};
recursiveFreeze(resourceKeys);


/**
 *  Manages all mapped region resources. Regions are the only resource type 
 * that are currently found directly under the primary-resource. Regions
 * hold a display name, optional icon, and a list of associated map types.
 *
 * NOTE: Making map type subordinate to region is not optimal, since every
 *       map type is used in combination with every region. The only reason
 *       it's done that way is because map tiles and keys should be subordinate
 *       to both map type and region.
 */
class RegionResource extends RESTResource {
    constructor(expressApp) {
        super(resourceType);
        const disallowed = [ "DELETE", "PUT" ];
        for (let method of disallowed) {
            this.setHTTPMethodDisallowed(method);
        }

        // Creates a Promise to check the database and see if a request's 
        // Region resource path is valid.
        const regionCheckPromise = (request) => {
            return dbRegionsReader.regionExists(this.getResourceId(request));
        };

        // Creates a Promise to get all distinct map type ids, then add the
        // region count to the response header.
        const typeQueryLoadPromise = (response) => {
            return dbMapTypeReader.getMapTypeIds().then((typeIDs) => {
                response.set(headerKeys.MAP_TYPE_COUNT, typeIDs.length);
                return typeIDs;
            });
        };

        // #### HTTP request method handlers: ####

        // #### GET ####
        // Respond with all region properties and map type names, put the map
        // type count in the response header.
        this.setHTTPMethodHandler("GET", (request, response) => {
            const content = { regionURIs : [] };
            // Request region properties:
            dbRegionsReader.getRegionData(this.getResourceId(request))
            .then((typeData) => {
                if (! isDefined(typeData)) {
                    logger.warn("Failed to find region resource at "
                            + request.url);
                    response.status(404).end();
                    return;
                }
                Object.keys(typeData).forEach((key) => {
                    content[key] = typeData[key];
                });
                return typeQueryLoadPromise(response);
            })
            // Convert type list to subordinate map_type resource URIs, send
            // completed response.
            .then((typeIDs) => {
                for (let mapType of typeIDs) {
                    const typeURI = request.url + '/' + mapType;
                    content[resourceKeys.MAP_TYPE_URIS].push(typeURI);
                }
                response.json(content);
            }).catch((err) => {
                logger.error("Error when trying to GET region resource at "
                        + request.url + ": " + err.toString());
                response.status(500).end();
            });
        });


        // #### HEAD ####
        // Just respond with the subordinate region resource count header
        // normally sent with GET requests.
        this.setHTTPMethodHandler("HEAD", (request, response) => {
            typeQueryLoadPromise(response).then(() => {
                response.end()
            }).catch((err) => {
                logger.error("Error responding to HEAD for region resource "
                        + "at " + request.url + ": " + err.toString());
                response.status(500).end();
            });
        });


        // #### POST ####
        // If not already defined, set the region's UI icon.
        this.setHTTPMethodHandler("POST", (request, response) => {
            const iconURI = request.url + "/icon.png";
            const resourceID = this.getResourceId(request);
            let sentResponse = false;
            // Check if the icon was set already:
            dbRegionsReader.isRegionIconSet(resourceID)
            .then((iconWasSet) => {
                // If the region icon already exists, it can only be replaced
                // by sending a PUT method directly to the icon URI.
                if (iconWasSet) {
                    logger.warn("POSTing to '" + resourceID
                            + "' attempts to set the region icon, but the "
                            + "icon already exists. Returning status 409 "
                            + "Conflict.");
                    response.status(409).end();
                    sentResponse = true;
                }
            })
            // If icon wasn't set, attempt to save the request body as a new
            // region icon:
            .then(() => {
                if (sentResponse) { return; }
                const iconPath = path.join(
                        this.getResourceFileDirectory(request), "icon.png");
                if (! isDefined(request.body)
                        || ! hasClass(request.body, Buffer)) {
                    logger.warn("Received invalid region icon for '" + iconPath
                            + ", responding with 400 Bad Request.");
                    response.status(400).end();
                    sentResponse = true;
                    return;
                }
                if (! saveRequestBodyFile(request, iconPath)) {
                    logger.warn("Failed to save region icon to '" + iconPath
                            + "', responding with 500 Internal Server Error");
                    response.status(500).end();
                    sentResponse = true;
                    return;
                }
                if (! sentResponse) {
                    logger.info("Saved new region icon to '" + iconPath
                            + "', updating database.");
                    // TODO: check that the file is actually a valid image!
                    return dbRegionsWriter.setIconURI(regionID, iconURI);
                }
            })
            .then(() => {
                if (sentResponse) { return; }
                if (err) {
                    logger.error("Error setting region icon: " + err);
                    response.status(500).end();
                    sentResponse = true;
                    return;
                }
                response.set(headerKeys.ICON_LOCATION, iconURI);
                logger.info("Saved icon addition to database, responding with"
                        + " 204 No Content.");
                response.status(204).end();
                sentResponse = true;
            })
            .catch((err) => {
                logger.error("Error setting region icon: " + err);
                if (! sentResponse) {
                    response.status(500).end();
                }
            });
        });


        // #### PATCH ####
        // Update the region's display name.
        this.setHTTPMethodHandler("PATCH", (request, response) => {
            if (! isDefined(request.body)
                    || ! isDefined(request.body[resourceKeys.DISPLAY_NAME])) {
                logger.warn("Received PATCH at '" + request.url
                        + "' without a valid request message body, responding"
                        + " with 400 Bad Request");
                response.status(400).end();
                return;
            }
            const regionID = this.getResourceId(request);
            const displayName = request.body[resourceKeys.DISPLAY_NAME];
            dbRegionsWriter.setDisplayName(regionID, displayName)
            .then((dbResponse, err) => {
                if (err) {
                    logger.error("Error setting region display name: " + err);
                    response.status(500).end();
                    return;
                }
                logger.info("Set region '" + this.getResourceId(request)
                        + "' display name to '" + displayName + "', "
                        + "responding with 204 No Content.");
                response.status(204).end();
                return;
            });
        });


        // #### OPTIONS ####
        // Respond with API documentation.
        this.setHTTPMethodHandler("OPTIONS", (request, response) => {
            const doc = {
                "supported methods"
                        : ["GET", "HEAD", "POST", "PATCH", "OPTIONS"],
                "resource type" : "collection",
                "description" : "Region resources hold map types and other "
                                + "properties associated with a mapped "
                                + "region.",
                "media format" : resourceKeys,
                "method docs" : {
                    GET : "Get the region's display name, last update time, "
                          + " and list of map types, and sets the '" 
                          + headerKeys.MAP_TYPE_COUNT + "' header to the map"
                          + " type count.",
                    HEAD : "Sets the '" + headerKeys.MAP_TYPE_COUNT + 
                           "' header to the map type count.",
                    POST : "If no region icon is defined, set the request "
                           + "body as the region icon.",
                    PATCH : "Sets the region's display name.",
                    OPTIONS: "Returns this resource documentation object."
                }
            };
            response.json(doc);
        });
        // listen for all requests:
        this.enableResource(expressApp);
    }
}

module.exports = RegionResource;
