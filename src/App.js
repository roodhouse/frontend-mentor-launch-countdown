import React, { useState, useEffect } from 'react'
import './App.css';
import Body from './components/Body'
import Countdown from './components/Countdown'
import Social from './components/Social'

// add animation when the digits change
// fix the padding around the numbers so they all fit the same


function App() {
  const [seconds, setSeconds] = useState('00')
  const [minutes, setMinutes] = useState('00')
  const [hours, setHours] = useState('00')
  const [days, setDays] = useState('00')


  useEffect(() => {
    addDays(Date.now(), 14)
  },[])

  // add 14 days to today on load
  function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    let theSeconds = result.getSeconds()
    let theMinutes = result.getMinutes()
    let theHours = result.getHours()
    let theDays = days

    let theSecondsCount = setInterval(function() {
      theSeconds = theSeconds -1
      if ( theSeconds < 0 && theMinutes < 0 && theHours < 0 && theDays < 0) {
        console.log('homerun')
        clearInterval(theSecondsCount)
      }
      else if ( theSeconds < 0 && theMinutes < 0 && theHours < 0 ) {
        console.log('triple')
        theSeconds = 59
        theMinutes = 59
        theHours = 23
        theDays = theDays - 1
        console.log(`the days after a triple: ${typeof theDays}`)
        setMinutes(theMinutes)
        setSeconds(theSeconds)
        setHours(theHours)
        setDays(theDays)
      }
      else if ( theSeconds < 0 && theMinutes < 0 ) {
        console.log('double')
        theSeconds = 59
        theMinutes = 59
        theHours = theHours -1
        setMinutes(theMinutes)
        setSeconds(theSeconds)
        setHours(theHours)
    }
      else if( theSeconds < 0 ) {
        console.log('single')
        theSeconds = 59
        theMinutes = theMinutes -1
        setMinutes(theMinutes)
        setSeconds(theSeconds)
      }  else {
        setSeconds(theSeconds)
        setMinutes(theMinutes)
        setHours(theHours)
        setDays(theDays)
      }
    }, 1000)
    
  }
  

  return (
    <div className="App">
     <div id='mainWrapper' className='bg-background h-screen'>
      <div id='mainContainer' className='bg-[url("/src/images/bg-stars.svg")] h-full pt-[142px] flex flex-col justify-between'>
        <div id='bodyWrapper' className='mb-[54px] px-6'>
          <Body />
        </div>
        <div id='countdownWrapper' className='mb-[163px] px-6'>
          <Countdown seconds={seconds} minutes={minutes} hours={hours} days={days}/>
        </div>
        <div id='socialWrapper'>
          <Social />
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
