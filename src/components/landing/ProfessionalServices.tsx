"use client"

import React, { useState, useRef } from 'react'
import { Layout, Rocket, Code2, PenTool } from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Designing intuitive interfaces that balance beauty with business goals. Every pixel serves a strategic purpose."
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Landing Pages",
    description: "High-conversion landing pages optimized for performance and clarity. Focused on user intent and impact."
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Web Development",
    description: "Clean, performant code using modern frameworks and best practices. Built for scale and responsiveness."
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Template Design",
    description: "Scalable design systems and component libraries for rapid growth. Ensuring consistency across ecosystems."
  }
]

function ServiceCard({ service }: { service: typeof services[0] }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    
    // Calculate mouse position relative to the center of the card
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    // Map mouse position to -15deg to 15deg rotation
    const rotateX = ((y - centerY) / centerY) * -15
    const rotateY = ((x - centerX) / centerX) * 15
    
    setRotate({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    // Reset rotation when mouse leaves the card
    setRotate({ x: 0, y: 0 })
  }

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group bg-card p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden transition-all duration-300 ease-out",
        "hover:border-primary/30 hover:bg-card/80 shadow-2xl"
      )}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: rotate.x === 0 && rotate.y === 0 ? 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)' : 'none'
      }}
    >
      {/* Animated background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 space-y-8" style={{ transform: 'translateZ(60px)' }}>
        <div className="text-primary p-4 w-fit rounded-2xl neumo-card-inset group-hover:scale-110 transition-transform duration-500">
          {service.icon}
        </div>
        
        <div style={{ transform: 'translateZ(40px)' }}>
          <h3 className="text-2xl font-bold mb-4 font-headline group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed font-light">
            {service.description}
          </p>
        </div>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
    </div>
  )
}

export function ProfessionalServices() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <div className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
            MY SERVICES
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Professional <span className="text-muted-foreground">Services</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
