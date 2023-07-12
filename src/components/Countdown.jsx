import React from 'react'
// utilize svg on both sides, remove one layer of background...
function Countdown() {
  return (
    <>
      <div id="countdownContainer">
        <div id="dayContainer" className='w-[70px] h-[71px] bg-black rounded-[4px_4px_4px_4px] '>
          <div id="dayTop" className='w-[70px] h-[33px] rounded-[4px_4px_4px_4px] bg-darkDesaturatedBlue opacity-[0.85]'></div>
          <div id="ovalContainer">
            <div id="ovalOne" className=''><svg xmlns="http://www.w3.org/2000/svg" width="3" height="6" viewBox="0 0 3 6" fill="none">
  <circle cy="3" r="3" fill="#191A23"/>
</svg></div>
            <div id="bar"></div>
            <div id="ovalTwo"></div>
          </div>
          <div id="dayBottom" className='w-[70px] h-[33px] rounded-[4px_4px_4px_4px] bg-darkDesaturatedBlue opacity-[0.85]'></div>
        </div>
      </div>
    </>
  )
}

export default Countdown