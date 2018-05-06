//Using this Schema for MVP.
//require Mongoose
const mongoose = require('mongoose');
//require Moment
const moment = require('moment');
// Define schema
const Schema = mongoose.Schema;

const NewWorkout = new Schema({
  date: {
    type: String,
    default: moment().format('MM/DD/YY')
  },
  exercise: String,
  reps: Number,
  weight: Number,
  set: Number
});

// Compile model from schema
const Workout = mongoose.model('NewWorkout', NewWorkout);

//Export the Workout
module.exports = Workout;
