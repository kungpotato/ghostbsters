'use client'

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
      {/* Your content goes here */}
      {/* Replace this with the content you want to hide */}
      <div className="bg-white p-4">
        <h1 className="text-xl font-bold">Content to hide</h1>
        <p>This is the content that will fade out when scrolling down.</p>
      </div>
    </div>
  )
}

export default FadeOutDiv
