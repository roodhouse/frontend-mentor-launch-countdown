import React from 'react'

function Min({ minutes }) {

  // convert number to string the add 0 and slice off in order to have 01, 02 etc
  minutes = minutes.toString()
  minutes = ('0' + minutes).slice(-2)

  return (
    <>
        <div id="minContainer" className='w-[70px] h-[71px] lg:w-[148px] lg:h-[150px]'>
          <div id="minSvgContainer" className='flex justify-center items-center mb-[9px] bg-[url("/src/images/flip-sm.svg")] lg:bg-[url("/src/images/flip-lg.svg")] lg:h-full lg:mb-4'>
            <p id='minText'  className='animate__animated animate__flipInX text-softRed font-["Red_Hat_Text"] text-4xl leading-[71px] font-bold tracking-[-1.08px] text-center lg:text-[80px] lg:tracking-[-2.4px]'>{minutes}</p>
          </div>
          <div id="minCopyContainer" className='text-grayishBlue font-["Red_Hat_Text"] text-[7px] font-bold tracking-[2.959px] text-center lg:text-sm lg:tracking-[5.919px]'>
            <p>MINUTES</p>
          </div>
        </div>
    </>
  )
}

export default Min