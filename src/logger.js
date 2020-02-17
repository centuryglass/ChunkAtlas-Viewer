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
const consoleTransport = new winston.transports.Console({level: "info"});

class NullTransport extends winston.Transport {
    constructor(opts) { super(opts); }

    log(info, callback) {
        // Do nothing, discard input.
    }
}
const nullTransport = new NullTransport();

// Define how log lines will be formatted:
const lineFormat = format.printf((info) => {
        return info.timestamp + info.level.toUpperCase() + ": " + info.message;
});

// Initialize logging:
const winstonLogger = winston.createLogger({
    level: 'debug',
    format: format.combine(
        format.timestamp({ format: "MM/DD/YYYY hh:mm:ssa: " }),
        lineFormat ),
    defaultMeta: { service: 'user-service' },
    transports: fileTransports
});

let loggingEnabled = true;
let consoleLoggingEnabled = false;

const Logger = {
    enableConsoleLogging: function() {
        if (! consoleLoggingEnabled) {
            consoleLoggingEnabled = true;
            if (loggingEnabled) {
                winstonLogger.add(consoleTransport);
            }
        }
    },

    enableLogging: function() {
        if (! loggingEnabled) {
            loggingEnabled = true;
        }
    },

    disableLogging: function() {
        if (loggingEnabled) {
            loggingEnabled = false;
        }
    }
};

const loggingMethods = [
    "log",
    "error",
    "warn",
    "info",
    "http",
    "verbose",
    "debug",
    "silly",
];

for (let method of loggingMethods) {
    Logger[method] = function() {
        if (loggingEnabled) {
            winstonLogger[method].apply(winstonLogger, arguments);
        }
    };
}

const otherMethods = [
    "startTimer",
    "profile",
    "query",
    "on",
    "end",
    "add",
    "remove",
    "clear"
];

for (let method of otherMethods) {
    Logger[method] = function() {
        winstonLogger[method].apply(winstonLogger, arguments);
    };
}
Object.freeze(Logger);

module.exports = Logger;
