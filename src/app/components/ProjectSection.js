"use client";
import React,{useState} from 'react'
import ProjectCard from './ProjectCard';
import {projectData} from '../data'
import projectTag from './ProjectTag';
import ProjectTag from './ProjectTag';
const ProjectSection = () => {

  const [tag,setTag] = useState('All');

  const handleTagChange = (id) =>{
    setTag(id)
  }

  const filterProjects = projectData.filter((project)=>{
    return project.tag.includes(tag);
  });
  return (
    <div id="projects">
      <h1 className='text-white text-4xl font-extrabold'>My Projects</h1>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag name="All" isSelected={tag === 'All'} onClick={()=>handleTagChange('All')} />

        <ProjectTag name="Web" isSelected={tag === 'Web'} onClick={()=>handleTagChange('Web')} />
      </div>
      <div className='grid md:grid-cols-3 gap-8 md:gap-4'>
        {filterProjects.map((project,index)=>(
            <div key={index}>
                <ProjectCard imgUrl={project.image} title={project.title} description={project.description} gitCodeUrl = {project.gitCodeUrl} previewUrl={project.previewUrl} />
            </div>
        ))}
        
      </div>
    </div>
  )
}

export default ProjectSection
