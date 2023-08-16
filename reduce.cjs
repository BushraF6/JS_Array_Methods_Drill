function doReduce (arr, func, initial) {

    if (Array.isArray(arr) && arr.length > 0) {
        let result = initial;

        for (let index = 0; index < arr.length; index++) {
            result = func(result, arr[index]);
        }
    
        return result;

    } else {
        return [];
    }

}

module.exports = doReduce;