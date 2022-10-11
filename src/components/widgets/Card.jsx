import React from 'react'

const Card = ({ img ,name, description, techs }) => {
    return (
        <div className='card w-[16rem] h-full items-center justify-between overflow-hidden 
            duration-300 ease-in hover:-translate-y-2'>
            <img src={img} alt="" className='w-full mb-3 cursor-pointer'/>
            <div className='text-sm '>
                <h1>{name}</h1>
                {/* <h1 className='mt-2'>{description}</h1> */}
                <div className='flex items-center justify-evenly mt-3'>
                    {techs.map((tech, idx) => {
                        return <h1 key={idx} className='text-xs text-[#5e90ce]'>{tech}</h1>
                    })}
                </div>
            </div>
            <div className='flex items-center justify-evenly w-full my-5 text-sm '>
                <h1 className='underline underline-offset-2 cursor-pointer hover:text-secondaryColor'>Live Demo</h1>
                <h1 className='underline underline-offset-2 cursor-pointer hover:text-secondaryColor'>{`<Code />`}</h1>
            </div>
        </div>
    )
}

export default Card