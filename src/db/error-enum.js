/**
 * @file error-enum.js
 *
 * Represents different error types that can occur when connecting to a
 * database.
 */

const { createEnum } = require("../create-enum.js");

const errors = [];
const properties = []

// property keys:
const messageKey = "message";
const selectorKey = "selector";

/**
 * Add an error type to represent within the enum.
 *
 * @param type  The error's enum value name.
 *
 * @param message  A message to associate with the given error.
 *
 * @param selector  A function that, given a node-postgres error object,
 *                  returns true if that error matches this ErrorEnum value.
 */
function addError(type, message, selector) {
    errors.push(type);
    properties.push([[messageKey, message], [selectorKey, selector]]);
}

addError("INVALID_SQL", "Invalid SQL query.",
        (err) => err.routine === "scanner_yyerror");
addError("MISSING_PRIVILEGE", "Missing database access privileges.",
        (err) => err.routine === "aclcheck_error");
addError("INVALID_TABLE", "Attempted to access a table that does not exist.",
        (err) => err.routine === "parserOpenTable");
addError("INVALID_COLUMN", "Attempted to access a column that does not exist.",
        (err) => err.routine === "errorMissingColumn");
addError("NO_RESULTS", "No query results found.", (err) => false);
addError("EXTRA_RESULTS", "Expected one result, found more.", (err) => false);
addError("INVALID_ID", "Attempted to set a malformed ID string",
        (err) => err.routine === "ExecConstraints"
        && err.constraint.includes("_valid_id"));
addError("INVALID_FOREIGN_KEY", "Invalid foreign key referenced.",
        (err) => err.routine === "ri_ReportViolation"
        && err.constraint.includes("_fk"));
addError("DUPLICATE_ENTRY", "Tried to insert a duplicate value.",
        (err) => err.routine === "_bt_check_unique");
addError("EMPTY_STRING", "Tried to insert an invalid empty string.",
        (err) => err.routine === "ExecConstraints"
        && err.constraint.includes("_nonempty"));
addError("OTHER_CONSTRAINT", "Encountered some other failed constraint.",
        (err) => err.routine === "ExecConstraints");
addError("INVALID_RESULTS", "Invalid database Result received.",
        (err) => false);
addError("STR_TOO_LONG", "Attempted to add a string exceeding the max length.",
        (err) => err.code === "22001");
addError("UNKNOWN_ERROR", "An unknown database error occurred.",
        (err) => true);

module.exports = createEnum("ErrorEnum", errors, properties);
