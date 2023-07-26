'use client'

import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

const FadeOutDiv = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [prevScrollY, setPrevScrollY] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = useCallback(() => {
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
    <div
      className={`transition-opacity ${
        isVisible ? `opacity-100 ${prevScrollY > 40 ? 'fixed top-0' : ''}` : 'opacity-0'
      } container mx-10`}
    >
      <div className={`bg-white`} onMouseLeave={() => setIsOpen(false)}>
        <nav className="flex justify-center h-14">
          <ul className="flex space-x-4">
            <li className="self-center" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
              <Link href="#home" className="p-3 hover:border-b-2 hover:border-black transition duration-300">
                Home
              </Link>
            </li>
            <li className=" self-center" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
              <Link href="#news" className="p-3 hover:border-b-2 hover:border-black transition duration-300">
                News
              </Link>
            </li>
            <li className=" self-center" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
              <Link href="#contact" className="p-3 hover:border-b-2 hover:border-black transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div
          onMouseLeave={() => setIsOpen(false)}
          onMouseEnter={() => setIsOpen(true)}
          className={`bg-white w-full z-[1] fixed transition-all duration-300 transform ${
            isOpen ? 'opacity-100 max-h-96 scale-100' : 'opacity-0 max-h-0 scale-95'
          }`}
        >
          <div className="mt-2 p-4">
            <p>Your content here</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FadeOutDiv
