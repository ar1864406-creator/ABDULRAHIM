"use client"

import React from 'react'
import { UserPlus, MessageCircle, Rocket } from 'lucide-react'

const steps = [
  {
    icon: <UserPlus className="w-8 h-8" />,
    title: "Quick Signup",
    description: "Join the NeuroFlow community in seconds. No credit card required to start your journey."
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Start Conversing",
    description: "Type, speak, or upload documents. Our AI adapts to your preferred communication style instantly."
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Scale Results",
    description: "Integrate findings into your project and watch your productivity skyrocket with AI-driven insights."
  }
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-card/10 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-headline">Your Path to <span className="gradient-text">Augmented Intelligence</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From zero to hero in three simple steps. We made it as intuitive as breathing.
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
