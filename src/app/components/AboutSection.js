"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCode, FaPaintBrush, FaRocket } from 'react-icons/fa';
import LetterGlitch from './LetterGlitch';


const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 ">
      <div className="container mx-auto px-4 ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-900 text-center mb-12 text-white"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <LetterGlitch
              glitchSpeed={50}
              centerVignette={true}
              outerVignette={false}
              smooth={true}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700">
              I am a <span className="text-blue-600 font-medium">Full Stack Developer</span> with a passion for creating beautiful and functional digital experiences. My expertise spans across modern web technologies and design principles, allowing me to craft solutions that are both technically robust and visually stunning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <FaCode className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Development</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Building scalable web applications with modern frameworks and best practices.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <FaPaintBrush className="w-6 h-6 text-purple-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Design</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Creating intuitive user interfaces with a focus on usability and aesthetics.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <FaRocket className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Innovation</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Leveraging cutting-edge technologies to deliver innovative solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
