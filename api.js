var axios = require("axios");
const database = require("./data/database");

const getMeasurements = () => {
  var config = {
    method: "get",
    url: "http://192.168.2.20/api/values/99",
    headers: {},
  };

  const measurements = axios(config)
    .then(function (response) {
      return JSON.stringify(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  return measurements;
};

const postMeasurements = async (measurements) => {
  var jsonMeasurements = JSON.parse(measurements);

  database.createDatabase;

  const { resource: createdItem } = await database.container.items.create(
    jsonMeasurements
  );

  console.log(
    `\r\nCreated new item: ${createdItem.Address} - ${createdItem.created_at}\r\n`
  );
};

exports.getMeasurements = getMeasurements;
exports.postMeasurements = postMeasurements;