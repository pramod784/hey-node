let numbers = [1, 2, 3, 4, 5];

// Sum all numbers
let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 15

// Multiply all numbers
let product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log(product); // 120

// Find maximum number
let max = numbers.reduce((acc, curr) => Math.max(acc, curr), -Infinity);
console.log(max); // 5

// Flatten array of arrays
let arrays = [[1,2], [3,4], [5,6]];
let flattened = arrays.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattened); // [1, 2, 3, 4, 5, 6]