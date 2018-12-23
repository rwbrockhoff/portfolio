import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert'

export default class Contact extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            email: '', 
            message: ''
        }
    }

    sendEmail = () => {
        let email = {
          name: this.state.name,
          email: this.state.email, 
          message: this.state.message
        }
        axios.post('/api/sendemail', {email: email} ).then(res => {
          swal("Sent! 🚀", "I'll be in contact with you as soon as I can. Thank you for reaching out!", "success");
    
          this.setState({
            name: '', 
            message: '', 
            email: ''
          })
    
          var inputs = document.getElementsByTagName("input")
          Object.keys(inputs).forEach(e => inputs[e].value = '')
    
          var areas = document.getElementsByTagName("textarea")
          Object.keys(areas).forEach(e => areas[e].value = '')
    
        })
    }


  render() {
    return (
      
        <div className='contactContainer'>
        <div className='form'>
        <h1>contact me</h1>
        <input 
        class="contact" type="text" placeholder="Name..."
        onChange={(e) => this.setState({name: e.target.value})}
        />
        <input class="contact" type="text" placeholder="Email..."
        onChange={(e) => this.setState({email: e.target.value})}
        />
        <textarea placeholder="Message..."
        onChange={(e) => this.setState({message: e.target.value})}
        />
        <button 
        className="port-button"
        onClick={this.sendEmail}
        ><i className="far fa-envelope"/>&nbsp; send </button>
        </div>
      </div>

    )
  }
}
