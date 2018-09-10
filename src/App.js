import React, { Component } from 'react';
import './App.css';
import logo from './assets/logo.svg'
import profile from './assets/profile.png'
import WOW from 'wowjs'
import HTML from './assets/icons/html.png'
import CSS from './assets/icons/css.png'
import JS from './assets/icons/js.jpg'
import REACT from './assets/icons/react.png'
import VUE from './assets/icons/vue.png'
import NODE from './assets/icons/node.png'
import EXP from './assets/icons/express.png'
import ADOBE from './assets/icons/adobe.png'
import dulyScreen from './assets/duly_screen.gif'
import aktScreen from './assets/akt.gif'
import mac from './assets/mac.png'
import iphone from './assets/iphone.png'

var smoothScroll = require('smoothscroll');

class App extends Component {
  constructor(){
    super()
    this.state = {
      position: 'RESEARCHER'
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({position: 'DESIGNER'})
    },1000)
    setTimeout(() => {
      this.setState({position: 'WEB DEVELOPER'})
    },2000)
  }


  handleScroll(location){
    var destination = document.querySelector(`.${location}`);
    smoothScroll(destination)
  }
  
  render() {
    

      const wow = new WOW.WOW();
      wow.init();
      
      
    return (
      <div className="App">
      <div className="Main">
      <div className='stars'>
      </div>
      
    
      <div className='mainHeader'>
      <div className='logobar'>
      <img className='logo' src={logo}/>
      <p>brockhoff</p>
      </div>
      <navbar>
      
        <li onClick={() => this.handleScroll('mainBody')}>about</li>
        <li onClick={() => this.handleScroll('influences')}>skills</li>
        <li onClick={() => this.handleScroll('projectsTitle')}>projects</li>
        <li onClick={() => this.handleScroll('form')}>contact</li>
      </navbar>
      
        <div className='headertext'>
        <h1 >ryan brockhoff</h1>
        <div className='changePosition'>
        <h2>{this.state.position}.</h2></div>
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
      <h1 className="skillsTitle">skills</h1>
      <div className="skills">
        <div className="indivIcon wow fadeInUp" data-wow-delay="0.1s"><img className="wow fadeInUp" src={HTML}/><p>html</p></div>
        <div className="indivIcon wow fadeInUp" data-wow-delay="0.15s"><img className="wow fadeInUp" src={CSS}/><p>css</p></div>
        <div className="indivIcon wow fadeInUp" data-wow-delay="0.2s"><img className="wow fadeInUp" src={JS}/><p>javascript</p></div>
        <div className="indivIcon wow fadeInUp" data-wow-delay="0.25s"><img className="wow fadeInUp" src={REACT}/><p>react</p></div>
        <div className="indivIcon wow fadeInUp" data-wow-delay="0.3s"><img className="wow fadeInUp" src={VUE}/><p>vue</p></div>
        <div className="indivIcon wow fadeInUp" data-wow-delay="0.35s"><img className="wow fadeInUp" src={NODE}/><p>node</p></div>
        <div className="indivIcon wow fadeInUp" data-wow-delay="0.4s"><img className="wow fadeInUp" src={EXP}/><p>express</p></div>
        <div className="indivIcon wow fadeInUp" data-wow-delay="0.4s"><img className="wow fadeInUp" src={ADOBE}/><p>adobe creative suite</p></div>
      </div>
      <h1 className="projectsTitle"><center>projects</center></h1>
      <div className="projects">

      <div className="projectbox wow fadeInUp">

      <h1 className="projectitle">duly notes</h1>

          <div className="buttonHolder">
          <a href="https://www.dulynotes.com/#/"><button className="portButton wow fadeIn"> <i className="fas fa-bolt"/> live site </button></a>

          <a href="https://rwbrockhoff.github.io/note/ 
"><button className="portButton wow fadeIn"><i className="fab fa-github"/> github </button></a>
          </div>
          <br/>
          <div className="projectText">
          <p> A full-stack note-taking app created to solidify proficiency in React, while delving into extensive libraries such as Stripe (Elements, Subscription), and Medium-Draft (Draft.js). </p> 

          <li> Received 1st Place, Best Overall Award </li>
          <li> Design is customizable for each user's preferences </li>
          <li> Uses a custom pomodoro to keep users focused on tasks </li>
          </div>

          <div className="screen wow fadeInRight">
          <img className="mac" src={mac}/>
          <img className="demo" src={dulyScreen}/>
          </div>
      </div>

      <div className="projectbox wow fadeInUp">

      <h1 className="projectitle">akt</h1>

      <div className="buttonHolder">
          <a href="https://aktlist.com/#/"><button className="portButton wow fadeIn"> <i className="fas fa-bolt"/> live site </button></a>

          <a href="https://rwbrockhoff.github.io/tovue/"><button className="portButton wow fadeIn"><i className="fab fa-github"/> github </button></a>
          </div>
          <br/>
          <div className="projectText">
          <p> A full-stack todo list app built with Vue to demonstrate enthusiam towards new technology. Akt uses Vuex, Vue Routing, Bootstrap, Auth0, and Postgres. </p> 

          <li> Uses Vuex for state management </li>
          <li> Design incorporates Bootstrap components </li>
          <li> Stores data as an array type in Postgres </li>
          </div>

          <div className="screen wow fadeInLeft">
          <img className="mac" src={mac}/>
          <img className="demo" src={aktScreen}/>
          </div>

      </div>
      <div className="projectbox wow fadeInUp">

      <h1 className="projectitle">oranges</h1>

      <div className="buttonHolder">
          <a href="https://www.dulynotes.com/#/"><button className="portButton wow fadeIn"> <i className="fas fa-bolt"/> live site </button></a>

          <a href="https://rwbrockhoff.github.io/note/ 
"><button className="portButton wow fadeIn"><i className="fab fa-github"/> github </button></a>
          </div>
          <br/>
          <div className="projectText">
          <p> A full-stack note-taking app created to solidify proficiency in React, while delving into extensive libraries such as Stripe (Elements, Subscription), and Medium-Draft (Draft.js). </p> 

          <li> Received 1st Place, Best Overall Award </li>
          <li> Design is customizable for each user's preferences </li>
          <li> Uses a custom pomodoro to keep users focused on tasks </li>
          </div>

          <div className="screen wow fadeInRight">
          <img className="iphone" src={iphone}/>
          {/* <img className="demo" src={dulyScreen}/> */}
          </div>
      </div>
      

      </div>


      <div className='contactContainer'>
        <div className='form'>
        <h1>contact me</h1>
        <input class="contact" type="text" placeholder="Name..."/>
        <input class="contact" type="text" placeholder="Email..."/>
        <textarea placeholder="Message..."/>
        <button className="portButton wow fadeIn"><i className="far fa-envelope"/>&nbsp; send </button>
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
