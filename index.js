const express = require("express");
const hbs = require("hbs");
const parser = require("body-parser");
const methodOverride = require("method-override");

const workout = require("./controllers/workouts");
const app = express();


app.set("view engine", "hbs");

app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use("/", workout);

app.listen(3333, () => console.log("listening on port 3333"));
