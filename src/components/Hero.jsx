import React from 'react'
import { Link } from 'react-scroll'
import Typewriter from 'typewriter-effect'
import { resume_url } from './utils/constants'
import { BsArrowRight, BsArrowDown } from 'react-icons/bs'


const Hero = () => {
  return (
    <div className='h-screen w-full -mt-20 flex flex-col items-center justify-center 
      gap-5 laptop:text-5xl tablet:text-4xl mobile:text-3xl sMobile:text-2xl' id='hero'>
      <h1 className='font-extrabold flex'>Hi, I'm Wendell<span className='tablet:flex tablet:ml-2 sMobile:hidden'>Villareal</span>.</h1>
      <div className='font-extrabold flex tablet:flex-row sMobile:flex-col justify-center items-center  '>
       <span>I develop creative</span> 
        <span className='flex flex-col justify-center items-center tablet:ml-2 mobile:ml-0 ' >
          <Typewriter
            options={{
              autoStart: true,
              loop: true
            }}
            onInit={(typewritter) => {
            
              typewritter
                .typeString('websites.')
                .pauseFor(1000)
                .deleteAll()
                .typeString('designs.')
                .pauseFor(1000)
                .deleteAll()
                .typeString('ideas.')
                .pauseFor(1000)
                .deleteAll()
                .start()
            }}
          />
        </span>
      </div>
      <h1 className='font-extrabold laptop:text-[2.6rem] tablet:text-4xl mobile:text-2xl sMobile:text-xl'>{`<ImAWebDeveloper />`}</h1>

      <a href={resume_url} target="_blank" rel="noopener noreferrer">
        <div className='mt-3 flex items-center justify-center cursor-pointer p-2 relative resume-container 
          tablet:ml-0 mobile:ml-5 ' >
          <BsArrowRight className='mr-2 text-lg' />
          <div className='-left-4 mobile:top-[6px] sMobile:top-[4px] absolute duration-300 ease-in inline-block 
            w-8 h-8 border border-secondaryColor rounded-full hover:w-[135%] circle ' ></div>
          <span className="ease-in duration-300 mobile:text-lg sMobile:text-base" >Resume</span>
        </div>
      </a>

      <Link className='laptop:block sMobile:hidden' to='projects' spy={true} smooth={true} offset={-60}>
        <div className='absolute -ml-3 flex flex-col justify-center items-center bottom-10  cursor-pointer 
          motion-safe:animate-bounce opacity-40 '>
          <BsArrowDown className='text-lg  w-8 h-8 flex items-center justify-center p-1 rounded-full ' />
          <span className='text-sm '>Scroll</span>
        </div>
      </Link>
    </div>
  )
}

export default Hero