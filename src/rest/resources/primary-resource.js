/**
 * @file  primary-resource.js
 *
 * Handles requests sent to the primary URI in the application.
 */

const RESTResource
        = require("../rest-resource.js");
const db
        = require("../../db/db.js");
const dbStructure
        = require("../../db/db-structure.js");
const logger
        = require("../../logger.js");
const resourceTypes
        = require("../resource-types.js");
const { isDefined }
        = require("../../validate.js");
const { recursiveFreeze }
        = require("../../const-util.js");

// Response header keys:
const headerKeys = {
    REGION_COUNT : "region_count",
};
recursiveFreeze(headerKeys);

// Resource media JSON keys:
const resourceKeys = {
    REGION_URIS : "Region URIs"
};
recursiveFreeze(resourceKeys);

const PRIMARY_RESOURCE_URI = "/api";
class PrimaryResource extends RESTResource {
    constructor(expressApp) {
        super(resourceTypes.PRIMARY);
        const disallowed = [ "DELETE", "PATCH", "POST", "PUT" ];
        for (let method of disallowed) {
            this.setHTTPMethodDisallowed(method);
        }

        // Creates a Promise to get all distinct region names, then add the
        // region count to the response header.
        const regionQueryLoadPromise = (response) => {
            const table = dbStructure.tables.REGIONS;
            const column = dbStructure[table].REGION_ID;
            return db.query("SELECT $1 FROM " + table, [ column ])
                .then((dbResponse) => {
                    if (isDefined(dbResponse) && isDefined(dbResponse.rows)) {
                        response.set(headerKeys.REGION_COUNT,
                                dbResponse.rows.length);
                    }
                    else {
                        response.set(headerKeys.REGION_COUNT, "0");
                    }
                    return dbResponse;
                });
        };


        // #### HTTP request method handlers: ####

        // #### GET ####
        // Respond with all region resource names in body, region resource
        // count in header.
        this.setHTTPMethodHandler("GET", (request, response) => {
            regionQueryLoadPromise(response).then((dbResponse) => {
                let content = { regionURIs : [] };
                if (response.get(headerKeys.REGION_COUNT) > 0) {
                    for (let region of dbResponse.rows) {
                        content.regionURIs.push(region);
                    }
                }
                response.json(content);
            }).catch((err) => {
                logger.error("Error handling GET request: " + err);
                response.status(500).end();
            });
        });


        // #### HEAD ####
        // Respond with the region resource count header.
        this.setHTTPMethodHandler("HEAD", (request, response) => {
            regionQueryLoadPromise(response).then((dbResponse) => {
                response.end()
            }).catch((err) => {
                logger.error("Error handling HEAD request: " + err);
                response.status(500).end();
            });
        });


        // #### OPTIONS ####
        // Provide resource API documentation.
        this.setHTTPMethodHandler("OPTIONS", (request, response) => {
            const doc = {
                "supported methods" : ["GET", "HEAD", "OPTIONS"],
                "resource type" : "collection",
                "description" : "Root API URI, used to get the region list.",
                "media format" : resourceKeys,
                "method docs" : {
                    GET : "Get the list of region resource URIs, and sets the"
                          + " '" + headerKeys.REGION_COUNT + "' header key "
                          + "to the number of region resources.",
                    HEAD : "Sets the '" + headerKeys.REGION_COUNT + "' header"
                           + " key to the number of region resources.",
                    OPTIONS: "Returns this resource documentation object."

                }
            };
            response.json(doc);
        });

        // listen for all requests:
        this.enableResource(expressApp);
    }
}

module.exports = PrimaryResource;
