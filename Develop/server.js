const express = require("express");

const PORT = process.env.PORT || 3001;
const router = require("express").Router();
const app = express();
const fs = require("fs");
const path = require("path");

app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
