/**
 * @file MapKeyItem.js
 *
 * Represents a single item in a map key.
 */
class MapKeyItem {
    /**
     * Constructs a new key item describing a map symbol or color.
     *
     * @param description   A description of some map feature or map area
     *                      property.
     *
     * @param colorOrImage  An image URL or hex color string used to represent
     *                      the described map feature or property.
     */
    constructor(description, colorOrImage) {
        assertDefinedAndNonEmpty(description, "MapKeyItem", "description");
        assertDefinedAndNonEmpty(colorOrImage, "MapKeyItem", "colorOrImage");
        this.description = description;
        this.colorOrImage = colorOrImage;
        // Key item element css class constants:
        setConstProperty(this, "CSS_KEY_CLASS", "keyItem");
        setConstProperty(this, "CSS_MAP_THEME_CLASS", "mapThemed");
        setConstProperty(this, "CSS_KEY_BOX_CLASS", "keyBox");
        setConstProperty(this, "CSS_KEY_LABEL_CLASS", "keyLabel");
        // ID of the parent element to which all key item elements should be
        // added:
        setConstProperty(this, "PARENT_ID", "keyContainer");
    }

    /**
     * Checks if this key item has a corresponding HTML element displayed on
     * the page.
     *
     * @return  Whether the key item's element is currently displayed.
     */
    htmlElementShown() {
        if (! isDefined(this._element)) {
            return false;
        }
        const keyContainer = document.getElementById(this.PARENT_ID);
        assert (keyContainer !== null);
        return keyContainer.contains(this._element);
    }

    /**
     * Ensures that this key item currently has a corresponding HTML element
     * displayed on the page.
     */
    showHtmlElement() {
        if (this.htmlElementShown()) {
            return;
        }
        if (! isDefined(this._element))
        {
            let newElement = document.createElement("div");
            newElement.classList.add(this.CSS_KEY_CLASS);
            newElement.classList.add(this.CSS_MAP_THEME_CLASS);
            // create key item color box, add to the new item:
            let imageBox = document.createElement("span");
            imageBox.classList.add(this.CSS_KEY_BOX_CLASS);
            if (isHexColorString(this.colorOrImage))
            {
                imageBox.setAttribute("style", "background-color: "
                        + this.colorOrImage);
            }
            else
            {
                imageBox.setAttribute("style", "background-image: url("
                        + this.colorOrImage + ")");
            }
            newElement.appendChild(imageBox);
            // create key item label, add to the new item:
            let itemLabel = document.createElement("span");
            itemLabel.classList.add(this.CSS_KEY_LABEL_CLASS);
            itemLabel.innerText = this.description;
            newElement.appendChild(itemLabel);
            this._element = newElement;
        }
        const keyContainer = document.getElementById(this.PARENT_ID);
        keyContainer.appendChild(this._element);
    }


    /**
     * Ensures that this key item's HTML element is not displayed within the
     * page.
     */
    removeHtmlElement() {
        if (this.htmlElementShown()) {
            const keyContainer = document.getElementById(this.PARENT_ID);
            keyContainer.removeChild(this._element);
        }
    }
}
