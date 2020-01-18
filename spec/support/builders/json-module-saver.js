/**
 * @file json-module-saver.js
 *
 * Saves a test object as a node module file.
 */

const { writeFileSync } = require("fs");
const path = require("path");

module.exports = function(jsonData, outPath) {
    outPath = path.join(__dirname, outPath);
    let fullText = "module.exports = " + JSON.stringify(jsonData, null, 4)
            + ";";
    // Condense the output a bit by using only one line for short inner arrays.
    // Match each multi-line, non-nested array, replace newlines and
    // surrounding indentation with single spaces if the resulting line
    // wouldn't exceed 120 characters.
    fullText = fullText.replace(/ *\[[^\]]*\n\s*\]/gm, (arr) => {
        const condensed = arr.replace(/\s*\n\s*/gm, " ");
        if (condensed.length < 120) { return condensed; }
        return arr;
    });
    // Write to the output file:
    console.log("Writing module to " + outPath);
    writeFileSync(outPath, fullText);
};
