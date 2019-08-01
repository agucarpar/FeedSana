import "./App.scss";
import React, { Component } from "react";
import { Switch, Route, Redirect, Link, withRouter } from "react-router-dom";
import AuthService from "./components/auth/AuthService";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Navbar from "./components/material/NavBar/Navbar";
import Explorar from "./components/material/Explorar/Explorar";
import Plans from "./components/material/Plan/Plans";
import Profile from "./components/material/Profile/Profile"
import Main from "./components/material/Main/Main"
import FindIngredients from "./components/material/FindIngredients/FindIngredients";
import MakeYourPlan from "./components/material/MakeYourPlan/MakeYourPlan";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      filterQuery: "",
      favouritePlan:[]
    };
    this.service = new AuthService();
  }

  
  addtoFavourite(recipe) {
    let newState = { ...this.state }

    newState.favouritePlan.push(recipe)

    this.setState(newState)
  }


  componentDidMount() {
    this.fetchUser();
  }
  
  getUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  logout = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
      this.props.history.push("/login")
    });
  };

  fetchUser() {
    if (this.state.loggedInUser === null) {
      return this.service
        .loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }
//esto es para la busqueda en explorar
  findFood = (food) => {
    console.log(food)
    this.setState({
      ...this.state,
      filterQuery : food
    })
  }

  render() {
    const currentPath = this.props.location.pathname

    if (this.state.loggedInUser) {
      return (
      <React.Fragment>
        <Redirect to="/main"/>
          <div className="App">
            <header className="App-header">
              
            {
              currentPath !== "/main" && <Navbar
              className="nav"
              userInSession={this.state.loggedInUser}
              username={this.state.loggedInUser.username}
              logout={this.logout}
            />
            }
            </header>
            {/* En Explorar y en findingredient se pasa para la búsqueda en explorar */}
            <Switch>
              <Route exact path="/explorar" render={() => <Explorar findFood={this.findFood} />} /> 
              <Route exact path="/plans" render={() =><Plans />}/>
              <Route exact path="/main" render={() =><Main />}/>
              <Route exact path="/findIngredients" render={() =><FindIngredients filterQuery={this.state.filterQuery} />} />
              <Route exact path="/makeYourPlan" render={() =><MakeYourPlan  />}/>
              <Route exact path="/profile" render={() =><Profile  favRecipe={(this.state.printFavRecipes)} username={this.state.loggedInUser.username} />} />
              {/* CHAT */}
            </Switch>
        
       
          </div>
        </React.Fragment>
      );
    } else {
      //si no estás logeado, mostrar opcionalmente o login o signup
      return (
        <React.Fragment>
          {/* <Redirect to="/signup" /> */}

          <div className="App">
            <header className="App-header">
              <Switch>
                <Route exact path='/' render={()=> <Redirect to="/signup" />}/>
                <Route exact path="/signup" render={()=><Signup getUser={this.getUser} />}
                />
                <Route exact path="/login" render={() => <Login getUser={this.getUser} />}
                />
              </Switch>
            </header>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default withRouter(App);
