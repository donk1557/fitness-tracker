const router = require('express').Router();
const path = require('path');
const Routine = require('../models/Routine');

router.post('/workouts', (req,res) => {
   
  Routine.create(body)
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(404).json(err);
  });
    
  });
  
  router.put('/workouts/:id', ({body, params}, res) => {
    Routine.findOneandUpdate(params.id, { $push: { exercises: body } }, { new: true, runValidators: true })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(404).json(err);
    });
    
  });

  router.get('/api/workouts/range', (req, res) => {
    Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: '$exercises.duration' },
          totalWeight: { $sum: '$exercises.weight' }
        },
      },
    ])
      .sort({ _id: -1 })
      .limit(7)
      .then((dbWorkouts) => {
        console.log(dbWorkouts);
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  module.exports = router;