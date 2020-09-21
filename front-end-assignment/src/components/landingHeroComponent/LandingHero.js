import React from 'react'
import './LandingHero.css'

const LandingHero = () => {
  return (
    <section className="landing-hero">
      <div className="landing-hero-inner">
        <div className="landing-hero-content-wrapper">
          <h1 className="landing-hero__title">
            <span className="landing-hero-content-control u-h-wrapper"> 
              <span className="landing-hero-content-control-inner">
              Master the front-
                <span className="landing-hero-character-u">end </span> 
              w
                <span className="landing-hero-character-u">i</span>
              th fine
              <span className="landing-hero-character-u">ss</span>
              e
              </span>
            </span>
          <span className="landing-hero__line-one"></span>
          <span className="landing-hero__line-two"></span>
          <span className="landing-hero__line-three"></span>
          </h1>
          <h2 className="landing-hero__sub-title landing-hero-content-control u-h-wrapper">
            <span className="landing-hero-content-control-inner">
            The assignment is supposed to be executed as simple as possible. Code the template in HTML/CSS and try to avoid 3. party frameworks as much as possible. Creating the page with React components will grant extra megamate bonus points.
            </span>
          </h2>
            
        </div>
      </div>
    </section>
  )
}

export default LandingHero
