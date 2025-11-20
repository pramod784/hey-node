// Arrow functions
const add = (a, b) => a + b;
console.log(add(5, 3));

// Destructuring
const user = { name: "Pramod", role: "Trainer" };
const { name, role } = user;
console.log(`${name} is a ${role}`);

let studentName = "Pramod Kumar";


// Template literals
const greeting = `Hello, ${studentName}! Welcome to ES6 training.`;
console.log(greeting);

// Default parameters
const multiply = (a, b = 2) => a * b;
console.log(multiply(5)); // 10     
console.log(multiply(5, 3)); // 15

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// Let and Const
let count = 0;
count += 1;
console.log(count); // 1

const PI = 3.14;
console.log(PI); // 3.14    
// Note: PI cannot be reassigned        


// Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}
const person1 = new Person("Alice", 30);
person1.introduce();



// let var const examples to check scope
function scopeTest() {
  if (true) {
    let x = 10;
    var y = 20;
    const z = 30;
    console.log(x, y, z); // 10 20 30
  }
  // console.log(x); // ReferenceError: x is not defined
  console.log(y); // 20
  // console.log(z); // ReferenceError: z is not defined
}
scopeTest();


// Modules (example, not executable here)
// In file mathUtils.js
// export const square = (x) => x * x;
// export const cube = (x) => x * x * x;

// In another file
// import { square, cube } from './mathUtils.js';
// console.log(square(3)); // 9
// console.log(cube(3)); // 27
// Note: Modules need to be in separate files to work properly
// Promises
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, message: "Hello, World!" };
      resolve(data);
    }, 1000);
  });
};

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Async/Await
const fetchAsyncData = async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fetchAsyncData();