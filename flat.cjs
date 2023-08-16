function doFlat(items) {
    let result = [];

    if (!Array.isArray(items)) {

        return items;
    }

    for (let index = 0; index < items.length; index++) {

        result = result.concat(doFlat(items[index]));
         
    }

    return result;
}

module.exports = doFlat;