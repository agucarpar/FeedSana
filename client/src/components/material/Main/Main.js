import React, { Component } from 'react'
import { Link } from "react-router-dom";
import picTable from "../../../picture/table.jpg"




export default class Main extends Component {
    render() {
            return (
                <React.Fragment>
                <nav className ="nav">                
                   
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
                <button><Link className="boton" to='/explorar'>COMENZAR</Link></button>
                <h3>Thanks to Edaman API</h3>
                </React.Fragment>
            )
        }
        
    
}





