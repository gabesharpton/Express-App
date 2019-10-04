const Workout = require("../models/workout");
const SeedData = require("./seeds.json")
Workout.remove({})
    .then(() => {
        return Workout.collection.insert(SeedData);
    })
    .then(() => {
        process.exit();
    })