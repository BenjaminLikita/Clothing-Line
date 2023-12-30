"use client"

import Navbar from './components/Navbar'
import { Typewriter } from 'react-simple-typewriter'

export default function Home() {

  const words = ["Discover Timeless Elegance and Modern Trends in Every Stitch.", "Revolutionize your urban wardrobe with our street-smart styles.", "Dress down without compromising style."]
  return (
    <div>
      <div className='bg-banner-img bg-cover bg-center h-[60vh] md:h-[80vh]'>
        <Navbar color={"text-white"} opacity={"bg-opacity-40"}/>
        <div className='flex flex-col items-center justify-center h-4/5 w-[90%] m-auto text-center'>
          <h1 className='text-white text-3xl md:text-5xl pt[-10px] pb-[10px] font-bold'>Elevate Your Style: <span className='text-green-500'>Lumiere</span> Fashion</h1>
          <p className='text-white text-lg md:text-xl font-medium w-[80%]'>
            <Typewriter 
              words={words}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </p>
        </div>

      </div>
    </div>
    
  )
}
