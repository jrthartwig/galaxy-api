const config = {
    endpoint: "https://galaxy-db.documents.azure.com:443/",
    key: "nsDGrX8GkUU8hyGTm2F80Bp1B5rstOO8jobZBKP0m6oEHOphGEWj9RllHFvqKFlfmJvOgBxAQtQkr5he0t8dbQ==",
    databaseId: "Galaxies",
    containerId: "GalaxyPhotos",
    partitionKey: { kind: "Hash", paths: ["/category"] }
};

module.exports = config;