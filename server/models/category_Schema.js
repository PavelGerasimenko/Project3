//require Mongoose
const mongoose = require('mongoose');
// Define schema
const Schema = mongoose.Schema;

const NewCategory = new Schema({
  category_id: { type: Number, default: 0 },
  category_name: String,
  category_description: String
});

// Compile model from schema
const Category = mongoose.model('NewCategory', NewCategory);

//Export the Category
module.exports = Category;