/**
 * @file DimensionEnum.js
 *
 * Enumerates Minecraft dimension types:
 */
const DimensionEnum = createEnum("DimensionEnum",
    ["OVERWORLD", "NETHER", "END"], [
        [["name", "Overworld"]],
        [["name", "Nether"]],
        [["name", "End"]]
    ]
);
