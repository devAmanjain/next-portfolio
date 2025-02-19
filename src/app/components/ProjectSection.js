"use client";
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projectData } from '../data';
import ProjectTag from './ProjectTag';

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 ">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-text text-center mb-12"
        >
          My Projects
        </motion.h2>

        <div className="flex justify-center gap-4 mb-12">
          <ProjectTag
            name="All"
            isSelected={true}
            onClick={() => {}}
          />
          <ProjectTag
            name="Web"
            isSelected={false}
            onClick={() => {}}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <ProjectCard
                imgUrl={project.image}
                title={project.title}
                description={project.description}
                gitCodeUrl={project.gitCodeUrl}
                previewUrl={project.previewUrl}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
