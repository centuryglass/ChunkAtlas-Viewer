/**
 * @file logger.js
 *
 * Handles application logging using the winston logger.
 */
const path = require("path");
const winston = require("winston");
const { format } = require("logform");

// Define where log data will be saved:
const logFiles = [
    // Path to store complete server logs:
    {
        path: process.env.FULL_LOG,
        level: "debug"
    },
    // Log file to hold general server logs:
    {
        path: process.env.GENERAL_LOG,
        level: "info"
    },
    // Log file to hold important server messages:
    {
        path: process.env.IMPORTANT_LOG,
        level: "warn"
    }
];
let fileTransports = [];
for (let file of logFiles) {
    if (file.path !== undefined) {
        fileTransports.push(new winston.transports.File({
            filename: file.path,
            level: file.level,
            handleExceptions: true }));
    }
}

// Define how log lines will be formatted:
const lineFormat = format.printf((info) => {
        return info.timestamp + info.level.toUpperCase() + ": " + info.message;
});

// Initialize logging:
const logger = winston.createLogger({
    level: 'debug',
    format: format.combine(
        format.timestamp({ format: "MM/DD/YYYY hh:mm:ssa: " }),
        lineFormat ),
    defaultMeta: { service: 'user-service' },
    transports: fileTransports
});

module.exports = logger;
