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


// demo from desk

// Ecma script
// arrow function
// const myfun = (a,b,c=0)=>{
//   //console.log(a+b);
//   return a+b+c;
// }

// console.log(myfun(2,4,1));
// let studename = "john doe";
// let designation = "'developer";

// let myintro = "my name is "+studename+". i am a "+designation;
// let myintro2 = `my name is ${studename}. i am a ${designation}`;
// console.log(myintro);
// console.log(myintro2);




/// destructing 
// let studdata = {
//                 name:"Pramod",
//                 age:24, 
//                 designation:"developer", 
//                 address:{city:"pune", state:"maharashtra"}
//               };
// let { name ,age, designation} = studdata;
// console.log(name);
// console.log(age);
// console.log(designation);


// const laptop_conf = {
//     brand:"dell",
//     ram:"8gb",
//     processor:"i5",
//     storage:"1tb",
//     display:"15.6 inch",
//     graphics:"2gb"
// };

// laptop_conf.brand = "Apple";
// console.log(laptop_conf);


// spread operator
// let arr1 = [2,4,6,8];
// let arr2 = [1,3,5,7,9]; 
// //let combinedarr = [...arr1, ...arr2];
// let combinedarr = [arr1,arr2];
// console.log(combinedarr)


let flight_data = {
  name:"air india",
  ticket_price:5000,
  from:"pune",
  to:"delhi"  
}

let flight_data2 = {...flight_data};

flight_data2.from = "delhi";
flight_data2.to = "pune";

console.log(flight_data);
console.log(flight_data2);