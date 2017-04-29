
// DEPENDENCIES

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = 8080;

// BodyParser standard code for server to interpret data

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static content for the app from the "public" directory 
app.use(express.static("app/public"));

// ROUTER
// Create home and survey routes

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// LISTENER
// Start server

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
