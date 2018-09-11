import React from 'react'
import WOW from 'wowjs'

import HTML from '../../assets/icons/html.png'
import CSS from '../../assets/icons/css.png'
import JS from '../../assets/icons/js.jpg'
import REACT from '../../assets/icons/react.png'
import VUE from '../../assets/icons/vue.png'
import NODE from '../../assets/icons/node.png'
import EXP from '../../assets/icons/express.png'
import ADOBE from '../../assets/icons/adobe.png'

export default () => {
  return (
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
  )
}
