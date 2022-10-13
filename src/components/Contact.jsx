import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import toastr from 'toastr'
import img from '../assets/wave-bg.svg' 
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import Loader  from './widgets/Loader'

toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: "toast-top-right",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  closeDuration: "300",
  hideDuration: "1000",
  timeOut: "1500",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut"
};


const Contact = () => {

  const formRef = useRef();
  const [isLoading, setLoading] = useState(false)

  const handleClickSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID,
      formRef.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
          toastr.success("Message Submitted!");
          setLoading(false)
        }, (error) => {
          console.log(error.text)
          setLoading(false)
        });
    e.target.reset();
} 

  return (
    <>
      <img src={img} alt="" className='w-full'/>
      <div className='h-full text-center bg-[#b6d5fc]' id='contact'>
      <h1 className='tablet:text-4xl sMobile:text-2xl font-bold '>{`<ContactMe />`}</h1>
        <div className='flex justify-center items-center tablet:mx-20 sMobile:mx-5 mt-10'>
          <form ref={formRef} onSubmit={handleClickSubmit} className='grid gap-5 laptop:w-[60%] sMobile:w-full tablet:p-10 sMobile:p-4'>
              <input required autoCapitalize='on' type="name" placeholder='Name' name='name' className='w-full px-3 py-2 rounded-md' />
              <input required type="email" placeholder='Email Address' name='email' className='w-full px-3 py-2 rounded-md'/>
              <input required type="text" autoCapitalize='on' autoComplete='off' placeholder='Subject' name='subject' className='w-full px-3 py-2 rounded-md'/>
              <textarea required type="text" autoCapitalize='on' rows={5} cols={200} placeholder='Your Message' name='message' className='w-full p-3 resize-none rounded-md' />
            <div className='flex tablet:flex-row sMobile:flex-col gap-3 justify-between items-center'>
              {isLoading ? <Loader /> :
                <button className='bg-[#3f3d56] text-[#eeeffd] laptop:w-40 tablet:w-32 sMobile:w-18 text-sm py-2 px-3 rounded-md hover:bg-[#5b5879]'>
                  Send Message
                </button>
              }
              <ul className='flex items-center justify-left gap-5 text-[27px] text-[#3f3d56] '>
                <li className='cursor-pointer duration-200 ease-in hover:text-[#eeeffd] hover:-translate-y-1'>
                  <a href="https://github.com/dell-eight" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
                </li>
                <li className='cursor-pointer duration-200 ease-in hover:text-[#eeeffd] hover:-translate-y-1'>
                  <a href="https://linkedin.com/in/wendell-villareal/ " target='_blank' rel="noopener noreferrer"><BsLinkedin /></a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </>
    
  )
}

export default Contact