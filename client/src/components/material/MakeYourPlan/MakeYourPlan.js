import React, { Component } from "react";
import axios from "axios";

export default class MakeYourPlan extends Component {
  constructor() {
    super();
    this.state = {
      dietQuery: "",
      healthQuery: "",
      caloriesQuery:"",
      recipes: [],
      
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
          this.setState({ ...this.state, recipes: result.data.hits,
            showMenus: new Array((result.data.hits).length).fill(0).map(()=> (
              {showMenu: false}
            ))
           }, () => {
            console.log(this.state);
          });
        })
        .catch(err => console.log(err));
    }
  }

  toggleMenu(index) {
    let newState = [...this.state.showMenus]
    newState[index].showMenu = !this.state.showMenus[index].showMenu
    this.setState({...this.state, newState})
  }

  render() {
    return (
      <React.Fragment>
        <section className="make-plan">

          <h2>Choose your customized plan</h2>
          <form  className="form" onSubmit={this.handleFormSubmit}>
          <label className="label" >What kind of plan you want?</label>

            <select className="select" name="diet" onChange={e => this.handleDietInput(e)}>
              <option value="">Choose your plan</option>
              <option value={this.state.dietChose}>Balanced</option>
              <option value={this.state.dietChose}>high-fiber</option>
              <option value={this.state.dietChose}>high-protein</option>
              <option value={this.state.dietChose}>low-fat</option>
              <option value={this.state.dietChose}>low-sodium</option>
            </select>
            <label className="label">What do not you want on your plan?</label>
            <select className="select" name="health" onChange={e => this.handleHealthInput(e)}>
              <option value="">Choose here</option>
              <option value={this.state.healthChose}>Alcohol-free</option>
              <option value={this.state.healthChose}>Dairy</option>
              <option value={this.state.healthChose}>Eggs</option>
              <option value={this.state.healthChose}>Gluten</option>
              <option value={this.state.healthChose}>Peanuts </option>
              <option value={this.state.healthChose}>Vegan</option>
              <option value={this.state.healthChose}>Vegetarian</option>
            </select>
            <label>Max Calories</label>
            <input className="select" placeholder="calories"
             type="number" onChange={e=>this.handlerCaloriesInput(e)}></input>
          </form>

          <input
          className="find"
            type="submit"
            value="Find!"
            onClick={() => {
              this.getByDiet();
            }}
          />

<div>
        <section className="pics-wrapper" >

        {this.state.recipes.map((recipe, index) => { 
            return (
              <div className="card">
                <div key={index * Math.random() + Math.random()}>
                  <img  src={recipe.recipe.image} /></div>
                <h4 key={index}>{recipe.recipe.label}</h4>
                
                    <button onClick={() => this.addtoFavourite(recipe)}>Add to Favourites</button>
                  
                    <h3>INGREDIENTS</h3>

                    
                    <button onClick={()=>this.toggleMenu(index)}>See the ingredients</button> 
                    
                  <div>
                    {this.state.showMenus[index].showMenu && 
                    <section className="show-menu">
                    {recipe.recipe.ingredientLines.map((ingredientLine, index) => {
                    return (
                      <div> 
                        <ul >
                          <li> {ingredientLine}</li>
                           </ul>
                           
                        </div>
                        );
                      })}
                     </section> 
                      }
                      </div>
                   
                      
                
              </div>
            );
          })}
        </section></div>
        </section>
      </React.Fragment>
    );
  }
}
