import React from 'react'
import {ArrowRLG} from '../arrow/arrowR';
import './secondHero.css';

const SecondHero = () => {
  return (
    <section className="second-hero">
      <div className="second-hero-inner">
        <div className="second-hero-content-wrapper">
          <h2 className="second-hero__title">
            <span className="second-hero-content-control u-h-wrapper-second"> 
                <span className="second-hero-character-u">Your </span> 
                <span className="second-hero-character-u">ch</span>
                ance
            </span>
          <span className="second-hero__line-one"></span>
          <span className="second-hero__line-two"></span>
          <span className="second-hero__line-three"></span>
          </h2>
          <h3 className="second-hero__cta second-hero-content-control ">
             Get on the skill<br/> train now  
            <ArrowRLG />
          </h3>
          <div className="second-hero-content-control">
            <p className="second-hero__text ">The assignment must be delivered as a pull request to the assignment repository and we appreciate running commits so we can see how you go from our small layout to a final awesome product.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecondHero