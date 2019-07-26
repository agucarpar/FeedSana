import React, { Component } from 'react';
import SearchBox from './SearchBox/SearchBox';
import Plan from '../material/data'


class Recipies extends Component{
  constructor(){  
    super()
  
    this.state = {
     recipes: [...Plan.data],
      filterQuery:"",
      filteredProducts : [...Plan.data]
    }
  }
render(){ 

return (
  <div>
      <SearchBox findRecipe={(e)=> this.findRecipe(e)}
      filterRecipe = {(e) =>this.filterRecipe(e)}
      filterQuery={this.state.filterQuery}/>/>

      <h2>Education:</h2>
      {recipes.map((recipe, index) => {
        return (
          <div key={index}>
            <h3>{recipe.data.title}</h3>
            <p>{recpipe.data.description}</p>
            
          </div>
          )
      })}
    </div>
    )
  }
}
  export default Recipies;
  
  
  










 

 