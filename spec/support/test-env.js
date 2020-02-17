/**
 * @file test-env.js
 *
 * Sets environment variables to appropriate values for testing.
 */

const fs = require("fs");
const winston = require("winston");
const { isDefined, assertInstanceOf } = require("../../src/validate.js");

// Relevant environment variables:
const DATABASE_HOST                 = "PGHOST";
const DATABASE_NAME                 = "PGDATABASE";
const DATABASE_PORT                 = "PGPORT";
const DATABASE_READ_USER            = "PGREADER";
const DATABASE_READ_USER_PASSWORD   = "PGREADER_PASSWORD";
const DATABASE_WRITE_USER           = "PGWRITER";
const DATABASE_WRITE_USER_PASSWORD  = "PGWRITER_PASSWORD";
const PUBLIC_KEY_PATH               = "PUBLIC_KEY_PATH";
const PRIVATE_KEY_PATH              = "PRIVATE_KEY_PATH";
const MAP_GENERATOR_PUBLIC_KEY_PATH = "GEN_PUBLIC_KEY_PATH";
const FULL_LOG_PATH                 = "FULL_LOG";
const GENERAL_LOG_PATH              = "GENERAL_LOG";
const ERROR_LOG_PATH                = "IMPORTANT_LOG";

// Test env definition file path (keep this in .gitignore!)
const TEST_ENV_PATH = "./spec/support/TEST_ENV";

const envMap = {};

/**
 * Applies an environment variable loaded from the test environment file.
 *
 * @param varName  The environment variable to set.
 *
 * @param errorMsg  An error message to throw if the variable was not defined.
 */
function setEnv(varName, errorMsg) {
    if (! isDefined(envMap[varName])) {
        if (isDefined(errorMsg)) {
            Error(errorMsg);
        }
    }
    else {
        //logger.info(varName + " = " + envMap[varName]);
        process.env[varName] = envMap[varName];
    }
}

module.exports = {
    init : function() {
        const data = fs.readFileSync(TEST_ENV_PATH);
        assertInstanceOf(data, Buffer, "Invalid env file data");
        const lines = data.toString().split("\n");
        for (let line of lines) {
            const divIdx = line.indexOf("=");
            if (divIdx < 0) {
                Error("Invalid test env definition '" + line + "'");
            }
            envMap[line.substr(0, divIdx)] = line.substr(divIdx + 1);
        }

        setEnv(DATABASE_HOST, "Missing test database host address.");
        setEnv(DATABASE_NAME, "Missing test database name.");
        setEnv(DATABASE_READ_USER,
                "Missing test database user for read-only access.");
        setEnv(DATABASE_READ_USER_PASSWORD);
        setEnv(DATABASE_WRITE_USER,
                "Missing test database user for read-write access.");
        setEnv(PUBLIC_KEY_PATH, "Missing testing public key path.");
        setEnv(PRIVATE_KEY_PATH, "Missing testing private key path.");
        setEnv(MAP_GENERATOR_PUBLIC_KEY_PATH,
                "Missing test map generator's public key path.");
        setEnv(FULL_LOG_PATH);
        setEnv(GENERAL_LOG_PATH);
        setEnv(ERROR_LOG_PATH);

        // When testing, add a console logger transport.
        const logger = require("../../src/logger.js");
        logger.enableConsoleLogging();
    }
};

