import React from 'react'
import Link from 'next/link'

const NavLink = ({href,title}) => {
  return (
    <Link href={href} className='block py-2 pr-4 pl-3 text-[#AD87BER] sm:text-xl rounded md:p-0 hover:text-slate-400'>{title}</Link>
  )
}

export default NavLink
