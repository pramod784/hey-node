// this serverside javascript and node js intro file
console.time("execution time");
console.log("Welcome to Node.js training!");
console.log("This is a simple introduction to server-side JavaScript using Node.js.");
console.error("This is an error message example.");
console.warn("This is a warning message example.");
console.info("This is an informational message example.");
console.debug("This is a debug message example.");
console.count("Node.js Intro Count");
console.count("Node.js Intro Count");
console.count("Node.js Intro count");
console.time("Node.js Intro Timer");

// Simulate some code execution with a timeout
setTimeout(() => {
    console.timeEnd("Node.js Intro Timer");
}, 1000);


console.timeEnd("execution time");
console.log("End of Node.js introduction.");

// tryout arithmetic operations
const a = 10;
const b = 5;

console.log(`Addition: ${a} + ${b} = ${a + b}`);
console.log(`Subtraction: ${a} - ${b} = ${a - b}`);
console.log(`Multiplication: ${a} * ${b} = ${a * b}`);
console.log(`Division: ${a} / ${b} = ${a / b}`);
console.log(`Modulus: ${a} % ${b} = ${a % b}`);

// End of file
console.table([
    { operation: "Addition", result: a + b },
    { operation: "Subtraction", result: a - b },
    { operation: "Multiplication", result: a * b },
    { operation: "Division", result: a / b },
    { operation: "Modulus", result: a % b }
]);
