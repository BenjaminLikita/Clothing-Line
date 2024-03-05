"use client"

import { Montserrat } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Typewriter } from 'react-simple-typewriter'
import Image from 'next/image'
import banner from '../public/banner.jpg'
import banner1 from '../public/banner1c.jpg'
import { useEffect, useRef } from 'react'

// eslint-disable-next-line @next/next/no-async-client-component

const montserrat = Montserrat({ weight: ["100", "200", "300", "400", "500", "600", "700", "800"], subsets: ['latin'] })
export default function Home() {

    const words = ["Fashion Designing.", "Fashion Education Crafts.", "General Contracts and Merchandise."]
    return (
        <div>
            {/* 1520px_580px */}
            <div className='bg-banner-img bg-cover md:bg-[length:100%_100%] bg-no-repeat bg-center w-[100%] h-[60vh] md:h-[80vh] after:bg-black after:bg-opacity-50 isolate after:-z-10 after:w-[100%] after:h-[60vh] after:md:h-[80vh] after:absolute after:top-0 after:left-0'>
            {/* <div className='bg-banner-img bg-cover bg-center w-[100%] h-[60vh] md:h-[80vh] after:bg-black after:bg-opacity-50 isolate after:-z-10 after:w-[100%] after:h-[60vh] after:md:h-[80vh] after:absolute after:top-0 after:left-0'> */}
                <Navbar color={"text-white"} opacity={"bg-opacity-40"} border='border-gray-500' />
                <div className='flex flex-col items-center justify-center h-4/5 w-[90%] m-auto text-center'>
                    {/* <h1 className='text-white text-3xl md:text-5xl pt[-10px] pb-[10px] font-bold'>Elevate Your Style: <span className='text-green-500'>Lumiere</span> Fashion</h1> */}
                    <h1 className='text-white text-3xl md:text-5xl pt[-10px] pb-[10px] font-bold'>Freshtopslily <span className="text-green-500">Fashions</span> and Crafts</h1>
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
            <div className={`text-center m-auto mt-10 w-[80%] ${montserrat.className}`}>
                <h1 className={`text-green-500 text-3xl font-medium md:text-4xl pb-2`}><i>About the Collection</i></h1>
                <p className='text-gray-500'>I am omolaolu Temitope Adeola and I am an enterpreneur. Welcome to FreshTopsLily, where we curate a versatile collection encompassing Casual wears, Bespoke and Owambe outfits, Personalized Training, Unique Merchandise, Stylish Headwears, and Handmade Crafts. Our fashion ethos centers around blending comfort with elegance, ensuring that every piece reflects individuality. From special occasions to everyday wear, we offer a holistic fashion experience. Join us in celebrating personal style and discovering the perfect ensemble for every moment at FreshTopsLily.</p>
            </div>

            <div className='relative'>
                <Image
                    className='object-cover w-[70%] m-auto my-24'
                    src={banner}
                    alt='banner'
                />
            </div>

            <div className={`mx-auto block my-24 w-[70%] ${montserrat.className}`}>
                <h1 className={`text-center text-green-500 text-xl md:text-4xl pb-2`}><i>Never miss our updates about new arrivals and special offers</i></h1>

                <form>
                    <input type='email' placeholder='Enter your email here*' className='transition-all duraton-300 hover:border-b-2 focus:border-b-2 focus:border-gray-700 hover:border-gray-700 border-b w-[100%] text-sm md:text-lg italic pb-3 mt-5 outline-none' required />
                    <button className='bg-gray-800 my-5 px-5 py-3 text-white w-[100%] md:w-[50%] grid m-auto'>Subscribe Now</button>
                </form>
            </div>
            <Footer />
        </div>

    )
}
