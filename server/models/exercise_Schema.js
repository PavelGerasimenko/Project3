//require Mongoose
const mongoose = require('mongoose');
// Define schema
const Schema = mongoose.Schema;

const NewExercise = new Schema({
  exercise_id: { type: Number, default: 0 },
  exercise_name: String,
  exercise_description: String,
  category_id: Number,
  category_name: String
});

// Compile model from schema
const Exercise = mongoose.model('NewExercise', NewExercise);

//Export the Exercise
module.exports = Exercise;