/**
 * @file MapKeyManager.js
 *
 * Loads MapKeys for all map regions and types, and controls which key is shown
 * on the page.
 */
class MapKeyManager {
    /**
     * Loads MapKey objects for each map type and region.
     */
    constructor() {
        this.types = {};
        RegionEnum.forEach((regionType) => {
            this.types[regionType] = {};
            MapTypeEnum.forEach((mapType) => {
                this.types[regionType][mapType] = new MapKey();
            });
        });
        const keySets = this;
        const keyRequest = new Request('/keys');
        console.log("Requesting map keys:");
        this._loadingPromise = fetch(keyRequest)
        .then(response => response.json())
        .then((keyArray) => {
            console.log("got map keys.");
            keyArray.forEach((key) => {
                assert(isDefined(key) && key !== null
                        && typeof key === "object"
                        && isDefined(key.description)
                        && isDefined(key.map_type),
                        "MapKeySets: received invalid map key " + key);
                const mapType = MapTypeEnum.withProperty("name",
                        key.map_type);
                const regionType = RegionEnum.withProperty("name",
                        key.region_name);
                if (! isDefined(mapType)) {
                    console.log("MapKeySets: invalid map type "
                            + key.map_type);
                    return;
                }
                if (! isDefined(regionType)) {
                    console.log("MapKeySets: invalid region type "
                            + key.region_name);
                    return;
                }
                let imageOrColor = "#000000";
                if ("image_url" in key && key.image_url != null) {
                    imageOrColor = key.image_url;
                }
                else if ("color" in key && key.color != null) {
                    imageOrColor = "#" + key.color;
                }
                keySets.types[regionType][mapType].addKeyItem(
                        new MapKeyItem(key.description, imageOrColor));
            });
        })
        .catch((err) => {
            console.log("MapKeyManager: Error loading map keys:");
            console.dir(err);
        });
    }

    /**
     * Performs some action when all key items have loaded.
     *
     * @param onLoad  A function to run after the map key loads. This function
     *                will not be passed any parameters.
     */
    then(onLoad) {
        return this._loadingPromise.then(onLoad);
    }

    /**
     * Sets the current map key that is displayed on the page.
     *
     * @param region   The RegionEnum value of the key that should be shown.
     *
     * @param mapType  The MapTypeEnum value of the key that should be shown.
     */
    setDisplayedKey(region, mapType)
    {
        assertIsEnum(region, RegionEnum, "MapKeyManager.setKey");
        assertIsEnum(mapType, MapTypeEnum, "MapKeyManager.setKey");
        if (isDefined(this._activeKey)) {
            this._activeKey.removeFromPage();
        }
        else {
            console.log("no active key to remove.");
        }
        this._activeKey = this.types[region][mapType];
        this._activeKey.showOnPage();
    }
}
