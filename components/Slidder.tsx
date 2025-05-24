'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image';

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    dragFree: true
  }, [Autoplay({ delay: 3000, stopOnInteraction: false })])

  return (
    <div
      className="embla overflow-hidden shadow-xl w-full"
      ref={emblaRef}
    >
      <div
        className="embla__container 
                   h-[250px] 
                   sm:h-[400px] 
                   md:h-[500px] 
                   lg:h-[600px] 
                   xl:h-[700px]"
      >
        <div className="embla__slide">
          <div className="relative w-full h-full transition-transform duration-300">
            <Image 
              src="/images/finalIskcon.png" 
              alt="Slide 1"
              fill
              style={{  objectFit: 'cover', objectPosition: 'center'  }}
              priority
            />
          </div>
        </div>
        <div className="embla__slide">
          <div className="relative w-full h-full transition-transform duration-300">
            <Image 
              src="/images/swami.png" 
              alt="Slide 2"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </div>
        </div>
        <div className="embla__slide">
          <div className="relative w-full h-full transition-transform duration-300">
            <Image 
              src="/images/slider33.png" 
              alt="Slide 3"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

