import React from 'react'
import {banner} from '../data/data'
import video from '../data/6.mp4'

const Banner = () => {
  return (
    <div className=' max-w-[1600px] mx-auto p-5'>
        <div className='max-h-[600px]  relative'>

            <div className='absolute w-full h-full  flex flex-col justify-center '>
                <h1 className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mx-2 md:mx-5 lg:mx-8'> Want it</h1>
                <h1 className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mx-2 md:mx-5 lg:mx-8'> Get it</h1>
            </div>
            {/* <img alt='*' src={banner} className='w-full max-h-[600px] object-cover rounded-xl'></img> */}
            <video src={video} className='w-full max-h-[600px] object-cover rounded-xl' muted autoPlay loop ></video>
        </div>

        

    </div>

        
  )
}

export default Banner