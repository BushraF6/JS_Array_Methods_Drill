// Importing modules.
let doFilter = require ('../filter.cjs');
// Given array data.
const items = [1, 2, 3, 4, 5, 5];
// Function to filter array elements.
function getOddNum (element) {
    return element % 2;
}
// Filtering elements according to the applied function to get desired result.
const oddNumArray = doFilter(items, getOddNum);
// Printing the result array.
console.log(oddNumArray);
