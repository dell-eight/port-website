import React from 'react'
import Card from './widgets/Card'
import wave_bot from '../assets/wave-bg-bot.svg' 
import {projects} from './utils/constants'
const Projects = () => {

  return (
    <>
      <img src={wave_bot} alt="" className='w-full drop-shadow-sm absolute'/>
      <div className='h-full mt-40' id='projects'>
        <h1 className=' text-center tablet:text-4xl sMobile:text-2xl font-bold'>{`<MyProjects />`}</h1>
      </div>
      {projects.map((project, idx) => {
        return <Card key={idx}
          img={project.img}
          name={project.name}
          description={project.description}
          techs={project.techs}
          ghUrl={project.ghUrl}
          website={project.website}  
        />
      })}
    </>
    
  )
}

export default Projects