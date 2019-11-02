/**
 * @file logger.js
 *
 * Handles application logging using the winston logger.
 */
const path = require("path");
const winston = require("winston")


// Log file to hold all server messages:
const FULL_LOG_FILE_PATH = path.join(process.env.HOME, "serverLog");
// Log file to hold important server messages:
const IMPORTANT_LOG_FILE_PATH = path.join(process.env.HOME,
        "importantServerLog");

// Initialize logging:
const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: IMPORTANT_LOG_FILE_PATH,
                level: "warn" }),
        new winston.transports.File({ filename: FULL_LOG_FILE_PATH })
    ]
});

module.exports = logger;
