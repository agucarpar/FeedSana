import React, { Component } from "react";
import {  Link, withRouter } from "react-router-dom";

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
        <div>
          <form onSubmit={this.explorer}>
          <h3>Search</h3>
          <input
            className="search-box"
            type="text"
            placeholder="filter recipe"
            value={this.state.filter}
            onChange={e => this.handlerIngredients(e)}
          />
         <input type="submit" value="explorar" />
          {/* <button >
            <Link to="/findIngredients" >explorar</Link>
          </button> */}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(SearchBox)