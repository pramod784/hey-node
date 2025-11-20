let numbers = [1, 2, 3, 4, 5];

// Double each number
let doubled = numbers.map((x) => {
    return x * 2
});
console.log(doubled); // [2, 4, 6, 8, 10]

// Convert numbers to strings
let strings = numbers.map(x => `Number: ${x}`);
console.log(strings); // ["Number: 1", "Number: 2", ...]

// Square each number
let squared = numbers.map(x => x ** 2);
console.log(squared); // [1, 4, 9, 16, 25]
console.log(numbers);