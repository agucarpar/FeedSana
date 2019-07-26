// import axios from 'axios';
// import React, { Component } from 'react';

// class Recipes extends Component{
//     constructor(){  
//       super()
//       this.state={
//         recipes:[],
//       };
      
//     } 
//     componentDidMount(){
//       axios
//       .get("https://api.edamam.com/search?q=chicken&app_id=7581a957&app_key=c48a20389f4cd0d56fa859832ed4b309")
//       .then(result=>{
//         this.setState({recipes:result.data.hits});
//       })
//       .catch(err=>console.log(err))
//     }
// }