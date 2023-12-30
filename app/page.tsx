import Image from 'next/image'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div>
      <div className='bg-banner-img bg-cover bg-center h-[80vh]'>
        <Navbar color={"text-white"} border={"border-gray-700"} opacity={"bg-opacity-40"}/>
        <div className='flex flex-col items-center justify-center h-4/5'>
          {/* <h1 className='text-white text-4xl font-bold'>Welcome to <span className='text-green-500'>Lumiere</span></h1> */}
          <h1 className='text-white text-5xl pt[-10px] pb-[10px] font-bold'>Elevate Your Style: <span className='text-green-500'>Lumiere</span> Fashion</h1>
          <p className='text-white text-xl font-medium'>Discover Timeless Elegance and Modern Trends in Every Stitch</p>
        </div>

      </div>
    </div>
    
  )
}
