/**
 * @file db-map-types.js
 *
 * Provides methods for handling access to the ChunkAtlas database's map_type
 * table.
 */

const db = require("./db.js")
const dbStructure = require("./db-structure.js");

const { isDefined } = require("../validate.js");

const typeTable = dbStructure.tables.MAP_TYPE;
const idColumn = dbStructure.map_types.TYPE_ID

module.exports = {
    /**
     * Asynchronously gets the list of MapType IDs.
     *
     * @return  A Promise that will pass the TypeID string array to its
     *          success callback.
     */
    getMapTypeIds : () => {
        return db.getColumnValues(typeTable, idColumn);
    },

    /**
     * Asynchronously gets all information about a single map type.
     *
     * @param typeID  A map type's ID string.
     *
     * @return        A Promise that will pass the map type data object to its
     *                success callback.
     */
    getTypeData : (typeID) => {
        return db.getMatchingRow(typeTable, idColumn, typeID);
    },

    /**
     * Checks if a map type with a specific ID exists in the database.
     *
     * @param typeID  A potential map type ID string.
     *
     * @return        A Promise that will pass true to its success callback
     *                if the map type was found, false if it was not.
     */
    typeExists : (typeID) => {
        return db.getCell(typeTable, idColumn, idColumn, typeID)
        .then((cell) => { return true; })
        .catch(() => { return false; });
    },

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
        return db.getCell(typeTable, dbStructure.map_types.ICON_URI,
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
        return db.setColumnValues(typeTable,
                dbStructure.map_types.DISPLAY_NAME,
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
        return db.setColumnValues(typeTable,
                dbStructure.map_types.ICON_URI,
                iconURI,
                idColumn,
                typeID);
    }
};
