/**
 * @file RegionEnum.js
 *
 * Enumerates Minecraft region types:
 */
const RegionEnum = createEnum("RegionEnum",
    ["OVERWORLD", "NETHER", "END"], [
        [["name", "Overworld"]],
        [["name", "Nether"]],
        [["name", "End"]]
    ]
);
