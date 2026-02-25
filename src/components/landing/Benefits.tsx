"use client"

import React from 'react'
import { Zap, Shield, Brain, Layers, MessageSquare, Code } from 'lucide-react'

const benefits = [
  {
    icon: <Brain className="w-8 h-8" />,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    title: "Neural Synthesis",
    description: "Deep-layer learning models that synthesize information from trillions of data points in milliseconds."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    title: "Instant Velocity",
    description: "Built for speed. Our proprietary engine processes complex logic paths faster than biological thought."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    title: "Zero-Knowledge",
    description: "Enterprise-grade privacy with zero-knowledge architecture. Your data never leaves your secure enclave."
  },
  {
    icon: <Layers className="w-8 h-8" />,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    title: "Multi-Modal Flux",
    description: "Seamlessly transition between code, creative writing, and data visualization in a single unified flow."
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    title: "Semantic Nuance",
    description: "Understands context, tone, and intent. NeuroFlow listens to what you mean, not just what you say."
  },
  {
    icon: <Code className="w-8 h-8" />,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    title: "Deep Integration",
    description: "Native SDKs for every major ecosystem. Deploy AI-powered functionality into your stack instantly."
  }
]

export function Benefits() {
  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-foreground text-[10px] font-bold uppercase tracking-[0.3em] mb-6 border border-white/10">
            Superior Advantages
          </div>
          <h2 className="text-5xl md:text-7xl font-bold font-headline leading-tight">
            Designed for those who <br />
            <span className="text-muted-foreground">redefine</span> <span className="gradient-text">the impossible.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-container">
          {benefits.map((benefit, i) => (
            <div 
              key={i} 
              className="group clay-card p-10 rounded-[2.5rem] transition-all duration-500 relative overflow-hidden card-3d"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className={`mb-8 p-4 w-fit rounded-2xl ${benefit.bg} ${benefit.color} border border-white/5 transition-transform duration-500 inner-3d`}>
                {benefit.icon}
              </div>
              
              <div className="inner-3d">
                <h4 className="text-2xl font-bold mb-4 font-headline group-hover:text-primary transition-colors">{benefit.title}</h4>
                <p className="text-muted-foreground leading-relaxed font-light text-lg">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}