'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './globals.css'

export default function Home() {
  const images = ['/images/b3.jpg', '/images/b3.jpg', '/images/b3.jpg']

  return (
    <main>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {images.map((e, i) => (
          <SwiperSlide key={i} className="cursor-pointer">
            <Image src={e} alt={`Slide ${i}`} width={884} height={336} className="rounded-lg" />
          </SwiperSlide>
        ))}
      </Swiper>
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
