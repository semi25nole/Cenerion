let express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

let port = process.env.port || 3000;

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html")); //base page
});

app.get("/movie", function(req, res) {
    res.sendFile(path.join(__dirname, "main.html"));
});

app.listen(port, function() {
    console.log("App is listening on Port " + port);
});

