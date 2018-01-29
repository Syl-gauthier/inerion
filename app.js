/* eslint no-console: "off" */

const express = require("express");
const morgan = require("morgan");


var port = process.env.PORT | 3000;

var app = express();

app.use(morgan("tiny"));

app.set("view engine", "pug");

app.get("/", function(req, res) {
  res.render("index");
});

app.listen(port, function() {
  console.log("\x1b[32m", "app listening on port", port, "\x1b[0m");
});