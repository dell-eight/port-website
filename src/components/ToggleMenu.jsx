import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'


const ToggleMenu = ({updateToggleMenu}) => {

    const handleToggleMenu = () => {
        updateToggleMenu((prev) => !prev);
    }

    return (
        <div className='absolute right-0 w-full h-screen rounded-md bg-backgroundColor z-[1000]'>
            <AiOutlineClose onClick={handleToggleMenu} className='text-3xl top-3 right-3 absolute cursor-pointer' />
            <ul className='text-base pt-40 gap-20 flex flex-col items-center justify-center w-full '>
                <li className='cursor-pointer hover:text-secondaryColor border-b border-secondaryColor '>
                    <Link to='hero' spy={true} offset={-100} smooth={true} onClick={handleToggleMenu} >{`<Home />`}</Link>
                </li>
                <li className='cursor-pointer hover:text-secondaryColor border-b border-secondaryColor '>
                    <Link to='projects' spy={true} offset={-100} smooth={true} onClick={handleToggleMenu} >{`<Projects />`}</Link>
                </li>
                <li className='cursor-pointer hover:text-secondaryColor border-b border-secondaryColor '>
                    <Link to='about' spy={true} offset={-100} smooth={true} onClick={handleToggleMenu} >{`<About />`}</Link>
                </li>
                <li className='cursor-pointer hover:text-secondaryColor border-b border-secondaryColor '>
                    <Link to='contact' spy={true} offset={-100} smooth={true} onClick={handleToggleMenu} >{`<Contact />`}</Link>
                </li>
            </ul>
        </div>
        
  )
}

export default ToggleMenu