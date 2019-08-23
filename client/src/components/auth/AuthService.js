// auth/auth-service.js
import axios from "axios";


class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_URL,
      withCredentials: true
    });
  }

  signup = (username, password) => {
    return this.service
      .post("/signup", { username, password })
      .then(response => response.data);
  };

  login = (username, password) => {
    return this.service
      .post("/login", { username, password })
      .then(response => {
        return response.data;
      });
  };

  loggedin = () => {
    return this.service.get("/currentUser").then(response => response.data);
  };

  logout = () => {
    return this.service.get("/logout").then(response => response.data);
  };

  handleUpload = theFile => {
    console.log("file in service: ", theFile);
    return this.service.post("/upload", theFile).then(res => res.data);
    // .catch(errorHandler);
  };

  saveNewThing = newThing => {
    // console.log('new thing is: ', newThing)
    return this.service.post("/things/create", newThing).then(res => res.data);
    // .catch(errorHandler);
  };


  //esto es para favoritizar las recetas
  addingToFavourite=(recipe)=>{
    return this.service.post("/favRecipes", {recipe})
    .then(user=>{
      return user.data
    })
  }

  printFavRecipes =()=>{
    return this.service.get('/printFavRecipes')
    .then(response=>response.data)
  }

  ////////Receta nueva

  creatingRecipe=(name,description,time)=>{
    return this.service.post('/newRecipe', {name,description,time})
    .then(user=>user.data)
  }

  printCreatedRecipe=()=>{
    return this.service.get('/printCreatedRecipe')
    .then(response=>response.data)
  }

}

export default AuthService;
