"use client"

import React from 'react'
import Link from 'next/link'
import { Cpu, Twitter, Github, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-card pt-20 pb-10 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center neon-glow-primary">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tighter font-headline">NeuroFlow<span className="text-primary">AI</span></span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pioneering the future of human-AI collaboration. Building tools that empower thinkers, creators, and doers worldwide.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-background border border-border/50 flex items-center justify-center hover:border-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-background border border-border/50 flex items-center justify-center hover:border-primary transition-colors">
                <Github className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-background border border-border/50 flex items-center justify-center hover:border-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-6 font-headline">Platform</h5>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Enterprise</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">API Docs</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 font-headline">Company</h5>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 font-headline">Newsletter</h5>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest updates on AI innovation.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-background border border-border/50 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-primary"
              />
              <button className="bg-primary px-4 py-2 rounded-lg text-sm font-bold text-white hover:bg-primary/90 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2024 NeuroFlow AI. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
