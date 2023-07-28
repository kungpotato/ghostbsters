'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ImageSlider from '../components/image-slider'

export default function Home() {
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    // Set width to window's innerWidth
    // This code will run only on the client-side
    setWidth(window.innerWidth)

    // Listen for window resize and update width
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const images = [
    'https://images.squarespace-cdn.com/content/v1/59bf8dc3e5dd5b141a2ba135/43541f5a-eb40-4abd-9af7-6487a8cd07ed/Page365-selling-clothes-online2023.png?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/59bf8dc3e5dd5b141a2ba135/1592973374504-KTHIAIN84JPKH6L2EQ1A/Page365-Selling+Clothes+on+Facebook+Live.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/59bf8dc3e5dd5b141a2ba135/1592973422679-G1XFGPAXJA3T5QT28OAC/Page365-clothes.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/59bf8dc3e5dd5b141a2ba135/43541f5a-eb40-4abd-9af7-6487a8cd07ed/Page365-selling-clothes-online2023.png?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/59bf8dc3e5dd5b141a2ba135/1592973374504-KTHIAIN84JPKH6L2EQ1A/Page365-Selling+Clothes+on+Facebook+Live.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/59bf8dc3e5dd5b141a2ba135/1592973422679-G1XFGPAXJA3T5QT28OAC/Page365-clothes.jpg?format=1500w'
  ]
  return (
    <main>
      <ImageSlider images={images} />
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
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
    </main>
  )
}
