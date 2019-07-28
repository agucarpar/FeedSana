import React, { Component } from "react";
// import SearchBox from '../SearchBox/SearchBox';
// import {Link} from 'react-router-dom'
import SearchBox from "../SearchBox/SearchBox"

import axios from "axios";

class Recipes extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
    };
  }
  //pedir refatorización de este mamotetro
  
  componentDidMount() {
    let mainIngredients = ["tomatoe","avocado","jellyfish","tuna","rice","curry","salmon","pork","eggs","kosher","mushroms","cucumber","eggplant","pumkin"];
    let lngth = mainIngredients.length;
    let ingredients =mainIngredients[Math.floor(Math.random() * Math.floor(lngth))];
    axios
    .get(`https://api.edamam.com/search?q=${ingredients}&app_id=${process.env.API_ID}&app_key=${process.env.APIKEY}`)
    .then(result => {
      this.setState({ recipes: result.data.hits });
    })
    .catch(err => console.log(err));
    
  }


  filterIngredients(e){
    const filter = e.target.value
    this.setState({
      ...this.state,
      filterQuery : filter
    })
    console.log(e.target.value)
  }
  

  
  getIngredient(){
    console.log(this.props.filterQuery)
    axios
    .get(`https://api.edamam.com/search?q=${this.props.filterQuery}&app_id=${process.env.API_ID}&app_key=${process.env.APIKEY}`)
    .then(result=>{
      this.setState({
        ...this.state,
        recipes:result.data.hits}
        ,()=>{console.log(this.recipes)}
        );
    })
    .catch(err=>console.log(err))
}

  render() {
    return (
      <React.Fragment>
    
      <div>
        <SearchBox
      filterIngredients = {(e) =>this.filterIngredients(e)}
      getIngredient = {() =>this.getIngredient()}
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
