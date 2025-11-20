const fs = require('fs');

// Read entire file synchronously
const data = fs.readFileSync('nodefile.txt', 'utf8');

// Split into lines
const lines = data.split('\n');

// Function to print lines with 1-second delay
async function printLinesWithDelay(lines) {
    for (const line of lines) {
        console.log(line);
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1 sec delay
    }
}

printLinesWithDelay(lines);