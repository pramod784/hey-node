
// Example: Creating a simple HTTP server
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    let output = {
        name: "Pramod",
        age: 34,
        city: "Bangalore",
        hobbies: ["reading", "traveling", "coding"]
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    // returns [object Object]
    // to return JSON use JSON.stringify
    res.end(JSON.stringify(output));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});