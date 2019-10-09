const Workout = require("../models/workout");
const SeedData = require("./seeds.json")
Workout.deleteMany({})
    .then(() => {
        return Workout.collection.insertMany(SeedData);
    })
    .then(() => {
        process.exit();
     } 
    )