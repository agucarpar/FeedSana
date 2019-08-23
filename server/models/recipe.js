const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const recipeSchema = new Schema({
    // image: String,
    name: String,
    description:String,
    time:Number,  
  });
  
  const Recipe = mongoose.model('recipe', recipeSchema);
  module.exports = Recipe;
  