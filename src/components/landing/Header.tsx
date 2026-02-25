"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Cpu, Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { name: 'Features', href: '#features' },
  { name: 'How it Works', href: '#how-it-works' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Demo', href: '#demo' },
]

export function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="glass-card rounded-2xl px-6 h-20 flex items-center justify-between border-black/5 shadow-2xl backdrop-blur-md">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center neon-glow-primary group-hover:rotate-12 transition-all duration-500">
            <Cpu className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tighter font-headline">
            NeuroFlow<span className="text-primary">AI</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href} 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Desktop Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-black/5 transition-colors">
              Log In
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-6 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-95">
              Start Free
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground hover:bg-black/5">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-black/10 w-[300px]">
                <SheetHeader className="mb-12">
                  <SheetTitle className="text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                        <Cpu className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-headline font-bold">NeuroFlow</span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-8">
                  <nav className="flex flex-col gap-6">
                    {navItems.map((item) => (
                      <Link 
                        key={item.name}
                        href={item.href} 
                        className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="flex flex-col gap-4 pt-8 border-t border-black/5">
                    <Button variant="outline" className="w-full border-black/10 glass-morphism text-foreground h-12 rounded-xl">
                      Log In
                    </Button>
                    <Button className="w-full bg-primary text-white font-bold h-12 rounded-xl shadow-lg shadow-primary/20">
                      Start Free
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