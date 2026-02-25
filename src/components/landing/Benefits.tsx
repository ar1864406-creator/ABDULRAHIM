"use client"

import React from 'react'
import { Zap, Shield, Brain, Layers, MessageSquare, Code } from 'lucide-react'

const benefits = [
  {
    icon: <Brain className="w-10 h-10 text-primary" />,
    title: "Infinite Knowledge",
    description: "Access a vast reservoir of information updated in real-time, processed through our proprietary neural architecture."
  },
  {
    icon: <Zap className="w-10 h-10 text-secondary" />,
    title: "Instant Execution",
    description: "Get complex tasks done in seconds. From code generation to market analysis, NeuroFlow delivers speed without compromise."
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "Privacy First",
    description: "Your data is encrypted end-to-end. We never train our public models on your proprietary or sensitive information."
  },
  {
    icon: <Layers className="w-10 h-10 text-secondary" />,
    title: "Multimodal Power",
    description: "Understand and generate text, code, images, and data visualizations within a single fluid conversation thread."
  },
  {
    icon: <MessageSquare className="w-10 h-10 text-primary" />,
    title: "Natural Nuance",
    description: "Experience conversations that feel human. NeuroFlow understands sarcasm, subtext, and complex instructions."
  },
  {
    icon: <Code className="w-10 h-10 text-secondary" />,
    title: "Developer Ready",
    description: "Seamless API integration with support for all major frameworks. Build your own AI-powered tools on our backbone."
  }
]

export function Benefits() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-base font-bold text-primary uppercase tracking-[0.2em] mb-4">Core Advantages</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-headline">Designed for those who <span className="text-secondary">demand more.</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div 
              key={i} 
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="mb-6 p-3 w-fit rounded-xl bg-background border border-border/50 group-hover:neon-glow-primary transition-all">
                {benefit.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 font-headline">{benefit.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
