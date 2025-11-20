let numbers = [5, 1, 4, 2, 3];

// Sort numbers ascending
let ascending = [...numbers].sort((a, b) => a - b);
console.log(ascending); // [1, 2, 3, 4, 5]

// Sort numbers descending
let descending = [...numbers].sort((a, b) => b - a);
console.log(descending); // [5, 4, 3, 2, 1]

// Sort strings
let names = ['John', 'Alice', 'Bob'];
let sortedNames = [...names].sort();
console.log(sortedNames); // ['Alice', 'Bob', 'John']