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

  router.get("/:id", (req, res) => {
      Workout.findOne({ _id: req.params.id}).then(workout => res.render("edit", workout))
  })

  router.get("/edit/:id", (req, res) => {
      Workout.findOne({_id: req.params.id }).then(workout => {
          res.render("edit", workout)
      })
  })

  //Add a new workout to certain day
  router.get("/add", (req, res) => {
      Workout.create(req.body).then(workout => {
          res.redirect("/", workout)
      })
  })


module.exports = router;

