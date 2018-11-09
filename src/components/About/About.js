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
      <p>I grew up in the Midwest, lived overseas in Spain, and flew around the world on 13 one way flights. All before starting a successful elopement photography business out of our company van (Moonbeam). I studied Human Factors Psychology (intuitive design, group productivity, and efficient human systems), which led me to web development. Since then, I've overhauled my life to focus exclusively on becoming the best developer I can. I have high hopes of combining these interests into a fulfilling career. Lastly, just for fun, my core principals + greatest influences: </p>
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
