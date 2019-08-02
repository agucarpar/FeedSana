import React, { Component } from "react";
import AuthService from "../../auth/AuthService";
import axios from "axios";
import "./Profile.scss";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouriteRecipes: [],
      recipes:[],
      
 


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


  toggleMenu(index) {
    let newState = [...this.state.showMenus]
    newState[index].showMenu = !this.state.showMenus[index].showMenu
    this.setState({...this.state, newState})
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
      <div className="card"> 
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



{/* <div>
<h2>Perfil de {this.props.username} </h2>

<div className="pics-wrapper">
  {this.state.favouriteRecipes.map((recipe, index) => {
    //   console.log(recipe.recipe.label)
    return (
      <div className="card"> 
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
</div> */}