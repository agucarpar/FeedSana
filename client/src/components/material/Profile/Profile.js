import React, { Component } from "react";
import AuthService from "../../auth/AuthService";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouriteRecipes: [],
      recipes:[],
      createdRecipes:[],
    };
    this.service = new AuthService();
  }

  componentDidMount() {
    this.getFavRecipes();
    this.getCreatedRecipes()
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

  getCreatedRecipes(){
    this.service.printCreatedRecipe()
    .then(response=>{
      console.log(response);
      this.setState({
        ...this.setState,
        createdRecipes:response.createdRecipes
      })
    })
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
      // console.log(recipe.recipe.label)
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
    {this.state.createdRecipes.map((recipe, index) => {
      console.log(recipe.recipe)
    return (
      <div className="card"> 
        <h4 key={index}>{recipe.name}</h4>
        <div key={index}>
          {/* <img src={recipe.imageUrl} /> */}
        </div>

        <div>
      <p>{recipe.description}</p>
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