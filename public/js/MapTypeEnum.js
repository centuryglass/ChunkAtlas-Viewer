/**
 * @file MapTypeEnum.js
 *
 * Enumerates generated map types.
 */
const MapTypeEnum = createEnum("MapTypeEnum",
        ["BIOME", "ERROR", "STRUCTURE", "TOTAL_ACTIVITY", "RECENT_ACTIVITY"], [
            [["name", "Biome"]],
            [["name", "Error"]],
            [["name", "Structure"]],
            [["name", "Total Activity"]],
            [["name", "Recent Activity"]]
        ]
);
