
"use client"

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { Eye, Cpu, MousePointer2, Zap, ArrowRight } from 'lucide-react'

const strategyPillars = [
  {
    id: 'hierarchy',
    title: 'Visual Hierarchy',
    label: 'PERCEPTION',
    description: 'Mastering attention through strategic scale, weight, and positioning. We ensure users find what they need in under 2 seconds.',
    icon: <Eye className="w-6 h-6" />,
    color: 'text-primary'
  },
  {
    id: 'performance',
    title: 'Technical Depth',
    label: 'EXECUTION',
    description: 'Zero-bloat architecture ensuring sub-800ms load times. Performance is not just speed; it is a fundamental design feature.',
    icon: <Cpu className="w-6 h-6" />,
    color: 'text-amber-400'
  },
  {
    id: 'conversion',
    title: 'Conversion Logic',
    label: 'PSYCHOLOGY',
    description: 'Strategy meets psychology. Every interaction is designed to guide users seamlessly through their journey with zero friction.',
    icon: <MousePointer2 className="w-6 h-6" />,
    color: 'text-emerald-400'
  }
]

export function TechnicalReality() {
  const [activePillar, setActivePillar] = useState(strategyPillars[0])

  return (
    <section className="py-32 relative overflow-hidden bg-card/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7">
            <div className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
              STRATEGY
            </div>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-12 max-w-2xl">
              Bridging Creative Vision <br /><span className="text-muted-foreground">with Technical Reality.</span>
            </h2>
            
            <div className="space-y-6 max-w-xl">
              {strategyPillars.map((pillar) => (
                <button
                  key={pillar.id}
                  onMouseEnter={() => setActivePillar(pillar)}
                  className={cn(
                    "w-full text-left p-8 rounded-[2rem] transition-all duration-500 group relative border",
                    activePillar.id === pillar.id 
                      ? "bg-white/5 border-white/10 shadow-xl scale-[1.02]" 
                      : "bg-transparent border-transparent opacity-50 hover:opacity-100"
                  )}
                >
                  <div className="flex items-center gap-6 relative z-10">
                    <div className={cn(
                      "p-4 rounded-2xl neumo-card-inset transition-colors duration-500",
                      activePillar.id === pillar.id ? pillar.color : "text-muted-foreground"
                    )}>
                      {pillar.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">
                        {pillar.label}
                      </div>
                      <h3 className="text-2xl font-bold font-headline">{pillar.title}</h3>
                    </div>
                    <ArrowRight className={cn(
                      "w-5 h-5 transition-all duration-500",
                      activePillar.id === pillar.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    )} />
                  </div>
                  
                  {activePillar.id === pillar.id && (
                    <p className="mt-6 text-muted-foreground leading-relaxed animate-fade-in-up">
                      {pillar.description}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5 relative aspect-square w-full perspective-container">
            <div className={cn(
              "absolute inset-0 blur-[120px] rounded-full transition-colors duration-1000",
              activePillar.id === 'performance' ? "bg-amber-500/20" : "bg-primary/20"
            )} />
            
            <div className="relative h-full w-full bg-card border border-white/10 rounded-[4rem] p-12 flex items-center justify-center overflow-hidden card-3d group">
               {/* Visual Representation of the "Strategy" logic */}
               <div className="space-y-8 w-full inner-3d">
                  <div className={cn(
                    "h-4 rounded-full transition-all duration-700",
                    activePillar.id === 'hierarchy' ? "w-3/4 bg-primary" : "w-1/2 bg-white/10"
                  )} />
                  
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map(i => (
                      <div 
                        key={i} 
                        className={cn(
                          "h-24 rounded-2xl transition-all duration-700 delay-100",
                          activePillar.id === 'performance' 
                            ? "bg-amber-500/20 border border-amber-500/30 scale-110" 
                            : "bg-white/5 border border-white/5"
                        )} 
                      />
                    ))}
                  </div>

                  <div className={cn(
                    "h-48 w-full rounded-3xl transition-all duration-1000 delay-200 relative overflow-hidden",
                    activePillar.id === 'conversion' 
                      ? "bg-emerald-500/10 border border-emerald-500/20" 
                      : "bg-white/5 border border-white/5"
                  )}>
                    {activePillar.id === 'conversion' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Zap className="w-12 h-12 text-emerald-500 animate-pulse" />
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4">
                    <div className="h-4 w-1/3 bg-white/10 rounded-full" />
                    <div className="h-4 w-1/4 bg-white/10 rounded-full" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
