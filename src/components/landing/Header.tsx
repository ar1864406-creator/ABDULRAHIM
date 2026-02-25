"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Cpu } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="glass-card rounded-2xl px-6 h-20 flex items-center justify-between border-white/5">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center neon-glow-primary group-hover:rotate-12 transition-all duration-500">
            <Cpu className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tighter font-headline">
            NeuroFlow<span className="text-primary">AI</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-10">
          {['Features', 'How it Works', 'Testimonials', 'Demo'].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`} 
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex text-muted-foreground hover:text-white hover:bg-white/5">
            Log In
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-6 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-95">
            Start Free
          </Button>
        </div>
      </div>
    </header>
  )
}