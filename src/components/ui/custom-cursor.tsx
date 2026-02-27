
"use client"

import React, { useEffect, useState, useRef } from 'react'
import { cn } from '@/lib/utils'

/**
 * @fileOverview A minimalist custom cursor that mimics a system arrow head 
 * but without the stem. Optimized for instant responsiveness.
 */

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  
  const cursorRef = useRef<HTMLDivElement>(null)
  const positionRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const updateCursor = () => {
      if (cursorRef.current) {
        // Direct transform update for maximum performance
        cursorRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`
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

    const onMouseOut = () => {
      setIsHovering(false)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseover', onMouseOver)
    window.addEventListener('mouseout', onMouseOut)
    rafRef.current = requestAnimationFrame(updateCursor)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
      window.removeEventListener('mouseout', onMouseOut)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div 
      ref={cursorRef}
      className={cn(
        "fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform transition-transform duration-200 ease-out",
        isHovering ? "scale-[1.8]" : "scale-100"
      )}
      style={{ width: '20px', height: '20px' }}
    >
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        className={cn(
          "fill-primary transition-colors duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]",
          isHovering && "fill-white"
        )}
      >
        {/* Sharp Triangle Head (Tilted like a system cursor but no stem) */}
        <path d="M2 2l18 9-9 2-9 9z" />
      </svg>
    </div>
  )
}
