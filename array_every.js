let numbers = [1, 2, 3, 4, 5];

// Check if all numbers are positive
let allPositive = numbers.every(x => x > 0);
console.log(allPositive); // true

// Check if all numbers are even
let allEven = numbers.every(x => x % 2 === 0);
console.log(allEven); // false

// Check if all numbers are less than 10
let allLessThan10 = numbers.every(x => x < 10);
console.log(allLessThan10); // true