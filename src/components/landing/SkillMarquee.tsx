"use client"

import React from 'react'
import { 
  Figma, 
  Code2, 
  Layers, 
  Cpu, 
  Rocket, 
  Database, 
  Terminal, 
  Atom, 
  Flame, 
  Blocks,
  Smartphone,
  ShieldCheck
} from 'lucide-react'

const marqueeSkills = [
  { name: "Figma", icon: <Figma className="w-5 h-5" /> },
  { name: "Next.js", icon: <Blocks className="w-5 h-5" /> },
  { name: "Tailwind CSS", icon: <Layers className="w-5 h-5" /> },
  { name: "TypeScript", icon: <Code2 className="w-5 h-5" /> },
  { name: "React", icon: <Atom className="w-5 h-5" /> },
  { name: "Firebase", icon: <Flame className="w-5 h-5" /> },
  { name: "Python", icon: <Terminal className="w-5 h-5" /> },
  { name: "Performance", icon: <Rocket className="w-5 h-5" /> },
  { name: "UI/UX", icon: <Smartphone className="w-5 h-5" /> },
  { name: "Accessibility", icon: <ShieldCheck className="w-5 h-5" /> },
]

export function SkillMarquee() {
  return (
    <div className="relative w-full py-16 overflow-hidden bg-background/30 border-y border-white/5 backdrop-blur-sm perspective-container">
      {/* Gradients to fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-20" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-20" />
      
      <div className="flex animate-marquee whitespace-nowrap" style={{ transformStyle: 'preserve-3d' }}>
        {/* Double the list for infinite effect */}
        {[...marqueeSkills, ...marqueeSkills, ...marqueeSkills].map((skill, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 mx-8 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 marquee-3d-item group"
          >
            <span className="text-primary transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">{skill.icon}</span>
            <span className="text-sm font-bold uppercase tracking-widest">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}