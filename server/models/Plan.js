const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const planSchema = new Schema ({
    title: String,
    description: String,
    duration: Number,
    difficultyLevel: String,
    numberOfRecipies: Number,
    recipies:[],
    userAdded: [{ type: Schema.Types.ObjectId, ref: "User" }]
})

const Plan = mongoose.model('Plan', planSchema);
module.exports = Plan;
