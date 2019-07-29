import React, { Component } from "react";
import axios from "axios";
import SearchBox from "../SearchBox/SearchBox";

export default class FindIngredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterQuery: "",
      recipes: []
    };
  }

  
componentDidMount() {


      axios
        .get(
          `https://api.edamam.com/search?q=${this.props.filterQuery}&app_id=${
            process.env.API_ID
          }&app_key=${process.env.APIKEY}`
        )
        .then(result => {
          this.setState(
            {
              ...this.state,
              recipes: result.data.hits
            },
            () => {
              console.log(result.data.hits);
            }
          );
        })
        .catch(err => console.log(err));
  }


  render() {
    return (
      <React.Fragment>


        <div>
          {this.state.recipes.map((recipe, index) => {
            return (
              <div key={index}>
                <h3>{recipe.recipe.label}</h3>
                <div key={index * Math.random() + Math.random()}>
                  <img src={recipe.recipe.image} />
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
