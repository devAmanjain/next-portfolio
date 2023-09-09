import React from 'react'

const TabBar = ({selectedTab ,children,activeTab}) => {
    const btnClasses  = activeTab ? 'text-white border-b border-white-500' : 'text-[#55555f]' ;
  return (
    <button onClick = {selectedTab}>
         <p className={` mr-3 font-semibold hover:text-white  cursor-pointer ${btnClasses}`}>{children}</p>
    </button>
   
  )
}

export default TabBar
