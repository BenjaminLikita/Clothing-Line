import React from 'react'
import instagram from "@/public/instagram.svg"
import gmail from "@/public/gmail.svg"
import {FaFacebook, FaWhatsapp, FaYoutube, FaAngleLeft} from "react-icons/fa"
import {FaXTwitter} from "react-icons/fa6"
import {LuExternalLink} from "react-icons/lu"
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ContactPage() {

  return (
    <div>
      <section className='h-[60vh] bg-contact-img bg-cover relative bg-center'>
        <div>
          <Navbar color={"text-white"} border={"border-gray-700"} opacity={"bg-opacity-40"}/>
        </div>
        
        <h1 className='font-bold text-4xl lg:text-5xl w-full text-white text-center pt-24'>Contact Us</h1>
      </section>
      <section className='isolate w-[90%] md:w-[80%] m-auto flex flex-wrap justify-center mt-[-50px] md:mt-[-50px] mb-10 gap-5 md:gap-10'>
        <div className='border border-gray-200 shadow-lg rounded-md w-[150px] md:w-[190px] h-[220px] grid place-items-center bg-white'>
          <FaFacebook color={"blue"} size={50}/>
          <h1 className='block text-2xl font-medium'>Facebook</h1>
          <Link href={""} className='flex items-center justify-center gap-3 hover:text-blue-700 transition-all duration-200'><LuExternalLink />View</Link>
        </div>
        <div className='border border-gray-200 shadow-lg rounded-md w-[150px] md:w-[190px] h-[220px] grid place-items-center bg-white'>
          <FaWhatsapp color={"green"} size={50}/>
          <h1 className='block text-2xl font-medium'>Whatsapp</h1>
          <Link href={""} className='flex items-center justify-center gap-3 hover:text-green-700 transition-all duration-200'><LuExternalLink />View</Link>
        </div>
        <div className='border border-gray-200 shadow-lg rounded-md w-[150px] md:w-[190px] h-[220px] grid place-items-center bg-white'>
          <Image src={instagram} alt='instagram'
          height={50}/>
          <h1 className='block text-2xl font-medium'>Instagram</h1>
          <Link href={""} className='group flex hover:bg-gradient-to-r from-purple-800 to-pink-500 hover:bg-clip-text hover:text-transparent
          items-center justify-center gap-3 transition-all duration-200'><LuExternalLink className="group-hover:text-purple-500"/>View</Link>
        </div>
        <div className='border border-gray-200 shadow-lg rounded-md w-[150px] md:w-[190px] h-[220px] grid place-items-center bg-white'>
          <Image src={gmail} alt='gmail'
          height={50}/>
          <h1 className='block text-2xl font-medium'>Gmail</h1>
          <Link href={""} className='flex items-center justify-center gap-3 hover:text-yellow-700 transition-all duration-200'><LuExternalLink />View</Link>
        </div>
        <div className='border border-gray-200 shadow-lg rounded-md w-[150px] md:w-[190px] h-[220px] grid place-items-center bg-white'>
          <FaYoutube color={"red"} size={50}/>
          <h1 className='block text-2xl font-medium'>Youtube</h1>
          <Link href={""} className='flex items-center justify-center gap-3 hover:text-red-700 transition-all duration-200'><LuExternalLink />View</Link>
        </div>
        <div className='border border-gray-200 shadow-lg rounded-md w-[150px] md:w-[190px] h-[220px] grid place-items-center bg-white'>
          <FaXTwitter color={"black"} size={50}/>
          <h1 className='block text-2xl font-medium'>Twitter</h1>
          <Link href={""} className='flex items-center justify-center gap-3 hover:text-green-500 transition-all duration-200'><LuExternalLink />View </Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ContactPage