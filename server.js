const express = require("express");
const Router = require("./Cars/Router.js");
const server = express();
server.use(express.json());

server.use("/api/cars", Router);

module.exports = server;