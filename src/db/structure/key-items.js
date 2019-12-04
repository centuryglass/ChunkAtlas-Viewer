/**
 * @file key-items.js
 *
 * An Enum type defining all columns in the database's 'key_items' table.
 */

const { createTableEnum } = require("../../create-enum.js");

module.exports = createTableEnum("key_items", [ "region_id", "type_id",
        "description", "last_update", "color", "icon_uri" ]);
