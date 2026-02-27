"use client"

import React, { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'ABOUT', href: '#about', id: 'about' },
  { name: 'EXPERTISE', href: '#expertise', id: 'expertise' },
  { name: 'SKILLS', href: '#skills', id: 'skills' },
  { name: 'SERVICES', href: '#services', id: 'services' },
  { name: 'CONTACT', href: '#contact', id: 'contact' },
]

export function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 })
  const navRef = useRef<HTMLElement>(null)
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([])

  // Function to update indicator position based on a specific index
  const updateIndicator = useCallback((index: number | null, isHover: boolean) => {
    if (index !== null && linksRef.current[index]) {
      const target = linksRef.current[index]
      if (target) {
        setIndicatorStyle({
          left: target.offsetLeft,
          width: target.offsetWidth,
          opacity: 1
        })
      }
    } else if (!isHover && activeIndex === null) {
      setIndicatorStyle(prev => ({ ...prev, opacity: 0 }))
    }
  }, [activeIndex])

  // Scroll Spy: Detect which section is in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Adjusted for better trigger point
      threshold: 0
    }

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = navItems.findIndex(item => item.id === entry.target.id)
          if (index !== -1) {
            setActiveIndex(index)
          }
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, observerOptions)

    navItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  // Sync indicator with active index when not hovering
  useEffect(() => {
    if (hoveredIndex === null) {
      updateIndicator(activeIndex, false)
    }
  }, [activeIndex, hoveredIndex, updateIndicator])

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    updateIndicator(index, true)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    // Fallback to active index position after hover ends
    updateIndicator(activeIndex, false)
  }

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-fit group">
      <div className="flex items-center gap-16 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full px-12 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10 transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20 hover:scale-[1.02]">
        <Link href="/" className="group/logo flex items-center">
          <span className="text-xl font-bold animate-text-color-pulse tracking-tighter group-hover/logo:scale-110 transition-transform whitespace-nowrap">
            AR<span className="inline-block animate-blink">.</span>
          </span>
        </Link>
        
        <nav 
          ref={navRef}
          className="hidden md:flex items-center gap-2 relative"
          onMouseLeave={handleMouseLeave}
        >
          {/* Dynamic "White Box" Explorer Highlight */}
          <div 
            className="absolute h-8 bg-white/10 border border-white/10 rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-none"
            style={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
              opacity: indicatorStyle.opacity,
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          />

          {navItems.map((item, index) => (
            <Link 
              key={item.name}
              href={item.href} 
              ref={(el) => { linksRef.current[index] = el }}
              onMouseEnter={() => handleMouseEnter(index)}
              className={cn(
                "relative z-10 text-[10px] font-bold tracking-[0.2em] transition-all px-4 py-2 rounded-full",
                (hoveredIndex === index || (hoveredIndex === null && activeIndex === index)) 
                  ? "text-white" 
                  : "text-muted-foreground hover:text-white/80"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="md:hidden w-4" /> {/* Spacer for mobile balance */}
      </div>
    </header>
  )
}
