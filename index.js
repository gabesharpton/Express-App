const express = require("express");
const hbs = require("express-handelbars");
const parser = require("body-parser");
const mongoose = require("mongoose");

const workout = ("./controllers/workout");
const app = express();


app.set("view engine", hbs);
app.use(parser.urlencoded({ extended: true }));

app.use("/", workout);

app.listen("3333", () => "listening on port 3333");
