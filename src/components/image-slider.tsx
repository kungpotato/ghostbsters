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
        className="absolute top-1/2 left-4 z-10 p-2 text-white text-4xl rounded-full focus:outline-none"
        onClick={prevSlide}
      >
        &#60;
      </button>
      <button
        className="absolute top-1/2 right-4 z-10 p-2 text-white text-4xl rounded-full focus:outline-none"
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
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-2 flex">
        {images.map((_, index) => (
          <div key={index} className={`w-2 h-2 rounded-full ${index === current ? 'bg-white' : 'bg-gray-500'}`} />
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
