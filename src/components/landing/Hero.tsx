"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-abstract')

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3 h-3" />
              <span>Next Generation AI Experience</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 font-headline">
              Unleash the Power of <span className="gradient-text">Contextual Intelligence</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0">
              NeuroFlow AI seamlessly integrates with your workflow to provide fast, accurate, and deeply relevant answers. Empower your creativity and productivity with the next evolution of chat.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 neon-glow-primary">
                Try NeuroFlow Free <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-primary/50 text-primary hover:bg-primary/10">
                View Documentation
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">Ultra Low Latency</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-lg lg:max-w-none animate-float">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              <Image 
                src={heroImg?.imageUrl || ''} 
                alt={heroImg?.description || ''} 
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                data-ai-hint={heroImg?.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
