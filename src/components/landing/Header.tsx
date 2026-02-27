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
    <header className="fixed top-0 left-0 right-0 z-50 py-8 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="group">
          <span className="text-2xl font-bold text-primary tracking-tighter">AR.</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href} 
              className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="w-10 md:hidden" /> {/* Spacer for balance */}
      </div>
    </header>
  )
}
