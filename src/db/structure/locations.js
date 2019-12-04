/**
 * @file locations.js
 *
 * An Enum type defining all columns in the database's 'locations' table.
 */

const { createTableEnum } = require("../../create-enum.js");

module.exports = createTableEnum("locations", [ "region_id", "category_id",
        "block_x", "block_z", "display_name", "color", "icon_uri",
        "last_update" ]);
