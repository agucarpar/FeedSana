import React, { Component } from 'react'
import axios from 'axios';



export default class Plans extends Component {
    constructor(){  
        super()
        this.state={
          recipes:[],
        };
        
      } 

      
    getInfo(){
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
  getInfo(){
    axios
    .get("https://api.edamam.com/search?q=lentils&app_id=7581a957&app_key=c48a20389f4cd0d56fa859832ed4b309")
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
          <React.Fragment>
            <div>
                <button onClick={()=>{this.getInfo()}}>ESQUILAME</button>
            </div>
            <div>
                <button onClick={()=>{this.getInfo()}}> PAPOLO</button>
            </div>
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
            
            </React.Fragment>
        )
    }
}
