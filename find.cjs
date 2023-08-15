function doFind (arr, func) {
    let result;

    for (let i = 0; i < arr.length; i++ ) {

        if (func(arr[i])) {

            result = arr[i];
            break;

        }
    }

    return result;  
}

module.exports = doFind;