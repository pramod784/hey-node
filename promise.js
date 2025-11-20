function checkStock(item) {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous API call
        setTimeout(() => {
            if (item === "Widget A") {
                resolve(`Stock available for ${item}`);
            } else {
                reject(`Item "${item}" is out of stock`);
            }
        }, 1000);
    });
}

// Consuming the promise
checkStock("Widget A")
    .then(result => {
        console.log("Success:", result); // Output: Success: Stock available for Widget A
    })
    .catch(error => {
        console.error("Error:", error);
    });

// Example of a rejected promise:
checkStock("Widget B")
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.error("Error:", error); // Output: Error: Item "Widget B" is out of stock
    });







/** ********************** */
function fetchUserData(userId) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`User data for ${userId}`), 1000 * userId);
    });
}

const promise1 = fetchUserData(1);
const promise2 = fetchUserData(2);
const promise3 = fetchUserData(3);

console.log("Fetching data concurrently...");

Promise.all([promise1, promise2, promise3])
    .then(results => {
        // results is an array of all successful results, in the same order as the input array
        console.log("All data fetched successfully:");
        console.log(results);
        // Output: All data fetched successfully:
        // Output: [ 'User data for 1', 'User data for 2', 'User data for 3' ]
    })
    .catch(error => {
        // This won't run in this specific example as all promises succeed
        console.error("One of the promises failed:", error);
    });