
"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Cpu, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { name: 'Expertise', href: '#expertise', id: 'expertise' },
  { name: 'Process', href: '#process', id: 'process' },
]

export function Header() {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      });
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    navItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="glass-card rounded-2xl px-6 h-20 flex items-center justify-between shadow-2xl">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center neon-glow-primary group-hover:rotate-12 transition-all duration-500">
            <Cpu className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tighter font-headline flex items-center">
            Abdul Rahim<span className="text-primary">.</span>
            <span className="ml-1 w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 p-1 bg-white/5 rounded-xl border border-white/5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <Link 
                key={item.name}
                href={item.href} 
                className={cn(
                  "text-sm font-bold transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] px-10 py-1.5 rounded-xl relative overflow-hidden group/nav",
                  isActive 
                    ? "bg-[#FFF0C4] text-[#1a0301] shadow-lg shadow-black/20 scale-x-105" 
                    : "text-muted-foreground hover:text-foreground hover:bg-white/10"
                )}
              >
                <span className="relative z-10">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4">
            <Button className="bg-primary hover:bg-[#FFF0C4] hover:text-[#1a0301] text-white font-bold px-6 rounded-xl shadow-lg shadow-primary/20 transition-all duration-300 active:scale-95">
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground hover:bg-white/5">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-white/10 w-[300px]">
                <SheetHeader className="mb-12">
                  <SheetTitle className="text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                        <Cpu className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-headline font-bold">Abdul Rahim</span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-8">
                  <nav className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <Link 
                        key={item.name}
                        href={item.href} 
                        className={cn(
                          "text-lg font-bold p-4 rounded-xl transition-all duration-300",
                          activeSection === item.id 
                            ? "bg-[#FFF0C4] text-[#1a0301]" 
                            : "text-muted-foreground"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="flex flex-col gap-4 pt-8 border-t border-white/10">
                    <Button className="w-full bg-primary hover:bg-[#FFF0C4] hover:text-[#1a0301] text-white font-bold h-12 rounded-xl shadow-lg shadow-primary/20 transition-all duration-300">
                      Hire Me
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
