import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Home extends Component {


    // redirecToExplorar() {
    //     this.props.History.push("../Explorar");
    // }
    
    

    render() {
        return (
            <div>
                <h2>Comienza a comer saludable</h2>
                <p>Planes guiados para aprender y mantener hábitos de comida sana</p>
                <h3>Explora entre cientos de recetas</h3>
                <h3>Sigue planes para ayudarte a crear hábitos saludables</h3>
              <button > <Link  to='/explorar'>explorar</Link></button>
            </div>
        )
    }
}
