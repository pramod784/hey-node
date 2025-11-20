const fs = require('fs');

fs.readFile('nodefile.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:\n', data);
});