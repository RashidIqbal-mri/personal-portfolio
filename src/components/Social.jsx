import Spline from '@splinetool/react-spline';
import React from 'react'
import { Link } from 'react-router-dom';

const Social = () => {
    return (
        <>
        <div className="bg-cover bg-center w-screen h-screen" style={{ backgroundImage: "url('images/social.jpg')" }}>
        <Spline scene="https://prod.spline.design/p6awcWUOcVCwR86a/scene.splinecode" className=''/>
        <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl absolute bottom-20 left-[725px] ">
              <p className="text-white hover:text-teal-300 cursor-pointer">Press and drag to orbit</p>
              
            </div>

            <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl absolute bottom-20 px-12 left-[1005px] hover:text-teal ">
             
              <Link to="/">
        
        <div>
            <h1 className="text-white hover:text-teal-300 cursor-pointer">Back to Home</h1>
        </div>
        </Link>
            </div>
            </div>
        
        </>

        
      );
}

export default Social

