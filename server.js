// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

/**
 * Get port from environment and store in Express.
 */
const PORT = process.env.PORT || '3000';
app.set('port', PORT);

// Requiring our models for syncing
var db = require("./server/models");
var initValues = require("./server/data/initialData.js");

// Import routes and give the server access to them.
require("./server/routes/api-routes-insert.js")(app);
require("./server/routes/api-routes-read.js")(app);
require("./server/routes/api-routes-delete.js")(app);
require("./server/routes/api-routes-update.js")(app);
require("./server/routes/html-routes.js")(app);

db.sequelize.sync({ force: true }).then(() => {
    initValues();
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
})