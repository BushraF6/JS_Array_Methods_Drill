function doFlat(items) {
    let result = [];

    if (!Array.isArray(items)) {

        return items;
    }

    for (let i = 0; i < items.length; i++) {

        result = result.concat(doFlat(items[i]));
         
    }

    return result;
}

module.exports = doFlat;