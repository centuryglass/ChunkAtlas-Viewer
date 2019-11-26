/**
 * @file resource-types.js
 *
 * Immutably defines all REST resource type names.
 */

const { setConstProperty } = require("../const-util.js");

const resources = [
    "primary",
    "region",
    "region_icon",
    "location_groups",
    "location_category",
    "location",
    "location_icon",
    "map_type",
    "map_type_icon",
    "key_item",
    "key_item_icon",
    "map_tile",
    "map_tile_image"
];

const resourceTypes = {}

resources.forEach((resource) => {
    setConstProperty(resourceTypes, resource.toUpperCase(), resource);
});

module.exports = resourceTypes;
