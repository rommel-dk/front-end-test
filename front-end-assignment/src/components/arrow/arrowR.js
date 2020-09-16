import React from 'react'

const ArrowR = ({hover}) => {
  return (
    <div className="arrow-r-container">
      <div className="arrow-r-wrapper ">
        <div className={`arrow-r ${hover}`}></div>
        <span className="arrow-r__arrow"></span>
      </div>
    </div>
  )
}

export default ArrowR
