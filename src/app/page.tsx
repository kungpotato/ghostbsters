'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { FiHeart, FiShoppingCart } from 'react-icons/fi'
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
      <div className="pt-5 pb-2">หมวดหมู่</div>
      <div className="w-fit zoom-on-hover">
        <div className="border-8 border-white  bg-white shadow-lg rounded-lg cursor-pointer ">
          <Image
            src="/images/_1bb74813-890d-490d-b495-948e227a426e.jpg"
            alt="xxx"
            width={150}
            height={150}
            className="rounded-lg"
          />
        </div>
        <div className="pt-1 text-center">เครื่องดื่ม</div>
      </div>
      <div className="pt-5 pb-2">สินค้าแนะนำ</div>
      <div className="w-fit ">
        <div className="border-8 border-white  bg-white shadow-lg hover-shadow cursor-pointer ">
          <div className="relative">
            <Image src="/images/_5eaa160f-1a46-469c-8fef-33353f1e2eca.jpg" alt="xxx" width={170} height={170} />
            <div className="absolute top-2 left-0 bg-yellow-400 pl-2 pr-2">-10%</div>
            <div className="absolute bottom-2 left-2 ">
              <FiHeart size={25} />
            </div>
            <div className="absolute bottom-1 right-1 p-2 shopping-cart-icon">
              <FiShoppingCart size={20} />
            </div>
          </div>
          <div className="pt-1 ">
            <div className="text-gray-700">น้ำอัดลม</div>
            <div className="text-red-600 font-bold">฿20.00</div>
          </div>
        </div>
      </div>
      <div className="pt-5 pb-2">คูปอง</div>
      <div className="pt-2 flex border shadow-lg hover-shadow cursor-pointer w-60 rounded-tr-lg rounded-br-lg">
        <Image src="/images/coupon.webp" alt="xxx" width={62} height={151} className="rounded-tl-lg rounded-bl-lg" />
        <div className="flex-col space-y-4 pr-4 pl-2">
          <div>
            <div className="pl-2 font-bold">ส่วนลด 60฿</div>
            <div className="pl-2">เมื่อซื้อครบ 600฿</div>
          </div>
          <div>
            <div className="pl-2">โค้ด EFTGH07</div>
            <div className="flex space-x-6">
              <button className="bg-green-400 rounded-md p-1">คัดลอก</button>
              <button className="bg-gray-300 rounded-md p-1">เงื่อนไข</button>
            </div>
          </div>
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
