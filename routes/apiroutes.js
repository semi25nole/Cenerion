var path = require("path");
module.exports = function(app) {

    //routes:
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../index.html")); //base page
    });

    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../index.html")); //base page
    });

    app.get("/movie", function (req, res) {
        res.sendFile(path.join(__dirname, "../movie.html"));
    });

};