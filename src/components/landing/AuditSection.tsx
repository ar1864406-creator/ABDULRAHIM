"use client"

import React, { useState } from 'react'
import { AlertCircle, ArrowRight, Zap, ShieldCheck, BarChart3 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

const auditPoints = [
  {
    id: 'nav',
    label: 'Navigation',
    top: '15%',
    left: '20%',
    problem: 'Confusing Information Architecture',
    impact: 'Users fail to find key service pages within 3 seconds, leading to a 40% bounce rate on entry.',
    solution: 'Implement a semantic, hierarchical menu system that prioritizes user intent and conversion paths.'
  },
  {
    id: 'hero',
    label: 'Hero CTA',
    top: '45%',
    left: '30%',
    problem: 'Friction-Heavy Call to Action',
    impact: 'Weak visual contrast and vague copy result in "decision fatigue," causing visitors to scroll past without engaging.',
    solution: 'Utilize high-contrast claymorphism buttons with action-oriented, value-based copy to drive immediate intent.'
  },
  {
    id: 'speed',
    label: 'Load Speed',
    top: '10%',
    left: '80%',
    problem: 'Unoptimized Asset Delivery',
    impact: 'Slow render times damage SEO rankings and frustrate mobile users. Every 1s delay reduces conversions by 7%.',
    solution: 'Nano-latency optimization using Next.js Image components and edge-network distribution.'
  },
  {
    id: 'trust',
    label: 'Trust Area',
    top: '75%',
    left: '60%',
    problem: 'Missing Social Proof',
    impact: 'Without visible credibility markers, users feel high "perceived risk," inhibiting them from sharing contact data.',
    solution: 'Strategic placement of verified trust badges and client results to build immediate authority.'
  }
]

export function AuditSection() {
  const [activePoint, setActivePoint] = useState(auditPoints[0])
  const dashboardImg = PlaceHolderImages.find(img => img.id === 'dashboard-mockup')

  return (
    <section id="audit" className="py-32 relative overflow-hidden bg-background/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-[#FFF0C4] text-[10px] font-bold uppercase tracking-[0.3em] mb-6 border border-white/10">
            Conversion Strategy
          </div>
          <h2 className="text-5xl md:text-7xl font-bold font-headline leading-tight">
            What's <span className="text-primary">wrong</span> with <br />
            <span className="text-muted-foreground">your website?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center perspective-container">
          {/* Left Side: Mock Website */}
          <div className="relative group card-3d">
            <div className="clay-card aspect-[4/3] w-full rounded-[3rem] p-4 relative overflow-hidden inner-3d">
              {/* Browser Header Mock */}
              <div className="flex items-center gap-2 mb-6 px-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                <div className="ml-4 h-6 w-1/2 bg-white/5 rounded-full" />
              </div>

              {/* Mock Content Dashboard Image */}
              <div className="relative w-full h-[calc(100%-4rem)] rounded-2xl overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                <Image 
                  src={dashboardImg?.imageUrl || ''} 
                  alt="Futuristic Dashboard UI" 
                  fill
                  className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                  data-ai-hint="dashboard ui"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Hotspots */}
              {auditPoints.map((point) => (
                <button
                  key={point.id}
                  onMouseEnter={() => setActivePoint(point)}
                  onClick={() => setActivePoint(point)}
                  className={cn(
                    "absolute w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 z-20 group/hotspot",
                    activePoint.id === point.id 
                      ? "bg-primary scale-125 shadow-[0_0_20px_rgba(140,16,7,0.8)]" 
                      : "bg-white/10 hover:bg-primary/50"
                  )}
                  style={{ top: point.top, left: point.left }}
                >
                  <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
                  <AlertCircle className="w-5 h-5 text-white" />
                  
                  {/* Tooltip on Hover */}
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black text-[#FFF0C4] text-[10px] font-bold rounded-lg opacity-0 group-hover/hotspot:opacity-100 transition-opacity whitespace-nowrap">
                    {point.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Reflection Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none rounded-[3rem]" />
          </div>

          {/* Right Side: Info Panel */}
          <div className="space-y-8">
            <div className="clay-card p-10 rounded-[3rem] border border-white/5 min-h-[400px] flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <BarChart3 className="w-32 h-32" />
              </div>

              <div key={activePoint.id} className="animate-fade-in-up space-y-8 relative z-10">
                <div>
                  <div className="flex items-center gap-3 text-red-500 mb-4">
                    <AlertCircle className="w-6 h-6" />
                    <span className="text-xs font-bold uppercase tracking-widest">Problem Identified</span>
                  </div>
                  <h3 className="text-3xl font-bold font-headline mb-4">{activePoint.problem}</h3>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-3 text-[#FFF0C4] mb-2">
                    <Zap className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Business Impact</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {activePoint.impact}
                  </p>
                </div>

                <div className="bg-primary/10 p-6 rounded-2xl border border-primary/20">
                  <div className="flex items-center gap-3 text-primary mb-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">My Solution</span>
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">
                    {activePoint.solution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Area */}
        <div className="mt-32 text-center max-w-4xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
          <p className="text-2xl md:text-4xl font-light italic text-muted-foreground mb-12 leading-relaxed">
            “Most websites don’t have a <span className="text-foreground font-bold">design problem</span>. <br className="hidden md:block" />
            They have a <span className="gradient-text font-bold">decision-making problem</span>.”
          </p>
          
          <Button size="lg" className="h-16 px-12 text-lg rounded-2xl bg-primary hover:bg-[#FFF0C4] hover:text-[#1a0301] transition-all duration-300 clay-button group">
            Get a Free Mini Audit <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}