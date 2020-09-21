import React from 'react'

export const ArrowRSM = ({hover}) => {
  return (
      <span className="arrow-sm-r-wrapper">
        <span className={`arrow-sm-r ${hover}`}></span>
        <span className="arrow-sm-r__arrow"></span>
      </span>
  )
}

export const ArrowRLG = () => {
  return (
      <span className="arrow-lg-r-wrapper">
        <span className={`arrow-lg-r`}></span>
        <span className="arrow-lg-r__arrow"></span>
      </span>
  )
}

 
