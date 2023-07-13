import React, { useState, useEffect } from 'react'
import './App.css';
import Body from './components/Body'
import Countdown from './components/Countdown'
import Social from './components/Social'
import 'animate.css';

// add animation when the digits change


function App() {
  const [seconds, setSeconds] = useState('00')
  const [minutes, setMinutes] = useState('00')
  const [hours, setHours] = useState('00')
  const [days, setDays] = useState('00')


  useEffect(() => {
    // setSeconds(Date.now())
    const today = new Date(Date.now())
    setSeconds(today.getSeconds())
    setMinutes(today.getMinutes())
    setHours(today.getHours())
    setDays(14)
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
       if( theSeconds < 0 ) {
        console.log('single')
        theSeconds = 59
        theMinutes--
        document.getElementById('minText').classList.add('animate__flipInX')
        if ( theMinutes < 0 ) {
          console.log('double')
          theMinutes = 59
          theHours--
          document.getElementById('hourText').classList.add('animate__flipInX')
          if ( theHours < 0) {
            console.log('triple')
            theHours = 23
            theDays--
            document.getElementById('dayText').classList.add('animate__flipInX')
            if ( theDays < 0 ) {
              console.log('homerun')
              theDays = 0
              theHours = 0
              theMinutes = 0
              theSeconds = 0
              clearInterval(theSecondsCount)
            }
          }
          setDays(theDays)
          setMinutes(theMinutes)
          setHours(theHours)
        }
        
        setMinutes(theMinutes)
        setSeconds(theSeconds)
      }  else {
        document.getElementById('minText').classList.remove('animate__flipInX')
        document.getElementById('hourText').classList.remove('animate__flipInX')
        document.getElementById('dayText').classList.remove('animate__flipInX')
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
        <div id='bodyWrapper' className='mb-[54px] px-6 lg:mb-[104px]'>
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
