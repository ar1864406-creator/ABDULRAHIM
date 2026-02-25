"use client"

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Layout, Code } from 'lucide-react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

interface Particle {
  id: number;
  size: number;
  top: string;
  left: string;
  delay: string;
  duration: string;
  opacity: number;
}

export function Hero() {
  const [particles, setParticles] = useState<Particle[]>([])
  const profileImg = PlaceHolderImages.find(img => img.id === 'hero-profile')

  useEffect(() => {
    // High density particles with increased visibility
    const newParticles = [...Array(80)].map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2, // Increased size range
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      delay: Math.random() * -20 + 's',
      duration: Math.random() * 15 + 15 + 's',
      opacity: Math.random() * 0.5 + 0.3 // Increased opacity base and range
    }))
    setParticles(newParticles)
  }, [])

  return (
    <section className="relative pt-48 pb-24 overflow-hidden">
      {/* Dynamic Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-[#FFF0C4] animate-drift"
            style={{
              width: p.size + 'px',
              height: p.size + 'px',
              top: p.top,
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              opacity: p.opacity
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-[1.2] text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-white/10 text-[#FFF0C4] text-xs font-bold uppercase tracking-[0.2em] mb-8 animate-pulse">
              <Sparkles className="w-4 h-4" />
              <span>Available for New Projects</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] mb-8 font-headline tracking-tighter">
              Sculpting <br /> 
              <span className="gradient-text">Digital Value.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              I’m Abdul Rahim, a passionate Web UI/UX Designer & Frontend Developer. I craft modern, conversion-focused experiences that balance deep aesthetics with nano-latency performance.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <Button size="lg" className="h-16 px-10 text-lg bg-primary hover:bg-[#FFF0C4] hover:text-[#1a0301] rounded-2xl neon-glow-primary transition-all duration-300 group">
                View My Works <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-2xl border-white/10 glass-card text-white hover:bg-[#8C1007] transition-all duration-300">
                Download Resume
              </Button>
            </div>
            
            <div className="mt-16 flex items-center justify-center lg:justify-start gap-10 opacity-40">
              <div className="flex items-center gap-3">
                <Layout className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">UI/UX Strategy</span>
              </div>
              <div className="flex items-center gap-3">
                <Code className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Modern Stack</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full group perspective-container">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] animate-float-slow transition-transform duration-700 group-hover:scale-[1.02] card-3d aspect-square sm:aspect-auto">
              <div className="inner-3d relative w-full h-[500px] lg:h-[600px]">
                <Image 
                  src={profileImg?.imageUrl || ''} 
                  alt="Abdul Rahim Profile" 
                  fill
                  className="object-cover transition-all duration-700"
                  data-ai-hint="portrait male"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
