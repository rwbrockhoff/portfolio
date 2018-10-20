import React, { Component } from 'react'
import WOW from 'wowjs'

import dulyScreen from '../../assets/duly_screen.gif'
import aktScreen from '../../assets/akt.gif'
import mac from '../../assets/mac.png'
import iphone from '../../assets/iphone.png'
import orangesDemo from '../../assets/orangesdemo.gif'


export default class Projects extends Component {
  render() {
    return (
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
            <p> A full-stack todo list app built with Vue to demonstrate enthusiam towards new technology. Akt is built as a clone of Wunderlist. Akt uses Vuex, Vue Routing, Bootstrap, Auth0, and Postgres.  </p> 
  
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
            
            <a href="https://oranges2oranges2.firebaseapp.com/"><button className="portButton wow fadeIn"> <i className="fas fa-bolt"/> live site </button></a>
  
            <a href="https://rwbrockhoff.github.io/oranges/"><button className="portButton wow fadeIn"><i className="fab fa-github"/> github </button></a> 
            </div>
            <br/>
            <div className="projectText">
            <p> A full-stack, responsive game based on Apples to Apples. Built mobile-first in React, using socket.io as the bulk of the technology to communicate game information.</p> 
  
            <li> Utilizes socket.io for web-socket communication</li>
            <li> Focus on animation and game-like immersion </li>
            <li> Emphasis on responsive design </li>
            </div>
  
            <div className="screen wow fadeInRight" style={{paddingLeft:'50px'}}>
            <img className="iphone" src={iphone}/>
            <img className="demo-mobile" src={orangesDemo}/>
            </div>
        </div>
        <div className="projectbox wow fadeInUp">
  
        <h1 className="projectitle">blok</h1>
  
        <div className="buttonHolder">
            
            <a href="https://play.google.com/store/apps/details?id=com.blok"><button className="portButton wow fadeIn"> <i className="fas fa-bolt"/> play store </button></a>
  
            <a href="https://github.com/rwbrockhoff/blok"><button className="portButton wow fadeIn"><i className="fab fa-github"/> github </button></a> 
            </div>
            <br/>
            <div className="projectText">
            <p> A full-stack, responsive game based on Apples to Apples. Built mobile-first in React, using socket.io as the bulk of the technology to communicate game information.</p> 
  
            <li> Utilizes socket.io for web-socket communication</li>
            <li> Focus on animation and game-like immersion </li>
            <li> Emphasis on responsive design </li>
            </div>
  
            <div className="screen wow fadeInRight" style={{paddingLeft:'50px'}}>
            <img className="iphone" src={iphone}/>
            <img className="demo-mobile" src={orangesDemo}/>
            </div>
        </div>

        
        
        </div>
    )
  }
}
