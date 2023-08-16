// Importing modules.
let doFlat = require ('../flat.cjs');
// Given nested array data.
const items = [1, [2], [[3]], [[[4]]]];
// Checking if given data is array or not.
if (Array.isArray(items)) {
    // Applying flat function to get expected array of elements.
    const flatArray = doFlat(items);
    // Printing the resultant array.
    console.log(flatArray);

} else {
    // Print empty array.
    console.log([]);
}


