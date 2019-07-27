import React, { Component } from "react";
// import SearchBox from '../SearchBox/SearchBox';
// import {Link} from 'react-router-dom'
import SearchBox from "../SearchBox/SearchBox"

import axios from "axios";

class Recipes extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    };
  }
  
  
  //pedir refatorización de este mamotetro
  
  
  filterIngredients(e){
    const filter = e.target.value
    this.setState({
      ...this.state,
      filterQuery : filter
    })
  }
  
  componentDidMount() {
    let mainIngredients = ["tomatoe","avocado","jellyfish","tuna","rice","curry","salmon","pork","eggs","kosher"];
    let lngth = mainIngredients.length;
    let ingredients =mainIngredients[Math.floor(Math.random() * Math.floor(lngth))];
    axios
    .get(`https://api.edamam.com/search?q=${ingredients}&app_id=7581a957&app_key=c48a20389f4cd0d56fa859832ed4b309`)
      .then(result => {
        this.setState({ recipes: result.data.hits });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
    
      <div>
        <SearchBox
      filterProducts = {(e) =>this.filterProducts(e)}
      filterQuery={this.state.filterQuery}/>
      </div>


        <div>
   {this.state.recipes.map((recipe,index)=>{
   return(
   <div>
   <h3 key={index}>{recipe.recipe.label}</h3>
   <div key={index*Math.random()+Math.random()}>
     <img src={recipe.recipe.image} /></div>
   </div>
     )
   })
   }
   
        </div>
        
        </React.Fragment>
    )
}
}
export default Recipes;
