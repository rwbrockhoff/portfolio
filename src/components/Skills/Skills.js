import React from 'react'
import WOW from 'wowjs'

import HTML from '../../assets/icons/html.png'
import CSS from '../../assets/icons/css.png'
import JS from '../../assets/icons/js.jpg'
import REACT from '../../assets/icons/react.png'
import VUE from '../../assets/icons/vue.png'
import EXP from '../../assets/icons/express.png'
import FIREBASE from '../../assets/icons/firebase.png'
import SOCKET from '../../assets/icons/socket.svg'
import ADOBE from '../../assets/icons/adobe.png'

export default () => {
  return (
    <div className="skills">
    <div className="indivIcon wow fadeInUp" data-wow-delay="0.1s"><img className="wow fadeInUp" src={HTML}
    alt="html"/><p>html</p></div>
    <div className="indivIcon wow fadeInUp" data-wow-delay="0.15s"><img className="wow fadeInUp" src={CSS} alt="css"/><p>css</p></div>
    <div className="indivIcon wow fadeInUp" data-wow-delay="0.2s"><img className="wow fadeInUp" src={JS}
    alt="JS"/><p>javascript</p></div>
    <div className="indivIcon wow fadeInUp" data-wow-delay="0.25s"><img className="wow fadeInUp" src={REACT} alt="React, React Native"/><p>react / react native</p></div>
    <div className="indivIcon wow fadeInUp" data-wow-delay="0.3s"><img className="wow fadeInUp" src={VUE} alt="Vue"/><p>vue</p></div>
    <div className="indivIcon wow fadeInUp" data-wow-delay="0.35s"><img className="wow fadeInUp" src={EXP} alt="Express"/><p>express</p></div>
    <div className="indivIcon wow fadeInUp" data-wow-delay="0.4s"><img className="wow fadeInUp" src={FIREBASE} alt="Firebase"/><p>firebase</p></div>
    <div className="indivIcon wow fadeInUp" data-wow-delay="0.45s"><img className="wow fadeInUp" src={SOCKET} alt="Socket.io"/><p>socket.io</p></div>
    <div className="indivIcon wow fadeInUp" data-wow-delay="0.5s"><img className="wow fadeInUp" src={ADOBE}alt="Adobe Creative Suite"/><p>adobe creative suite</p></div>
  </div>
  )
}
