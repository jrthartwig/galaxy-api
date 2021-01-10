const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("./config");
const dbContext = require("./data/databaseContext");

const { endpoint, key, databaseId, containerId } = config;

const client = new CosmosClient({ endpoint, key });

const database = client.database(databaseId);
const container = database.container(containerId);

const newGalaxyPhoto = {
    id: "0",
    url: "https://i.redd.it/yvx8a0rpmxf51.jpg",
    galaxy: "andromeda"
};
// Make sure Galaxies database is already setup. If not, create it.
const main = async () => {

    await dbContext.create(client, databaseId, containerId);

    console.log(`Querying container: GalaxyPhotos`);

    // query to return all items
    const querySpec = {
        query: "SELECT * from c"
    };

    // read all items in the Items container
    const { resources: items } = await container.items
        .query(querySpec)
        .fetchAll();

    items.forEach(item => {
        console.log(`${item.id} - ${item.url}`);
    });

    /** Create new item
     * newItem is defined at the top of this file
     */
    const { resource: createdItem } = await container.items.create(newGalaxyPhoto);

    console.log(`\r\nCreated new item: ${createdItem.id} - ${createdItem.url}\r\n`);
}
main(); 