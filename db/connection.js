const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/workout", {
useNewUrlParser: true,
useUnifiedTopology: true
})

mongoose.Promise = Promise;

module.exports = mongoose;