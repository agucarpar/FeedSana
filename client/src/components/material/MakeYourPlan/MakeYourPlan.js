import React, { Component } from "react";
import axios from "axios";
import "./MakeYourPlan"

export default class MakeYourPlan extends Component {
  constructor() {
    super();
    this.state = {
      dietQuery: "",
      healthQuery: "",
      caloriesQuery:"",
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


  handlerCaloriesInput = e =>{
    const caloriesChose = e.target.value;
    this.setState({
      ...this.state,
      caloriesQuery: caloriesChose
    });
  };


  getingredient() {
    let mainIngredients = [
      "tomatoe","avocado","jellyfish","tuna","rice","curry","salmon","pork","eggs","kosher","mushrooms","cucumber","eggplant","lettuce","carrot","onion",
      "celery","broccoli","peppers","cauliflower","sprout","garlic","spinach","aspargus","peas","beans","artichokes","squash","razor shell"];
  

    let lngth = mainIngredients.length;
    let ingredient;
    return (ingredient =
      mainIngredients[Math.floor(Math.random() * Math.floor(lngth))]);
  }

  getAll(ingredient) {
    axios
      .get(
        `https://api.edamam.com/search?q=${ingredient}&app_id=${
          process.env.API_ID
        }&app_key=${process.env.APIKEY}&from=0&to=20`
      )
      .then(result => {
        this.setState({ ...this.state, recipes: result.data.hits }, () => {
          console.log(this.state);
        });
      })
      .catch(err => console.log(err));
  }

  getByDiet(ingredient) {
    let checkDiet =
      this.state.dietQuery !== "" && this.state.dietQuery !== undefined;
    let checkHealth =
      this.state.healthQuery !== "" && this.state.healthQuery !== undefined;
    let checkCalories = this.state.caloriesQuery !== null && this.state.caloriesQuery !== undefined

    if (!checkDiet && !checkHealth && !checkCalories) {
      this.getAll();
    } else {
      let query = `https://api.edamam.com/search?q=${ingredient}&app_id=${
        process.env.API_ID
      }&app_key=${process.env.APIKEY}&from=0&to=20`;
      let queryExtend = "";

      if (checkDiet) {
        queryExtend = queryExtend + `&diet=${this.state.dietQuery}`;
      }

      if (checkHealth) {
        queryExtend = queryExtend + `&health=${this.state.healthQuery}`;
      }

      if (checkCalories) {
        queryExtend = queryExtend + `&calories=100-${this.state.caloriesQuery}`;
      }

      axios
        .get(query + queryExtend)
        .then(result => {
          this.setState({ ...this.state, recipes: result.data.hits }, () => {
            console.log(this.state);
          });
        })
        .catch(err => console.log(err));
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
            <label>Max Calories</label>
            <input type="number" onChange={e=>this.handlerCaloriesInput(e)}></input>
          </form>
          <input
            type="submit"
            value="asdads"
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
