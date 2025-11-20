const fs = require('fs');
const readline = require('readline');

async function readFileLineByLine(filePath) {
    const fileStream = fs.createReadStream(filePath, { encoding: 'utf8' });

    const rl = readline.createInterface({
        input: fileStream
    });

    for await (const line of rl) {
        console.log(line);
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1 sec delay
    }
}

readFileLineByLine('nodefile.txt');