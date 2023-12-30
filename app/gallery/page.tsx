// "use client"


import {v2 as cloudinary} from 'cloudinary';
import React from 'react'
import Image from 'next/image';
import clsx from 'clsx';
import Navbar from '../components/Navbar';
import fetchImages from '../components/resources';

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_CLOUD_API_KEY, 
  api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET 
});


export interface CloudinaryResource {
  public_id: string;
  secure_url: string;
}
async function GalleryPage() {
  
  
  const resources = await fetchImages();
  
  
  return (
    <div>
      <Navbar />
      <div className='w-[90%] m-auto'>
        <h1 className='my-5 text-4xl md:text-6xl text-center font-bold'>Gallery</h1>
        <p className='bg-gray-900 text-white w-max py-3 px-5 rounded-3xl font-bold'>Photos <span className='pl-5 text-gray-500 font-normal'>{resources.length}</span></p>
        {/* <div className={`grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[100%] my-7 gap-5`}> */}
        <div className={`grid grid-cols-2 lg:grid-cols-3 w-[100%] my-7 gap-5`}>
          {
            resources.map((item: CloudinaryResource, i: number) => (
              <div
              key={item.public_id}
              className={clsx(`cursor-pointer overflow-hidden`, {
                [`row-span-2`]: i % 2,
              })}
              >
                <Image
                  src={item.secure_url}
                  // width="300"
                  width="300"
                  height='250'
                  alt={item.public_id}
                  className={clsx(`block object-cover img hover:scale-110 transition-all duration-500`, {
                    // [`lg:row-span-2 md:col-span-2 lg:col-span-1`]: i % 2,
                  })}
                  loading='lazy'
                  />
              </div>
            ))
          }
        </div>
      </div>
    </div>

  )
}

export default GalleryPage