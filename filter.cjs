function doFilter (arr, func) {
    if (Array.isArray(arr)) {
        let newArr = [];

        for (let num = 0; num < arr.length; num++) {

            if (func(arr[num])) {
                
                newArr.push(arr[num]);
            }
        }    
        return newArr;

    } else {
        return [];
    }
    
}

module.exports = doFilter;