function doReduce (arr, func, initial) {

    if (Array.isArray(arr) && arr.length > 0) {
        let result = initial;

        for (let i = 0; i < arr.length; i++) {
            result = func(result, arr[i]);
        }
    
        return result;

    } else {
        return [];
    }

}

module.exports = doReduce;