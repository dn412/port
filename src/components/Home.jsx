import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#154c79]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-400'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Daneiry Nunez</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
            <p className='text-[#ccd6f6] py-4 max-w-[700px]'>I'm a software engineer who recently completed a coding bootcamp.  
                I love how coding continues to train my mind, and it's a never-ending process of lifelong learning.</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-400 hover:border-pink-600'>View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3 '/>
                    </span>
                    </button>
                    
                </div>
        </div>

    </div>
  )
}

export default Home