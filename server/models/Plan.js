const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const planSchema = new Schema ({
    title: String,
    description: String,
    duration: Number,
    difficultyLevel: String,
    recetas: Number
    
})

const Plan = mongoose.model('Plan', planSchema);
module.exports = Plan;
