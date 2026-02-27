"use client"

import React, { useEffect, useState, useRef } from 'react'
import { cn } from '@/lib/utils'

/**
 * @fileOverview A high-performance custom cursor that uses requestAnimationFrame 
 * and direct DOM manipulation to minimize React overhead.
 */

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  
  // Refs for direct DOM manipulation to achieve buttery smooth 120fps+ performance
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const positionRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const updateCursor = () => {
      if (outerRef.current && innerRef.current) {
        // Outer cursor with smooth follow
        outerRef.current.style.transform = `translate3d(${positionRef.current.x - 10}px, ${positionRef.current.y - 10}px, 0)`
        
        // Inner dot with instant follow
        innerRef.current.style.left = `${positionRef.current.x}px`
        innerRef.current.style.top = `${positionRef.current.y}px`
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
    <>
      <div 
        ref={outerRef}
        className={cn(
          "custom-cursor bg-foreground/10 border border-foreground/20 backdrop-blur-[1px] will-change-transform pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference rounded-full transition-transform duration-200 cubic-bezier(0.23, 1, 0.32, 1)",
          isHovering && "scale-[2.5] bg-primary/20 border-primary/40"
        )}
        style={{ width: '20px', height: '20px' }}
      />
      <div 
        ref={innerRef}
        className={cn(
          "custom-cursor-inner animate-cursor-pulse pointer-events-none fixed z-[10000] rounded-full will-change-[left,top]",
          isHovering && "scale-0"
        )}
        style={{ width: '6px', height: '6px', transform: 'translate(-50%, -50%)' }}
      />
    </>
  )
}
