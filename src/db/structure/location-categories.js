/**
 * @file location-categories.js
 *
 * An Enum type defining all columns in the database's 'location_categories'
 * table.
 */

const { createTableEnum } = require("../../create-enum.js");

module.exports = createTableEnum("location_categories", [ "category_id",
        "display_name", "icon_uri", "last_update" ]);
