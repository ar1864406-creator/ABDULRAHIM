"use client"

import React from 'react'

const marqueeItems = [
  "UI/UX DESIGN",
  "WEB DEVELOPMENT",
  "PROTOTYPING",
  "MINIMALIST UI",
  "MODERN AESTHETIC",
  "PRODUCT DESIGN",
]

export function SkillMarquee() {
  return (
    <div className="w-full py-20 border-y border-white/5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {marqueeItems.map((item, index) => (
              <React.Fragment key={index}>
                <span className="text-5xl md:text-7xl font-bold tracking-tighter opacity-10 mx-8">{item}</span>
                <span className="w-3 h-3 rounded-full bg-primary mx-8" />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
