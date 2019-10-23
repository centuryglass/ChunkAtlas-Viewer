/**
 * @File rsa-set.js
 *
 * Handles the set of RSA keys used to communicate with the Minecraft map 
 * generator.
 */

const NodeRSA = require("node-rsa");
const fs = require("fs");
const validate = require("./validate.js");

/**
 * Stores the RSA keys needed to manage communications with a single target.
 * All keys use pkcs1 encryption, and are loaded from pkcs8-formatted byte
 * files.
 *
 * @param publicKeyPath        The path to this application's public key file.
 *
 * @param privateKeyPath       The path to this application's private key file.
 *
 * @param remotePublicKeyPath  The path to the communication target's public
 *                             key file.
 */
class RSASet {
    constructor(publicKeyPath, privateKeyPath, remotePublicKeyPath) {
        const keys = [
            {
                "path" : publicKeyPath,
                "name":"_publicKey",
                "format": "pkcs8-public-der"
            },
            {
                "path" : privateKeyPath,
                "name":"_privateKey",
                "format": "pkcs8-private-der"
            },
            {
                "path" : remotePublicKeyPath,
                "name":"_remotePublicKey",
                "format": "pkcs8-public-der"
            }
        ];
        const rsaSet = this;
        keys.forEach((key) => {
            validate.assert(validate.isDefined(key.path)
                    && ! key.path.length !== 0,
                    "Missing or invalid key: " + key.name);
            fs.readFile(key.path, (err, buffer) => {
                if (err) { throw err; }
                rsaSet[key.name] = new NodeRSA(buffer, key.format,
                        {'encryptionScheme': 'pkcs1'});
            });
        });
    }

    /** 
     * Creates a signature for a message Buffer.
     *
     * @param messageBuf  The message buffer to sign and encrypt.
     * 
     * @return            The SHA256 signature Buffer, created using this
     *                    application's private key.
     */
    sign(messageBuf) {
        validate.assertIsClass(messageBuf, Buffer,
                "Message was not a buffer!");
        return this._privateKey.sign(messageBuf);
    }

    /**
     * Encrypts and signs a message.
     *
     * @param messageBuf  The message buffer to sign and encrypt.
     *
     * @return            The 256-byte signature and the 256-byte encrypted
     *                    message, concatenated into a single Buffer.
     */
    encryptAndSign(messageBuf) {
        validate.assertIsClass(messageBuf, Buffer,
                "Message was not a buffer!");
        const encrypted = this._publicKey.encrypt(messageBuf);
        const signature = this.sign(encrypted);
        return Buffer.concat([signature, encrypted]);
    }

    /**
     * Verifies and decrypts a message.
     *
     * @param messageBuf  A buffer holding a 256-byte signature and a 256-byte
     *                    encrypted message.
     *
     * @return            The decrypted message, or false if the message was
     *                    not from the expected sender.
     */
    verifyAndDecrypt(messageBuf) {
        validate.assertIsClass(messageBuf, Buffer,
                "Message was not a buffer!");
        const signature = messageBuf.slice(0, 256);
        const encrypted = messageBuf.slice(256);
        if (! this._remotePublicKey.verify(encrypted, signature, "buffer",
                    "hex"))
        {
            return false;
        }
        return this._privateKey.decrypt(encrypted);
    }
}

module.exports = RSASet;
