import React from 'react'
import loader from '../../assets/ring_loader.svg'

const Loader = () => {
  return (
    <div className='px-3 py-2 bg-[#3f3d56] gap-1 text-[#eeeffd] rounded-md text-sm flex justify-center items-center'>
        <img src={loader} alt="" className='w-5 h-5'/> Processing...     
    </div>
  )
}

export default Loader