"use client"
import React,{useState,useTransition} from "react";
import Image from "next/image";
import TabBar from './TabBar';
import { tabs } from "../data";
const AboutSection = () => {
    const [tab,setTab] = useState("skills");
    const [isPending ,startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(()=>{
            setTab(id);
        })
    }
  return (
    <section className="text-white " id="about">
      <div className="md:grid md:grid-cols-2 items-center gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        
          <Image
            src="/images/laptop.png"
            alt="about"
            className="rounded"
            width={500}
            height={500}
          />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
            I am a versatile full-stack developer with a strong skill set that includes PHP, Laravel, React, Redux, JavaScript, and Git. My expertise extends to creating interactive web applications that deliver exceptional user experiences. As a quick learner, I'm constantly adapting to new technologies and staying current with industry best practices. I thrive in collaborative environments, and my commitment to producing high-quality code ensures that I can contribute effectively to any development project. With a deep understanding of both front-end and back-end development, I am well-equipped to tackle a wide range of challenges and deliver comprehensive solutions.
            </p>
            <div className="flex flex-row mt-8 justify-start">
                {tabs.map((tabData,index)=>(
                    <div key={index}>
                       <TabBar selectedTab={()=>handleTabChange(tabData.id)} activeTab = {tab===tabData.id}>{tabData.title}</TabBar>
                       </div>
                ))}
             
               
               
            </div>
            <div className="mt-8">
                {tabs.find((tabData)=>tabData.id === tab ).contents}
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default AboutSection;
