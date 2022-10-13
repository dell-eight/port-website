import React from 'react'
import Card from './widgets/Card'
import {projects} from './utils/constants'
const Projects = () => {

  return (
    <>
      <div className='h-full mt-20 ' id='projects'>
        <h1 className=' text-center tablet:text-4xl sMobile:text-2xl font-bold'>{`<Projects />`}</h1>
      </div>
      {projects.map((project, idx) => {
        return <Card key={idx} img={project.img} name={project.name} description={project.description} techs={project.techs} ghUrl={project.ghUrl} />
      })}
    </>
    
  )
}

export default Projects