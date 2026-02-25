"use client"

import React from 'react'
import Link from 'next/link'
import { Cpu, Github, Linkedin, Mail } from 'lucide-react'

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
              <span className="text-xl font-bold tracking-tighter font-headline flex items-center gap-2">
                <span className="text-primary">AR</span>
                <span className="w-px h-4 bg-white/20 mx-1" />
                Abdul Rahim<span className="text-primary text-3xl leading-none">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Passionate Web UI/UX Designer & Frontend Developer. Let's turn your ideas into scalable digital results.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-background border border-border/50 flex items-center justify-center hover:border-primary transition-colors">
                <Github className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-background border border-border/50 flex items-center justify-center hover:border-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-background border border-border/50 flex items-center justify-center hover:border-primary transition-colors">
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-6 font-headline">Navigation</h5>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#expertise" className="hover:text-primary transition-colors">Expertise</Link></li>
              <li><Link href="#process" className="hover:text-primary transition-colors">Process</Link></li>
              <li><Link href="#audit" className="hover:text-primary transition-colors">Audit</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 font-headline">Services</h5>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>Landing Pages</li>
              <li>UI/UX Design</li>
              <li>Frontend Development</li>
              <li>Prototyping</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 font-headline">Let's Connect</h5>
            <p className="text-sm text-muted-foreground mb-4">
              Drop a line for collaborations or coffee.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-background border border-border/50 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-primary text-[#FFF0C4]"
              />
              <button className="bg-primary px-4 py-2 rounded-lg text-sm font-bold text-white hover:bg-[#FFF0C4] hover:text-[#1a0301] transition-all duration-300">
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2024 Abdul Rahim. Built with NextJS & Passion.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
