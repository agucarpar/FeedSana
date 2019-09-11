import React, { Component } from 'react'
import { Link } from "react-router-dom";
import picTable from "../../../picture/table.jpg"
import "../../../Style/Material/Main2.scss"




export default class Main extends Component {

constructor(){
    super();
    this.state={
        showMenu:false
    }
}

pleaseLogin(){
    
    this.setState({
        ...this.state,
        showMenu : !this.state.showMenu 
    })
    console.log(this.state.showMenu)
    console.log("probando")
}

    render() {
            return (
                <React.Fragment>
                <nav className ="nav">                
                    <h1>FeedSana</h1>
                    <div className="login">
                       <button ><Link className="boton"to='/login'>Login</Link></button> 
                       <button ><Link className="boton"to='/signup'>Signup</Link> </button> 
                    </div>
                </nav>
                <div className="placingWrapper">
                    <div className="wrapper">
                        <h3>Comienza a comer saludable</h3>
                        <div> <img src={picTable} alt="picture"></img></div>
                    </div>
    
    
                            <div className="wrapper">
                            <h3>Explora entre cientos de recetas</h3>       
    
                            <div><img src={picTable} alt="picture"></img></div>
                            </div>
    
                    <div className="wrapper">    
                    <h3>Consulta planes de hábitos saludables</h3>
    
                    <div> <img src={picTable} alt="picture"></img></div>                    
                    </div>
                </div>
                <button onClick={()=>this.pleaseLogin()}>Comenzar</button>
                {this.state.showMenu && <div> Please SignUp/Login  </div>} 
                
                <h3>Thanks to Edaman API</h3>
                </React.Fragment>
            )
        }
        
    
}





