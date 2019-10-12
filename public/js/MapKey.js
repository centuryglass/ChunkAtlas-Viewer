/**
 * @file MapKey.js
 *
 * Gets a list of map key entries to display.
 */

/**
 * Holds a set of description/image pairs for a specific map type's map key.
 */
class MapKey {
    constructor() {
        this.values = [];
    }

    /**
     * Adds a new key item to the list.
     *
     * @param itemName      The name/description of the new key item.
     *
     * @param colorOrImage  Either an icon image URL to load, or a color value,
     *                      to be displayed next to the key item.
     */
    addValue(itemName, colorOrImage) {
        if (isHexColorString(colorOrImage)) {
            this.values.push({name: itemName, color: colorOrImage });
        }
        else {
            this.values.push({name: itemName, image: colorOrImage });
        }
    }

    /**
     * Gets the number of items in the key list.
     *
     * @return  The total number of items added using MapKey.addValue.
     */
    length() {
        return this.values.length;
    }

    /**
     * Runs an action on each key item in the MapKey.
     *
     * @param action  The action to perform on each (name, colorOrImage) pair
     *                in the MapKey.
     */
    foreachKeyPair(action) {
        this.values.forEach( v => {
            let colorOrImage = v.image;
            if (! isDefined(colorOrImage)) {
                colorOrImage = v.color;
            }
            action(v.name, colorOrImage)
        });
    }
}



const keyPromise = loadAllMapKeys();

function clearDisplayedKeys() {
    const keyContainer = document.getElementById("keyContainer");
    const keyChildren = keyContainer.children;
    for (let i = 0; i < keyChildren.length; i++) {
        const child = keyChildren.item(i);
        if (child && child.classList.contains("keyItem")) {
            keyContainer.removeChild(child);
            i--;
        }
    }
}

function addKeyItemElement(itemName, colorOrImage)
{
    // create key item, add to key container:
    let newKeyItem = document.createElement("div");
    newKeyItem.classList.add("keyItem");
    newKeyItem.classList.add("mapThemed");
    document.getElementById("keyContainer").appendChild(newKeyItem);
    // create key item color box, add to the new item:
    let imageBox = document.createElement("span");
    imageBox.classList.add("keyBox");
    if (isHexColorString(colorOrImage))
    {
        imageBox.setAttribute("style", "background-color: " + colorOrImage);
    }
    else
    {
        imageBox.setAttribute("style", "background-image: url(" + colorOrImage
                + ")");
    }
    newKeyItem.appendChild(imageBox);
    // create key item label, add to the new item:
    let itemLabel = document.createElement("span");
    itemLabel.classList.add("keyLabel");
    itemLabel.innerText = itemName;
    newKeyItem.appendChild(itemLabel);
}

function loadMapTypeKey(mapType) {
    assertIsEnum(mapType, MapTypeEnum, "loadMapTypeKey");
    keyPromise.then(keys => {
        const typeKeys = keys[mapType];
        clearDisplayedKeys();
        typeKeys.foreachKeyPair((name, colorOrImage) => 
                addKeyItemElement(name, colorOrImage));
    });
}
