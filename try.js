let arr = [3,1,2,5,4];

function findMax (arr) {
    max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            console.log(max);
        }
    }  
}

// findMax(arr)
const newArr = arr.reduce(function (acc,curr){
    if (curr > acc) {
        acc = curr;
    }
    return acc;
}, 0);

console.log(newArr);
