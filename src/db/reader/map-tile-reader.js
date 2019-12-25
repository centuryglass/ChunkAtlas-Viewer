/**
 * @param map-tile-reader.js
 *
 * Reads map tile data from the database.
 */

const dbReader = require("./db-reader.js")
const mapTiles = require("../structure/map-tiles.js");
const dbStructure = require("../db-structure.js");

const { isDefined } = require("../../validate.js");

const tileTable = mapTiles.name;
const column = mapTiles.column;

module.exports = {
    /**
     * Gets all map tile URIs within a specific map.
     *
     * @param regionID  A mapped Minecraft region.
     *
     * @param typeID    A valid map type.
     *
     * @param size      A map tile size. If left undefined, all sizes will be
     *                  used.
     *
     * @return          A promise resolving to the list of map tiles that
     *                  share the given region, map type, and size
     *                  (if provided).
     */
    getTileURIs : (regionID, typeID, size) => {
        let query = "SELECT (" + column(mapTiles.TILE_URI) + ") FROM "
                + tileTable + " WHERE (" + column(mapTiles.REGION_ID)
                + " = $1 AND " + column(mapTiles.TYPE_ID) + " = $2";
        query += (isDefined(size) ? "AND " + column(mapTiles.SIZE)
                + " = $3)" : ")");
        const params = [ regionID, typeID ];
        if (isDefined(size)) { params.push(size); }
        return dbReader.query((dbResponse, err) => {
            const tileURIs = dbReader.getResponseValues(dbResponse,
                    column(mapTiles.TILE_URI));
            return new Promise((resolve, reject) => {
                if (err) { reject(err); }
                else { resolve(tileURIs); }
            });
        });
    },

    /**
     * Gets all information about a single map tile.
     *
     * @param tileURI  The URI of a map tile resource.
     *
     * @return         A promise resolving with the map tile's row in the
     *                 database, or rejecting if no tile is found with the
     *                 given URI.
     */
    getTileData : (tileURI) => {
        return dbReader.getMatchingRow(tileTable, column(mapTiles.TILE_URI),
                tileURI);
    },

    /**
     * Looks up the resource URI of a map tile at a specific set of
     * coordinates, filtering by region, map type, and tile size.
     *
     * @param regionID  The map region containing the requested tile.
     *
     * @param typeID    The map type of the requested tile.
     *
     * @param size      The resolution of the requested tile.
     *
     * @param xPos      The x-coordinate of the tile's left edge within its
     *                  region, measured in Minecraft blocks.
     *
     * @param zPos      The z-coordinate of the tile's top edge within its
     *                  region, measured in Minecraft blocks.
     *
     * @return          A promise that will resolve with the matching tile's
     *                  URI, or reject if no matching tile is found.
     */
    getTileURI : (regionID, typeID, size, xPos, zPos) => {
        const query = "SELECT " + columns.TILE_URI + " FROM " + tileTable
            + " WHERE ("
            + column(mapTiles.REGION_ID) + " = $1 AND "
            + column(mapTiles.TYPE_ID) + " = $2 AND "
            + column(mapTiles.SIZE) +    " = $3 AND "
            + column(mapTiles.BLOCK_X) + " = $4 AND "
            + column(mapTiles.BLOCK_Z) + " = $5)";
        const params = [ regionID, typeID, size, xPos, zPos ];
        const queryPromise = dbReader.query(query, params);
        return dbReader.getQueryResponseCell(queryPromise,
                column(mapTiles.TILE_URI));
    },

    /**
     * Gets all tile rows in the map_tiles table that have a specific
     * regionID, typeID, and size, and are found within a specific coordinate
     * range.
     *
     * @param regionID  The map region of the requested tiles.
     *
     * @param typeID    The map type of the requested tiles.
     *
     * @param size      The resolution of the requested tiles.
     *
     * @param xMin      The minimum tile x-coordinate requested.
     *
     * @param zMin      The minimum tile z-coordinate requested.
     *
     * @param xMax      The maximum tile x-coordinate requested.
     *
     * @param zMax      The maximum tile z-coordinate requested.
     *
     * @return          A Promise that will resolve with all tile rows within
     *                  the given range with the requested region, type, and
     *                  size.
     */
    getTilesInRange : (regionID, typeID, size, xMin, zMin, xMax, zMax) => {
        const query = "SELECT " + column(mapTiles.TILE_URI) + " FROM "
            + tileTable + " WHERE ("
            + column(mapTiles.REGION_ID) + " = $1 AND "
            + column(mapTiles.TYPE_ID) + " = $2 AND "
            + column(mapTiles.SIZE) +    " = $3 AND "
            + column(mapTiles.BLOCK_X) + " >= $4 AND "
            + column(mapTiles.BLOCK_Z) + " >= $5 AND "
            + column(mapTiles.BLOCK_X) + " <= $6 AND "
            + column(mapTiles.BLOCK_Z) + " <= $7)";
        const params = [ regionID, typeID, size, xMin, zMin, xMax, zMax ];
        return dbReader.getQueryResponseRows(dbReader.query(query, params));
    },

    /**
     * Checks if a tile exists with a specific region, map type, size, and
     * coordinates.
     *
     * @param regionID  The map region containing the requested tile.
     *
     * @param typeID    The map type of the requested tile.
     *
     * @param size      The resolution of the requested tile.
     *
     * @param xPos      The x-coordinate of the tile's left edge within its
     *                  region, measured in Minecraft blocks.
     *
     * @param zPos      The z-coordinate of the tile's top edge within its
     *                  region, measured in Minecraft blocks.
     *
     * @return          A Promise that resolves with 'true' if the tile exists,
     *                  'false' if it does not.
     */
    tileExists : (regionID, typeID, size, xPos, zPos) => {
        return module.exports.getTileURI(regionID, typeID, size, xPos, zPos)
        .then(() => { return true; })
        .catch((err) => {
            if (err.toString() === "Error: Failed to find single '" +
                    column(mapTiles.TILE_URI) + "' cell") {
                return false;
            }
            throw err;
        });
    }
};
