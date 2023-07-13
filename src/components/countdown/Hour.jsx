import React from 'react'

function Hour({ hours }) {
  
  // convert number to string the add 0 and slice off in order to have 01, 02 etc
  hours = hours.toString()
  hours = ('0' + hours).slice(-2)

  return (

    <>
        <div id="hourContainer" className='w-[70px] h-[71px]'>
          <div id="hourSvgContainer" className='mb-[9px]'>
            <svg id="hourSvg" className='' width="70" height="71" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_0_79)">
                <rect width="70" height="71" rx="8" fill="#191A23"/>
                <rect width="70" height="66.2667" rx="4" fill="#343650"/>
                <text id='hourText' x='17%' y='65%' className='animate__animated animate__flipInX fill-softRed font-["Red_Hat_Text"] text-4xl leading-[71px] font-bold tracking-[-1.08px]'>{hours}</text>
                <path opacity="0.150646" d="M0 33H70V4C70 1.79086 68.2091 0 66 0H4C1.79086 0 0 1.79086 0 4V33Z" fill="black"/>
                <rect opacity="0.253046" y="32.7633" width="70" height="0.473333" fill="black"/>
                <circle cy="33" r="3" fill="#191A23"/>
                <circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 73 30)" fill="#191A23"/>
              </g>
              <defs>
                <clipPath id="clip0_0_79">
                <rect width="70" height="71" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div id="hourCopyContainer" className='text-grayishBlue font-["Red_Hat_Text"] text-[7px] font-bold tracking-[2.959px] text-center'>
            <p>HOURS</p>
          </div>
        </div>
    </>
  )
}

export default Hour