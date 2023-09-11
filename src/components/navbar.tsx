'use client'

import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import SearchInput from './search'
import { FiHeart, FiShoppingCart } from 'react-icons/fi'

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [prevScrollY, setPrevScrollY] = useState(0)
  const [currentTab, setTab] = useState<number | null>(null)
  const [isFocused, setIsFocused] = useState(false)

  const handleScroll = useCallback(() => {
    setTab(null)
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
      <nav onMouseEnter={() => setTab(null)}>
        <div className="relative bg-gray-100 h-10 w-full">
          <div className="container flex justify-end h-10 text-xs items-center space-x-3">
            <div>ค้นหาร้านค้า</div>
            <div>|</div>
            <div>ความช่วยเหลือ</div>
            <div>|</div>
            <div>เข้าร่วมกับเรา</div>
            <div>|</div>
            <div>ลงเชื่อเข้าใช้</div>
          </div>
        </div>
      </nav>
      <div
        className={`container z-20 transition-opacity ${
          isVisible || isFocused
            ? `opacity-100 ${prevScrollY > 40 ? 'fixed top-0 left-0 right-0 w-full' : 'relative '}`
            : 'opacity-0'
        } `}
      >
        <div className={`bg-white`}>
          <nav className="flex justify-center h-14">
            <div className="w-full" onMouseEnter={() => setTab(null)} />
            <ul className="flex space-x-4 min-w-max">
              <li className="self-center" onMouseEnter={() => !isFocused && setTab(1)}>
                <Link
                  href="#home"
                  className={`p-3 ${currentTab === 1 && 'border-b-2 border-black transition duration-300'}`}
                >
                  มาใหม่
                </Link>
              </li>
              <li className=" self-center" onMouseEnter={() => !isFocused && setTab(2)}>
                <Link
                  href="#news"
                  className={`p-3 ${currentTab === 2 && 'border-b-2 border-black transition duration-300'}`}
                >
                  ผู้ชาย
                </Link>
              </li>
              <li className=" self-center" onMouseEnter={() => !isFocused && setTab(3)}>
                <Link
                  href="#contact"
                  className={`p-3 ${currentTab === 3 && 'border-b-2 border-black transition duration-300'}`}
                >
                  ผู้หญิง
                </Link>
              </li>
              <li className=" self-center" onMouseEnter={() => !isFocused && setTab(4)}>
                <Link
                  href="#contact"
                  className={`p-3 ${currentTab === 4 && 'border-b-2 border-black transition duration-300'}`}
                >
                  เด็กผู้ชาย
                </Link>
              </li>
              <li className=" self-center" onMouseEnter={() => !isFocused && setTab(5)}>
                <Link
                  href="#contact"
                  className={`p-3 ${currentTab === 5 && 'border-b-2 border-black transition duration-300'}`}
                >
                  เด็กผู้หญิง
                </Link>
              </li>
              <li className=" self-center" onMouseEnter={() => !isFocused && setTab(6)}>
                <Link
                  href="#contact"
                  className={`p-3 ${currentTab === 6 && 'border-b-2 border-black transition duration-300'}`}
                >
                  ลดราคา
                </Link>
              </li>
            </ul>
            <div className="flex w-full self-center space-x-4 justify-end" onMouseEnter={() => setTab(null)}>
              <SearchInput
                onChange={() => {
                  setIsFocused(true)
                  setTab(null)
                }}
              />
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
      {!isFocused && (
        <div
          onMouseLeave={() => setTab(null)}
          className={`bg-red-400 w-full z-20 fixed transition-all duration-300 transform ${
            currentTab ? 'opacity-100 max-h-96 scale-100' : 'opacity-0 max-h-0 scale-95'
          } ${prevScrollY > 40 && 'top-14'}`}
        >
          <div className="container pt-4 pb-4">
            <p>Your content here</p>
          </div>
        </div>
      )}
      {!currentTab && (
        <div
          className={`bg-red-400 w-full z-20 fixed transition-all duration-300 transform ${
            isFocused ? 'opacity-100 max-h-96 scale-100' : 'opacity-0 max-h-0 scale-95'
          } ${prevScrollY > 40 && 'top-14'}`}
        >
          <div className="container pb-4 pt-4">
            <button
              onClick={() => {
                setIsFocused(false)
              }}
            >
              ปิด
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
