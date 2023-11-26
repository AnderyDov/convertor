const express = require('express');

const server = express();
server.use(express.static(`${__dirname}/dist`));

server.get('/', (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});

server.use((req, res) => {
    res.send('error');
});

server.listen(3000);
