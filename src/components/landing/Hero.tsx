"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { NeuralBackground } from '@/components/ui/neural-background'

export function Hero() {
  return (
    <section className="relative pt-64 pb-32 overflow-hidden">
      {/* Animated Background System */}
      <NeuralBackground />
      
      <div className="container mx-auto px-6 text-left relative z-10">
        <div className="inline-block text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-8 animate-fade-in-up">
          Nurturing Growth
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] mb-12 max-w-5xl animate-fade-in-up [animation-delay:200ms]">
          Designing Clean<br />
          <span className="text-gradient">Modern</span> Digital<br />
          Experiences
        </h1>
        
        <div className="flex flex-col sm:flex-row items-start justify-start gap-6 animate-fade-in-up [animation-delay:400ms]">
          <Button size="lg" className="h-14 px-10 rounded-full bg-primary hover:bg-primary/90 text-white font-bold tracking-tight transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            View Recent Work
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-10 rounded-full border-white/20 hover:bg-white/5 text-white font-bold tracking-tight transition-all hover:border-primary/50">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  )
}
