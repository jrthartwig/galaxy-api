const server = require('./server');
const express = require('express');
const database = require('./data/database');

server.startMyServer;
database.createDatabase;

server.app.use(express.json());

server.app.get("/galaxies", async (req, res) => {
    const index = "0";
    const querySpec = {
        query: "SELECT gp.url FROM GalaxyPhotos gp WHERE gp.id = '0'"
    };

    const result = await database.container.items
        .query(querySpec)
        .fetchAll();

    res.json(result)
})