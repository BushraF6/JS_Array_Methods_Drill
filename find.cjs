function doFind (arr, func) {

    if (Array.isArray(arr) && arr.length > 0) {
        let result;

        for (let i = 0; i < arr.length; i++ ) {
    
            if (func(arr[i])) {
                result = arr[i];
                break;
            }
        }
    
        return result;  

    } else {
        return [];
    }

}

module.exports = doFind;