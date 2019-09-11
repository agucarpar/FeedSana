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
    // .post("/login", { username, password })
    //prueba a ver si guardando is admin en bbdd te trae en response isAdmin
      .post("/login", { username, password })
      .then(response => {
        return response.data;
      });
  };

  loggedin = () => {
    return this.service.get("/currentUser").then(response => response.data);
  };

  logout = () => {
    return this.service.get("/main2").then(response => response.data);
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

  creatingRecipe=(name,description,time,imageUrl)=>{
    console.log("hola que tal?")
    return this.service.post('/newRecipe', {name,description,time,imageUrl})
    .then(user=>user.data)
  }

  printCreatedRecipe=()=>{
    return this.service.get('/printCreatedRecipe')
    .then(response=>response.data)
  }

 
}

export default AuthService;
