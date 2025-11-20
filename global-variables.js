// global variables

// __filename - represents the file name of the current module
// __dirname - represents the directory name of the current module
// Both __filename and __dirname are not available in the browser environment
// They are specific to Node.js environment

// Example usage:
console.log("Current file path: " + __filename);
console.log("Current directory path: " + __dirname);

// These global variables are useful for file system operations, module management, and path manipulations in Node.js applications.

// Note: In ES6 modules, __filename and __dirname are not available by default. You can recreate them using the following code:
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);