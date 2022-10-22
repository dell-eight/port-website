import React from 'react'

const About = () => {
  return (
    <div className='mt-48 mb-18 flex laptop:items-center sMobile:items-left justify-evenly
        laptop:flex-row sMobile:flex-col mobile:p-10 p-5 gap-10' id='about'>
        <div className='h-80 laptop:w-96 sMobile:h-60 w-full'>
          <h1 className='tablet:text-4xl sMobile:text-2xl font-bold'>{`<AboutMe />`}</h1>
          <p className='my-5 tablet:text-lg sMobile:text-base'>
            Hi, I'm <span className='font-bold'>Wendell</span>, a <span className='font-bold'>Web Developer</span>. I'm passionate about developing the highest quality websites.
          </p>
          <p className='tablet:text-lg sMobile:text-base'> I'm currently looking for an apportunity to show my potential.</p>
        </div>
        <div className=' h-80 laptop:w-96 sMobile:h-60 '>
          <h1 className='tablet:text-4xl sMobile:text-2xl font-bold '>{`<Technologies />`}</h1>
          <div className='flex gap-10'>
            <ul className=' tablet:text-lg sMobile:text-base gap-2 flex flex-col list-[disclosure-closed]  p-6 '>
              <li>HTML, CSS, JS</li>
              <li>ReactJs</li>
              <li>Firebase</li>
              <li>Git</li>
            </ul>
            <ul className='tablet:text-lg sMobile:text-base gap-2 flex flex-col list-[disclosure-closed] p-6' >
              <li>SCSS</li>
              <li>Tailwind</li>
              <li>Material UI</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>
      </div>
      
  )
}

export default About