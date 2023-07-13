import React from 'react'

function Day({ days }) {

  // convert number to string the add 0 and slice off in order to have 01, 02 etc
  days = days.toString()
  days = ('0' + days).slice(-2)
  
  return (
    <>
        <div id="dayContainer" className='w-[70px] h-[71px] lg:w-[148px] lg:h-[150px]'>
          <div id="daySvgContainer" className='flex justify-center items-center mb-[9px] bg-[url("/src/images/flip-sm.svg")] lg:bg-[url("/src/images/flip-lg.svg")] lg:h-full lg:mb-4'>
            <p id='dayText'  className='animate__animated animate__flipInX text-softRed font-["Red_Hat_Text"] text-4xl leading-[71px] font-bold tracking-[-1.08px] text-center lg:text-[80px] lg:tracking-[-2.4px]'>{days}</p>
          </div>
          <div id="dayCopyContainer" className='text-grayishBlue font-["Red_Hat_Text"] text-[7px] font-bold tracking-[2.959px] text-center lg:text-sm lg:tracking-[5.919px]'>
            <p>DAYS</p>
          </div>
        </div>
    </>
  )
}

export default Day