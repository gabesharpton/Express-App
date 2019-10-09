const mongoose = require("mongoose");

let mongoURI = "";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/workout";
  }

mongoose.connect("mongodb://localhost/workout", {
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false
})

mongoose.Promise = Promise;

module.exports = mongoose;