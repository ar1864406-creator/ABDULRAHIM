"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-abstract')

  return (
    <section className="relative pt-48 pb-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-[1.2] text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-morphism text-primary text-xs font-bold uppercase tracking-[0.2em] mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Intelligence Redefined</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] mb-8 font-headline tracking-tighter">
              The Architecture <br /> 
              <span className="gradient-text">of Genius.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              NeuroFlow AI bridges the gap between thought and execution. Experience an interface designed for the speed of light and the depth of human intuition.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <Button size="lg" className="h-16 px-10 text-lg bg-primary hover:bg-[#FFF0C4] hover:text-[#1a0301] rounded-2xl neon-glow-primary transition-all duration-300 group">
                Begin Experience <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-2xl border-white/10 glass-morphism text-white hover:bg-[#8C1007] hover:border-[#8C1007] transition-all duration-300">
                Technical Blueprint
              </Button>
            </div>
            
            <div className="mt-16 flex items-center justify-center lg:justify-start gap-10 opacity-40">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Quantum Security</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Nano-Latency</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full group perspective-container">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] animate-float-slow transition-transform duration-700 group-hover:scale-[1.02] card-3d">
              <div className="inner-3d">
                <Image 
                  src={heroImg?.imageUrl || ''} 
                  alt={heroImg?.description || ''} 
                  width={1200}
                  height={1200}
                  className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  data-ai-hint={heroImg?.imageHint}
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Ambient Background Glows */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  )
}