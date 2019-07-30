// auth/auth-service.js
import axios from 'axios';

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:5000/auth',
      withCredentials: true
    });
  }

  signup = (username, password) => {
    return this.service.post('/signup', {username, password})
    .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => {
      return response.data
    })
  }

  loggedin = () => {
    return this.service.get('/currentUser',)
    .then(response => response.data)
  }

  logout = () => {
    return this.service.get('/logout',)
    .then(response => response.data)
  }

  handleUpload = theFile => {
      console.log('file in service: ', theFile)
      return this.service.post('/upload', theFile)
        .then(res => res.data)
        // .catch(errorHandler);
    }
  
    saveNewThing = (newThing) => {
      // console.log('new thing is: ', newThing)
      return this.service.post('/things/create', newThing)
        .then(res => res.data)
        // .catch(errorHandler);
    }
  }


export default AuthService;