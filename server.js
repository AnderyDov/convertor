const express = require('express');
const { resolve } = require('path');

const server = express();
server.use(express.static(resolve(__dirname, './dist')));

server.get('/', (req, res) =>
    res.sendFile(resolve(__dirname, './dist', 'index.html')),
);

server.use((req, res) => res.send('error'));

server.listen(3000);
