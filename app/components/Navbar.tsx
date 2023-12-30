'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaBars, FaX } from "react-icons/fa6";
import clsx from 'clsx';

function Navbar({color = "text-black", border = "border-gray-200", opacity = "bg-opacity-0"}) {
    
    let pathname = usePathname()
    
    const [visible, setVisibility] = useState<Boolean>(false)

  return (
    <div className={`bg-transparent border-b ${border} shadow-sm ${color} bg-black ${opacity}`}>
        <div className='w-[90%] flex justify-between items-center m-auto md:p-5 py-3'>
          
          <Link href={"/"} className='text-3xl md:text-4xl font-semibold'>Logo</Link>

          <nav className={clsx('justify-between font-medium text-xl md:text-lg block md:flex bg-gray-500 bg-opacity-95 w-[50%] md:w-[55%] lg:w-[40%] text-gray-700 md:text-inherit h-full transition-all duration-500 md:bg-transparent fixed md:relative top-0 p-10 pl-5 pt-14 md:p-0', {
            ['right-0 bg-white z-50 p-10']: visible,
            ['right-[-100%] md:right-0']: !visible
          })}>
            <FaX
              size={25}
              className={"block md:hidden absolute top-[16px] right-[25px] cursor-pointer"}
              onClick={() => setVisibility(false)}
            />
            <Link href={"/"}className={`py-3 px-5 block md:inline-block lg:hover:scale-110 transition-all duration-700 ${pathname === '/' && 'active'}`}>Home</Link>
            <Link href={"/gallery"} className={`py-3 px-5 block md:inline-block lg:hover:scale-110 transition-all duration-700 ${pathname === '/gallery' && 'active'}`}>Gallery</Link>
            <Link href={"/contact"} className={`py-3 px-5 block md:inline-block lg:hover:scale-110 transition-all duration-700 ${pathname === '/contact' && 'active'}`}>Contact Us</Link>
          </nav>

          <div className='block md:hidden'>
            <FaBars size={30}
              className="cursor-pointer"
              onClick={() => setVisibility(true)}
            />
          </div>
        </div>
    </div>
  )
}

export default Navbar
