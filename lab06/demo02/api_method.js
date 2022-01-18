const express = require('express');
const app = express();

const hostname = 'localhost';
const port = 3002;

app.get('/', (req, res) => {
    res.status(200).end('GET: get data');
});

app.post('/', (req, res) => {
    s.status(200).end('POST: create new object');
});

app.put('/', (req, res) => {
    res.status(200).end('PUT: update object information');
});

app.put('/', (req, res) => {
    res.status(200).end('DELETE: update object');
});

app.listen(port, hostname, () => {
    console.log(`Server express is running at http://${hostname}:${port}`);
});