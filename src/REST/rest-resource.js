/**
 * @file rest-resource.js
 *
 * Manages a resource in a RESTful API.
 */

const fs
        = require("fs");
const path
        = require("path");
const express
        = require("express");
const logger
        = require("../logger.js");
const { isDefined, hasClass, assert, assertHasClass }
        = require("../validate.js");
const { setConstProperty, recursiveFreeze }
        = require("../const-util.js");

const resourceTypes 
        = require("./resource-types.js");
const resourcePatterns
        = require("./resource-patterns.js");

class RESTResource {
    /**
     * Create a new resource management object.
     *
     * @param type  A valid resource type ID, as defined in
     *              resource-patterns.js.
     */
    constructor(type) {
        const uriPattern = resourcePatterns[type];
        assert(isDefined(uriPattern), "Missing pattern for '" + type
                + "' resources (invalid resource type?).");
        setConstProperty(this, "_uriPattern", uriPattern);
        // Add placeholder handlers for requests of every HTTP method type:
        this._handlers = { };
        const HTTPMethods = [
            "DELETE",
            "GET",
            "HEAD",
            "OPTIONS",
            "PATCH",
            "POST",
            "PUT"
        ];
        const missingMethodError = (method) => {
            throw new Error("Method " + method + " handling not enabled!");
        };
        for (let method of HTTPMethods) {
            this._handlers[method] = () => missingMethodError(method);
        }
    }

    /**
     * Configures an Express application object to handle this resource.
     *
     * @param expressApp  The Express application object being used to run a
     *                    server application.
     */
    enableResource(expressApp) {
        expressApp.all(this._uriPattern, (request, response) => {
            this.handleHTTPRequest(request, response);
        });
   }

    /**
     * Gets this resource's ID.
     *
     * @param request  An express HTTP request object, holding the URI that
     *                 selected this resource.
     *
     * @return         The last section of this resource's URI, used to
     *                 represent this specific resource.
     */
    getResourceId(request) {
        const startIdx = request.url.lastIndexOf("/") + 1;
        return request.url.substr(startIdx);
    }

    /**
     * Gets an array of resource IDs containing this resource, its parent, and
     * any other resources above it, listed in child -> parent order.
     *
     * @param request  An express HTTP request object, holding the URI that
     *                 selected this resource.
     *
     * @return         The array of resources, from this resource to the
     *                 primary API resource, inclusive.
     */
    getResourceIdStack(request) {
        const resourceStack = [];
        let uri = request.url;
        while (uri.length > 0) {
            const dividerIdx = uri.lastIndexOf("/");
            assert(dividerIdx !== -1, + "Error decomposing URI '"
                    + request.url + "'");
            resourceStack.push(uri.substr(dividerIdx + 1));
            uri = uri.substr(0, dividerIdx - 1);
        }
        return resourceStack;
    }

    /**
     * Sets the function used to handle a particular type of HTTP request.
     *
     * @param httpMethod  The name of a standard HTTP method like GET, etc.
     *
     * @param handler     A function that will handle that type of request.
     *                    This handler will be passed an Express Request object
     *                    and its associated Express Response object as
     *                    parameters.
     */
    setHTTPMethodHandler(httpMethod, handler) {
        assert(isDefined(httpMethod) && isDefined(this._handlers[httpMethod]),
                "Invalid HTTP method " + httpMethod);
        assert(isDefined(handler) && typeof handler === "function",
                "Handler must be a function.");
        this._handlers[httpMethod] = handler;
    }

    /**
     * Configure the resource to respond to all requests with a given HTTP
     * method type with an empty message, with status 405 Not Allowed.
     *
     * @param httpMethod  A standard HTTP method the resource should not
     *                    accept.
     */
    setHTTPMethodDisallowed(httpMethod) {
        assert(isDefined(httpMethod) && isDefined(this._handlers[httpMethod]),
                "Invalid HTTP method " + httpMethod);
        this.setHTTPMethodHandler(httpMethod, (request, response) => {
            logger.debug("Rejecting disallowed HTTP method '" + httpMethod
                    + "' from [" + request.ips.toString() + "] sent to URI "
                    + request.url);
            response.status(405).end();
        });
    }

    /**
     * Handles a new HTTP request using a handler specific to the request's
     * method type.
     *
     * @param request   An Express Request sent to this resource's URI.
     *
     * @param response  The Express Response object associated with the
     *                  request.
     */
    handleHTTPRequest(request, response) {
        logger.info("Handling " + request.method + " request at URI "
                + request.url);
        this._handlers[request.method](request, response);
    }

    /**
     * Saves the body of a request to a given path.
     *
     * @param request  A HTTP request object with a body that should be saved.
     *
     * @param outPath  The path where the file should be saved. If it doesn't
     *                 exist, the parent directory of this path will be
     *                 created.
     *
     * @return         Whether the file could be created at the given path.
     */
    saveRequestBodyFile(request, outPath) {
        if (! isDefined(request.body) || ! hasClass(request.body, Buffer)) {
            logger.error("Attempted to save missing or invalid message body"
                    + " to " + outPath);
            return false;
        }
        const parentDir = path.dirname(outPath);
        if (! fs.existsSync(parentDir)
                || ! fs.statSync(parentDir).isDirectory()) {
            fs.mkdirSync(parentDir, { recursive: true });
        }
        try {
            fs.writeFileSync(outPath, request.body);
        }
        catch (err) {
            logger.error("Failed to write file to " + outPath + ": " + err);
            return false;
        }
        return true;
    }

    /**
     * Gets the directory where files under this resource should be stored.
     *
     * @param request   An Express Request sent to this resource's URI.
     *
     * @return          The directory where files associated with this
     *                  resource should be saved.
     */
    getResourceFileDirectory(request) {
        const resourceDir = path.join(__dirname, "..", "..", "resources");
        const resourceStack = this.getResourceIdStack(request);
        while (resourceStack.length > 0) {
            resourceDir = path.join(resourceDir, resourceStack.pop());
        }
        return resourceDir;
    }
}

module.exports = RESTResource;
