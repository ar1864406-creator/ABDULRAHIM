"use client"

import React from 'react'

const tags = ["UI/UX DESIGN", "CONVERSION OPTIMIZATION", "BRAND IDENTITY", "HTML", "CSS", "JAVASCRIPT", "PYTHON", "UI PROTOTYPING", "FIGMA", "SEO STRATEGY", "TECHNICAL ANALYSIS"]

export function TechnicalReality() {
  return (
    <section className="py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
              STRATEGY
            </div>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-12">
              Bridging the gap between creative vision and technical reality.
            </h2>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold text-muted-foreground uppercase tracking-widest"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative aspect-square w-full max-w-lg mx-auto">
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full" />
            <div className="relative h-full w-full bg-card border border-white/10 rounded-[3rem] p-8 flex items-center justify-center overflow-hidden">
               {/* Mockup Graphic placeholder */}
               <div className="space-y-4 w-full">
                  <div className="h-4 w-1/2 bg-white/10 rounded-full" />
                  <div className="h-32 w-full bg-white/5 rounded-2xl" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 w-full bg-primary/20 rounded-2xl" />
                    <div className="h-20 w-full bg-white/5 rounded-2xl" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
