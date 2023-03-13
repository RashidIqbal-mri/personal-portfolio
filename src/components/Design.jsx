import React from 'react'
import  Spline  from "@splinetool/react-spline";

const Design = () => {
  return (
    <>
    <div className="relative h-[592px]" id="home">
    <Spline scene="https://prod.spline.design/X7Wz4X53rm0s68ux/scene.splinecode" />
          
          
          <div className="absolute bottom-2 w-full flex justify-center items-center">
            <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl ">
              <p className="text-white">Press and drag to orbit</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Design