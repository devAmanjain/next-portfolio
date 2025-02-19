"use client"
import React,{useState} from "react";
import GithubIcon from "../../../public/social_icon/github.svg";
import LinkedIn from "../../../public/social_icon/linked-in.svg";
import Medium from "../../../public/social_icon/medium.svg";
import Twitteer from "../../../public/social_icon/twitter.svg";
import Link from "next/link";
import Image from "next/image";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import GlassIcons from './GlassIcons'
import { FaLinkedin, FaGithub, FaMediumM , FaTwitter } from 'react-icons/fa';
import { VscGithubAlt } from "react-icons/vsc";
const EmailSection = () => {
  const items = [
    { icon: <FaLinkedin size={70} />, color: 'blue', label: 'LiknedIn', href:"https://www.linkedin.com/in/aman-jain09/" },
    { icon: <VscGithubAlt  size={70}/>, color: 'gray', label: 'Github',href:"https://github.com/Amanj881" },
    { icon: <FaMediumM   size={70}/>, color: 'white', label: 'Medium',href:"https://medium.com/@amanj0314" },
    { icon: <FaTwitter  size={70}/>, color: 'white', label: 'Twitter' , href:"https://twitter.com/WebTechSol3679"},
  
  ];

  const [emailSend,setEmailSend] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const data = {
            email:e.target.email.value,
            subject:e.target.subject.value,
            message:e.target.message.value
        }
        const JSONData = JSON.stringify(data);
        fetch('/api/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then((response) => {
              if (response.status === 200) {
                setEmailSend(true);
                return response.json();
              } else {
                throw new Error('Failed to send data.');
              }
            })
            .then((responseData) => {
              console.log('Response Data:', responseData);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
          
        
    }
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 gap-4 " id="contact">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-0  transform -translate-x-1/2 -translate-1/4"></div>
      <div className="z-10 ">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I am currently exploring new career opportunities, and my inbox is
          readily accessible to all. Whether you have a question or simply wish
          to extend greetings, I will make every effort to promptly respond.😊📩
        </p>
        <div style={{ height: '300px', position: 'relative',width:'300px '}}>
                <GlassIcons items={items} className="custom-class"/>
              </div>
          
        {/* <div className="text-white py-8 text-xl font-semibold">
          Contact Details
          <div className="flex flex-row">
              <div>
              <DevicePhoneMobileIcon className="w-12 h-15 py-4" />
              </div>
              <div className="py-7 px-4 text-base">
              <span>
              9685924231
              </span>
              </div>
             
          </div>

          <div className="flex flex-row">
              <div>
              <EnvelopeIcon className="w-12 h-15 py-4" />
              </div>
              <div className="py-7 px-4 text-base">
              <span>
              devaman091996@gmail.com
              </span>
              </div>
             
          </div>
           
        </div> */}
      </div>
      <div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="text-white block mb-2 text-sm" htmlFor="email">
            Your Email
          </label>
          <input
            type="email"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg p-2.5"
            id="email"
            required
            placeholder="abc@gmail.com"
            name="email"
          />

          

          <label className="text-white block mb-2 text-sm" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg p-2.5"
            id="subject"
            required
            placeholder="Say Something"
            name="subject"
          />

<label className="text-white block mb-2 text-sm" htmlFor="message">
Message          </label>
          <textarea
           rows={12}
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg p-2.5 w-full"
            id="message"
            required
            placeholder="Let's Talk About"
            name="message"
          />

          <button className="bg-purple-800 rounded-lg text-white text-lg py-4">Send Message</button>
        </form>
        {emailSend && <span className="text-green-700 text-base ">Message Send SuccessFully...</span>}
      </div>
    </section>
  );
};

export default EmailSection;
