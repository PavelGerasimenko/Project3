const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

//Set up default for Mongo connection
const db = process.env.MONGODB_URI || 'mongodb://localhost/workout_db';

const Workout = require('./models/workout_Schema.js');

//Set up default mongoose connection and error handler
mongoose.connect(db, function (error) {
  if (error) {
    console.log(error);
  }
  else {
    console.log('Database Connected.');
  }
});

const app = express();

//Code required for bodyParser to work and pull JSON data and bring it in.
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);



//Routes

// app.get('/', (req, res) => {
//   res.send('hello world');
// });

// path for retreiving ALL users workout history
app.get('/api/workout', (req, res) => {
  Workout.find({})
    .then(function (workout) {
      console.log('workout', workout);
      return res.json(workout);
    });
});

// path for retreiving Todays Workout table data only
app.get('/todayworkout/:date', (req, res) => {
  Workout.find({ date: req.params.date })
    .then((workout) => {
      return res.json(workout);
    });
});

//In the future if we want some type of filtering
// app.get('/:id', (req, res) => {
//   Workout.findById(req.params.workout_id, function (err, workout) {
//     if (err)
//       res.send(err);
//     res.json(workout);
//   });
// });

// app.post('/logset', (req, res) => {
//   const workout = new Workout;
//   workout.exercise = req.body.exercise;
//   workout.sets = req.body.sets;
//   workout.reps = req.body.reps;
//   workout.weight = req.body.weight;
//
//   workout.save(function(err) {
//     if(err) {
//       res.send(err);
//     } else {
//       console.log(workout);
//       res.json({message: 'workout logged!'});
//     }
//   });
// });

app.post('/api/logworkout', (req, res) => {

  console.log('Request Body: ');
  console.log(req.body);
  const workout = new Workout;
  workout.date = req.body.date
  workout.exercise = req.body.exercise;
  workout.weight = req.body.weight;
  workout.reps = req.body.reps;
  workout.set = req.body.set;

  workout.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('workout logged!');
      console.log('Output: ' + workout);
    }
  });

  res.json(workout);

});

app.delete((req, res) => {
  Workout.remove({
    workout_id: req.params.workout_id
  }, function (err) {
    if (err)
      res.send(err);

    res.json({ message: 'Successfully deleted' });
  });
});


app.use(express.static(`${__dirname}/public`));

module.exports = app;
