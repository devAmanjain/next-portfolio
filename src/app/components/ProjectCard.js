import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import React from "react";
import Link from "next/link";
const ProjectCard = ({ imgUrl, title, description,previewUrl,gitCodeUrl }) => {
  return (
    <div>
      <div
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        className="h-52 md:h-72 rounded-tx-l relative group"
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-800 items-center justify-center ">
          <Link href={gitCodeUrl} className="h-14 w-14 relative rounded-full border-2 border-[#ADB7BE] mx-4 hover:border-white group/link">
          <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE]  m-2  top-1/2 left-1/2 transform -transalate-x-1/2 -transalate-y -1/2 cursor-pointer group-hover/link:text-white " />
          </Link>
          <Link href={previewUrl} className="h-14 w-14 relative rounded-full border-2 border-[#ADB7BE] mx-4 hover:border-white group/link">
          <EyeIcon className="h-10 w-10 text-[#ADB7BE]  m-2  top-1/2 left-1/2 transform -transalate-x-1/2 -transalate-y -1/2 cursor-pointer group-hover/link:text-white  " />
          </Link>
        
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 mb-2 ">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-[#ADB78E]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
