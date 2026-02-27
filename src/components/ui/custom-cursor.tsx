"use client"

import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isGreen, setIsGreen] = useState(true)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
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

    // Interval to toggle cursor color every 500ms
    const interval = setInterval(() => {
      setIsGreen(prev => !prev)
    }, 500)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
      window.removeEventListener('mouseout', onMouseOut)
      clearInterval(interval)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <>
      <div 
        className={cn(
          "custom-cursor bg-foreground/20 border border-foreground/30",
          isHovering && "scale-[3] bg-primary/20 border-primary/50"
        )}
        style={{ 
          transform: `translate(${position.x - 10}px, ${position.y - 10}px)` 
        }}
      />
      <div 
        className={cn(
          "custom-cursor-inner transition-colors duration-300",
          isHovering && "scale-[0.5]"
        )}
        style={{ 
          left: position.x,
          top: position.y,
          backgroundColor: isGreen ? 'hsl(var(--primary))' : '#ffffff'
        }}
      />
    </>
  )
}
