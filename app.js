/* eslint no-console: "off" */

const express = require("express");
var port = process.env.PORT | 3000;

var app = express();

app.get("/", function(req, res) {
  res.send("hello, world!!");
});

app.listen(port, function() {
  console.log("\x1b[32m", "app listening on port", port, "\x1b[0m");
});