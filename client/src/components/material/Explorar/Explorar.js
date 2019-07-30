import React, { Component } from "react";
// import SearchBox from '../SearchBox/SearchBox';
// import {Link} from 'react-router-dom'
import SearchBox from "../SearchBox/SearchBox";
import "./Explorar.css"
import ReadMoreReact from 'read-more-react';

import axios from "axios";

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
     filterQuery:""

    };
  }


  toggleItems() {
    // if (this.props.cart.length === 0)   {
    //     alert("no puedes abrir el carrito no tiene items!")
    //     return;
    // }

    const open = this.state.open

    this.setState({
        ...this.state,
        open: !open
    })
  }

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
        console.log(result.data)
      })
      .catch(err => console.log(err));
  }

  findFood = (food) => {
    this.props.findFood(food)
  }


  
  render() {
    return (
      <React.Fragment>
        {/* esto es para la búsqueda */}
        <SearchBox findFood={this.findFood} /> 

        <div>
          {this.state.recipes.map((recipe, index) => {
            return (
              <div>
                <h3 key={index}>{recipe.recipe.label}</h3>
                <div key={index * Math.random() + Math.random()}>
                  <img src={recipe.recipe.image} /></div>
                
                  
                  
                  


                  <ReadMoreReact text={<div  > 
                    {recipe.recipe.ingredientLines.map((ingredientLine, index) => {
                    return (
                        <li>{ingredientLine}</li>
                    );
                  })}</div> }
                min={0}
                ideal={0}
                max={0}
                readMoreText="click here to read more"/>

                   
                
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
export default Recipes;

                  