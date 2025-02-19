"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  AnimatedSection,
  FadeInText,
  ProgressBar,
  Timeline
} from 'reactbits';

const CVPage = () => {
  return (
    <div className="min-h-screen bg-[#0a192f] text-gray-300 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <AnimatedSection>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-4">
              <FadeInText text="Aman Jain" delay={0.2} />
            </h1>
            <p className="text-xl text-gray-400">
              Full Stack Developer | Software Engineer
            </p>
          </motion.div>
        </AnimatedSection>

        {/* About Section */}
        <AnimatedSection delay={0.2}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <p className="text-lg leading-relaxed">
              I&apos;m a passionate full-stack developer with expertise in building scalable web applications. 

              My skills span across the entire development stack, from crafting beautiful user interfaces 
              to designing robust backend systems.
            </p>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection delay={0.4}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProgressBar 
                label="JavaScript"
                value={95}
                color="#F7DF1E"
              />
              <ProgressBar 
                label="React"
                value={90}
                color="#61DAFB"
              />
              <ProgressBar 
                label="Node.js"
                value={85}
                color="#68A063"
              />
              <ProgressBar 
                label="TypeScript"
                value={80}
                color="#3178C6"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Experience Section */}
        <AnimatedSection delay={0.6}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <Timeline>
              <Timeline.Item 
                date="2022 - Present"
                title="Senior Software Engineer"
                company="Tech Corp"
                description="Led development of multiple enterprise-level applications, improving system efficiency by 40%."
              />
              <Timeline.Item 
                date="2020 - 2022"
                title="Software Engineer"
                company="Innovate Solutions"
                description="Developed and maintained web applications, reducing load times by 30%."
              />
            </Timeline>
          </div>
        </AnimatedSection>

        {/* Education Section */}
        <AnimatedSection delay={0.8}>
          <div>
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <Timeline>
              <Timeline.Item 
                date="2016 - 2020"
                title="Bachelor of Technology in Computer Science"
                company="University of Technology"
                description="Graduated with honors, specializing in software development and system architecture."
              />
            </Timeline>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default CVPage;
