import React from 'react'
import './arrow.css';

const ArrowRD = () => {
  return (
    <div className="arrow-rd-container">
      <div className="arrow-rd-wrapper u-h-wrapper">
        <div className="arrow-rd">
          <span className="arrow-rd-inner">
            <span className="arrow-rd__arrow"></span>
          </span>
        </div>
      </div>
    </div>
  )
}

export const ArrowLD = () => {
  return (
    <div className="arrow-ld-container">
      <div className="arrow-ld-wrapper u-h-wrapper">
        <div className="arrow-ld">
          <span className="arrow-ld-inner">
            <span className="arrow-ld__arrow"></span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ArrowRD
