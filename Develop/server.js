const express = require("express");

const PORT = process.env.PORT || 3001;
const router = require("express").Router();
const app = express();
const fs = require("fs");
const path = require("path");
const { notes } = require("./db/db");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/public"));

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/api/notes", (req, res) => {
  return res.json(notes);
});

app.post("/api/notes", (req, res) => {
  const what = req.body;

  console.log(what);

  notes.push(what);

  res.json(notes);
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

module.exports = router;
