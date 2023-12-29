import Link from 'next/link'
import React from 'react'

function Navbar({color = "text-black", border = "border-gray-200", opacity = "bg-opacity-0"}) {
  return (
    <div className={`bg-transparent border-b ${border} shadow-sm ${color} bg-black ${opacity}`}>
        <div className='w-[90%] flex justify-between items-center m-auto p-7'>
          <Link href={"/"} className='text-4xl font-semibold'>Logo</Link>
          <nav className='flex gap-10 font-medium text-lg'>
            <Link href={"/gallery"}>Gallery</Link>
            <Link href={"/contact"}>Contact Us</Link>
          </nav>
        </div>
    </div>
  )
}

export default Navbar
