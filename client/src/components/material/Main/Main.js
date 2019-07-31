import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Main.css"



export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
            <div>
                <div>
                <h2>Comienza a comer saludable</h2>
                <p>Planes guiados para aprender y mantener hábitos de comida sana</p>
                <img></img>
                <h3>Explora entre cientos de recetas</h3>
                <h3>Sigue planes para ayudarte a crear hábitos saludables</h3>
            </div>
            <button><Link  to='/explorar'>Explorar</Link></button>
            </div></React.Fragment>
        )
    }
}
