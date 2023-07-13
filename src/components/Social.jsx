import React from 'react'

function Social() {
  return (
    <>
      <div id="socialContainer" className='bg-[url("/src/images/bg-hills.svg")] h-[168px] flex justify-center pl-0 pt-[96px] pb-12'>
        <div id="moreContain" className='flex'>
          <div id="facebookIcon" className='w-6 h-6 mr-[34px] cursor-pointer bg-[url("/src/images/icon-facebook.svg")] hover:bg-[url("/src/images/icon-facebook-hover.svg")]'>
          </div>
          <div id="pinterestIcon" className='w-6 h-6 mr-[34px] cursor-pointer bg-[url("/src/images/icon-pinterest.svg")] hover:bg-[url("/src/images/icon-pinterest-hover.svg")]'>  
          </div>
          <div id="instagramIcon" className='w-6 h-6 cursor-pointer bg-[url("/src/images/icon-instagram.svg")] hover:bg-[url("/src/images/icon-instagram-hover.svg")]'>  
          </div>
        </div>
      </div>
    </>
  )
}

export default Social