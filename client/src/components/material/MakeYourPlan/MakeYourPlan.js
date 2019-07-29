import React, { Component } from "react";
import axios from "axios";

export default class MakeYourPlan extends Component {
  constructor() {
    super();
    this.state = {
      dietQuery: "",
      recipes: []
    };
  }

  handleDietInput = e => {
    const dietChose = e.target.value;
    this.setState({
      ...this.state,
      dietQuery: dietChose
    });
  };

  getByDiet() {
    axios
      .get(
        `https://api.edamam.com/search?q=chicken&app_id=${
          process.env.API_ID
        }&app_key=${process.env.APIKEY}&from=0&to=20&diet=${
          this.state.dietQuery
        }`
      )
      .then(result => {
        this.setState(
          {
            ...this.state,
            recipes: result.data.hits
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <select name="diet" onChange={e => this.handleDietInput(e)}>
              <option value="">Choose here</option>
              <option value={this.state.dietChose}>Balanced</option>
              <option value={this.state.dietChose}>High-Fiber</option>
              <option value={this.state.dietChose}>High-protein</option>
              <option value={this.state.dietChose}>High-fiber</option>
              <option value={this.state.dietChose}>Low-fat</option>
              <option value={this.state.dietChose}>Low-Sodium</option>
            </select>
            <label>Health</label>
            <select name="health" onChange={e => this.handleHealthInput(e)}>
              <option value="">Choose here</option>
              <option value={this.state.healthChose}>Alcohol-free</option>
              <option value={this.state.healthChose}>Dairy</option>
              <option value={this.state.healthChose}>Eggs</option>
              <option value={this.state.healthChose}>Gluten</option>
              <option value={this.state.healthChose}> Peanuts </option>
              <option value={this.state.healthChose}>Vegan</option>
              <option value={this.state.healthChose}>Vegetarian</option>




            </select>
            <option value={this.state.healthChose} />
          </form>
          <input
            type="submit"
            value="Submit"
            onClick={() => {
              this.getByDiet();
            }}
          />

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
    );
  }
}
