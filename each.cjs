function doEach(arr, func) {

    if (Array.isArray(arr) && arr.length > 0) {

        for (let i = 0; i < arr.length; i++) {
            func(arr[i], i); 
        }

    } else {
        console.log([]);
    }

}

module.exports = doEach;