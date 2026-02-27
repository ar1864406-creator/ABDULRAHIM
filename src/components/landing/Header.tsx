"use client"

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'WORK', href: '#work' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SERVICES', href: '#services' },
  { name: 'CONTACT', href: '#contact' },
]

export function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-fit">
      <div className="flex items-center gap-12 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)] ring-1 ring-white/5">
        <Link href="/" className="group flex items-center gap-2">
          <span className="text-xl font-bold text-primary tracking-tighter hover:scale-110 transition-transform">AR.</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href} 
              className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground hover:text-primary transition-all hover:tracking-[0.3em]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="md:hidden w-4" /> {/* Spacer for mobile balance */}
      </div>
    </header>
  )
}
