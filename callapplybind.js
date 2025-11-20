//call
function greet(city, country) {
  console.log(`Hello, I am ${this.name} from ${city}, ${country}`);
}

const user = { name: "Pramod" };

// call(this, arg1, arg2, ...)
greet.call(user, "Pune", "India");






//appply
function greet(city, country) {
  console.log(`Hello, I am ${this.name} from ${city}, ${country}`);
}

const employee = { name: "Pramod" };

// apply(this, [arg1, arg2])
greet.apply(employee, ["Mumbai", "India"]);










//bind

function greet() {
  console.log(`Hello, my name is ${this.name}`);
}

const student = { name: "Pramod" };

const greetUser = greet.bind(student);   // bind returns a new function

greetUser(); // You call it later



