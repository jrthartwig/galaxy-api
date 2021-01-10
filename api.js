const server = require('./server');
const express = require('express');
const database = require('./data/database');

server.startMyServer;
database.createDatabase;

server.app.use(express.json());

server.app.get("/galaxies", async (req, res) => {
    const querySpec = {
        query: "SELECT * from c"
    };

    const result = await database.container.items
        .query(querySpec)
        .fetchAll();

    console.log(result);

    res.json(result)
})