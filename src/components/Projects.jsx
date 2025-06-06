import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import projects from '../projects.json';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
<section className="flex mt-20 justify-center text-white" id='projects'>
  <div className="w-[95%] md:w-full max-w-4xl flex flex-col justify-center bg-[#2C2C2C] px-4 shadow-md py-8 rounded-xl">
    <div>
    <span className="w-3 items-center h-3 bg-primary inline-block rounded-full mr-2"></span>
    <span className='text-xl text-center font-bold'>Projects</span>
    </div>
    
   
    <div className="w-full mt-8">
      {visibleProjects.map((project)=>(
 <Accordion sx={{ backgroundColor: '#373737', color: 'white' ,   }}>
      <AccordionSummary sx={{ backgroundColor: '#444', color: 'white', padding:'1em' }} expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
        <div className="flex items-center gap-3">
    <div className="flex-shrink-0 bg-sky-100 p-1 rounded-full flex items-center justify-center">
      <img
        src={project.logo}
        alt="Project Logo"
        className="h-6 w-6 rounded-full object-cover"
      />
    </div>
    <Typography className="text-white">
      {project.title}
      <div className="flex flex-wrap gap-2 mt-2">
        {project.tech.map((fw)=>(
          <span className="w-fit h-6  p-3 text-md flex items-center justify-center bg-[#2C2C2C] text-white font-bold rounded-full ">{fw}</span>
        ))}
       
      </div>
    </Typography>
  </div>
        
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex flex-col items-center text-white gap-4">
    <p className="text-sm text-gray-300 text-center">
      {project.fullDescription}
    </p>
    {project.image &&
    <img
      src={project.image}
      alt="K-means Project Screenshot"
      className="w-96 h-72 object-cover rounded-lg shadow-lg"
    /> }
    
    <div className='flex space-x-3'>
      {project.link && 
      <a 
      href={project.link}
      target='_blank'
      className='inline-flex items-center gap-2 px-4 py-2 mt-4 text-neutral-800 bg-sky-100 hover:bg-sky-200 rounded-md transition-colors duration-300'>
        <ExternalLink />
        Demo
      </a> }
      {project.github && 
      <a 
      href={project.github}
      target='_blank'
      className='inline-flex items-center gap-2 px-4 py-2 mt-4 text-neutral-800 bg-sky-100 hover:bg-sky-200 rounded-md transition-colors duration-300'>
        <Github />
        Code
      </a>}
      
    </div>
  </div>
      </AccordionDetails>
      
    </Accordion>
      ))}
   <div className="flex justify-center mt-4">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-[#444444] hover:bg-[#505050] text-white font-semibold px-4 py-2 rounded-md"
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Projects