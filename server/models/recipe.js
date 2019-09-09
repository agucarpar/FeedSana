const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const recipeSchema = new Schema({
    // image: String,
    name: String,
    description:String,
    time:Number,  
    photo:"",
  });
  
  const Recipe = mongoose.model('Recipe', recipeSchema);
  module.exports = Recipe;
  