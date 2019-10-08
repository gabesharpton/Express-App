const express = require("express");
const router = express.Router();

const Workout = require("../models/workout")


router.get("/", (req, res) => {
    Workout.find({})
      .then(workout => {
        res.render("index",  {workout} );
      })
      .catch(err => console.log(err));
  });

  
  router.get("/add", (req, res) => res.render ("add"))


  router.get("/edit/:id", (req, res) => {
      Workout.findOne({ _id: req.params.id}).then(workout => res.render("edit", {workout}))
  })


  
//Add a new workout to certain day
  
router.post('/', (req, res) => {
  Workout.create(req.body).then(workouts => {
    Workout.find({}).then(
        workout => {
            res.render(workout)
            .then(workout=>{
            workout => res.redirect("/")
    }
    )
  })
})})
  
  router.put("/", (req, res) => {
    req.body.complete = req.body.complete ? true : false
    Workout.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(workout => res.redirect("/"))

  });


  router.delete("/:id", (req, res) => {
      Workout.findByIdAndRemove( { _id: req.params.id }, req.body).then(() =>{
          Workout.find({}).then(() =>{
        res.redirect("/")}
  )}
  )
})


module.exports = router;

