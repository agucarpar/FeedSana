import React, { Component } from "react";
import {  Link, withRouter } from "react-router-dom";
import "./SearchBox.scss"

import axios from "axios";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes:[],
      filterQuery:""
    };
  }

  handlerIngredients(e) {
    const filter = e.target.value;
    this.setState({
      ...this.state,
      filterQuery: filter
    });
  }

  explorer = (e) => {
    e.preventDefault();
    this.props.findFood(this.state.filterQuery);
    this.props.history.push("/findIngredients")
  }

  render() {
    return (
      <React.Fragment>
        <div >
          <form onSubmit={this.explorer}>
          <h3>Search</h3>
          <div >
          <input
          className="searchBox"
            type="text"
            placeholder="Find recipes by ingredients"
            value={this.state.filter}
            onChange={e => this.handlerIngredients(e)}
          />
         {/* <input type="submit" value="explorar" /> */}
          </div> </form>
         
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(SearchBox)