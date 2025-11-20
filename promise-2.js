/**
 * Simulates fetching user data asynchronously.
 * @param {string} userName - The name of the user.
 * @param {number} delay - The time delay in milliseconds before resolving.
 * @returns {Promise<string>} A promise that resolves with a message.
 */
function fetchUserProfile(userName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`[Timer finished] Resolved data for ${userName} after ${delay}ms`);
            resolve(`Data for ${userName} (Delay: ${delay}ms)`);
        }, delay);
    });
}

// 1. Define the promises with varying delays
const userA_Promise = fetchUserProfile("Alice", 3000); // Takes 3 seconds
const userB_Promise = fetchUserProfile("Bob", 1000);   // Takes 1 second (fastest)
const userC_Promise = fetchUserProfile("Charlie", 2000); // Takes 2 seconds

// 2. Pass them to Promise.all in a specific order (A, B, C)
const promiseArray = [userA_Promise, userB_Promise, userC_Promise];

console.log("Starting Promise.all...");

Promise.all(promiseArray)
    .then(resultsArray => {
        console.log("\nAll promises resolved.");
        console.log("--- Input Order Was: Alice, Bob, Charlie ---");
        console.log("--- Results Array Order (Sequence Maintained): ---");
        
        // Even though Bob's promise finished first, his data is at index 1
        console.log(`Index 0: ${resultsArray[0]}`); // Result for Alice
        console.log(`Index 1: ${resultsArray[1]}`); // Result for Bob
        console.log(`Index 2: ${resultsArray[2]}`); // Result for Charlie
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });


// ************************************ promise.allSettled ************************************S



const p1 = new Promise((resolve, reject) => setTimeout(() => reject("Error from P1 (Slow)"), 3000));
const p2 = new Promise((resolve, reject) => setTimeout(() => resolve("Success from P2 (Fast)"), 1000));
const p3 = new Promise((resolve, reject) => setTimeout(() => resolve("Success from P3 (Medium)"), 2000));

console.log("Starting Promise.any() race...");

Promise.any([p1, p2, p3])
    .then(value => {
        // This runs as soon as P2 resolves (after 1 second)
        console.log("\nFirst successful result:", value);
        // Output: First successful result: Success from P2 (Fast)
    })
    .catch(err => {
        // This catch block would only run if all three promises rejected
        console.error("\nAll promises failed:", err);
    });



// ************************************ promise.any ************************************S

const successfulPromise = new Promise(resolve => setTimeout(() => resolve("User saved"), 500));
const failedPromise = new Promise((resolve, reject) => setTimeout(() => reject("Database connection lost"), 1000));

console.log("Starting Promise.allSettled()...");

Promise.allSettled([successfulPromise, failedPromise])
    .then(results => {
        console.log("\nAll operations have settled (completed):");
        results.forEach(result => {
            if (result.status === "fulfilled") {
                console.log(`✅ Success: ${result.value}`);
            } else {
                console.log(`❌ Failure: ${result.reason}`);
            }
        });
    })
    .catch(err => {
        // This catch block won't run in this example since allSettled never rejects
        console.error("Unexpected error:", err);
    });