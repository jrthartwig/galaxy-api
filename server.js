const express = require('express');
const { createServer } = require('http');

const app = express();

const startMyServer = () => {

    const server = createServer(app);

    server.listen(5000, () => {
        console.log("listening on 5000");
    });
}

module.exports = {
    app: app,
    startMyServer: startMyServer(),
}; 