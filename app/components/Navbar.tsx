'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React, { useEffect } from 'react'

function Navbar({color = "text-black", border = "border-gray-200", opacity = "bg-opacity-0"}) {
    
    let pathname = usePathname()
    console.log(pathname);
    

  return (
    <div className={`bg-transparent border-b ${border} shadow-sm ${color} bg-black ${opacity}`}>
        <div className='w-[90%] flex justify-between items-center m-auto p-5'>
          
          <Link href={"/"} className='text-3xl md:text-4xl font-semibold'>Logo</Link>

          <nav className='gap-8 font-medium text-xl md:text-lg hidden md:flex'>
            <Link href={"/"}className={`py-3 px-5 block md:inline-block lg:hover:scale-110 transition-all duration-700 ${pathname === '/' && 'active'}`}>Home</Link>
            <Link href={"/gallery"} className={`py-3 px-5 block md:inline-block lg:hover:scale-110 transition-all duration-700 ${pathname === '/gallery' && 'active'}`}>Gallery</Link>
            <Link href={"/contact"} className={`py-3 px-5 block md:inline-block lg:hover:scale-110 transition-all duration-700 ${pathname === '/contact' && 'active'}`}>Contact Us</Link>
          </nav>

          <div className='md:hidden sm:block'>

          </div>
        </div>
    </div>
  )
}

export default Navbar
