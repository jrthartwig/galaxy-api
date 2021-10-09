const api = require("./api.js");

api.getMeasurements()
.then(response => api.postMeasurements(response));