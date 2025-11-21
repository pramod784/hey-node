// variable scope example
function exampleFunction() {
    var localVariable = "I'm local to exampleFunction";

    if (true) {
        let blockVariable = "I'm block-scoped";
        console.log(blockVariable); // Accessible here
    }

    console.log(localVariable); // Accessible here
    // console.log(blockVariable); // Uncaught ReferenceError: blockVariable is not defined
}

exampleFunction();

// console.log(localVariable); // Uncaught ReferenceError: localVariable is not defined

// global scope example
var globalVariable = "I'm global";

function accessGlobal() {
    console.log(globalVariable); // Accessible here
}

accessGlobal();
console.log(globalVariable); // Accessible here too     