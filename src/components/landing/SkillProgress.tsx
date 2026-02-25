"use client"

import React, { useEffect, useState } from 'react'
import { Progress } from "@/components/ui/progress"
import { Cpu, Code2, PenTool as Figma, Rocket, Layers, Database } from 'lucide-react'

const technicalSkills = [
  { name: "UI/UX Design (Figma)", percentage: 95, icon: <Figma className="w-5 h-5" /> },
  { name: "Frontend Development (React/Next.js)", percentage: 92, icon: <Code2 className="w-5 h-5" /> },
  { name: "Tailwind CSS & Styling", percentage: 98, icon: <Layers className="w-5 h-5" /> },
  { name: "JavaScript / TypeScript", percentage: 88, icon: <Cpu className="w-5 h-5" /> },
  { name: "Performance Optimization", percentage: 90, icon: <Rocket className="w-5 h-5" /> },
  { name: "Backend Integration (Python/Firebase)", percentage: 82, icon: <Database className="w-5 h-5" /> },
]

export function SkillProgress() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-[#FFF0C4] text-[10px] font-bold uppercase tracking-[0.3em] mb-6 border border-white/10">
              Technical Arsenal
            </div>
            <h2 className="text-5xl md:text-7xl font-bold font-headline leading-tight mb-8">
              The tools behind the <span className="gradient-text">craft.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-xl leading-relaxed font-light">
              Proficiency isn't just about knowing the tool; it's about mastering the workflow. I leverage a modern stack to build interfaces that are as robust as they are beautiful.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="clay-card p-6 flex items-center gap-4">
                <div className="text-primary font-bold text-3xl">2+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground leading-tight">Years of<br/>Execution</div>
              </div>
              <div className="clay-card p-6 flex items-center gap-4">
                <div className="text-primary font-bold text-3xl">50+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground leading-tight">Projects<br/>Optimized</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="clay-card p-10 rounded-[3rem] border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="space-y-10 relative z-10">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/5 text-primary border border-white/10">
                          {skill.icon}
                        </div>
                        <span className="text-sm font-bold tracking-wide">{skill.name}</span>
                      </div>
                      <span className="text-xs font-bold text-primary">{mounted ? skill.percentage : 0}%</span>
                    </div>
                    <div className="relative h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full bg-primary transition-all duration-1000 ease-out rounded-full"
                        style={{ width: mounted ? `${skill.percentage}%` : '0%' }}
                      />
                      <div className="absolute inset-0 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
