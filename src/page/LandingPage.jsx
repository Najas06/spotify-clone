import React from 'react'
import Aside from '../components/Aside'
import Main from '../components/Main'

const LandingPage = () => {
  return (
    <>
    <div className='flex mx-5 my-5 gap-3'>
        <div className='w-1/4  '>
            <Aside/>
        </div>
        <div className='w-3/4'>
          <Main/>
        </div>
    </div>
    </>
  )
}

export default LandingPage