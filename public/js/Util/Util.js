/**
 * @file Util.js
 *
 * Defines miscellaneous utility functions.
 */

/**
 * Returns a Promise to asynchronously load an Image object.
 *
 * @param url  The image URL to load.
 *
 * @return     The Promise object that will load the Image.
 */
function loadImage(url) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = function() { resolve(img); }
        img.onerror = function() { reject(img); }
        img.src = url;
    });
}

/**
 * Returns a Promise to asynchronously load a list of Image objects.
 *
 * @param urlList  A list of image URLs to load.
 *
 * @return         The promise object that will load all Image objects.
 */
function loadImageList(urlList) {
    let imagePromises = [];
    urlList.forEach(url => {
        imagePromises.push(loadImage(url).catch(failedImg => {
            console.log("loadImageList: failed to load " + failedImg.src);
            return failedImg;
        }))
    });
    return Promise.all(imagePromises).catch((err) => {
        console.log("loadImageList: Error loading images:");
        console.dir(err);
    });
}

/**
 * Compares two arrays by value.
 *
 * @param first   The first array to compare.
 *
 * @param second  The second array to compare.
 *
 * @return        Whether both arrays have the same number of elements, and
 *                at each index both arrays have strongly equivalent items.
 */
function arraysAreEqual(first, second) {
    assert(Array.isArray(first), "arraysAreEqual: first parameter \"" + first
            + "\" is not an array!");
    assert(Array.isArray(second), "arraysAreEqual: second parameter \""
            + second + "\" is not an array!");
    if (first.length != second.length) {
        return false;
    }
    for (let i = 0; i < first.length; i++) {
        if (first[i] !== second[i]) {
            return false;
        }
    }
    return true;
}

/**
 * Sets an object property to a constant value.
 *
 * @param object  The object where the property will be set.
 *
 * @param name    The name of the property to set.
 *
 * @param value   The value the property will hold.
 */
function setConstProperty(object, name, value) {
    Object.defineProperty(object, name, {
        value: value,
        writable: false,
        enumerable: true,
        configurable: false
    });
}

/**
 * Recursively freezes an object and all of its child objects.
 *
 * @param object  An object that should be frozen, preventing its
 *                properties from being added, removed, or changed.
 *
 * @return        The object parameter.
 */
function recursiveFreeze(object) {
    if (object === null || typeof object !== "object") {
        return object;
    }
    const keys = Object.keys(object);
    keys.forEach((key) => {
        recursiveFreeze(object[key]);
    });
    return Object.freeze(object);
}
