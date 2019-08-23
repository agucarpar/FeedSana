import React, { Component } from 'react'

export default class CreateRecipe extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            description:[],
            time:"",
            // difficulty:""
            createdRecipes:[],
        }
    }
      
handlerChange(e){
    const { name, value } = e.target;
    this.setState({
        [name]: value
    });
}


  ////Recetas
  createRecipe(name,description,time){
      this.service.creatingRecipe(name,description,time)
  }


handlerSubmit(e,){
    e.preventDefault();
    const name =this.state.name;
    const description = this.state.description;
    const time = this.state.time;

    this.service.createRecipe()
    .then((res)=>{
        let cloneMyRecipes = [...this.state.recipes];

        cloneMyRecipes.unshift(res)
        this.setState({
            ...this.state,
            recipes:cloneMyRecipes,
        })
    })
}

    
    render() {
        return (
            <div>
                <h1>Make your own Recipe</h1> 
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Name of Recipe" name="name" 
                    value={this.state.name} onChange={e=>this.handlerChange(e)}>
                    </input>
                    <textarea  placeholder="Describe your Recipe" name="description"  
                    rows="6" cols="60" value={this.state.indregients} 
                    onChange={e=>this.handlerChange(e)}>                       
                    </textarea>
                    <input type="number" placeholder="Time needed in minutes" name="time" 
                     value={this.state.time} onChange={e=>this.handlerChange(e)}>                        
                     </input>
                    {/* <select  value={this.state.difficulty}> 
                        <option >Select your option</option>
                        <option value="1">easy</option>
                        <option value="2">medium</option>
                        <option>expert</option>

                    </select> */}
                    <input type="submit" value="Submit" 
                        onClick={()=>this.handlerSubmit()}></input>
                </form>
                
            </div>
        )
    }
}
