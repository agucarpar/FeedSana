import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Recipies from '../material/Recipies';
import LinkNavBar from '../material/LinkNav/LinkNavBar'

//clase componente que renderiza los contenidos genéricos
//usando rendering condicional y el componente Switch que ya conocéis podéis mostrar los contenidos oportunos que queráis
class Contents extends Component {
  render() {
    return (
  
      <div className="App">
               
            <LinkNavBar></LinkNavBar>
               <Switch>
                 <Route path='/Recipies' component={Recipies}/>
             </Switch>
              
             </div>
            );
        
    
  }
}

export default Contents;