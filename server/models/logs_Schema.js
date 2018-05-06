//require Mongoose
const mongoose = require('mongoose');
// Define schema
const Schema = mongoose.Schema;

const Newlog = new Schema({
  log_id: { type: Number, default: 0 },
  log_date: Date,
  log_exercise: String,
  log_weight: Number,
  log_set: Number,
  log_reps: Number
});

// Compile model from schema
const Log = mongoose.model('NewLog', Newlog);

//Export the Log
module.exports = Log;