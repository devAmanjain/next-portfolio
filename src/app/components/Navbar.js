// src/app/components/Navbar.js
"use client"
import Link from 'next/link'
import React, { useState, useContext } from 'react'
import NavLink from './NavLink'
import { navLinks } from '../data';
import { Bars3Icon } from '@heroicons/react/20/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';
import MenuOverlay from './MenuOverlay'
import Image from 'next/image';
import { ThemeContext } from './ThemeProvider';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className={`fixed z-10 top-0 left-0 right-0 rounded-b-xl shadow-lg transition-all duration-300
      ${theme === 'dark' ? 'bg-[#121212]' : 'bg-white'} h-16`}>
      
      <div className='flex justify-between items-center mx-auto px-6 py-2'>
        
        <Link href={"/"} className='hover:scale-105 transition-transform duration-200'>
          <div className='rounded-full p-1 hover:bg-opacity-20 transition-colors duration-300'>
            <Image src='/images/main.png' width={60} height={60} className='rounded-full' />
          </div>
        </Link>

        <div className='mobile-menu md:hidden block'>
          {!navbarOpen ? (
            <button className='text-white'>  
              <Bars3Icon className='h-5 w-5 hover:text-white-800' onClick={() => setNavbarOpen(!navbarOpen)} />
            </button>
          ) : (
            <button className='text-white'>  
              <XMarkIcon className='h-5 w-5' onClick={() => setNavbarOpen(!navbarOpen)} />
            </button>
          )}
        </div>

        <div className='menu hidden md:block md:w-auto' id="navbar">
          <ul className='flex p-2 md:p-0 md:flex-row md:space-x-6 text-white text-xl'>  
            {navLinks.map((link, index) => (
              <li key={index}>
                <div className='rounded-full hover:bg-opacity-20 transition-all duration-300 hover:scale-105'>
                  <NavLink href={link.href} title={link.title} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {navbarOpen ? <MenuOverlay /> : ""}
    </nav>
  )
}

export default Navbar