import React, { useState } from 'react'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { Link } from 'react-scroll'
import ToggleMenu from './ToggleMenu'


const Navbar = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);


  const updateToggleMenu = (val) => {
    setMenuOpen(val);
  }

  return (
    <div className='sticky top-0 laptop:px-32 mobile:px-8 sMobile:px-2 bg-backgroundGlass backdrop-blur py-2 z-50'>
      {isMenuOpen && <ToggleMenu updateToggleMenu={ updateToggleMenu } />}
      <nav className="flex items-center justify-between">
        <h1 className="font-extrabold tracking-tightest tablet:text-4xl sMobile:text-3xl cursor-pointer">
          <Link to='hero' spy={true} smooth={true}>WV</Link>
        </h1>
        <HiOutlineMenuAlt1 className='tablet:hidden mobile:block text-3xl cursor-pointer' onClick={() => setMenuOpen((prev) => !prev)} />
        <ul className='gap-10 laptop:text-sm tablet:text-xs tablet:flex mobile:hidden hidden' >
          <li className='hover:text-secondaryColor cursor-pointer
            border-b border-secondaryColor '>
            <Link to='projects' spy={true} offset={-120} smooth={true}>{`<Projects />`}</Link>
          </li>
          <li className='hover:text-secondaryColor cursor-pointer
            border-b border-secondaryColor '>
            <Link to='about' spy={true} offset={-180} smooth={true}>{`<About />`}</Link>
          </li>
          <li className='hover:text-secondaryColor cursor-pointer
            border-b border-secondaryColor '>
            <Link to='contact' spy={true} offset={-100}  smooth={true}>{`<Contact />`}</Link>
          </li>
        </ul>
      </nav>
    </div>
    
  )
}

export default Navbar