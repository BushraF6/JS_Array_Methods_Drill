// Importing modules.
let doFind = require ('../find.cjs');
// Given array data.
const items = [1, 2, 3, 4, 5, 5];
// Function to look if given element exist or not.
function search5 (item) {
    return item === 5;
}
// Finding and returning the required element.
const findElement = doFind(items, search5);
// Printing the element found.
console.log(findElement);