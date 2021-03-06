import React, { Component } from "react";
import AuthService from "../../auth/AuthService"
import axios from "axios";
import SearchBox from "../SearchBox/SearchBox";

export default class FindIngredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterQuery: "",
      recipes: []
    };
    this.service=new AuthService
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
              recipes: result.data.hits,
              showMenus: new Array((result.data.hits).length).fill(0).map(()=> (
                {showMenu: false}
              )),
                showMessages: new Array((result.data.hits).length).fill(0).map(()=> (
                {showMessage: false}
              ))
              
            },
            () => {
              console.log(result.data.hits);
            }
          );
        })
        .catch(err => console.log(err));
  }


  findFood = (food) => {
    this.props.findFood(food)
    this.setState({
      ...this.state,
      ingredient:food,
      showMessage:false

    })
  }

  addtoFavourite(recipe, index) {
    
   this.service.addingToFavourite(recipe.recipe)

   let newState=[...this.state.showMessages]
   newState[index].showMessage=!this.state.showMessages[index].showMessage
    this.setState({
     ...this.state,newState})
    

    
  }

  toggleMenu(index) {
    let newState = [...this.state.showMenus]
    newState[index].showMenu = !this.state.showMenus[index].showMenu
    this.setState({...this.state, newState})
  }

  
  render() {
    return (
      <React.Fragment>
        {/* esto es para la búsqueda */}
       

        <h2 className="section-title">Find the best recipes</h2>

        <SearchBox findFood={this.findFood}/> 

        
       <div className="pics-wrapper">

          {this.state.recipes.map((recipe, index) => { 
            return (
              <div className="card">
                
                <div key={index * Math.random() + Math.random()}>
                   
                    <a target="_blank"
                     href={recipe.recipe.url}> <img  src={recipe.recipe.image} /> </a>

                  </div> 
                  
                <h4 key={index}>{recipe.recipe.label}</h4>
                
                    <button onClick={() => this.addtoFavourite(recipe, index)}>Add to Favourites</button>
                    {this.state.showMessages[index].showMessage && <p> Added Recipe to Favourites </p>} 


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
        </div>
      </React.Fragment>
    );
  }

}


