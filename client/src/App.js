import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
// import ProjectList from './components/projects/ProjectList';
import Navbar from "./components/material/NavBar/Navbar";
// import ProjectDetails from './components/projects/ProjectDetails';
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/auth/AuthService";
import Recipes from './components/material/Recipes/Recipies';
import Plans from './components/material/Plan/Plans';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      filterQuery:""
     
     };
    this.service = new AuthService();
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
        });}
      }


     

  render() {
    this.fetchUser();

    if (this.state.loggedInUser) {
      return (
        <React.Fragment>
          <div className="App">
            <header className="App-header">
             
                <p>HOME</p>
                <h2>Welcome, {this.state.loggedInUser.username}</h2>
              </header>
              
              <Redirect to="/home" />

                <Navbar
                  className="nav"
                  userInSession={this.state.loggedInUser}
                  logout={this.logout}
                />

                  
                  <Switch>
                <Route
                  exact path="/recipes" 
                  render={()=><Recipes/>} />
                  <Route
                  exact path="/plans" 
                  render={()=><Plans/>} />
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
              <Navbar
                userInSession={this.state.loggedInUser}
                logout={this.logout}
              />
              <Switch>
                <Route
                  exact
                  path="/signup"
                  render={() => <Signup getUser={this.getUser} />}
                />
                <Route
                  exact
                  path="/login"
                  render={() => <Login getUser={this.getUser} />}
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
