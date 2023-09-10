import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const FooterSection = () => {
  return (
    <footer className='footer border border-top-[#33353F] border-l-transparent border-r-transparent'>
      <div className='container p-12 flex justify-between'>
        <span className='text-white text-xl  '>
        <Link href={"/"} className='md:text-5xl text-2xl font-semibold text-white '><Image src='/images/main.png' width = {100} height={100}></Image> </Link>        </span>
        <p className='text-slate-700'>All  rights reserved.</p>
      </div>
    </footer >
  )
}

export default FooterSection
