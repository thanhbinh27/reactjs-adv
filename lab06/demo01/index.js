const http = require('http');

const hostname = '127.0.0.1'; // localhost
const port = 3001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Hello World!!!');
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});