import React, { Component } from "react";
import {  Link, withRouter, Redirect } from "react-router-dom";

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
    axios
        .get(
          `https://api.edamam.com/search?q=${this.state.filterQuery}&app_id=${
            process.env.API_ID
          }&app_key=${process.env.APIKEY}`
        )
        .then(result => {
          this.setState({ 
            ...this.state,
            recipes: result.data.hits,
            showMenus: new Array((result.data.hits).length).fill(0).map(()=> (
              {showMenu: false}
            ))
          });
          console.log(result)
        })
        .catch(err => console.log(err))
        this.props.findFood(this.state.filterQuery);
        this.props.history.push(`/findIngredients`)
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

export default withRouter(SearchBox)