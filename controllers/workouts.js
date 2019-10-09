const express = require("express");
const router = express.Router();

const Workout = require("../models/workout")

//index
router.get("/", (_req, res) => {
    Workout.find({})
      .then(workout => {
        res.render("index",  {workout} );
      })
      .catch(err => console.log(err));
  });

  //go to add workout page
  router.get("/workout/add", (_req, res) => res.render ("./workout/add"))

//change to specific workout
  router.get("/:id", (req, res) => {
      Workout.findOne({ _id: req.params.id}).then(workout => res.render("./workout/edit", {workout}))
  })
  //update specific workout
  router.post("/:id", (req, res) => {
    Workout.findByIdAndUpdate({ _id: req.params.id }, req.body).then(_workout => res.redirect("/"))
  });
//create new workout
  router.post('/', (req, res) => {
    Workout.create(req.body).then(_workout => {
      Workout.find({}).then(_workout => {
        res.redirect("/")
      })
    })
  })
//delete workout
  router.delete("/:id", (req, res) => {
      Workout.findByIdAndRemove( { _id: req.params.id }, req.body).then(() =>{
        res.redirect("/")}
  )})




module.exports = router;

