import React, { Component } from "react";
import axios from "axios";

export default class MakeYourPlan extends Component {
  constructor() {
    super();
    this.state = {
      dietQuery: "",
      healthQuery: "",
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

  handleHealthInput = e => {
    const healthChose = e.target.value;
    this.setState({
      ...this.state,
      healthQuery: healthChose
    });
  };

  getAll(query) {
    axios
      .get(query)
      .then(result => {
        this.setState({ ...this.state, recipes: result.data.hits }, () => {
          console.log(this.state);
        });
      })
      .catch(err => console.log(err));
  }

  getByDiet() {
    
    let mainIngredients = [
      "tomatoe","avocado","jellyfish","tuna","rice","curry","salmon","pork","eggs","kosher","mushrooms","cucumber","eggplant","lettuce","carrot","onion",
      "celery","broccoli","peppers","cauliflower","sprout","garlic","spinach","aspargus","peas","beans","artichokes","squash",]
    let lngth = mainIngredients.length;
    let ingredient =
      mainIngredients[Math.floor(Math.random() * Math.floor(lngth))];
    let query = `https://api.edamam.com/search?q=${ingredient}&app_id=${process.env.API_ID}&app_key=${process.env.APIKEY}&from=0&to=20`;

    if (this.state.healthQuery == "" && this.state.dietQuery == "") {
      this.getAll(query);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <select name="diet" onChange={e => this.handleDietInput(e)}>
              <option value="">Choose your diet here</option>
              <option value={this.state.dietChose}>Balanced</option>
              <option value={this.state.dietChose}>high-fiber</option>
              <option value={this.state.dietChose}>high-protein</option>
              <option value={this.state.dietChose}>low-fat</option>
              <option value={this.state.dietChose}>low-sodium</option>
            </select>
            <label>Health</label>
            <select name="health" onChange={e => this.handleHealthInput(e)}>
              <option value="">Choose here</option>
              <option value={this.state.healthChose}>alcohol-free</option>
              <option value={this.state.healthChose}>dairy</option>
              <option value={this.state.healthChose}>eggs</option>
              <option value={this.state.healthChose}>gluten</option>
              <option value={this.state.healthChose}>peanuts </option>
              <option value={this.state.healthChose}>vegan</option>
              <option value={this.state.healthChose}>vegetarian</option>
            </select>
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
