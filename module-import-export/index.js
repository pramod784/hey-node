// Import the add function from the math.js module
const {add, concat_strings} = require('./sum');
const {calculateMultiply} = require('./multiply');

// Use the imported function
console.log(add(5, 3)); // Output: 8
console.log(concat_strings("Hello, ","World!")); // Output: Hello, World!
console.log(calculateMultiply(4, 6)); // Output: 24