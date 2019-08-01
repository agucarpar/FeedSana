import React, { Component } from "react";
import AuthService from "../../auth/AuthService";
import axios from "axios";
import "./Profile.scss";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouriteRecipes: []
    };
    this.service = new AuthService();
  }

  componentDidMount() {
    this.getFavRecipes();
  }

  getFavRecipes() {
    this.service.printFavRecipes().then(response => {
      console.log(response);
      this.setState({
        ...this.state,
        favouriteRecipes: response.favouriteRecipes
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h2>Perfil de {this.props.username} </h2>

          <div className="pics-wrapper">
            {this.state.favouriteRecipes.map((recipe, index) => {
              //   console.log(recipe.recipe.label)
              return (
                <div>
                  <h4 key={index}>{recipe.label}</h4>
                  <div key={index}>
                    <img src={recipe.image} />
                  </div>

                  <div>
                      
                    {recipe.ingredientLines.map((ingredientLine, index) => {
                      return (
                        <div>
                          <li>{ingredientLine}</li>
                        </div>
                      );
                    })}
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
