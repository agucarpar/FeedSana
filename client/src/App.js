import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect, Link } from "react-router-dom";
// import ProjectList from './components/projects/ProjectList';
import Navbar from "./components/material/NavBar/Navbar";
// import ProjectDetails from './components/projects/ProjectDetails';
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/auth/AuthService";
import Explorar from "./components/material/Explorar/Explorar";
import Plans from "./components/material/Plan/Plans";
import Profile from "./components/material/Profile/Profile"
import Main from "./components/material/Main/Main"
import FindIngredients from "./components/material/FindIngredients/FindIngredients";
import MakeYourPlan from "./components/material/MakeYourPlan/MakeYourPlan";
import axios from "axios"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      filterQuery: ""
    };
    this.service = new AuthService();
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
    if (this.state.loggedInUser) {
      return (
      <React.Fragment>
        <Redirect to="/main"/>
          <div className="App">
            <header className="App-header">
              <p>HOME</p>
              <h2>Welcome, {this.state.loggedInUser.username}</h2>
              <Navbar
              className="nav"
              userInSession={this.state.loggedInUser}
              logout={this.logout}
            />
            </header>
            {/* En Explorar y en findingredient se pasa para la búsqueda en explorar */}
            <Switch>
              <Route exact path="/explorar" render={() => <Explorar findFood={this.findFood} />} /> 
              <Route exact path="/plans" render={() =><Plans />}/>
              <Route exact path="/profile" render={() =><Profile  />} />
              <Route exact path="/main" render={() =><Main />}/>
              <Route exact path="/findIngredients" render={() =><FindIngredients filterQuery={this.state.filterQuery} />} 
              />
              <Route exact path="/makeYourPlan" render={() =><MakeYourPlan />}/>
            </Switch>
        
       
          </div>
        </React.Fragment>
      );
    } else {
      //si no estás logeado, mostrar opcionalmente o login o signup
      return (
        <React.Fragment>
          <Redirect to="/login" />

          <div className="App">
            <header className="App-header">
              <Switch>
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

export default App;
