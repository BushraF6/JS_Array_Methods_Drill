function doFind (arr, func) {

    if (Array.isArray(arr) && arr.length > 0) {
        let result;

        for (let index = 0; index < arr.length; index++) {
    
            if (func(arr[index])) {
                result = arr[index];
                break;
            }
        }
    
        return result;  

    } else {
        return [];
    }

}

module.exports = doFind;