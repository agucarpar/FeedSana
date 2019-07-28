import React, { Component } from 'react'
import axios from "axios";


export default class SearchBox extends Component {
    constructor(){  
        super()
        this.state={
          recipes:[],
        };
        
      } 

     
    



    render() {
        return (
            <React.Fragment>
            <div>
                <h3>Search</h3>
                <input
                className= "search-box"
                type="text"
                placeholder = "filter recipe"
                onChange ={(e)=> this.props.filterIngredients(e)}
                value={this.props.filterQuery}
                />

                <button onClick={()=>this.props.getIngredient()}>
                    Buscar
                </button>

                {/* {this.state.recipes.map((recipe,index)=>{
        return(
        <div>
        <h3 key={index}>{recipe.recipe.label}</h3>
        <div key={index*Math.random()+Math.random()}>
          <img src={recipe.recipe.image} /></div>
        </div>
          )
        })
        } */}

            </div>
            </React.Fragment>
        )
    }
}
