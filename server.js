const express = require('express');
const { createServer } = require('http');
const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("./config");
const dbContext = require("./data/databaseContext");

const app = express();

const { endpoint, key, databaseId, containerId } = config;

const client = new CosmosClient({ endpoint, key });

const database = client.database(databaseId);
const container = database.container(containerId);

const createDatabase = async () => {
    await dbContext.create(client, databaseId, containerId);
}

createDatabase();

app.use(express.json());

app.get("/galaxies", async (req, res) => {
    const querySpec = {
        query: "SELECT * from c"
    };

    const result = await container.items
        .query(querySpec)
        .fetchAll();

    console.log(result);

    res.json(result)

})

const server = createServer(app);

server.listen(5000, () => {
    console.log("listening on 5000");
});