// array functions.js
// Array map & filter
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => {
    return n % 2 === 0
});
// console.log(doubled, evens);

// // Array reduce
// const sum = numbers.reduce((acc, n) => acc + n, 0);
// console.log(sum);

// // Array forEach
// numbers.forEach(n => console.log(n * 3));

// // Array find
// const found = numbers.find(n => n > 3);
// console.log(found);

// // Array some & every
// const hasEven = numbers.some(n => n % 2 === 0);
// const allPositive = numbers.every(n => n > 0);
// console.log(hasEven, allPositive);



// Note: These array functions are widely used for data manipulation and transformation in JavaScript applications.

//.any function checks if at least one element in the array satisfies the provided testing function.




let input_arr = [1,2,3,4,5,6,7];
let sliced = input_arr.slice(3);
//let splitted_arr = input_arr.splice(1,3);
//why splice modifies the original array? 
input_arr = input_arr.chunk(3);
console.log("original array after chunk", input_arr);

// let reversed = input_arr.reverse();
// let concated = input_arr.concat(reversed)

// console.log("sliced", sliced);
//console.log("splitted_arr", splitted_arr);
// console.log("reversed", reversed);
// console.log("concated", concated);