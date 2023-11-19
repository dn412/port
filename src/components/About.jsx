import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#154c79] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-400'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi! I'm Daneiry Nunez, nice to meet you. Feel free to peak around.</p>
            </div>
            <div>
              <p>I had a previous career in healthcare specializing in surgical technology and surgical assisting. 
                Much like surgery, coding requires analytical thinking for problem-solving, and teamwork for solutions, and creates an impact on making a difference in someone's life. 
                Through coding and programming, I'm creating websites, apps, games, and software that can help people, entertain them, or simply make their lives easier. 
                Overall, I'm really excited to pivot to tech.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;