// navbar/Navbar.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    if (this.state.loggedInUser) {
      return (
        <nav >
          <ul>
           <button> onClick={this.handleLogout}>Logout</button>
          </ul>

          <h2>Welcome, {this.state.loggedInUser.username}</h2>
        </nav>
      )
    } else {
      return (
        <React.Fragment>
          <div className="linkRow">
            
            <div ><Link  to='/signup'>Signup</Link></div>
            <div ><Link  to='/login'>Login</Link></div>
            <div><Link  to='/recipes'>Recipes</Link></div>
           
          </div>
        </React.Fragment>
      )
    }
  }
}

export default Navbar;