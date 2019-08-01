// navbar/Navbar.js

import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from "react-router-dom";
import AuthService from '../../auth/AuthService';
import "./Navbar.scss"

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
  }

  handleLogout = (e) => {
    this.props.logout()
  }

  render() {
  
      return (
        <React.Fragment>

           
          <div className="linkRow">

         <div> <h2>FeedSana</h2></div>

           
              
            <div className="nav-bar">
            <Link  to='/main'>Main</Link>
            <Link  to='/profile'>Profile</Link>
            <Link  to='/explorar'>Explorar</Link>
            <Link  to='/plans'>Plans</Link>
            <Link  to='/makeyourplan'>Make Your Plan</Link>
            </div>
         
               
            <button onClick={()=>{this.handleLogout()}}>
              Logout</button>
       
            
          </div>
         
        </React.Fragment>
      )
    }
  
}

export default Navbar;