const config = {
    endpoint: "https://experiments.documents.azure.com:443/",
    key: "EuxdciJI1SA2xVP4vxZOFZCCUAITeIwklos1YHYraeQMT2w4OoaExx9Ezupg1KITxo2JMw1zzhYEeIISmbw4eQ==",
    databaseId: "sensors",
    containerId: "measurements",
    partitionKey: { kind: "Hash", paths: ["/Address"] }
};

module.exports = config;