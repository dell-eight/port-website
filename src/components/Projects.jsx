import React from 'react'
import Card from './widgets/Card'
import projects from './utils/constants'
const Projects = () => {
  return (
    <div className='h-full mt-20 text-center' id='projects'>
      <h1 className='tablet:text-4xl sMobile:text-2xl font-bold'>{`<Projects />`}</h1>
      <div className='flex justify-center items-center mx-3'>
        <div className='grid laptop:grid-cols-3 tablet:grid-cols-2 sMobile:grid-cols-1 gap-12 mt-16' >
          {projects.map((project, idx) => {
            return <Card key={idx} img={project.img} name={project.name} description={project.description} techs={project.techs} />
          })}
        </div>
      </div>
      
    </div>

    
  )
}

export default Projects