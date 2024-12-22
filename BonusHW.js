const express = require("express");
const mongoose = require("mongoose");
require ('dotenv').config();

const app = express();

mongoose.connect("process.env.url")
  .then(() => console.log("connect to DB"))
  .catch((err) => console.error("Error with the connect", err));

app.get("/name", (req, res) => {
  res.send("My name : Aseel Al-Ashqar");
});z

app.listen(3002, () => {
  console.log(`Server running at http://localhost:3002`);
});
