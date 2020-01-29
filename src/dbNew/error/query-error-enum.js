/**
 * @file error-enum.js
 *
 * Represents different error types that can occur when connecting to a
 * database.
 *
 * @see https://www.postgresql.org/docs/9.4/errcodes-appendix.html
 */

const EnumBuilder = require("../../enum-builder.js");

const errors = [];
const properties = []

const builder = new EnumBuilder("ErrorEnum");
// Store error message strings:
builder.addProperty("message", "string");
// Store a function that checks if error objects match error values:
builder.addProperty("predicate", "function");

/*
 * Add an error type to the error enum class.
 *
 * @param type       The error's enum value name.
 *
 * @param message    A message to associate with the given error.
 *
 * @param predicate  A function that, given a node-postgres error object,
 *                   returns true if that error matches this ErrorEnum value.
 */
function addError(type, message, predicate) {
    builder.addValue(type, {
        message: message,
        predicate: predicate
    });
}

addError("INVALID_SQL", "Invalid SQL query.",
        (err) => err.code == "42601");
addError("MISSING_PRIVILEGE", "Missing database access privileges.",
        (err) => err.code === "42501");
addError("INVALID_TABLE", "Attempted to access a table that does not exist.",
        (err) => err.code === "42P01");
addError("INVALID_COLUMN", "Attempted to access a column that does not exist.",
        (err) => err.code === "42703");
addError("INVALID_ID", "Attempted to set a malformed ID string",
        (err) => err.routine === "ExecConstraints"
        && err.constraint.includes("_valid_id"));
addError("INVALID_FOREIGN_KEY", "Invalid foreign key referenced.",
        (err) => err.routine === "ri_ReportViolation"
        && err.constraint.includes("_fk"));
addError("DUPLICATE_ENTRY", "Tried to insert a duplicate value.",
        (err) => err.code === "23505");
addError("EMPTY_STRING", "Tried to insert an invalid empty string.",
        (err) => err.routine === "ExecConstraints"
        && err.constraint.includes("_nonempty"));
addError("STR_TOO_LONG", "Attempted to add a string exceeding the max length.",
        (err) => err.code === "22001");
addError("OTHER_CONSTRAINT", "Encountered some other failed constraint.",
        (err) => err.routine === "ExecConstraints");
addError("UNKNOWN_ERROR", "An unknown database error occurred.",
        (err) => true);

module.exports = builder.build();
