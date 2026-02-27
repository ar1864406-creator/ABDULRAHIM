
'use client';

import React from 'react'
import { Header } from '@/components/landing/Header'
import { Hero } from '@/components/landing/Hero'
import { SkillMarquee } from '@/components/landing/SkillMarquee'
import { Biography } from '@/components/landing/Biography'
import { SelectedWork } from '@/components/landing/SelectedWork'
import { AuditSection } from '@/components/landing/AuditSection'
import { TechnicalReality } from '@/components/landing/TechnicalReality'
import { ProfessionalServices } from '@/components/landing/ProfessionalServices'
import { ContactSection } from '@/components/landing/ContactSection'
import { Footer } from '@/components/landing/Footer'
import { CinematicIntro } from '@/components/ui/cinematic-intro'
import { WelcomeNotification } from '@/components/landing/WelcomeNotification'
import { PerformanceWidget } from '@/components/ui/performance-widget'
import { SkillProgress } from '@/components/landing/SkillProgress'
import { Benefits } from '@/components/landing/Benefits'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <CinematicIntro />
      <WelcomeNotification />
      <Header />
      <Hero />
      <SkillMarquee />
      <Biography />
      <Benefits />
      <SelectedWork />
      <AuditSection />
      <SkillProgress />
      <TechnicalReality />
      <ProfessionalServices />
      <ContactSection />
      <Footer />
      <PerformanceWidget />
    </main>
  )
}
