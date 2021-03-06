const router = require("express").Router();
const Workout = require("../models/workout.js");


router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields:
      {
        totalDuration:
          { $sum: "$exercises.duration" }
      }
    }])
    .then(dbWorkout => { 
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, 
    {
      $push: {
        exercises: req.body,
      }
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );

});

router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields:
      {
        totalDuration:
          { $sum: "$exercises.duration" }
      }
    }])
    .limit(7)
    .then(dbWorkout => { 
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
