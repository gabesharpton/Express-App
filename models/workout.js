const mongoose = require("../db/connection");

const WorkoutSchema = new mongoose.Schema({
  name: {type: String, true: true},
  reps: Number,
  pounds: Number,
  description: String,
  image: String,
  dayOfWeek: [String],
  complete: Boolean
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
