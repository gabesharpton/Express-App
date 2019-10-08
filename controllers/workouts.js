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

  
  router.get("/workout/add", (req, res) => res.render ("./workout/add"))


  router.get("/:id", (req, res) => {
      Workout.findOne({ _id: req.params.id}).then(workout => res.render("./workout/edit", {workout}))
  })
  router.post("/:id", (req, res) => {
    
    console.log(req.body)
    //req.body.complete = req.body.complete ? true : false
    Workout.findByIdAndUpdate({ _id: req.params.id }, req.body).then(workout => {
        console.log(workout)
        res.redirect("/")
        
    })
    
  });

  //Add a new workout to certain day
  
  
  

  router.post('/', (req, res) => {
    Workout.create(req.body).then(workout => {
      Workout.find({}).then(workout => {
        res.redirect("/")
      })
    })
  })

  router.delete("/:id", (req, res) => {
      Workout.findByIdAndRemove( { _id: req.params.id }, req.body).then(() =>{
        res.redirect("/")}
  )})




module.exports = router;

