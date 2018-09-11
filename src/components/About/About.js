import React from 'react'
import WOW from 'wowjs'

import profile from '../../assets/profile.png'

export default () => {
  return (
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
  )
}
