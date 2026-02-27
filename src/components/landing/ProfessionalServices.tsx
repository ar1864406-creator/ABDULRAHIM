"use client"

import React from 'react'
import { Layout, Rocket, Code2, PenTool } from 'lucide-react'

const services = [
  {
    icon: <Layout className="w-6 h-6" />,
    title: "UI/UX Design",
    description: "Designing intuitive interfaces that balance beauty with business goals."
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Landing Pages",
    description: "High-conversion landing pages optimized for performance and clarity."
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Web Development",
    description: "Clean, performant code using modern frameworks and best practices."
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "Template Design",
    description: "Scalable design systems and component libraries for rapid growth."
  }
]

export function ProfessionalServices() {
  return (
    <section id="services" className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
          MY SERVICES
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-24 tracking-tight">Professional Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div key={i} className="bg-card p-10 rounded-[2rem] border border-white/5 hover:border-primary/30 transition-all duration-300">
              <div className="text-primary mb-8">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
