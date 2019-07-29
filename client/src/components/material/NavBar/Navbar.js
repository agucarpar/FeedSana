// navbar/Navbar.js

import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from "react-router-dom";
import AuthService from '../../auth/AuthService';

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
            <div><Link  to='/main'>Main</Link></div>
            <div><Link  to='/profile'>Profile</Link></div>
            <div><Link  to='/explorar'>Explorar</Link></div>
            <div><Link  to='/plans'>Plans</Link></div>
            <div><Link  to='/makeyourplan'>Make Your Plan</Link></div>

            <button onClick={()=>{this.handleLogout()}}>
              Logout</button>
            
          </div>
         
        </React.Fragment>
      )
    }
  
}

export default Navbar;