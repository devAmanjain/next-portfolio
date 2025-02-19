"use client";
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import Particles from './Particles';
import CircularText from './CircularText';
import DecryptedText from './DecryptedText'

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-text mb-6">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            <DecryptedText
text="Aman Jain"
speed={100}
maxIterations={20}
characters="ABCD1234!?"
className="revealed"
parentClassName="all-letters"
encryptedClassName="encrypted"
/>
            </span>
          </h1>

          <div className="text-2xl md:text-3xl font-medium text-text mb-8">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                1000,
                'Software Engineer',
                1000,
                'Problem Solver',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <div className="flex justify-center gap-4">
            <Link
              href="/Aman_Software_Developer.pdf"
              className="px-6 py-3 bg-primary text-surface rounded-full hover:bg-primary-dark transition-colors duration-300"
            >
              Download CV
            </Link>
            <Link
              href="#projects"
              className="px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-surface transition-colors duration-300"
            >
              View Projects
            </Link>
          </div>

          {/* Circular Text Animation */}
          <div className="mt-12">
            <CircularText 
              text="• Full Stack Developer "
              spinDuration={20}
              className="text-primary"
            />
          </div>
        </motion.div>
      </div>

      <ThemeToggle />
    </section>
  );
};

export default HeroSection;
