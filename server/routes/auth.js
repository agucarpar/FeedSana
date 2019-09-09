
const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Recipe = require('../models/recipe')
const passport = require('passport');
const uploadCloud = require("../bin/cloudinary")


const login = (req, user) => {
  return new Promise((resolve,reject) => {
    req.login(user, err => {
      console.log('req.login ')
      console.log(user)

      
      if(err) {
        reject(new Error('Something went wrong'))
      }else{
        resolve(user);
      }
    })
  })
}







// SIGNUP
router.post('/signup', (req, res, next) => {

  const {username, password} = req.body;

  console.log('username', username)
  console.log('password', password)

  // Check for non empty user or password
  if (!username || !password){
    next(new Error('You must provide valid credentials'));
  }

  // Check if user exists in DB
  User.findOne({ username })
  .then( foundUser => {
    if (foundUser) throw new Error('Username already exists');

    const salt     = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    return new User({
      username,
      password: hashPass
    }).save();
  })
  .then( savedUser => login(req, savedUser)) // Login the user using passport
  .then( user => res.json({status: 'signup & login successfully', user})) // Answer JSON
  .catch(e => next(e));
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    console.log("theUser")
    console.log(theUser)

    // Check for errors
    if (err) next(new Error('Something went wrong')); 
    if (!theUser) next(failureDetails)

    // Return user and logged in
    login(req, theUser).then(user => res.status(200).json(req.user));

  })(req, res, next);
});


router.get('/currentuser', (req,res,next) => {
  if(req.user){
    res.status(200).json(req.user);
  }else{
    next(new Error('Not logged in'))
  }
})


router.get('/logout', (req,res) => {
  req.logout();
  res.status(200).json({message:'logged out'})
});


router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
})


//esto es para la favoritización de las recetas. IDA
router.post('/favRecipes',(req,res)=>{
User.findByIdAndUpdate(req.user._id,{$push:{favouriteRecipes:req.body.recipe}},{new:true})
.then(user=>{ req.user._id
  res.json(user)
})
})

//esto es para la favoritización tbm de las recetas.VUELTA
router.get('/printFavRecipes',(req,res,next)=>{
  User.findById(req.user._id)
  .then(foundFavRecipes=>{res.json(foundFavRecipes)})
  .catch(err=>console.log(err))
})

/////////CREANDO RECETA///IDA

router.post('/newRecipe', (req, res, next) => {
  console.log("a ver qué pasa quí", req.user._id, req.body)
 User.findByIdAndUpdate(req.user._id,{$push:{createdRecipes:req.body}},{new:true})
 .then(user=>{req.user._id
res.json(user)})
});


router.get('/printCreatedRecipe',(req,res)=>{
  User.findById(req.user._id)
  .then(foundCreatedRecipe=>{res.json(foundCreatedRecipe)})
  .catch(err=>console.log(err))
})

router.post('/upload', uploadCloud.single("imageUrl"), (req, res, next) => {
  console.log('file is: ', req.file)
  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }
  // get secure_url from the file object and save it in the 
  // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
  res.json({ secure_url: req.file.secure_url });
});

module.exports = router;
