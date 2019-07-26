import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Recipe from '../material/Recipies'

//clase componente que renderiza los contenidos genéricos
//usando rendering condicional y el componente Switch que ya conocéis podéis mostrar los contenidos oportunos que queráis
class Contents extends Component {
  render() {
    return (
  
      <div className="App">
             <p>Soy contents</p>
            
             </div>
            );
        
    
  }
}

export default Contents;