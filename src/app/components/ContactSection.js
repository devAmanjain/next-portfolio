// src/app/components/ContactSection.js
"use client";
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { VscGithubAlt } from "react-icons/vsc";

import { useState } from 'react'; // Add useState import
import GlassIcons from './GlassIcons'

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // State for loading
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage('Your message has been sent successfully!'); // Set success message
    }, 2000);
  };



  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="md:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6"
          >
          </motion.h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary"
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className={`w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting} // Disable button when submitting
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
          {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>} {/* Success message */}
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <div className="border border-gray-600 rounded-lg p-4 shadow-lg"> {/* Box styling with shadow */}
            <img src="path/to/your/profile.jpg" alt="Profile" className="w-12 h-12 rounded-full mr-4" /> {/* Profile Picture */}
            <div className="flex-1">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2" /> {/* Available for work indicator */}
                <p className="text-sm">Available for work</p>
              </div>
              <p className="mt-2">
                My inbox is always open. Whether you have a project or just want to say Hi, I would love to hear from you. Feel free to contact me and I will get back to you.
              </p>
              <div style={{ height: '600px', position: 'relative' }}>
                <GlassIcons items={items} className="custom-class"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;