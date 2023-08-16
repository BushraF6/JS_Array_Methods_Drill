function doEach(arr, func) {

    if (Array.isArray(arr) && arr.length > 0) {

        for (let index = 0; index < arr.length; index++) {
            func(arr[index], index); 
        }

    } else {
        console.log([]);
    }

}

module.exports = doEach;