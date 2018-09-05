import React, { Component } from 'react';
import './App.css';
import logo from './assets/logo.svg'
import profile from './assets/profile.png'
import { Parallax, Background } from 'react-parallax';
import WOW from 'wowjs'

class App extends Component {
  render() {
    
      const wow = new WOW.WOW();
      wow.init();
    
    return (
      <div className="App">
      <div className="Main">
      <div class='stars'>
      </div>
      
    
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
        <h1 className="wow fadeIn">my name is ryan.</h1>
        <h2 className="wow fadeIn">& I'M A WEB DEVELOPER. </h2>
        </div>
      </div>
     </div>
      <div className='mainBody'>
      <div className='about'>
      <h1 className="abouttext wow fadeInUp"><i className="fas fa-angle-down"/></h1>
      <div className="aboutsection wow fadeInUp">
      <div className="aboutleft">
      <h2 className="aboutTitle">about me</h2>
      <img src={profile}/>
      </div>
      <div className="aboutright">
      <p>I grew up in the Midwest, lived overseas in Spain, and flew around the world on 13 one way flights. All before starting a sucessful elopement photography business out of our company van (Moonbeam). My main draw to web development started when I was researching a concept called flow-state. Since then, I've overhauled my life to focus exclusively on becoming the best developer I can. Almost finished with a Bachelors in Human Factors Psychology--intuitive design, group productivity, and efficient human systems are at the core of my interests. Lastly, just for fun, my core principals + greatest influences: </p>
      <div className="influences">
      <a href="https://inside.bwater.com/publications/principles_excerpt">ray dalio</a>
      <a href="https://www.youtube.com/watch?v=gXuSMjrx_e8&t=424s">les brown</a>
      <a href="https://www.njlifehacks.com/deep-work-cal-newport-summary/">cal newport</a>
      </div>
      </div>
      </div>
      </div>
      
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
