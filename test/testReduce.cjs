// Importing modules.
let doReduce = require ('../reduce.cjs');
// Given array data.
const items = [1, 2, 3, 4, 5, 5];
// Function to get sum of elements.
function sum (result, item) {
    return result += item; 
}
// Function to find minimum of elements.
function minimum (result, item) {
    if (item < result) {

        return result = item;

    } else {

        return result;
    }
}
// Applying function to get desired result.
const sumOfArray = doReduce(items, sum, 0);
const minOfArray = doReduce(items, minimum, items[0]);
// Printing the result.
console.log(sumOfArray);
console.log(minOfArray);
