import React, { Component } from 'react'
import logo from '../../assets/logo.svg'
var smoothScroll = require('smoothscroll');

export default class Header extends Component {
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
    return (
        <div className="main">
          <div className='stars'>
        </div>
        
      
        <div className='main-header center'>
        <div className='logo-bar center'>
        <img className='logo' src={logo} alt="logo"/>
        <p>brockhoff</p>
        </div>
        <navbar>
        
          <li onClick={() => this.handleScroll('main-body')}>about</li>
          <li onClick={() => this.handleScroll('influences')}>skills</li>
          <li onClick={() => this.handleScroll('projectsTitle')}>projects</li>
          <li onClick={() => this.handleScroll('form')}>contact</li>
        </navbar>
        
          <div className='header-text flex center column'>
          <h1 >ryan brockhoff</h1>
          <div className='changePosition'>
          <h2>{this.state.position}.</h2></div>
          </div>
        </div>
       </div>
    )
  }
}
