# Frontend Mentor - Launch countdown timer solution

This is my solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)
- **Bonus**: When a number changes, make the card flip from the middle

### Screenshot

#### Mobile

![](/src/images/mb.png)

#### Desktop

![](/src/images/dt.png)


### Links

- Solution URL: [solution](https://github.com/roodhouse/frontend-mentor-launch-countdown)
- Live Site URL: [live site](https://countdown.rugh.us)

## My process

### Built with

- HTML5, CSS
- Mobile-first workflow
- React
- Tailwind

### What I learned

This project was a nice challenge. It allowed me to continue to get used to passing props in React, troubleshoot some tricky designs and practice some logic javascript. My code was quite complicated in several places at first. At some point I realized my logic was creating bugs and from there was able to make a much more practical countdown function. 

```js
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
```

At first I was trying to recreate the card design pixel for pixel. It was a chore. I just so happened to right click the card group in figma and saw an option to copy the group as an svg.

![](/src/images/figma.png)

This is an excellent feature from figma. I took the svg that was generated and manipulated it until I was statisfied. I ended up using it as the background image for the number.

```js
<div id="daySvgContainer" className='flex justify-center items-center mb-[9px] bg-[url("/src/images/flip-sm.svg")] lg:bg-[url("/src/images/flip-lg.svg")] lg:h-full lg:mb-4'>
```

## Author

- Website - [my site](https://rugh.us)
- Frontend Mentor - [@roodhouse](https://www.frontendmentor.io/profile/roodhouse)
- LinkedIn - [John Rugh](https://www.linkedin.com/in/john-m-rugh/)