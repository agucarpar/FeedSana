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
    .get(`https://api.edamam.com/search?q=curry&app_id=${process.env.API_ID}&app_key=${process.env.APIKEY}`)
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
    .get(`https://api.edamam.com/search?q=lentils&app_id=${process.env.API_ID}&app_key=${process.env.APIKEY}`)
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
    .get(`https://api.edamam.com/search?q=carrot&app_id=${process.env.API_ID}&app_key=${process.env.APIKEY}`)
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
    .get(`https://api.edamam.com/search?q=Kosher&app_id=${process.env.API_ID}&app_key=${process.env.APIKEY}`)
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
    .get(`https://api.edamam.com/search?q=&app_id=${process.env.API_ID}&app_key=${process.env.APIKEY}&from=0&to=20&diet=low-fat`)
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
           
          <section className="plans">
            <div className="wrapper-button"> 
            <div>
                <button className="button1" className="left" onClick={()=>{this.getCurry()}}>Curry</button>
            </div>
            <div>
                <button className="button2" className="right" onClick={()=>{this.getLentils()}}> Lentils</button>
            </div>
            <div>
                <button className="button3" className="left"  onClick={()=>{this.getCarrot()}}>Carrot</button>
            </div>
            <div>
                <button className="button4"  className="right" onClick={()=>{this.getKosher()}}>Kosher</button>
            </div>
            <div>
                <button className="button5" className="left"  onClick={()=>{this.getLowFat()}}>LowFat</button>
            </div>
            </div>
            <div className="container">
                {this.state.recipes.map((recipe,index)=>{
                    return(
                    <div className="item">
                    <h3 key={index}>{recipe.recipe.label}</h3>
                    <div key={index*Math.random()+Math.random()}><img src={recipe.recipe.image} /></div>
                    </div>
                      )
                    })
                    }
            </div>
            </section>
            </React.Fragment>
        )
    }
}
