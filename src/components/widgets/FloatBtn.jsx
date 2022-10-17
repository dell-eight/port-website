import React, {useState, useEffect} from 'react'
import { Link } from 'react-scroll'
import { FiChevronDown, FiChevronUp  } from 'react-icons/fi'

 
const FloatBtnScrollDown = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
 

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 90) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false)
      }
      
    })
  }, [showScrollTop]);


  return (
    <>
      {showScrollTop ? 
        <Link className='fixed right-10 bottom-10 tablet:block sMobile:hidden' to='hero' spy={true} smooth={true} >
          <button className='flex flex-col justify-center items-center duration-200 ease-in
            bg-slate-500 hover:bg-slate-400 hover:-translate-y-2 rounded-full p-2'>
            <FiChevronUp className='text-lg w-8 h-8 flex items-center justify-center p-1 rounded-full ' />
          </button>
        </Link> :
        <Link className='laptop:block sMobile:hidden' to='projects' spy={true} smooth={true} offset={-120}>
          <button className='absolute right-10 -ml-3 flex flex-col justify-center items-center bottom-5 
            motion-safe:animate-bounce opacity-40'>
            <span className='text-sm '>Scroll</span>
            <FiChevronDown className='text-lg  w-8 h-8 flex items-center justify-center p-1 rounded-full ' />
          </button>
        </Link>
      }
    </>
  )
}

export default FloatBtnScrollDown