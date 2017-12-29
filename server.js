let express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

let PORT = process.env.PORT || 3000;

require("/routes/apiroutes.js")(app);

app.listen(PORT, function() {
    console.log("App is listening on Port " + PORT);
});

