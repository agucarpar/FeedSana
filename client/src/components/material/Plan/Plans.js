import React, { Component } from 'react'
import axios from 'axios';



export default class Plans extends Component {
    constructor(){  
        super()
        this.state={
          recipes:[],
        };
      } 

      
//Pedir refactorizar ésto 

  getCurry(){
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

  getLentils(){
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

  getCarrot(){
    axios
    .get("https://api.edamam.com/search?q=carrot&app_id=7581a957&app_key=c48a20389f4cd0d56fa859832ed4b309")
    .then(result=>{
      this.setState({
        ...this.state,
        recipes:result.data.hits}
        // ,()=>{console.log(this.state)}
        );
    })
    .catch(err=>console.log(err))

  }

  getKosher(){
    axios
    .get("https://api.edamam.com/search?q=Kosher&app_id=7581a957&app_key=c48a20389f4cd0d56fa859832ed4b309")
    .then(result=>{
      this.setState({
        ...this.state,
        recipes:result.data.hits}
        // ,()=>{console.log(this.state)}
        );
    })
    .catch(err=>console.log(err))

  }

  getLowFat(){
    axios
    .get("https://api.edamam.com/search?q=chicken&app_id=7581a957&app_key=c48a20389f4cd0d56fa859832ed4b309&from=0&to=20&calories=591-722&diet=low-fat&health=alcohol-free")
    .then(result=>{
      this.setState({
        ...this.state,
        recipes:result.data.hits}
        // ,()=>{console.log(this.state)}
        );
    })
    .catch(err=>console.log(err))

  }



    render() {
        return (
          <React.Fragment>
            <div>
                <button onClick={()=>{this.getCurry()}}>Curry</button>
            </div>
            <div>
                <button onClick={()=>{this.getLentils()}}> Lentils</button>
            </div>
            <div>
                <button onClick={()=>{this.getCarrot()}}>Carrot</button>
            </div>
            <div>
                <button onClick={()=>{this.getKosher()}}>Kosher</button>
            </div>
            <div>
                <button onClick={()=>{this.getLowFat()}}>LowFat</button>
            </div>
            <div>
                {this.state.recipes.map((recipe,index)=>{
                    return(
                    <div>
                    <h3 key={index}>{recipe.recipe.label}</h3>
                    <div key={index*Math.random()+Math.random()}><img src={recipe.recipe.image} /></div>
                    </div>
                      )
                    })
                    }
            </div>
            
            </React.Fragment>
        )
    }
}
