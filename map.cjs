function doMap (arr, func) {
    let newArr = [];

    for (let num = 0; num < arr.length; num++) {

        newArr.push(func(arr[num]));
    }
    
    return newArr;
}

module.exports = doMap;
