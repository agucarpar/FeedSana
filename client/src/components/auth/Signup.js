import React, { Component } from 'react';
import AuthService from './AuthService'
import {  Link } from "react-router-dom";
import "./Style.scss"
import "../../Style/Material/SignUp.scss"


class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }
    
  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.signup(username, password)
    .then( response => {
        this.setState({
            username: "", 
            password: "",
        });
        this.props.getUser(response.user)
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
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
      

  render() {
    return(
      <div className="signup">
        <h3>Create an account.</h3>
        <h5>START TO EAT HEALTHY</h5>

        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <input   placeholder="Name" type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          </fieldset>
          
          <fieldset>
            <input  type="Password" placeholder="Password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          </fieldset>
          
          <input type="submit" value="Create Account" className="account" />
        </form>
        <h1>{this.state.error ? 'Error' : ''}</h1>
        <div className="backButton">
          <button><Link  to='/login'>Go to Login</Link></button>
          <button className="bb"><Link  to='/main2'>Back</Link></button>
        </div>
      </div>
    )
  }
}

export default Signup;