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


  router.get("/:id", (req, res) => {
      Workout.findOne({ _id: req.params.id}).then(workout => res.render("edit", {workout}))
  })

//   router.get("/edit/:id", (req, res) => {
//       Workout.findOne({_id: req.params.id }).then(workout => {
//           res.render("edit", {workout})
//       })
//   })

  
  //Add a new workout to certain day
  
  
  router.put("/:id", (req, res) => {
    req.body.complete = req.body.complete ? true : false
    Workout.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
    
  });

  router.post('/', (req, res) => {
    Workout.create(req.body).then(workout => {
      Workout.find({}).then(workout => {
        res.render(workout)
      })
    })
  })

  router.delete("/:id", (req, res) => {
      Workout.findOneAndRemove( { _id: req.params.id }).then(() =>{
        res.redirect("/")}
  )})




module.exports = router;

