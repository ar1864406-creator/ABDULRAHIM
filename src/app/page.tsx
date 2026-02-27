'use client';

import React from 'react'
import { Header } from '@/components/landing/Header'
import { Hero } from '@/components/landing/Hero'
import { SkillMarquee } from '@/components/landing/SkillMarquee'
import { Biography } from '@/components/landing/Biography'
import { SelectedWork } from '@/components/landing/SelectedWork'
import { TechnicalReality } from '@/components/landing/TechnicalReality'
import { ProfessionalServices } from '@/components/landing/ProfessionalServices'
import { ContactSection } from '@/components/landing/ContactSection'
import { Footer } from '@/components/landing/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground mesh-stars relative">
      <Header />
      <Hero />
      <SkillMarquee />
      <Biography />
      <SelectedWork />
      <TechnicalReality />
      <ProfessionalServices />
      <ContactSection />
      <Footer />
    </main>
  )
}
