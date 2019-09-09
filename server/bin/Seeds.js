// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js
require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Recipe = require("../models/Recipe");
const bcryptSalt = 10;

mongoose
  .connect(process.env.BBDD_ATLAS, { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

let users = [
  {
    username: "Agus",
    password: bcrypt.hashSync("agus", bcrypt.genSaltSync(bcryptSalt))
  },
  {
      username: "Esther",
      password: bcrypt.hashSync("222", bcrypt.genSaltSync(bcryptSalt)),
      completedPlans:["3","4","5"]

  }
];

let recipes = [
  {
    name: "Tallarines a la Demianesca",
    description: "Tallarines, soja, brocoli, pollo",
    time: 35
  }
];

User
.deleteMany()
  .then(() => {
    return User.create(users);
  })

  .then(() => {
    mongoose.disconnect();
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });

Recipe  
.deleteMany()
  .then(() => {
  return  Recipe.create(recipes);
  })
  .then(() => {
    mongoose.disconnect();
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });
