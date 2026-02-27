"use client"

import React, { useEffect, useState, useRef } from 'react'
import { Cpu, Code2, PenTool as Figma, Rocket, Layers, Database } from 'lucide-react'
import { cn } from '@/lib/utils'

const technicalSkills = [
  { name: "UI/UX Design (Figma)", percentage: 95, icon: <Figma className="w-5 h-5" /> },
  { name: "Frontend Development (React/Next.js)", percentage: 92, icon: <Code2 className="w-5 h-5" /> },
  { name: "Tailwind CSS & Styling", percentage: 98, icon: <Layers className="w-5 h-5" /> },
  { name: "JavaScript / TypeScript", percentage: 88, icon: <Cpu className="w-5 h-5" /> },
  { name: "Performance Optimization", percentage: 90, icon: <Rocket className="w-5 h-5" /> },
  { name: "Backend Integration (Python/Firebase)", percentage: 82, icon: <Database className="w-5 h-5" /> },
]

export function SkillProgress() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className={cn(
            "transition-all duration-1000 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          )}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-[#FFF0C4] text-[10px] font-bold uppercase tracking-[0.3em] mb-6 border border-white/10">
              Technical Arsenal
            </div>
            <h2 className="text-5xl md:text-7xl font-bold font-headline leading-tight mb-8">
              The tools behind the <span className="gradient-text">craft.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-xl leading-relaxed font-light">
              Proficiency isn't just about knowing the tool; it's about mastering the workflow. I leverage a modern stack to build interfaces that are as robust as they are beautiful.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <div className="neumo-card p-6 flex items-center gap-4 group hover:scale-105 transition-transform duration-500">
                <div className="text-primary font-bold text-3xl group-hover:animate-pulse">2+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground leading-tight">Years of<br/>Execution</div>
              </div>
              <div className="neumo-card p-6 flex items-center gap-4 group hover:scale-105 transition-transform duration-500">
                <div className="text-primary font-bold text-3xl group-hover:animate-pulse">50+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground leading-tight">Projects<br/>Optimized</div>
              </div>
            </div>
          </div>

          <div className={cn(
            "space-y-8 transition-all duration-1000 delay-500",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          )}>
            <div className="neumo-card p-10 rounded-[3rem] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="space-y-10 relative z-10">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-3 group/skill">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg neumo-card-inset text-primary transition-colors group-hover/skill:bg-primary group-hover/skill:text-white">
                          {skill.icon}
                        </div>
                        <span className="text-sm font-bold tracking-wide">{skill.name}</span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs font-bold text-primary">
                          {isVisible ? skill.percentage : 0}
                        </span>
                        <span className="text-[10px] font-bold text-primary/50">%</span>
                      </div>
                    </div>
                    <div className="relative h-3 w-full neumo-card-inset rounded-full overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full bg-primary transition-all duration-[1500ms] ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full"
                        style={{ 
                          width: isVisible ? `${skill.percentage}%` : '0%',
                          transitionDelay: `${index * 150}ms`
                        }}
                      >
                        <div className="absolute top-0 right-0 w-8 h-full bg-white/20 blur-sm" />
                      </div>
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