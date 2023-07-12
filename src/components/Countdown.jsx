import React from 'react'
import Day from './countdown/Day'
import Hour from './countdown/Hour'
import Min from './countdown/Min'
import Second from './countdown/Second'
 
function Countdown() {
  return (
    <>
      <div id="countdownContainer" className='flex justify-between'>
        <div id="dayWrapper">
          <Day />
        </div>
        <div id="hourWrapper">
          <Hour />
        </div>
        <div id="minWrapper">
          <Min />
        </div>
        <div id="secondsWrapper">
          <Second />
        </div>
      </div>
    </>
  )
}

export default Countdown


