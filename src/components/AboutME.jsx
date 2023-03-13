import Spline from '@splinetool/react-spline'
import React from 'react'
import { Link } from 'react-router-dom'

const AboutME = () => {
  return (
    <>
   

    <div className='absolute  top-32 left-[600px] h-[740px] w-[780px] '>
    <Spline scene="https://prod.spline.design/3bNyHv2xZGnqta03/scene.splinecode" />
    <Link to="/">
    <h3 className='text-[#FF6DFF] text-6xl ml-52'>Go to Home</h3>
    </Link>
    </div>
    
    </>
  )
}

export default AboutME