// Importing modules.
let doMap = require ('../map.cjs');
// Given array data.
const items = [1, 2, 3, 4, 5, 5];
// Function to apply on array elements.
function squareNum (element) {
    return element**2;
}
// Mapping function to elements to get desired result.
const squareArray = doMap(items, squareNum);
// Printing the result array.
console.log(squareArray);
