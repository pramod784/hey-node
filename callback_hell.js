const fs = require('fs');
// Callback Hell example
    fs.readFile('file1.txt', (err, data1) => {
        if (err) throw err;
        fs.readFile('file2.txt', (err, data2) => {
            if (err) throw err;
            fs.readFile('file3.txt', (err, data3) => {
                if (err) throw err;
                console.log(data1, data2, data3);
            });
        });
    });

    // Async/Await for better readability
    async function readFiles() {
        try {
            const data1 = await fs.promises.readFile('file1.txt');
            const data2 = await fs.promises.readFile('file2.txt');
            const data3 = await fs.promises.readFile('file3.txt');
            console.log(data1, data2, data3);
        } catch (err) {
            console.error(err);
        }
    }