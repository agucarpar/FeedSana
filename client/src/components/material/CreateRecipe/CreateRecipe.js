import React, { Component } from 'react'
import AuthService from "../../auth/AuthService"
import "../../../Style/Material/CreateRecipe.scss"

export default class CreateRecipe extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            description:"",
            time:"",
            createdRecipes:[],
            recipes:[],
            photo:"",
        }
        this.service = new AuthService();
    }
      
handlerChange(e){
    const { name, value } = e.target;
    this.setState({
        [name]: value
    });
}




handlerSubmit(e){
    e.preventDefault()
    console.log("handlerSubmit")
    const name =this.state.name;
    const description = this.state.description;
    const time = this.state.time;
    const photo=this.state.photo
    this.service.creatingRecipe(name,description,time,photo)
}


    
    render() {
        console.log(this.state.description)
        return (
            <div >
                <h1>Make your own Recipe</h1> 
                <form onSubmit={this.onSubmit}className="wrapper-recipe">
                    <input type="text" placeholder="Name of Recipe" name="name" 
                    value={this.state.name} onChange={e=>this.handlerChange(e)}>
                    </input>
                    <textarea  placeholder="Describe your Recipe" name="description"  
                    rows="6" cols="60" value={this.state.description} 
                    onChange={e=>this.handlerChange(e)}>                       
                    </textarea>
                    <input type="number" placeholder="Time needed in minutes" name="time" 
                     value={this.state.time} onChange={e=>this.handlerChange(e)}>                        
                     </input>
                     

                    <input className="input-recipe" type="submit" value="Crear Receta" 
                        onClick={()=>this.handlerSubmit()}></input>
                </form>
                
            </div>
        )
    }
}
