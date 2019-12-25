/**
 * @file error-enum.js
 *
 * Represents different error types that can occur when connecting to a
 * database.
 */

const { createEnum } = require("../create-enum.js");

// Error types:
const errors = [
    "MISSING_PRIVILEGE",
    "NO_RESULTS",
    "EXTRA_RESULTS",
    "INVALID_ID",
    "DUPLICATE_ENTRY",
    "EMPTY_STRING"
];

// Property keys:
const messageKey = "message";
const messages = [
    "Missing database access privileges.",
    "No results found.",
    "Expected one result, found more.",
    "Invalid ID string format.",
    "Tried to insert a duplicate value.",
    "Tried to insert an empty string."
]
const properties = [];
for (let i = 0; i < messages.length; i++) {
    properties.push([[messageKey, messages[i]]]);
}

module.exports = createEnum("ErrorEnum", errors, properties);
