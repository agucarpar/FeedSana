import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
// import ProjectList from './components/projects/ProjectList';
import Navbar from "./components/material/NavBar/Navbar";
// import ProjectDetails from './components/projects/ProjectDetails';
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/auth/AuthService";
import Contents from "./components/contents/Contents";
import Recipes from './components/material/Recipes/Recipies'
import Plans from './components/material/Plan/Plans'

class App extends Component {
  //en el tiempo de construcción de la aplicación, creamos una instancia del authservice
  constructor(props) {
    super(props);
    //arrancamos el estado con un valor de loggedInUser con nada (luego lo vamos a reemplazar con el valor real)
    this.state = { loggedInUser: null };
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

  //este método vuelca la información del usuario y lo guarda en el state de app que siempre puedes revisitar
  fetchUser() {
    if (this.state.loggedInUser === null) {
      //utilizamos el método loggedin para cualquier momento que deseemos obtener la información del usuario quede guardada en el state de app
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

  render() {
    this.fetchUser();

    if (this.state.loggedInUser) {
      return (
        <React.Fragment>
          <div className="App">
            <header className="App-header">
             
                <p>HOME</p>
                <h2>Welcome, {this.state.loggedInUser.username}</h2>
              
              <Redirect to="/home" />

            <Contents />
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
            </header>
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
