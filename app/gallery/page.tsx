// "use client"


import {v2 as cloudinary} from 'cloudinary';
import React, { useState } from 'react'
import { CldImage } from 'next-cloudinary';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';
import Navbar from '../components/Navbar';

cloudinary.config({ 
  cloud_name: 'dj0ocigti', 
  api_key: '417832474921789', 
  api_secret: "kWNsEFjOluFj8SFqrpq_MvEkfjY" 
});


interface CloudinaryResource {
  public_id: string;
  secure_url: string;
}
async function GalleryPage() {


  const result = await cloudinary.api.resources({resource_type: "image"}, (err, res) => {
    if(err){
      console.log(err);
    }
  })

  const random_span = ["col-span-1", "col-span-2", "row-span-1", "row-span-2"]
  
  return (
    <div>
      <Navbar />
      <div className='w-[90%] m-auto'>
        <h1 className='my-5 text-6xl text-center font-bold'>Gallery</h1>
        <p className='bg-gray-900 text-white w-max py-3 px-5 rounded-3xl font-bold'>Photos <span className='pl-5 text-gray-500 font-normal'>{result.resources.length}</span></p>
        <div className={`grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[100%] my-7 gap-5`}>
          {
            result.resources.map((item: CloudinaryResource, i: number) => (
              <div
              key={item.public_id}
              className={clsx(`rounded-md cursor-pointer overflow-hidden`, {
                [`lg:row-span-2 md:col-span-2 lg:col-span-1`]: i % 2,
              })}
              >
                <Image
                  src={item.secure_url}
                  // width="300"
                  width="300"
                  height='250'
                  alt={item.public_id}
                  className={clsx(`block rounded-md object-cover img hover:scale-110 transition-all duration-500`, {
                    // [`lg:row-span-2 md:col-span-2 lg:col-span-1`]: i % 2,
                  })} />
              </div>
            ))
          }
        </div>
      </div>
    </div>

  )
}

export default GalleryPage