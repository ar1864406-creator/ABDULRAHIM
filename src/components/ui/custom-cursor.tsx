
"use client"

import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY })
        if (!isVisible) setIsVisible(true)
      })
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

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
      window.removeEventListener('mouseout', onMouseOut)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <>
      <div 
        className={cn(
          "custom-cursor bg-foreground/10 border border-foreground/20 backdrop-blur-[1px]",
          isHovering && "scale-[2.5] bg-primary/20 border-primary/40"
        )}
        style={{ 
          transform: `translate3d(${position.x - 10}px, ${position.y - 10}px, 0)` 
        }}
      />
      <div 
        className={cn(
          "custom-cursor-inner animate-cursor-pulse",
          isHovering && "scale-0"
        )}
        style={{ 
          left: position.x,
          top: position.y,
        }}
      />
    </>
  )
}
