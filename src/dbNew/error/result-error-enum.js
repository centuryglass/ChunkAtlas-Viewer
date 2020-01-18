/**
 * @file result-error-enum.js
 *
 *  Enumerates all the ways that a database Result object might fail to
 * provide expected data. Unlike DBErrors, ResultErrors involve completely
 * valid database queries that returned valid Result objects. The error in
 * this case is that the data returned differs in some way from the expected
 * result.
 */

const EnumBuilder = require("../../enum-builder.js");

const builder = new EnumBuilder("ResultError");
builder.addProperty("message", "string")

// Add a new error type to the enum class:
function addError(name, message) {
    builder.addValue(name, { message: message });
}

addError("NO_RESULTS", "No rows found in the database Result object.");
addError("EXTRA_RESULTS", "Expected only one row in the database Result "
        + "object, but multiple rows found.");

module.exports = builder.build();
