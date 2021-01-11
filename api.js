const server = require('./server');
const express = require('express');
const database = require('./data/database');

server.startMyServer;
database.createDatabase;

server.app.use(express.json());

server.app.get("/galaxies", async (req, res) => {

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    const index = getRandomInt(3)
    const querySpec = {
        query: "SELECT * from GalaxyPhotos"
    };

    const result = await database.container.items
        .query(querySpec)
        .fetchAll()

    res.json(result.resources[index])
})