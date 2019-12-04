/**
 * @file regions.js
 *
 * An Enum type defining all columns in the database's 'regions' table.
 */

const { createTableEnum } = require("../../create-enum.js");

module.exports = createTableEnum("regions", [ "region_id", "display_name",
        "icon_uri", "last_update" ]);
