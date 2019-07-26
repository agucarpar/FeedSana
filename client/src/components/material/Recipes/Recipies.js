import React, { Component } from 'react';
// import SearchBox from '../SearchBox/SearchBox';
// import {Link} from 'react-router-dom'
import axios from 'axios';


class Recipes extends Component{
  constructor(){  
    super()
    this.state={
      recipes:[],
    };
    

// let mainIngredients=["tomatoe","avocado","jellyfish","tuna"]
// let ingredients=

  } 
  componentDidMount(){
    axios
    .get("https://api.edamam.com/search?q=chicken&app_id=7581a957&app_key=c48a20389f4cd0d56fa859832ed4b309")
    .then(result=>{
      this.setState({recipes:result.data.hits});
    })
    .catch(err=>console.log(err))
  }

  




  render(){ 
  return (
     <React.Fragment>
    <div>

      <div>
      {this.state.recipes.map((recipe,index)=>{
        return(
            <div>
            <h3 key={index}>{recipe.recipe.label}</h3>
            <div key={index*Math.random()+Math.random()}><img src={recipe.recipe.image} /></div>
            </div>
            )}
            )}
            </div>
    </div>
          </React.Fragment>
   


   
    )
  }
}
  export default Recipes;
  
  
  










 

 