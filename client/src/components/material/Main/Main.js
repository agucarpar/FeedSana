import React, { Component } from 'react'
import { Link } from "react-router-dom";
import picTable from "../../../picture/table.jpg"

import "./Main.scss"



export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="placingWrapper">
                <div class="wrapper">
                <h3>Comienza a comer saludable</h3>
               <div> <img src={picTable}></img></div>
                        </div>




                        <div className="wrapper">
                        <h3>Explora entre cientos de recetas</h3>       

                        <div> <img src={picTable}></img></div>
                        </div>

                <div className="wrapper">    
                <h3>Consulta planes de hábitos saludables</h3>

                <div> <img src={picTable}></img></div>                    
                </div>
            </div>
            <button><Link  to='/explorar'>COMENZAR</Link></button>
            </React.Fragment>
        )
    }
}





