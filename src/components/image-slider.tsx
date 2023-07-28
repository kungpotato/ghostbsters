import React, { useState } from 'react'

interface SliderProps {
  images: string[]
}

const ImageSlider: React.FC<SliderProps> = ({ images }) => {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1)
  }

  return (
    <div className="relative w-full h-128 overflow-hidden">
      <button
        className="absolute top-1/2 left-4 z-10 p-2 bg-gray-600 text-white rounded-full focus:outline-none"
        onClick={prevSlide}
      >
        &#60;
      </button>
      <button
        className="absolute top-1/2 right-4 z-10 p-2 bg-gray-600 text-white rounded-full focus:outline-none"
        onClick={nextSlide}
      >
        &#62;
      </button>
      {images.map((image, index) => (
        <div
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
          key={index}
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
        />
      ))}
    </div>
  )
}

export default ImageSlider
