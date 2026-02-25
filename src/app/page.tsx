'use client';

import React, { useState, useEffect } from 'react'
import { Header } from '@/components/landing/Header'
import { Hero } from '@/components/landing/Hero'
import { SkillMarquee } from '@/components/landing/SkillMarquee'
import { Benefits } from '@/components/landing/Benefits'
import { SkillProgress } from '@/components/landing/SkillProgress'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { AuditSection } from '@/components/landing/AuditSection'
import { Footer } from '@/components/landing/Footer'
import { WelcomeNotification } from '@/components/landing/WelcomeNotification'
import { PerformanceWidget } from '@/components/ui/performance-widget'
import { CinematicIntro } from '@/components/ui/cinematic-intro'
import { Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Home() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Wait for the intro animation stages (approx 4.5s total)
    const timer = setTimeout(() => setShowContent(true), 4500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground mesh-gradient relative">
      <CinematicIntro />
      
      {/* Header moved outside to be truly fixed to viewport */}
      <Header className={cn(
        "transition-opacity duration-1000",
        showContent ? "opacity-100" : "opacity-0 pointer-events-none"
      )} />

      <div className={cn(
        "transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]",
        showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <WelcomeNotification />
        <PerformanceWidget />
        
        {/* Dynamic Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative z-10">
          <Hero />
          <SkillMarquee />
          <Benefits />
          <SkillProgress />
          <HowItWorks />
          <AuditSection />
          
          {/* Final CTA Section */}
          <section className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative">
              <div className="max-w-5xl mx-auto clay-card rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#FFF0C4] text-xs font-bold uppercase tracking-widest mb-8 animate-pulse">
                    <Sparkles className="w-4 h-4" />
                    <span>Open for Opportunities</span>
                  </div>
                  
                  <h2 className="text-5xl md:text-7xl font-bold mb-8 font-headline leading-tight">
                    Ready to start a <span className="gradient-text">project?</span>
                  </h2>
                  
                  <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                    Let's collaborate to build something exceptional. I'm currently accepting new freelance projects and full-time roles.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="h-16 px-12 text-lg rounded-2xl bg-primary text-white font-bold clay-button hover:bg-[#FFF0C4] hover:text-[#1a0301] transition-all duration-300">
                      Get in Touch
                    </button>
                    <button className="h-16 px-12 text-lg rounded-2xl bg-white/5 border border-white/10 text-foreground font-bold hover:bg-white/10 transition-all duration-300">
                      View Resume
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </main>
  )
}
