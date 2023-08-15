// Importing modules.
let doEach = require ('../each.cjs');
// Given array data.
const items = [1, 2, 3, 4, 5, 5];
// Function to be applied for each element.
function printElmntInd(item, index) {
    console.log(item, index);
}
// Calling function against each element and yielding the desired output.
doEach(items, printElmntInd);