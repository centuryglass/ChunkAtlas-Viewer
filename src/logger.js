/**
 * @file logger.js
 *
 * Handles application logging using the winston logger.
 */
const path = require("path");
const winston = require("winston");
const { format } = require("logform");


// Log file to hold all server messages:
const FULL_LOG_FILE_PATH = process.env.FULL_LOG;
// Log file to hold important server messages:
const IMPORTANT_LOG_FILE_PATH = process.env.IMPORTANT_LOG;

// Define where log data will be saved:
const importantFileTransport = new winston.transports.File({
        filename: IMPORTANT_LOG_FILE_PATH, level: "warn",
        handleExceptions: true });
const fullFileTransport = new winston.transports.File({
        filename: FULL_LOG_FILE_PATH, handleExceptions: true });

// Define how log lines will be formatted:
const lineFormat = format.printf((info) => {
        return info.timestamp + info.level.toUpperCase() + ": " + info.message;
});

// Initialize logging:
const logger = winston.createLogger({
    level: 'debug',
    format: format.combine(
                format.timestamp({ format: "MM/DD/YYYY hh:mm:ssa: " }),
                lineFormat
            ),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.Console(),
        importantFileTransport,
        fullFileTransport
    ]
});

module.exports = logger;
