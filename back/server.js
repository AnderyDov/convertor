const express = require("express");
const { resolve } = require("path");

const server = express();

server.use(express.static(resolve(__dirname, "../convertor/build")));

server.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "../convertor/build/index.js"));
});

server.get("/api", (req, res) => {
  res.json("Hello from server!");
});

server.use((req, res) => {
  res.json("error");
});

server.listen(4000, () => {
  console.log("http://localhost:4000");
});
