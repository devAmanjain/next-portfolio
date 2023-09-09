"use client"

import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      {" "}
     
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 viw-purple-800 to-pink-400">Hello, I'm {" "}</span> 
            <br/> 
            <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Aman Jain',
                 
                  1000,
                  'Web Developer',
                  1000,
                  'Software Developer',
                  1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', display: 'inline-block' ,marginT:'16px' }}
                repeat={Infinity}
              /> 
          </h1>
          <p className="text-white sm:text-lg lg:text-xl mb-6 text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        
        <div className="text-white font-mono">
          <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#ffffff] hover:bg-slate-100 mb-4 bg-gradient-to-br from-blue-800 via-red-500 to-purple-400 ">
            Hire Me
          </button>
          <button className="px-6 py-3 w-full  sm:w-fit rounded-full bg-[#ffffff] hover:bg-slate-500 sm:mt-4 bg-gradient-to-br from-blue-800 via-red-500 to-purple-400">
            Download CV
          </button>
        </div>
        </div>
        <div className="col-span-5  mt-4 lg:mt-8">
          <div className="rounded-full mx-10 sm:mx-0 bg-[#181818] w-[250px] h-[250px] sm:w-[300px] lg:h-[300px] relative">
            <Image
              src="/images/hero-section-image.png"
              alt="hero-image"
              width="400"
              height="200"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
         </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
