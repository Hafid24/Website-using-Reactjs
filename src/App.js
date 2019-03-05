import React, { Component } from 'react'
import Navbar from './Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'



class App extends Component {
 state = {
   
 }
 
 
  render() {
    
    return (
      <BrowserRouter>
          <div className="App">
            <Navbar/>
            <Route exact path='/home' component = {Home}/> 
            <Route path='/about' component = {About}/> 
            <Route path='/contact' component = {Contact}/> 
          </div>
      </BrowserRouter>
    )
    
  }
}

export default App;
