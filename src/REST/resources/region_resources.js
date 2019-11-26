/**
 * @file  region-resource.js
 *
 * Handles requests sent to any map region resource.
 */

const logger = require("../../logger.js");
const db = require("../../db.js");
const path = require("path");

const resourceTypes = require("../resource-types.js");
const dbStructure = require("../../db-structure.js");

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
            return db.query("SELECT * FROM $1 WHERE ($2 = $3)", [
                    dbStructure.tables.REGIONS, dbStructure.regions.REGION_ID,
                    request.url.substr(1)])
            .then((dbResponse) => {
                if (isDefined(dbResponse) && isDefined(dbResponse.rows)
                        && dbResponse.rows.length > 0) {
                    return true;
                }
                return false;
            });
        };

        // Creates a Promise to get all distinct map type ids, then add the
        // region count to the response header.
        const typeQueryLoadPromise = (response) => {
            const REGION_QUERY = "SELECT type_id FROM map_types";
            return db.query("SELECT $1 FROM $2", [ resourceKeys.TYPE_ID,
                    tableNames.MAP_TYPES ])
            .then((dbResponse) => {
                if (isDefined(dbResponse) && isDefined(dbResponse.rows)) {
                    response.set(headerKeys.MAP_TYPE_COUNT,
                            dbResponse.rows.length);
                }
                else {
                    response.set(resourceKeys.REGION_COUNT, 0);
                }
                return dbResponse;
            });
        };

        // #### HTTP request method handlers: ####

        // #### GET ####
        // Respond with all region properties and map type names, put the map
        // type count in the response header.
        this.setHTTPMethodHandler("GET", (request, response) => {
            const content = { regionURIs : [] };
            // Request region properties:
            db.query("SELECT $1, $2, $3 FROM $4 WHERE ($5 = $6)", [
                    dbStructure.regions.DISPLAY_NAME,
                    dbStructure.regions.ICON_URI,
                    dbStructure.regions.LAST_UPDATE,
                    dbStructure.tables.REGIONS,
                    dbStructure.regions.REGION_ID,
                    this.getResourceId(request)])
            // Save region properties, request map type list property:
            .then((dbResponse, err) => {
                if (err) {
                    logger.error("Database error responding to GET for region"
                            + " at " + request.url + ": " + err.toString());
                    response.status(500).end();
                    return;
                }
                if (! isDefined(dbResponse.rows)
                        || dbResponse.rows.length === 0) {
                    logger.warn("Failed to find region resource at "
                            + request.url);
                    response.status(404).end();
                    return;
                }
                content[resourceKeys.DISPLAY_NAME]
                        = dbResponse.rows[dbStructure.regions.DISPLAY_NAME];
                content[resourceKeys.ICON_URI]
                        = dbResponse.rows[dbStructure.regions.ICON_URI];
                content[resourceKeys.LAST_UPDATE]
                        = dbResponse.rows[dbStructure.regions.LAST_UPDATE];
                return typeQueryLoadPromise(response);
            })
            // Convert type list to subordinate map_type resource URIs, send
            // completed response.
            .then((dbResponse, err) => {
                if (err) {
                    logger.error("Failed to load type resource list from "
                            + "region at " + request.url + ": "
                            + err.toString());
                    response.status(500).end();
                    return;
                }
                if (response.get(resourceKeys.MAP_TYPE_COUNT) > 0) {
                    for (let mapType of dbResponse.rows) {
                        const typeURI = request.url + '/' + mapType;
                        content[resourceKeys.MAP_TYPE_URIS].push(typeURI);
                    }
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
            typeQueryLoadPromise(response).then((dbResponse) => {
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
            db.query("SELECT $1 FROM $2 WHERE ($3 = $4)", [
                    dbStructure.regions.ICON_URI,
                    dbStructure.tables.REGIONS,
                    dbStructure.regions.REGION_ID,
                    this.getResourceId(request) ])
            .then((dbResponse, err) => {
                if (err) {
                    logger.error("Error checking for region icon: " + err);
                    response.status(500).end();
                    return;
                }
                // If the region icon already exists, it can only be replaced
                // by sending a PUT method directly to the icon URI.
                if (isDefined(dbResponse) && isDefined(dbResponse.rows)
                        && dbResponse.rows.length != 0) {
                    const iconURI
                            = dbResponse.rows[dbStructure.regions.ICON_URI];
                    if (iconURI !== null) {
                        logger.warn("Region icon POSTed, but icon already "
                                + "exists at '" + iconURI + "', sending "
                                + "status 409 Conflict.");
                        response.status(409).end();
                        return;
                    }
                }
                const iconPath = path.join(getResourceFileDirectory(request),
                        "icon.png");
                if (! isDefined(request.body)
                        || ! hasClass(request.body, Buffer)) {
                    logger.warn("Received invalid region icon for '" + iconPath
                            + ", responding with 400 Bad Request.");
                    response.status(400).end();
                    return;
                }
                if (! saveRequestBodyFile(request, iconPath)) {
                    logger.warn("Failed to save region icon to '" + iconPath
                            + "', responding with 500 Internal Server Error");
                    response.status(500).end();
                    return;
                }
                logger.info("Saved new region icon to '" + iconPath + "', "
                        + "updating database.");
                // TODO: check that the file is actually a valid image!
                return db.query("UPDATE $1 SET $2 = $3 WHERE ($4 = $5)", [
                        dbStructure.tables.REGIONS,
                        dbStructure.regions.ICON_URI,
                        iconURI,
                        dbStructure.regions.REGION_ID,
                        this.getResourceId(request) ]);
            })
            .then((dbResponse, err) => {
                if (! isDefined(dbResponse)) {
                    // Response was sent before the final database update,
                    // no further action required.
                    return;
                }
                if (err) {
                    logger.error("Error setting region icon: " + err);
                    response.status(500).end();
                    return;
                }
                response.set(headerKeys.ICON_LOCATION, iconURI);
                logger.info("Saved icon addition to database, responding with"
                        + " 204 No Content.");
                response.status(204).end();
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
            const displayName = request.body[resourceKeys.DISPLAY_NAME];
            db.query("UPDATE $1 SET $2 = $3 WHERE ($4 = $5)", [
                    dbStructure.tables.REGIONS,
                    dbStructure.regions.DISPLAY_NAME,
                    displayName,
                    dbStructure.regions.REGION_ID,
                    this.getResourceId(request) ])
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
