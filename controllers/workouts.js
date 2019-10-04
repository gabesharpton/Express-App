const express = require("express");
const router = express.Router();

const Workout = require("../models/workout")


router.get("/", (req, res) => {
    Workout.find({})
      .then(workout => {
        res.render("index", { workout });
      })
      .catch(err => console.log(err));
  });



module.exports = router;
