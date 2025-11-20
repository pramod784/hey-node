// Object.keys() - Get property names

const user = { name: "Alice", age: 30, city: "Paris" };
const keys = Object.keys(user);
console.log(keys); // ["name", "age", "city"]

// Iterate through keys
Object.keys(user).forEach(key => {
  console.log(`${key}: ${user[key]}`);
});






// Object.values() - Get property values

//const user = { name: "Alice", age: 30, city: "Paris" };
const values = Object.values(user);
console.log(values); // ["Alice", 30, "Paris"]

// Sum numeric values
const scores = { math: 95, science: 87, history: 92 };
const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
console.log(total); // 274






//Object.entries() - Get key-value pairs

//const user = { name: "Alice", age: 30, city: "Paris" };
const entries = Object.entries(user);
console.log(entries);
// [["name", "Alice"], ["age", 30], ["city", "Paris"]]

// Iterate through entries
Object.entries(user).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});





// Object.hasOwn() - Check if property exists (modern)

//const user = { name: "Alice", age: 30 };

console.log(Object.hasOwn(user, "name")); // true
console.log(Object.hasOwn(user, "toString")); // false (inherited)

// vs older hasOwnProperty (less safe)
const trickyObj = Object.create(null);
trickyObj.name = "Test";
// trickyObj.hasOwnProperty("name"); // Error!
console.log(Object.hasOwn(trickyObj, "name")); // true (works safely)








// Object.freeze() - Make object immutable
// Freeze configuration object
const config = Object.freeze({
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retries: 3
});

// These will fail silently in non-strict mode
config.apiUrl = "https://new-url.com"; // Ignored
config.newProperty = "value"; // Ignored

console.log(config.apiUrl); // "https://api.example.com"

// Check if frozen
console.log(Object.isFrozen(config)); // true




// Object.assign() - Copy properties between objects

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const result = Object.assign(target, source);
console.log(result); // { a: 1, b: 4, c: 5 }
console.log(target); // { a: 1, b: 4, c: 5 } (original modified)

// Better: create new object
const newObj = Object.assign({}, target, source);
console.log(newObj); // { a: 1, b: 4, c: 5 }

// Merging multiple objects
const defaults = { theme: "light", notifications: true };
const userPrefs = { theme: "dark" };
const finalConfig = Object.assign({}, defaults, userPrefs);
console.log(finalConfig); // { theme: "dark", notifications: true }




//JSON.stringify() - Convert object to JSON string
const userData = { 
  name: "Alice", 
  age: 30, 
  hobbies: ["reading", "hiking"],
  lastLogin: new Date()
};

const jsonString = JSON.stringify(userData);
console.log(jsonString);
// "{"name":"Alice","age":30,"hobbies":["reading","hiking"],"lastLogin":"2023-10-15T12:00:00.000Z"}"

// With formatting
const prettyJson = JSON.stringify(userData, null, 2);
console.log(prettyJson); // Formatted with 2-space indentation

// Custom replacer function
const filteredJson = JSON.stringify(userData, (key, value) => {
  return key === "age" ? undefined : value; // Exclude age
});
console.log(filteredJson); // "{"name":"Alice","hobbies":["reading","hiking"],"lastLogin":"2023-10-15T12:00:00.000Z"}"
















//Practical Example: Frozen Config with Iteration

// Create and freeze configuration
const appConfig = Object.freeze({
  version: "1.0.0",
  database: {
    host: "localhost",
    port: 5432
  },
  features: ["auth", "payments"]
});

// Iterate through frozen config entries
console.log("App Configuration:");
Object.entries(appConfig).forEach(([key, value]) => {
  if (Array.isArray(value)) {
    console.log(`${key}: [${value.join(", ")}]`);
  } else if (typeof value === "object") {
    console.log(`${key}:`, value);
  } else {
    console.log(`${key}: ${value}`);
  }
});

// Safe property check
if (Object.hasOwn(appConfig, "version")) {
  console.log(`App version: ${appConfig.version}`);
}
