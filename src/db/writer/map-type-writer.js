/**
 * @file db-map-types.js
 *
 * Provides methods for making changes to the ChunkAtlas database's map_type
 * table.
 */

const dbWriter = require("./db-writer.js")
const mapTypes = require("../structure/map-types.js");

const { isDefined } = require("../../validate.js");

const typeTable = mapTypes.name;
const idColumn = mapTypes.column(mapTypes.TYPE_ID);

module.exports = {
    /**
     * Checks if a specific map type's icon URI is set to a non-null value.
     *
     * @param typeID  A map type's ID string.
     *
     * @return        A Promise that will pass true to its success callback
     *                if the map type icon was found, false if it was not. The
     *                Promise will reject if the map type is not found in the
     *                database.
     */
    typeIconSet : (typeID) => {
        return dbWriter.getCell(typeTable, mapTypes.column(mapTypes.ICON_URI),
                idColumn, typeID)
        .then((cell) => {
            return cell !== null;
        });
    },

    /**
     * Sets a specific map type's display name.
     *
     * @param typeID       The specific region to update.
     *
     * @param displayName  The new display name to apply.
     */
    setDisplayName : (typeID, displayName) => {
        return dbWriter.setColumnValues(typeTable,
                mapTypes.column(mapTypes.DISPLAY_NAME),
                displayName,
                idColumn,
                typeID);
    },

    /**
     * Sets a specific map type's icon URI.
     *
     * @param typeID   The specific region to update.
     *
     * @param iconURI  The new icon URI to set.
     */
    setIconURI : (typeID, iconURI) => {
        return dbWriter.setColumnValues(typeTable,
                mapTypes.column(mapTypes.ICON_URI),
                iconURI,
                idColumn,
                typeID);
    }
};
