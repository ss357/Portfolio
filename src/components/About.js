import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-cyan-400'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Suman Atta, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>Passionate React enthusiast with a strong desire to contribute to
dynamic software projects. Currently expanding expertise into full-
stack development with Next.js. Demonstrated proficiency through
diverse project portfolio. Seeking an opportunity to apply and
enhance my skills as a Next.js apprentice in a collaborative team
environment.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
