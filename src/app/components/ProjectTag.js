import React from 'react'

const ProjectTag = ({name,onClick,isSelected}) => {
 const buttonStyle = isSelected ? "text-white bg-purple-500" :
 "text-[#ADB7BE] border-slate-600"
  return (
    <button className={`rounded-full border-2 px-6 py-3 text-xl ${buttonStyle}`} onClick = {onClick}>{name}</button>
  )
}

export default ProjectTag
