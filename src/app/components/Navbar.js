"use client"
import Link from 'next/link'
import React,{useState} from 'react'
import NavLink from './NavLink'
import {navLinks} from '../data';
import { Bars3Icon } from '@heroicons/react/20/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';
import MenuOverlay from './MenuOverlay'
import Image from 'next/image';
const Navbar = () => {

  const [navbarOpen , setNavbarOpen] = useState(false);

  return (
    <nav className='fixed z-10  bg-[#121212] bg-opacity-100 top-0 left-0 right-0'>
      <div className='flex flex-wrap justify-between items-center mx-auto px-8 py-4 text-white'>
        <Link href={"/"} className='md:text-5xl text-2xl font-semibold text-white '><Image src='/images/main.png' width = {80} height={80}></Image> </Link>
        <div className='mobile-menu md:hidden block'>
          {!navbarOpen ? (
               <button className='text-slate-200'>
               <Bars3Icon className='h-5 w-5 hover:text-white-800' onClick={(e)=>setNavbarOpen(!navbarOpen)}/>
               </button>
          ) : (
            <button className='text-slate-200'>
            <XMarkIcon className='h-5 w-5' onClick={(e)=>setNavbarOpen(!navbarOpen)}/>
            </button>
          )}
         
        </div>
        <div className='menu hidden md:block md:w-auto' id="navbar">
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8' >
                {navLinks.map((link,index)=>(
                    <li key={index}>
                        <NavLink href={link.href} title={link.title} />
                    </li>
                    
                ))}
            </ul>
       
        </div>
       
      </div>
      {navbarOpen ?   <MenuOverlay /> : ""}
    
    </nav>
  )
}

export default Navbar
