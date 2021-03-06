/* eslint no-console: "off" */

require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

var port = process.env.PORT||3000;

var app = express();

app.use(express.static("dist"));

app.use(morgan("tiny"));

app.set("view engine", "pug");

app.get("/", function(req, res) {
  res.render("index");
});

app.listen(port, function() {
  console.log("app listening on port", port);
});
