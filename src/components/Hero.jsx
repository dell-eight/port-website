import React from 'react'
import { Link } from 'react-scroll'
import {resume_url} from './utils/constants'
import Typewriter from 'typewriter-effect'
import { BsArrowRight, BsArrowDown } from 'react-icons/bs'


const Hero = () => {


  return (
    <div className='h-screen w-full -mt-24 flex flex-col items-start justify-center 
      gap-5 laptop:text-5xl tablet:text-4xl mobile:text-3xl sMobile:text-2xl laptop:pl-32 tablet:pl-10 sMobile:pl-5 bg-[#b6d5fc]' id='hero'>
      <h1 className='font-extrabold flex mt-10'>Hi, I'm Wendell<span className='ml-2 tablet:block sMobile:hidden'>Villareal</span>.</h1>
      <div className='font-extrabold flex tablet:flex-row sMobile:flex-col justify-center items-start  '>
        <span>I develop creative</span> 
        <span className='flex flex-col justify-center items-start tablet:ml-2 mobile:ml-0 ' >
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
      <a href={resume_url} target='_blank' rel='noopener noreferrer'>
        <button className='mt-3 flex items-center justify-center p-2 relative resume-container ml-5' >
          <BsArrowRight className='mr-2 mobile:text-xl sMobile:text-lg ' />
          <div className='-left-4 mobile:top-[6px] sMobile:top-[4px] absolute duration-300 ease-in inline-block 
            w-8 h-8 mobile:border-2 sMobile:border border-blue-400 rounded-full circle' ></div>
          <span className="ease-in duration-300 mobile:text-xl sMobile:text-base" >Resume</span>
        </button>
      </a>

      <Link className='laptop:block sMobile:hidden' to='projects' spy={true} smooth={true} offset={-60}>
        <div className='absolute right-10 -ml-3 flex flex-col justify-center items-center bottom-5 cursor-pointer 
          motion-safe:animate-bounce opacity-40'>
          <BsArrowDown className='text-lg  w-8 h-8 flex items-center justify-center p-1 rounded-full ' />
          <span className='text-sm '>Scroll</span>
        </div>
      </Link>
    </div>
  )
}

export default Hero