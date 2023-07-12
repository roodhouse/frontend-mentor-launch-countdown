import React from 'react'
import Day from './countdown/Day'
import Hour from './countdown/Hour'
import Min from './countdown/Min'
import Second from './countdown/Second'
 
function Countdown({ seconds, minutes, hours, days }) {
  return (
    <>
      <div id="countdownContainer" className='flex justify-between'>
        <div id="dayWrapper">
          <Day days={days} />
        </div>
        <div id="hourWrapper">
          <Hour hours={hours} />
        </div>
        <div id="minWrapper">
          <Min minutes={minutes} />
        </div>
        <div id="secondsWrapper">
          <Second seconds={seconds}/>
        </div>
      </div>
    </>
  )
}

export default Countdown


