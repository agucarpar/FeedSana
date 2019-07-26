import React, { Component } from 'react'

export default class SearchBox extends Component {
    render() {
        return (
            <div>
                <h3>Search</h3>
                <input
                className= "search-bar"
                type="text"
                placeholder = "filter recipe"
                onChange ={(e)=> this.props.filterRecipe(e)}
                value={this.props.filterQuery}/>

                <div className="check-box">
                <input type="checkbox" 
                
                onChange = {(e)=>this.props.findRecipe(e)}/> 
                
                </div>
            </div>
        )
    }
}
