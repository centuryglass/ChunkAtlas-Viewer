/**
 * @file http-crypto.js
 *
 * Verifies and decrypts incoming HTTP requests, and signs and verifies
 * outgoing HTTP responses.
 *
 * http-crypto expects all communication to be with a single fixed target.
 * HTTP message headers must hold an encrypted and signed AES key value, used
 * to encrypt the message body.
 */
const aesjs = require("aes-js");
const RSASet = require("./rsa-set.js");
const constUtils = require("./const-util.js");
const validate = require("./validate.js");
const { StringDecoder } = require("string_decoder");

// Relevent HTTP header value keys:
const HeaderKeys =
{
    // Holds a RSA-encrypted AES key used to encode and decode messages.
    ENCRYPTED_AES      : "key",
    RESPONSE_SIGNATURE : "signature"
}
constUtils.recursiveFreeze(HeaderKeys);

// RSA keys for this application and the remote target, loaded from environment
// variables.
const rsaKeys = new RSASet(process.env.PUBLIC_KEY_PATH,
        process.env.PRIVATE_KEY_PATH,
        process.env.GEN_PUBLIC_KEY_PATH);

module.exports = {
    /**
     * Express middleware to verify and decrypt a signed and encrypted JSON
     * message.
     *
     * @param req   An incoming HTTP request object.
     *
     * @param res   The corresponding HTTP response object.
     *
     * @param next  A function used to call the next middleware function set to
     *              process the message.
     */
    decrypt: function (req, res, next) {
        const aesEncryptedKey = req.headers[HeaderKeys.ENCRYPTED_AES];
        if (! validate.isDefined(aesEncryptedKey))
        {
            // No key provided, so no decryption necessary.
            next();
            return;
        }
        const decrypted = rsaKeys.verifyAndDecrypt(Buffer.from(aesEncryptedKey,
                    "base64"));
        if (! decrypted)
        {
            // Discard signed messages with the wrong signature.
            console.log("Warning: received message with invalid signature.");
            return;
        }
        // TODO: Switch from ECB (Electronic Codebook) encryption to something
        //       more secure. This is not an urgent problem only because
        //       keeping message data secret is not terribly critical for this
        //       application.
        const aes = new aesjs.ModeOfOperation.ecb(decrypted);
        let messageBytes = aes.decrypt(req.body);
        // Remove padding from decrypted message:
        const paddingBytes = messageBytes[messageBytes.length - 1];
        messageBytes = messageBytes.slice(0, messageBytes.length
                - paddingBytes);
        const messageStr = new StringDecoder().write(
                Buffer.from(messageBytes));
        try {
            req.body = JSON.parse(messageStr);
        }
        catch(parseException) {
            // Message is not javascript, set body to a buffer holding the raw
            // decrypted data:
            req.body = Buffer.from(messageBytes);
        }
        next();
    },

    /**
     * Signs an HTTP response message prior to sending.
     *
     * @param res   An unsent Express HTTP response object.
     *
     * @param body  A string or Buffer that will be sent as the response
     *              message's body.
     *
     * @return      The same response object, with an added signature header.
     *              The signature is generated using this application's private
     *              key and the contents of the message body. If the body
     *              message is a string, the signature will be created from the
     *              equivalent UTF-8 byte encoding. The signature will be
     *              base-64 encoded.
     */
    signResponse : function (res, body) {
        validate.assert(validate.isDefined(res),
                "Response must be defined.");
        validate.assert(validate.isDefined(body),
                "Response body must be defined.");
        if (typeof body === "string" || body instanceof String) {
            body = Buffer.from(body, "UTF-8");
        }
        else {
            validate.assert(Buffer.isBuffer(body),
                    "Message body must be a string or Buffer.");
        }
        console.log("Signing " + body.length + "-byte response body:");
        const signatureBuf = rsaKeys.sign(body);
        const signature = signatureBuf.toString("base64");
        res.append(HeaderKeys.RESPONSE_SIGNATURE, signature);
        return res;
    }
}
