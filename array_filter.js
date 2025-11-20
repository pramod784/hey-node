let numbers = [1, 2, 3, 4, 5];

// Get numbers greater than 2
let greaterThan2 = numbers.filter( (x) => { return x > 2; } );
console.log(greaterThan2); // [3, 4, 5]

// Get even numbers
let evens = numbers.filter(x => x % 2 === 0);
console.log(evens); // [2, 4]

// Get odd numbers
let odds = numbers.filter(x => x % 2 !== 0);
console.log(odds); // [1, 3, 5]