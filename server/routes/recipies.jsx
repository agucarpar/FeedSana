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
//       .get("https://api.edamam.com/search?q=chicken&app_id=${process.env.API_ID}&app_key=${process.env.APIKEY}")
//       .then(result=>{
//         this.setState({recipes:result.data.hits});
//       })
//       .catch(err=>console.log(err))
//     }
// }