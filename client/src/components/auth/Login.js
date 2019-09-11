import React, { Component } from 'react';
import AuthService from './AuthService'
import "./Style.scss"
import {  Link } from "react-router-dom";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '', 
      loggedInUser: null,
      password: '', };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.login(username, password)
      .then(response => {
        this.setState({
          username: username,
          password: password,
          error: false
        });

        this.props.getUser(response)
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true
        });
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {

    return (
    <React.Fragment>
      <div className="signup">
        <h3>Please, login to our site</h3>
        <h5>GO TO YOUR ACCOUNT</h5>

        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            
            <input  placeholder="Name" type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
          </fieldset>

          <fieldset>
            <input  placeholder="Password" type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
          </fieldset>


          <input className="account" type="submit" value="Login" />
        </form>
        <h1>{this.state.error ? 'Error' : ''}</h1>


        <button className="bb"><Link  to='/main2'>Back</Link></button>

      </div>

    </React.Fragment>)
  }
}

export default Login;