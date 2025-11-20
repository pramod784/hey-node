let numbers = [1, 2, 3, 4, 5];

// Find first number greater than 3
let firstGreaterThan3 = numbers.find(x => x > 3);
console.log(firstGreaterThan3); // 4

// Find first even number
let firstEven = numbers.find(x => x % 2 === 0);
console.log(firstEven); // 2

// Returns undefined if not found
let notFound = numbers.find(x => x > 10);
console.log(notFound); // undefined