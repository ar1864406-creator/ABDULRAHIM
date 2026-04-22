
"use client"

import React, { useEffect, useState, useRef } from 'react'
import { cn } from '@/lib/utils'

/**
 * @fileOverview Premium precision mouse-style cursor with reactive physics and emerald highlights.
 */

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  
  const cursorRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  
  const positionRef = useRef({ x: 0, y: 0 })
  const lastPosRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const updateCursor = () => {
      if (cursorRef.current && innerRef.current && ringRef.current) {
        const velX = positionRef.current.x - lastPosRef.current.x
        const velY = positionRef.current.y - lastPosRef.current.y
        
        lastPosRef.current = { ...positionRef.current }

        // Core positioning
        cursorRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`
        
        // Dynamic tilt for the focal point to give it a "premium weight" feel
        const tiltX = Math.max(Math.min(velY * 0.25, 15), -15)
        const tiltY = Math.max(Math.min(-velX * 0.25, 15), -15)
        innerRef.current.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) rotateZ(${velX * 0.1}deg)`
        
        // Subtle magnetic ring behavior
        const ringScale = isHovering ? 1.5 : 1
        ringRef.current.style.transform = `scale(${ringScale})`
      }
      rafRef.current = requestAnimationFrame(updateCursor)
    }

    const onMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)
    }

    const onMouseDown = () => setIsClicking(true)
    const onMouseUp = () => setIsClicking(false)

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('card-3d') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.getAttribute('role') === 'button'

      setIsHovering(!!isInteractive)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mouseover', onMouseOver, { passive: true })
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    
    rafRef.current = requestAnimationFrame(updateCursor)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [isVisible, isHovering])

  if (!isVisible) return null

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform flex items-center justify-center -translate-x-[4px] -translate-y-[4px] mix-blend-difference"
      style={{ width: '32px', height: '32px', perspective: '1000px' }}
    >
      {/* Magnetic Aura / Outer Glow */}
      <div 
        ref={ringRef}
        className={cn(
          "absolute inset-0 rounded-full border border-white/5 transition-all duration-500 ease-out will-change-transform",
          isHovering ? "bg-primary/10 border-primary/20 scale-125" : "bg-transparent",
          isClicking && "scale-90 opacity-40"
        )}
      />

      {/* Premium Precision Arrowhead */}
      <div 
        ref={innerRef}
        className={cn(
          "relative w-6 h-6 transition-all duration-300 ease-out will-change-transform",
          isHovering ? "text-primary scale-110" : "text-white",
          isClicking && "scale-90"
        )}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
        >
          <path 
            d="M3 3L10.5 21L13.5 13.5L21 10.5L3 3Z" 
            fill="currentColor" 
            stroke="black" 
            strokeWidth="0.5"
            strokeLinejoin="round"
          />
        </svg>
        
        {/* Glow effect for interactive states */}
        <div className={cn(
          "absolute inset-0 bg-primary/40 blur-md rounded-full -z-10 transition-opacity duration-500",
          isHovering ? "opacity-100" : "opacity-0"
        )} />
      </div>

      {/* Subtle trail bloom */}
      <div 
        className={cn(
          "absolute inset-0 bg-primary/5 blur-xl rounded-full transition-opacity duration-700",
          isHovering ? "opacity-30" : "opacity-0"
        )}
      />
    </div>
  )
}
