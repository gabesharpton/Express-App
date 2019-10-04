const mongoose = require("../db/connection");

const WorkoutSchema = new mongoose.Schema({
  name: String,
  complete: Boolean
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
