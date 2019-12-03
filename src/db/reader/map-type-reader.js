/**
 * @file map-type-reader.js
 *
 * Provides methods for reading from the the ChunkAtlas database's map_type
 * table.
 */

const dbReader = require("./db-reader.js")
const dbStructure = require("../db-structure.js");

const { isDefined } = require("../../validate.js");

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
        return dbReader.getColumnValues(typeTable, idColumn);
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
        return dbReader.getMatchingRow(typeTable, idColumn, typeID);
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
        return dbReader.getCell(typeTable, idColumn, idColumn, typeID)
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
        return dbReader.getCell(typeTable, dbStructure.map_types.ICON_URI,
                idColumn, typeID)
        .then((cell) => {
            return cell !== null;
        });
    }
};
