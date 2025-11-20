let numbers = [1, 2, 3, 4, 5];

// Check if any number is greater than 4
let anyGreaterThan4 = numbers.some(x => x > 4);
console.log(anyGreaterThan4); // true

// Check if any number is negative
let anyNegative = numbers.some(x => x < 0);
console.log(anyNegative); // false

// Check if any number is even
let anyEven = numbers.some(x => x % 2 === 0);
console.log(anyEven); // true