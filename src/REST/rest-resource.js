/**
 * @file rest-resource.js
 *
 * Manages a resource in a RESTful API.
 */

const logger = require("../logger.js");

const { isDefined, assert, assertHasClass } = require("../validate.js");
const { setConstProperty, recursiveFreeze } = require("../const-util.js");


class RESTResource {
    /**
     * Create a new resource management object.
     *
     * @param uri    The resource's URI.
     */
    constructor(uri) {
        const missingMethodError = (method) {
            throw new Error("Method " + method + " handling not enabled!"
        };
        setConstProperty(this, "_uri", uri);
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
        for (let method of HTTPMethods) {
            this._handlers[method] = () => missingMethodError(method);
        }
    }

    /**
     * Gets the resource's URI.
     *
     * @return  The immutable resource URI string.
     */
    getURI() { return this._uri; }

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
                "setHTTPMethodHandler: invalid HTTP method " + httpMethod);
        assert(isDefined(handler) && typeof handler === "function",
                "setHTTPMethodHandler: handler must be a function.");
        this._handlers[httpMethod] = handler;
    }

    /**
     * Configure the resource to respond to all requests with a given HTTP
     * method type with an empty message, with status 405 Not Allowed.
     *
     * @param httpMethod  A standard HTTP method the resource should not
     *                    accept.
     */
    markHTTPMethodDisallowed(httpMethod) {
        assert(isDefined(httpMethod) && isDefined(this._handlers[httpMethod]),
                "markHTTPMethodDisallowed: invalid HTTP method "
                + httpMethod);
        this.setHTTPMethodHandler(httpMethod, (request, response) => {
            logger.debug("Rejecting disallowed HTTP method '" + httpMethod
                    "' from [" + req.ips.toString() + "]");
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
        assertHasClass(request, Request,
                "handleHTTPRequest: request is not an Express request.");
        this._handlers[request.method](request, response);
    }
}

module.exports = RESTResource;
