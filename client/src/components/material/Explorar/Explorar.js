import React, { Component } from "react";
// import SearchBox from '../SearchBox/SearchBox';
// import {Link} from 'react-router-dom'
import SearchBox from "../SearchBox/SearchBox";

import axios from "axios";

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
     filterQuery:""

    };
  }



  //pedir refatorización de este mamotetro, abajo
  componentDidMount() {
    let mainIngredients = ["tomatoe","avocado","jellyfish","tuna","rice","curry","salmon","pork","eggs","kosher","mushroms","cucumber","eggplant"];
    let lngth = mainIngredients.length;
    let ingredients = mainIngredients[Math.floor(Math.random() * Math.floor(lngth))];

    //   let mealType =["breakfast","lunch","snack","dinner",]
    //   let meal
    //  let today = new Date()
    //  let time = today.getHours()
      
    //   if(time>=7&&time<=10){
    //    return meal = mealType[0]
    //   }else if (time>=13&&time<=15){
    //    return meal = mealType[1]
    //   }else if (time>=19&&time<=23){
    //     return meal = mealType[3]
    //   } else{
    //      return meal = mealType[2]
    //   }


    axios
      .get(
        `https://api.edamam.com/search?q=${ingredients}&app_id=${process.env.API_ID}&app_key=${process.env.APIKEY}&from=30&to=40&`
      )
      .then(result => {
        this.setState({ recipes: result.data.hits });
      })
      .catch(err => console.log(err));
  }

  findFood = (food) => {
    this.props.findFood(food)
  }

  render() {
    return (
      <React.Fragment>
        <SearchBox findFood={this.findFood} />

        <div>
          {this.state.recipes.map((recipe, index) => {
            return (
              <div>
                <h3 key={index}>{recipe.recipe.label}</h3>
                <div key={index * Math.random() + Math.random()}>
                  <img src={recipe.recipe.image} />
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
export default Recipes;
