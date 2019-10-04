const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/workout")

mongoose.Promise = Promise;

module.exports = mongoose;