import React, { Component } from "react";
// import SearchBox from '../SearchBox/SearchBox';
// import {Link} from 'react-router-dom'
import AuthService from "../../auth/AuthService"
import SearchBox from "../SearchBox/SearchBox";
import "./Explorar.css"


import axios from "axios";

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
     filterQuery:"",
     favouritePlan:[]

    };
    this.service=new AuthService
  }


  // 

  //pedir refatorización de este mamotetro, abajo
  componentDidMount() {
    let mainIngredients = ["tomatoe","avocado","jellyfish","tuna","rice","curry","salmon","pork","eggs","kosher","mushrooms","cucumber","eggplant","lettuce","carrot","onion","celery","broccoli","peppers","cauliflower","sprout","garlic","spinach","aspargus","peas","beans","artichokes","squash",""];
    let lngth = mainIngredients.length;
    let ingredient = mainIngredients[Math.floor(Math.random() * Math.floor(lngth))];

    axios
      .get(
        `https://api.edamam.com/search?q=${ingredient}&app_id=${process.env.API_ID}&app_key=${process.env.APIKEY}`
      )
      .then(result => {
        this.setState({ recipes: result.data.hits });
        console.log(result)
      })
      .catch(err => console.log(err));
  }

  findFood = (food) => {
    this.props.findFood(food)
  }

  //esto es el únco viaje de ida  vuelta entre back y front que tienes, estúdiatelo
  addtoFavourite(recipe) {
    
   this.service.addingToFavourite(recipe.recipe)
   .then(user=>{
     console.log(user)
   })
  }
  

  
  
  
  render() {
    return (
      <React.Fragment>
        {/* esto es para la búsqueda */}
       

        <h2 className="as">Descubre nuevas recetas
        entre una amplio abanico de opciones</h2>

        <SearchBox findFood={this.findFood}/> 
       <div>
        <section className="pics-wrapper" >


          {this.state.recipes.map((recipe, index) => { 
            console.log(recipe.recipe.label)
            return (
              <div className="card">
                <h3 key={index}>{recipe.recipe.label}</h3>
                <div key={index * Math.random() + Math.random()}>
                  <img  src={recipe.recipe.image} /></div>
                
                    <button onClick={() => this.addtoFavourite(recipe)}>Add to Favourites</button>
                  
                    <h3>INGREDIENTS</h3>


                  <div> 
                    {recipe.recipe.ingredientLines.map((ingredientLine, index) => {
                    return (
                      <div> 
                        <ul >
                          <p> {ingredientLine}</p>
                           </ul>
                           
                        </div>
                        );
                      })}
                      </div>
                   
                      
                
              </div>
            );
          })}
        </section></div>
      </React.Fragment>
    );
  }
}
export default Recipes;

//toggleItems() {
  //   // if (this.props.cart.length === 0)   {
  //   //     alert("no puedes abrir el carrito no tiene items!")
  //   //     return;
  //   // }

  //   const open = this.state.open

  //   this.setState({
  //       ...this.state,
  //       open: !open
  //   })
  // }