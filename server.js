var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var db = require("./models");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/petsConroller.js")(app);
require("./controllers/fosterConroller.js")(app);
require("./controllers/adoptionConroller.js")(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});