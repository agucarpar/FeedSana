import React, { Component } from "react";
import {  Link, withRouter } from "react-router-dom";


class SearchBox2 extends Component {
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
    this.props.history.location("/findIngredients")
  }

  render() {
    return (
      <React.Fragment>
        <div >
          <form onSubmit={this.explorer}>
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

export default withRouter(SearchBox2)