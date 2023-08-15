function doFilter (arr, func) {
    let newArr = [];

    for (let num = 0; num < arr.length; num++) {

        if (func(arr[num])) {
            
            newArr.push(arr[num]);
        }
    }    
    return newArr;
}

module.exports = doFilter;