import React from 'react'
import Facebook from '../images/icon-facebook.svg'
import Pinterest from '../images/icon-pinterest.svg'
import Instagram from '../images/icon-instagram.svg'

function Social() {
  return (
    <>
      <div id="socialContainer" className='bg-[url("/src/images/bg-hills.svg")] h-[168px] flex pl-[119px] pt-[96px] pb-12'>
        <div id="facebookIcon" className='mr-[34px]'>
          <img src={Facebook} alt="Facebook" />
        </div>
        <div id="pinterestIcon" className='mr-[34px]'>
          <img src={Pinterest} alt="Pinterest" />
        </div>
        <div id="instagramIcon">
          <img src={Instagram} alt="Instagram" className=''/>
        </div>
      </div>
    </>
  )
}

export default Social