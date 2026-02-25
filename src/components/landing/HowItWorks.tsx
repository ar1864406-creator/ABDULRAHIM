"use client"

import React from 'react'
import { Search, PenTool, Rocket } from 'lucide-react'

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Strategy & Discovery",
    description: "I dive deep into your brand's DNA, identifying user pain points and conversion opportunities."
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Design & Prototype",
    description: "Crafting wireframes and high-fidelity prototypes that define the visual and functional path."
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Launch & Optimize",
    description: "Developing with clean code and launching a performant, scalable experience for the world."
  }
]

export function HowItWorks() {
  return (
    <section id="process" className="py-24 bg-card/10 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-headline">The Design <span className="gradient-text">Blueprint</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A conversion-focused process built on 2 years of professional refinement.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-background border-4 border-card flex items-center justify-center mb-8 neon-glow-secondary relative">
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div className="text-secondary">{step.icon}</div>
                </div>
                <h4 className="text-2xl font-bold mb-4 font-headline">{step.title}</h4>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
