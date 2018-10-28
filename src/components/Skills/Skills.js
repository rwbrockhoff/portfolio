import React from 'react'
import WOW from 'wowjs'

import HTML from '../../assets/icons/html.png'
import CSS from '../../assets/icons/css.png'
import JS from '../../assets/icons/js.jpg'
import REACT from '../../assets/icons/react.png'
import VUE from '../../assets/icons/vue.png'
import NODE from '../../assets/icons/node.png'
import SOCKET from '../../assets/icons/socket.svg'
import ADOBE from '../../assets/icons/adobe.png'
import POSTGRES from '../../assets/icons/postgres.png'
import JEST from '../../assets/icons/jest.png'

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
    <div className="indivIcon wow fadeInUp" data-wow-delay="0.35s"><img className="wow fadeInUp" src={NODE} alt="Node"/><p>node</p></div>
    <div className="indivIcon wow fadeInUp" data-wow-delay="0.5s"><img className="wow fadeInUp" src={POSTGRES}alt="Postgres"/><p>postgres</p></div>
    <div className="indivIcon wow fadeInUp" data-wow-delay="0.5s"><img className="wow fadeInUp" src={JEST}alt="Jest"/><p>jest</p></div>
    <div className="indivIcon wow fadeInUp" data-wow-delay="0.45s"><img className="wow fadeInUp" src={SOCKET} alt="Socket.io"/><p>socket.io</p></div>
    <div className="indivIcon wow fadeInUp" data-wow-delay="0.5s"><img className="wow fadeInUp" src={ADOBE}alt="Adobe Creative Suite"/><p>adobe creative suite</p></div>
  </div>
  )
}
