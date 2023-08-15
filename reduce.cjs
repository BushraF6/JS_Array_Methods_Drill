function doReduce (arr, func, initial) {
    let result = initial;

    for (let i = 0; i < arr.length; i++) {

        result = func(result, arr[i]);
    }

    return result;
}

module.exports = doReduce;