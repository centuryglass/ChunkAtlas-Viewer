/**
 * @file MapKey.js
 *
 * Stores a set of map key items for a single map type and region.
 */
class MapKey {
    constructor() {
        this.items = [];
    }

    /**
     * Adds a new key item to the list.
     *
     * @param keyItem  A MapKeyItem object to add to this key.
     */
    addKeyItem(keyItem) {
        assertIsClass(keyItem, MapKeyItem, "MapKey.addKeyItem");
        this.items.push(keyItem);
    }

    /**
     * Gets the number of items in the key list.
     *
     * @return  The total number of items added using MapKey.addKeyItem.
     */
    length() {
        return this.items.length;
    }

    /**
     * Ensures that this map key's elements are displayed on the page.
     */
    showOnPage() {
        this.items.forEach((keyItem) => {
            keyItem.showHtmlElement();
        });
    }

    /**
     * Ensures that this map key's elements are not displayed on the page.
     */
    removeFromPage() {
        this.items.forEach((keyItem) => {
            keyItem.removeHtmlElement();
        });
    }
}
