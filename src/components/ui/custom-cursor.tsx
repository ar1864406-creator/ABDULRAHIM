
"use client"

import React, { useEffect, useState, useRef } from 'react'
import { cn } from '@/lib/utils'

/**
 * @fileOverview Optimized precision custom cursor.
 */

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  
  const cursorRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const positionRef = useRef({ x: 0, y: 0 })
  const lastPosRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const updateCursor = () => {
      if (cursorRef.current && innerRef.current) {
        const velX = positionRef.current.x - lastPosRef.current.x
        const velY = positionRef.current.y - lastPosRef.current.y
        
        lastPosRef.current = { ...positionRef.current }

        // Use translate3d for hardware acceleration
        cursorRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`
        
        // Tilt calculation
        const tiltX = Math.max(Math.min(velY * 0.25, 12), -12)
        const tiltY = Math.max(Math.min(-velX * 0.25, 12), -12)
        
        innerRef.current.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
      }
      rafRef.current = requestAnimationFrame(updateCursor)
    }

    const onMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('card-3d') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA'

      setIsHovering(!!isInteractive)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mouseover', onMouseOver, { passive: true })
    rafRef.current = requestAnimationFrame(updateCursor)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      style={{ width: '32px', height: '32px', perspective: '800px' }}
    >
      <div 
        ref={innerRef}
        className={cn(
          "w-full h-full flex items-center justify-center transition-transform duration-300 ease-out will-change-transform",
          isHovering ? "scale-[1.3]" : "scale-100"
        )}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Simplified layers for performance */}
        <div 
          className="absolute inset-0 opacity-15 blur-[5px] bg-primary rounded-full transition-colors duration-500" 
          style={{ transform: 'translateZ(-5px)' }}
        />

        <svg 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          className={cn(
            "fill-primary transition-colors duration-300 relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]",
            isHovering && "fill-white"
          )}
          style={{ transform: 'translateZ(10px) rotate(-10deg)' }}
        >
          <path d="M2 2l20 6-14 2-2 14z" />
        </svg>
      </div>
    </div>
  )
}
