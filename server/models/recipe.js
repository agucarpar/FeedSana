const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const recipeSchema = new Schema({
    userFav: {type:Schema.Types.ObjectId, ref:"User"},
    label: String,
    image: String,
    ingredientLines:[String]
    
  });
  
  const User = mongoose.model('recipe', recipeSchema);
  module.exports = recipe;
  