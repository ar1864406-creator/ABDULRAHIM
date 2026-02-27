"use client"

import React from 'react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react'

export function Biography() {
  const profileImg = PlaceHolderImages.find(img => img.id === 'hero-profile')

  return (
    <section id="about" className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Profile Card */}
          <div className="lg:col-span-5">
            <div className="bg-card rounded-[2rem] p-4 border border-white/5">
              <div className="relative aspect-square w-full rounded-[1.5rem] overflow-hidden mb-8">
                <Image 
                  src={profileImg?.imageUrl || ''} 
                  alt="Abdul Rahim" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-4 pb-4">
                <h3 className="text-3xl font-bold mb-1">Abdul Rahim</h3>
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-6">Web Designer</p>
                <div className="flex gap-4">
                  <Twitter className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                  <Instagram className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                  <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                  <Github className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
              BIOGRAPHY
            </div>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              A minimalist at heart,<br />obsessed with precision.
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed max-w-2xl mb-12">
              <p>
                Hi, I'm Abdul Rahim. With over 2 years of experience in the digital design sphere, I've dedicated my career to crafting interfaces that are as functional as they are beautiful.
              </p>
              <p>
                My approach is rooted in the philosophy that "less is more." I believe that clean design isn't just about aesthetics; it's about clarity, accessibility, and guiding users seamlessly through their digital journey.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold mb-1">2+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">50+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Projects Done</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">Client Satisfied</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
