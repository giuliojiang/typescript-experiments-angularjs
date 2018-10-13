import express = require("express");
import path = require("path");

var app = express();

app.use("/lib", express.static(path.join(__dirname, "../public/build")));

app.use("/", express.static(path.join(__dirname, "../www")));

app.listen(3000, () => {
    console.info("Server started");
});