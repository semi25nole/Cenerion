let express = require("express");

let app = express();

let port = process.env.port || 3000;

app.get("/", function(req, res) {
    JSON.stringify(res);
})

app.listen(port, function() {
    console.log("App is listening on Port " + port);
});

