'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './globals.css'

export default function Home() {
  const images = ['/images/b3.jpg', '/images/b3.jpg', '/images/b3.jpg']

  return (
    <main>
      <div className="grid grid-cols-5 gap-4">
        {/* Left Column */}
        <div className="col-span-4">
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: true }}
          >
            {images.map((e, i) => (
              <SwiperSlide key={i} className="cursor-pointer">
                <Image src={e} alt={`Slide ${i}`} width={884} height={336} className="rounded-lg" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Column */}
        <div className="col-span-1 space-y-4">
          <p className="text-xl font-bold">Your Title Here</p>
          <p>
            Insert your text here. You can use multiple paragraphs or other components as needed. Tailwind CSS will be
            applied for styling.
          </p>
          <p>Additional text or content goes here.</p>
          {/* ... and so on */}
        </div>
      </div>

      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
    </main>
  )
}
