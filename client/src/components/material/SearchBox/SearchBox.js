import React, { Component } from 'react'
import axios from 'axios';


export default class SearchBox extends Component {
    constructor(){  
        super()
        this.state={
          recipes:[],
          filterQuery:"",
        };
        
      } 


    getIngredients(){
        console.log(this.props.filterQuery)
        axios
        .get("https://api.edamam.com/search?q=curry&app_id=7581a957&app_key=c48a20389f4cd0d56fa859832ed4b309")
        .then(result=>{
          this.setState({
            ...this.state,
            recipes:result.data.hits}
            ,()=>{console.log(this.state)}
            );
        })
        .catch(err=>console.log(err))
    }




    render() {
        return (
            <div>
                <h3>Search</h3>
                <input
                className= "search-bar"
                type="text"
                placeholder = "filter recipe"
                onChange ={(e)=> this.props.filterIngredients(e)}
                value={this.props.filterQuery}/>

                <button onClick={()=>this.getIngredients()}>
                    Buscar
                </button>

            </div>
        )
    }
}
