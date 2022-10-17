import React from 'react'
import Typewriter from 'typewriter-effect'
import pdfResume from '../assets/resumeVillareal.pdf'
import { Link } from 'react-scroll'
import { BsChatRightText, BsDownload } from 'react-icons/bs'


const Hero = () => {

  return (
    <div className='h-screen w-full flex flex-col items-start justify-center bg-[#b6d5fc]
      gap-5 laptop:text-5xl tablet:text-4xl mobile:text-3xl sMobile:text-2xl laptop:pl-32 tablet:pl-10 sMobile:pl-5  -mt-24 ' id='hero'>
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
      
      <div className='flex tablet:flex-row sMobile:flex-col tablet:items-center sMobile:items-start justify-center mt-5'>
        <a href={pdfResume} download='WendellVillarealResume.pdf'>
          <button className='flex items-center justify-center p-2 relative hire-me-container hover:text-backgroundColor' >
            <BsDownload className='mobile:mx-3 sMobile:mr-2 mobile:text-xl sMobile:text-lg z-20 ' />
            <div className='mobile:left-1 sMobile:left-0 top-0 absolute duration-300 ease-in inline-block 
              w-0 laptop:h-12 sMobile:h-10 border-2 border-blue-400 rounded circle z-10' ></div>
            <span className="ease-in duration-300 laptop:text-xl sMobile:text-base z-20 " >Download Resume</span>
          </button>
        </a>
        

        <Link to='contact' spy={true} offset={-100} smooth={true}  >
          <button className='flex items-center justify-center p-2 relative hire-me-container hover:text-backgroundColor 
          tablet:ml-20 sMobile:ml-0 tablet:mt-0 sMobile:mt-5' >
            <BsChatRightText className='mobile:mx-3 sMobile:mr-2 mobile:text-xl sMobile:text-lg z-20 ' />
            <div className='mobile:left-1 sMobile:left-0 top-0 absolute duration-300 ease-in inline-block 
              w-0 laptop:h-12 sMobile:h-10 border-2 border-blue-400 rounded circle z-10 ' ></div>
            <span className="ease-in duration-300 laptop:text-xl sMobile:text-base z-20 " >Let's talk?</span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Hero