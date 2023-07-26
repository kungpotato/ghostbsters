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
      <div className="bg-white h-16">
        <nav className="flex justify-center space-x-4">
          <a href="/dashboard" className="font-medium text-slate-700 hover:border-b-2 border-black transition-all">
            Home
          </a>
          <a href="/team" className="font-medium text-slate-700 hover:border-b-2 border-black transition-all">
            Team
          </a>
          <a href="/projects" className="font-medium text-slate-700 hover:border-b-2 border-black transition-all">
            Projects
          </a>
          <a href="/reports" className="font-medium text-slate-700 hover:border-b-2 border-black transition-all">
            Reports
          </a>
        </nav>
      </div>
    </div>
  )
}

export default FadeOutDiv
