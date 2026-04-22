"use client"

import React from 'react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

export function Biography() {
  const profileImg = PlaceHolderImages.find(img => img.id === 'hero-profile')

  return (
    <section id="about" className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          {/* Profile Card with 3D Effect */}
          <div className="lg:col-span-5 perspective-container">
            <div className="bg-card rounded-[2rem] p-4 border border-white/5 card-3d group neumo-card">
              <div className="relative aspect-square w-full rounded-[1.5rem] overflow-hidden mb-8 inner-3d">
                <Image 
                  src={profileImg?.imageUrl || ''} 
                  alt="Abdul Rahim" 
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="px-4 pb-4 inner-3d">
                <h3 className="text-3xl font-bold mb-1 tracking-tight">Abdul Rahim</h3>
                <p className="text-primary text-xs font-bold uppercase tracking-widest">Web Designer</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-6 animate-fade-in-up">
              BIOGRAPHY
            </div>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8 tracking-tight">
              A minimalist at heart,<br /><span className="text-muted-foreground">obsessed with precision.</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed max-w-2xl mb-12 font-light">
              <p>
                Hi, I'm Abdul Rahim. With over 2 years of experience in the digital design sphere, I've dedicated my career to crafting interfaces that are as functional as they are beautiful.
              </p>
              <p>
                My approach is rooted in the philosophy that "less is more." I believe that clean design isn't just about aesthetics; it's about clarity, accessibility, and guiding users seamlessly through their digital journey.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-foreground">2+</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold">Years Experience</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-foreground">50+</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold">Projects Done</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-foreground">100%</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold">Client Satisfied</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
