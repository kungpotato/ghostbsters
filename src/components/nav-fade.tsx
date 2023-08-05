'use client'

import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import SearchInput from './search'
import { FiHeart, FiShoppingCart } from 'react-icons/fi'

const FadeOutDiv = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [prevScrollY, setPrevScrollY] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = useCallback(() => {
    setIsOpen(false)
    const currentScrollY = window.scrollY
    if (currentScrollY >= 40) {
      setIsVisible(false)
    }
    if (currentScrollY <= prevScrollY) {
      setIsVisible(true)
    }
    setPrevScrollY(currentScrollY)
  }, [prevScrollY])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div>
      <div
        className={`container z-20 transition-opacity ${
          isVisible
            ? `opacity-100 ${prevScrollY > 40 ? 'fixed top-0 left-0 right-0 w-full' : 'relative '}`
            : 'opacity-0'
        } `}
      >
        <div className={`bg-white`}>
          <nav className="flex justify-center h-14">
            <div className="w-full" onMouseEnter={() => setIsOpen(false)} />
            <ul className="flex space-x-4 min-w-max">
              <li className="self-center" onMouseEnter={() => setIsOpen(true)}>
                <Link href="#home" className="p-3 hover:border-b-2 hover:border-black transition duration-300">
                  มาใหม่
                </Link>
              </li>
              <li className=" self-center" onMouseEnter={() => setIsOpen(true)}>
                <Link href="#news" className="p-3 hover:border-b-2 hover:border-black transition duration-300">
                  ผู้ชาย
                </Link>
              </li>
              <li className=" self-center" onMouseEnter={() => setIsOpen(true)}>
                <Link href="#contact" className="p-3 hover:border-b-2 hover:border-black transition duration-300">
                  ผู้หญิง
                </Link>
              </li>
              <li className=" self-center" onMouseEnter={() => setIsOpen(true)}>
                <Link href="#contact" className="p-3 hover:border-b-2 hover:border-black transition duration-300">
                  เด็กผู้ชาย
                </Link>
              </li>
              <li className=" self-center" onMouseEnter={() => setIsOpen(true)}>
                <Link href="#contact" className="p-3 hover:border-b-2 hover:border-black transition duration-300">
                  เด็กผู้หญิง
                </Link>
              </li>
              <li className=" self-center" onMouseEnter={() => setIsOpen(true)}>
                <Link href="#contact" className="p-3 hover:border-b-2 hover:border-black transition duration-300">
                  ลดราคา
                </Link>
              </li>
            </ul>
            <div className="flex w-full self-center space-x-4 justify-end" onMouseEnter={() => setIsOpen(false)}>
              <SearchInput />
              <div className="self-center">
                <FiHeart />
              </div>
              <div className="self-center">
                <FiShoppingCart />
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div
        onMouseLeave={() => setIsOpen(false)}
        className={`bg-red-400 w-full z-20 fixed transition-all duration-300 transform ${
          isOpen ? 'opacity-100 max-h-96 scale-100' : 'opacity-0 max-h-0 scale-95'
        } ${prevScrollY > 40 && 'top-14'}`}
      >
        <div className="container mx-10 p-4">
          <p>Your content here</p>
        </div>
      </div>
    </div>
  )
}

export default FadeOutDiv
