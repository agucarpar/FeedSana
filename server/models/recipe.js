const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const recipeSchema = new Schema({
    title: String,
    description: String,
    ingredients:[String],
    moment: String,
    time: Number
  });
  
  const User = mongoose.model('User', recipeSchema);
  module.exports = User;
  