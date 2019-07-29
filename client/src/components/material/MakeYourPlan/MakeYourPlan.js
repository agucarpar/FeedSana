import React, { Component } from 'react'
import axios from "axios"

export default class MakeYourPlan extends Component {
    constructor(){
        super();
        this.state={
            dietQuery:"",
            recipes:[]
          };
    }


   

    
    handleDietInput = (e) => {
        const dietChose = e.target.value
        this.setState({
            ...this.state,
          dietQuery: dietChose
        })
        
      }

      getByDiet(){
        axios
        .get(`https://api.edamam.com/search?q=chicken&app_id=${process.env.API_ID}&app_key=${process.env.APIKEY}&from=0&to=20&diet=${this.state.dietQuery}`)
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


            <form onSubmit={this.handleFormSubmit}>
          <label>Diet</label>
          <select name="diet" onChange={(e) => this.handleDietInput(e)}>
            <option value={this.state.dietChose}>balanced</option>
            <option value={this.state.dietChose}>high-protein</option>
            <option value={this.state.dietChose}>high-fiber</option>
            <option value={this.state.dietChose}>low-fat</option>
        </select>
      </form>
        <input type="submit" value="Submit" onClick={()=>{this.getByDiet()}}/>

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


            </div>
            </React.Fragment>
        )
    }
}

{/* onChange={event => this.handleDietInput(event)} */}

