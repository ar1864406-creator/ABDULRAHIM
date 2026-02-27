"use client"

import React from 'react'
import { MousePointer2, Smartphone, Terminal, Palette, BarChart3, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

const skills = [
  {
    icon: <Palette className="w-8 h-8" />,
    color: "text-red-400",
    bg: "bg-red-400/10",
    title: "UI/UX Mastery",
    description: "Designing clean, user-centered interfaces with a focus on visual hierarchy and semantic nuance."
  },
  {
    icon: <MousePointer2 className="w-8 h-8" />,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    title: "Prototyping",
    description: "Turning raw ideas into interactive, high-fidelity prototypes that bridge the gap between concept and code."
  },
  {
    icon: <Terminal className="w-8 h-8" />,
    color: "text-red-400",
    bg: "bg-red-400/10",
    title: "Frontend Engineering",
    description: "Expertise in HTML5, CSS3, JavaScript, and Python. Writing maintainable, scalable code for modern browsers."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    title: "Responsive Design",
    description: "Ensuring flawless performance across all devices, from massive ultra-wides to mobile screens."
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    color: "text-red-400",
    bg: "bg-red-400/10",
    title: "Conversion-Focused",
    description: "Designing with business goals in mind. Every pixel is placed to drive engagement and results."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    title: "SEO & Performance",
    description: "Nano-latency interfaces that score 100 on Core Web Vitals while looking absolutely stunning."
  }
]

export function Benefits() {
  return (
    <section id="expertise" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-[#FFF0C4] text-[10px] font-bold uppercase tracking-[0.3em] mb-6 border border-white/10">
            Expertise & Skills
          </div>
          <h2 className="text-5xl md:text-7xl font-bold font-headline leading-tight">
            I craft digital <br />
            <span className="text-muted-foreground">experiences that</span> <span className="gradient-text">scale business.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 perspective-container">
          {skills.map((skill, i) => (
            <div 
              key={i} 
              className={cn(
                "group neumo-card p-10 rounded-[2.5rem] transition-all duration-500 relative overflow-hidden card-3d",
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className={`mb-8 p-4 w-fit rounded-2xl neumo-card-inset ${skill.color} transition-transform duration-500 inner-3d`}>
                {skill.icon}
              </div>
              
              <div className="inner-3d">
                <h4 className="text-2xl font-bold mb-4 font-headline group-hover:text-primary transition-colors">{skill.title}</h4>
                <p className="text-muted-foreground leading-relaxed font-light text-lg">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}