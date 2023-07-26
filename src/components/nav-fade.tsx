'use client'

import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

const FadeOutDiv = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [prevScrollY, setPrevScrollY] = useState(0)

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

  // Attach the event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div
      className={`transition-opacity ${
        isVisible ? `opacity-100 ${prevScrollY <= 40 ? '' : 'fixed top-0'}` : 'opacity-0'
      } container mx-10`}
    >
      <div className="bg-white ">
        <nav className="flex justify-center h-14">
          <ul className="flex space-x-4">
            <li className="self-center">
              <Link href="#home" className="p-3 hover:border-b-2 hover:border-black transition duration-300">
                Home
              </Link>
            </li>
            <li className=" self-center">
              <Link href="#news" className="p-3 hover:border-b-2 hover:border-black transition duration-300">
                News
              </Link>
            </li>
            <li className=" self-center">
              <Link href="#contact" className="p-3 hover:border-b-2 hover:border-black transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default FadeOutDiv
