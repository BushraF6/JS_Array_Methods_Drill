function doMap (arr, func) {

    if (Array.isArray(arr)) {
        let newArr = [];

        for (let num = 0; num < arr.length; num++) {
    
            newArr.push(func(arr[num]));
        }
        
        return newArr;

    } else {
        return [];
    }
 
}

module.exports = doMap;
