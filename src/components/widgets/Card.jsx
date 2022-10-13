import React from 'react'

const Card2 = ({ img, name, description, techs, ghUrl }) => {
    
    const githubUrl = 'https://github.com/dell-eight'
    const websiteUrl = 'https://dell-eight.github.io'

    return (
        <div className='flex items-center justify-center tablet:mt-20 sMobile:mt-10 laptop:mx-20 sMobile:mx-5'>
            <a href={websiteUrl + ghUrl} target="_blank" rel="noopener noreferrer"
                className='w-[60%] z-10 hover:z-50 laptop:block sMobile:hidden '>
                <img src={img} alt="" className=' drop-shadow-lg ' />
            </a>
            <div className='p-5 card laptop:-ml-96 sMobile:ml-0 z-20' >
                <p className='text-lg font-bold'>{name}</p>
                <p className='mt-3 laptop:whitespace-pre sMobile:whitespace-normal'>{ description}</p>
                <div className='flex mt-3'>
                    {techs.map((tech, idx) => {
                        return <h1 key={idx} className='mobile:text-sm sMobile:text-xs mr-5 badge text-[#5e90ce]'>{tech}</h1>
                    })}
                </div>
                <div className='flex items-start justify-start mt-5 text-sm '>
                    <h1 className='underline underline-offset-2 cursor-pointer hover:text-secondaryColor mr-10'>
                        <a href={websiteUrl+ghUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </h1>
                    <h1 className='underline underline-offset-2 cursor-pointer hover:text-secondaryColor'>
                        <a href={githubUrl+ghUrl} target="_blank" rel="noopener noreferrer">{`<Code />`}</a>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Card2