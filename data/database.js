const dbContext = require("./databaseContext");
const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("../config");

const { endpoint, key, databaseId, containerId } = config;
const client = new CosmosClient({ endpoint, key });
const database = client.database(databaseId);
const container = database.container(containerId);

const createDatabase = async () => {
    await dbContext.create(client, databaseId, containerId);
}

module.exports = {
    createDatabase: createDatabase(),
    container: container
}