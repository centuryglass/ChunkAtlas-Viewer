/**
 * @file MapKey.js
 *
 * Gets a list of map key entries to display.
 *
 */

class MapKey {
    constructor() {
        this.values = [];
    }

    addValue(itemName, itemColor) {
        assert(isHexColorString(itemColor), "MapKey.addValue: itemColor \""
                + itemColor + "\" is not a valid color string.");
        this.values.push( { name: itemName, color: itemColor });
    }

    length() {
        return this.values.length;
    }

    foreachKeyPair(action) {
        this.values.forEach( v => action(v.name, v.color));
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

function addKeyItemElement(itemName, itemColor)
{
    assert(isHexColorString(itemColor), "addKeyItemElement: itemColor \""
            + itemColor + "\" is not a valid color string.");
    // create key item, add to key container:
    let newKeyItem = document.createElement("div");
    newKeyItem.classList.add("keyItem");
    newKeyItem.classList.add("mapThemed");
    document.getElementById("keyContainer").appendChild(newKeyItem);
    // create key item color box, add to the new item:
    let colorBox = document.createElement("span");
    colorBox.classList.add("keyBox");
    colorBox.setAttribute("style", "background-color: " + itemColor);
    newKeyItem.appendChild(colorBox);
    // create key item label, add to the new item:
    let itemLabel = document.createElement("span");
    itemLabel.classList.add("keyLabel");
    itemLabel.innerText = itemName;
    newKeyItem.appendChild(itemLabel);
}

function loadMapTypeKey(mapType) {
    assert(mapType > 0 && mapType <= MapTypeEnum.count, "loadMapTypeKey: \""
            + mapType + "\" is not a valid map type.");
    keyPromise.then(keys => {
        let typeKeys = null;
        switch(mapType) {
            case MapTypeEnum.BIOME:
            case MapTypeEnum.DIRECTORY:
                typeKeys = keys.biomes;
                break;
            case MapTypeEnum.ERROR:
                typeKeys = keys.error;
                break;
            case MapTypeEnum.STRUCTURE:
                typeKeys = keys.structures;
                break;
            case MapTypeEnum.TOTAL_ACTIVITY:
                typeKeys = keys.totalActivity;
                break;
            default:
                throw new Error("loadMapTypeKey: Failed to handle \""
                        + MapTypeEnum.properties[mapType].name + "\" keys.");
        }
        clearDisplayedKeys();
        typeKeys.foreachKeyPair((name, color) => 
                addKeyItemElement(name, color));
    });
}

// Initialize all keys:
// TODO: Load this data from the server.
loadAllMapKeys();
