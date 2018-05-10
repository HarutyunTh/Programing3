var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("<h1>Hello world</h1>");
});
app.get("/name", function (req, res) {
    res.send("<h1>Hello world name</h1>");
});

app.get("/name/:name", function (req, res) {
    var name = req.params.name;
    res.send("<h1>Hello " + name + "</h1>");
});
app.get("/search/:search", function (req, res) {
    var sea = req.params.search;
    res.redirect('https://www.google.com/search?q=' + sea);
});
app.get("/*", function (req, res) {
    res.redirect('https://www.google.com/');
});
app.listen(3000, function () {
    console.log("Example is running on port 3000");
});
