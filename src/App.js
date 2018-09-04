import React, { Component } from 'react';
import './App.css';
import logo from './assets/logo.svg'
import profile from './assets/profile.png'
import { Parallax, Background } from 'react-parallax';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="Main">
      
      
    
      <div className='mainHeader'>
      <div className='logobar'>
      <img className='logo' src={logo}/>
      <p>brockhoff</p>
      </div>
      <navbar>
        <li>about</li>
        <li>skills</li>
        <li>projects</li>
        <li>contact</li>
      </navbar>
        <div className='headertext'>
        <h1>my name is ryan.</h1>
        <h2>& I'M A WEB DEVELOPER. </h2>
        </div>
      </div>
     </div>
      <div className='mainBody'>
      </div>
      <div className='bottom'>
  
      </div>
      <div className='footericons'>
        <p style={{marginBottom: '-5px'}}>
         <a href='https://github.com/rwbrockhoff'> <i className="fab fa-github"/></a>
          <a href='https://www.linkedin.com/in/ryanbrockhoff/'><i className="fab fa-linkedin-in" style={{marginBottom: '5px'}}/></a>
          <a href='https://medium.com/@brockhoff'><i className="fab fa-medium"/></a>
        </p>
        <p style={{fontSize: '0.7em'}}>
        © Ryan Brockhoff. All rights reserved.
        </p>
       
        </div>

      </div>
    );
  }
}

export default App;
