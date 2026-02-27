
"use client"

import React, { useEffect, useState, useRef } from 'react'
import { cn } from '@/lib/utils'

/**
 * @fileOverview A high-fidelity 3D custom cursor.
 * Features perspective-based tilting, layered depth, and velocity-responsive physics.
 */

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  
  const cursorRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const positionRef = useRef({ x: 0, y: 0 })
  const lastPosRef = useRef({ x: 0, y: 0 })
  const velocityRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const updateCursor = () => {
      if (cursorRef.current && innerRef.current) {
        // Calculate velocity for dynamic tilt
        velocityRef.current = {
          x: positionRef.current.x - lastPosRef.current.x,
          y: positionRef.current.y - lastPosRef.current.y
        }
        lastPosRef.current = { ...positionRef.current }

        // Apply movement with translate3d for GPU acceleration
        cursorRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`
        
        // Apply 3D Tilt based on movement velocity
        // tiltX is based on vertical movement, tiltY on horizontal
        const tiltX = Math.max(Math.min(velocityRef.current.y * 0.4, 25), -25)
        const tiltY = Math.max(Math.min(-velocityRef.current.x * 0.4, 25), -25)
        
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
      className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      style={{ width: '40px', height: '40px', perspective: '600px' }}
    >
      <div 
        ref={innerRef}
        className={cn(
          "w-full h-full flex items-center justify-center transition-transform duration-300 ease-out",
          isHovering ? "scale-[1.6]" : "scale-100"
        )}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* 3D Depth Layers */}
        
        {/* Shadow Layer (Deepest) */}
        <div 
          className="absolute inset-0 opacity-30 blur-[6px] bg-black rounded-full" 
          style={{ transform: 'translateZ(-15px) scale(0.8)' }}
        />
        
        {/* Glow Layer (Middle) */}
        <div 
          className={cn(
            "absolute inset-0 opacity-20 blur-[10px] rounded-full transition-colors duration-500",
            isHovering ? "bg-white" : "bg-primary"
          )} 
          style={{ transform: 'translateZ(-8px)' }}
        />

        {/* The Main Pointer Head (Foremost) */}
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          className={cn(
            "fill-primary transition-colors duration-300 relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
            isHovering && "fill-white"
          )}
          style={{ transform: 'translateZ(12px) rotate(-15deg)' }}
        >
          {/* Sharp Triangle Head */}
          <path d="M2 2l18 9-9 2-9 9z" />
        </svg>
      </div>
    </div>
  )
}
