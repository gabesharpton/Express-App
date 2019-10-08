const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/workout", {
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false
})

mongoose.Promise = Promise;

module.exports = mongoose;