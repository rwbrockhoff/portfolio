import React, { Component } from 'react';
import './App.css';

import WOW from 'wowjs'



import Header from './components/Header/Header'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'



class App extends Component {  
  render() {
      const wow = new WOW.WOW();
      wow.init();
      
    return (
      <div className="App">
      
      <Header/>

      <div className='mainBody'>
      <About/>
      </div>
      
      <h1 className="skillsTitle">skills</h1>
      <Skills/>

      <h1 className="projectsTitle"><center>projects</center></h1>
      <Projects/>

      <Contact/>

      <div className='bottom'>
      {/* This section is the background image for the footer and holds no content other than rendering CSS.  */}
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
