'use client'
import React from 'react'
import GalleryComponent from '@/components/Gallery'

const Gallery = () => {
  return (
    <div className='min-h-screen bg-white'>
      
     <div className='bg-white'>
        <h1 className='text-4xl font-black text-orange-500 text-center pt-12'>Our Gallery</h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="h-px w-16 bg-orange-500"></div>
        <div className="mx-3 text-orange-400 text-3xl">✦</div>
        <div className="h-px w-16 bg-orange-500"></div>
      </div>
      
      <div className='container mx-auto px-4 py-12'>
        <div className='flex flex-wrap justify-center gap-6 '>
          <GalleryComponent name="Morning Prayer Ceremony" date="May 15, 2025" image="/images/temple.jpg" />
          <GalleryComponent name="Temple Architecture" date="April 20, 2025" image="/images/temple.jpg" />
          <GalleryComponent name="Community Gathering" date="June 5, 2025" image="/images/temple.jpg" />
          <GalleryComponent name="Traditional Rituals" date="May 12, 2025" image="/images/temple.jpg" />
          <GalleryComponent name="Morning Prayer Ceremony" date="May 15, 2025" image="/images/temple.jpg" />
          <GalleryComponent name="Temple Architecture" date="April 20, 2025" image="/images/temple.jpg" />
          <GalleryComponent name="Community Gathering" date="June 5, 2025" image="/images/temple.jpg" />
          <GalleryComponent name="Traditional Rituals" date="May 12, 2025" image="/images/temple.jpg" />
        </div>
      </div>
    </div>
  )
}

export default Gallery