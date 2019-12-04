/**
 * @file map-types.js
 *
 * An Enum type defining all columns in the database's 'map_types' table.
 */

const { createTableEnum } = require("../../create-enum.js");

module.exports = createTableEnum("map_types", [ "type_id", "display_name",
        "icon_uri", "last_update" ]);
