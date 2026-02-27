
"use client"

import React from 'react'
import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

const projectData = [
  {
    title: "Ecommerce Landing Page",
    category: "Web Architecture / 2024",
    imageId: "project-ecommerce"
  },
  {
    title: "SaaS Dashboard Interface",
    category: "Product Design / 2024",
    imageId: "project-saas"
  },
  {
    title: "Minimalist Mobile App UI",
    category: "Mobile Design / 2024",
    imageId: "project-mobile"
  },
  {
    title: "Corporate Identity Website",
    category: "Web Architecture / 2023",
    imageId: "project-branding"
  }
]

export function SelectedWork() {
  return (
    <section id="work" className="py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 tracking-tight">Selected Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {projectData.map((project, i) => {
            const projectImg = PlaceHolderImages.find(img => img.id === project.imageId)
            return (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden mb-8 bg-card border border-white/5">
                  <Image 
                    src={projectImg?.imageUrl || ''} 
                    alt={project.title} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={projectImg?.imageHint || 'project screenshot'}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-primary text-[10px] font-bold uppercase tracking-widest">{project.category}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
