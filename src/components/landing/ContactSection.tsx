"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Instagram, Linkedin, Github } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-12">
              Let's build<br />something great<br />together.
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-md">
              Have a project in mind or just want to say hi? I'm currently open for new opportunities.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg font-bold">ar.design@email.com</span>
              </div>
              <div className="flex gap-4 pt-4">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all cursor-pointer">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all cursor-pointer">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all cursor-pointer">
                  <Github className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-12 rounded-[3rem] border border-white/5">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Full Name</label>
                  <Input placeholder="John Doe" className="bg-white/5 border-white/10 h-14 rounded-xl px-6" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Email Address</label>
                  <Input placeholder="john@example.com" className="bg-white/5 border-white/10 h-14 rounded-xl px-6" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                <Input placeholder="Project Inquiry" className="bg-white/5 border-white/10 h-14 rounded-xl px-6" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea placeholder="Tell me about your project..." className="bg-white/5 border-white/10 min-h-[160px] rounded-xl px-6 py-4" />
              </div>
              <Button className="w-full h-16 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl text-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
