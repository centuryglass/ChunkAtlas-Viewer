/**
 * @file  primary-resource.js
 *
 * Handles requests sent to the primary URI in the application.
 */

const { RESTResource } = require("./rest-resource.js");
const db = require("../db.js");
const { isDefined } = require("../validate.js");
const { recursiveFreeze } = require("../const-util.js");

// Resource media JSON and response header keys:
const resourceKeys = {
    REGION_COUNT : "region_count",
    REGION_URIS : "Region URIs"
};
recursiveFreeze(resourceKeys);

class PrimaryResource extends RESTResource {
    constructor(uri, expressApp) {
        super(uri, media);
        const disallowed = [ "DELETE", "PATCH", "POST", "PUT" ];
        for (let method of disallowed) {
            this.setHTTPMethodDisallowed(method);
        }

        // Creates a Promise to get all distinct region names, then add the
        // region count to the response header.
        const regionQueryLoadPromise = (response) => {
            const REGION_QUERY = "SELECT DISTINCT region_name FROM map_tiles";
            return db.query(REGION_QUERY)
                .then((dbResponse) => {
                    if (isDefined(dbResponse) && isDefined(dbResponse.rows)) {
                        response.set(resourceKeys.REGION_COUNT,
                                dbResponse.rows.length);
                    }
                    else {
                        response.set(resourceKeys.REGION_COUNT, 0);
                    }
                    return dbResponse;
                });
        };

        // Respond with all region resource names.
        this.setHTTPMethodHandler("GET", (request, response) => {
            regionQueryLoadPromise(response).then((dbResponse) => {
                let content = { regionURIs : [] };
                if (response.get(resourceKeys.REGION_COUNT) > 0) {
                    for (let region of dbResponse.rows) {
                        content.regionURIs.push(region);
                    }
                }
                response.json(content);
            }).catch((err) => {
                response.set(500).end();
            });
        });
        this.setHTTPMethodHandler("HEAD", (request, response) => {
            regionQueryLoadPromise(response).then((dbResponse) => {
                response.end()
            }).catch((err) => {
                response.set(500).end();
            });
        });
        this.setHTTPMethodHandler("OPTIONS", (request, response) => {
            const doc = {
                "supported methods" : ["GET", "HEAD", "OPTIONS"],
                "resource type" : "collection",
                "description" : "Root API URI, used to get the region list."
            };
            response.json(doc);
        });

        // listen for all requests:
        expressApp.any(this.getURI(), (request, response) => {
            this.handleHTTPRequest(request, response);
        };
    }
}
