
"use client"

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'EXPERTISE', href: '#expertise' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'SERVICES', href: '#services' },
  { name: 'CONTACT', href: '#contact' },
]

export function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 })
  const navRef = useRef<HTMLElement>(null)

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    setHoveredIndex(index)
    const target = e.currentTarget
    setIndicatorStyle({
      left: target.offsetLeft,
      width: target.offsetWidth,
      opacity: 1
    })
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setIndicatorStyle(prev => ({ ...prev, opacity: 0 }))
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
            className="absolute h-8 bg-white/10 border border-white/10 rounded-full transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-none"
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
              onMouseEnter={(e) => handleMouseEnter(e, index)}
              className={cn(
                "relative z-10 text-[10px] font-bold tracking-[0.2em] transition-all px-4 py-2 rounded-full",
                hoveredIndex === index ? "text-white" : "text-muted-foreground hover:text-white/80"
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
