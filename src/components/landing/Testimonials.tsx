"use client"

import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, Star } from "lucide-react"
import { PlaceHolderImages } from '@/lib/placeholder-images'

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Director of Innovation, Meta",
    quote: "NeuroFlow isn't just an AI; it's a cognitive force multiplier. We've fundamentally restructured our creative workflow around its semantic synthesis engine.",
    avatar: "user-avatar-1"
  },
  {
    name: "Sarah Chen",
    role: "Chief Architect, Quantum Systems",
    quote: "The ability to reason through architectural debt and offer predictive refactoring is unlike anything I've seen in the LLM space. Absolute precision.",
    avatar: "user-avatar-2"
  },
  {
    name: "Marcus Thorne",
    role: "Managing Partner, Thorne & Co.",
    quote: "We've reduced our research cycle from weeks to minutes. NeuroFlow's multi-modal analysis has become our competitive advantage in high-stakes markets.",
    avatar: "user-avatar-3"
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-morphism text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
            Global Impact
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 font-headline tracking-tight">The <span className="gradient-text">New Standard.</span></h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Joined by pioneers at the intersection of technology and human potential.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-12">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((t, i) => {
                const avatarImg = PlaceHolderImages.find(img => img.id === t.avatar)
                return (
                  <CarouselItem key={i}>
                    <div className="p-4">
                      <Card className="glass-card rounded-[3rem] border-white/5 overflow-hidden group">
                        <Quote className="absolute top-12 right-12 w-24 h-24 text-primary/5 group-hover:text-primary/10 transition-colors duration-500" />
                        <CardContent className="p-16 flex flex-col items-center text-center relative z-10">
                          <div className="flex gap-2 mb-10">
                            {[1, 2, 3, 4, 5].map(star => (
                              <Star key={star} className="w-5 h-5 fill-primary text-primary animate-pulse" style={{ animationDelay: `${star * 0.2}s` }} />
                            ))}
                          </div>
                          
                          <p className="text-2xl md:text-3xl font-light leading-relaxed mb-12 text-foreground italic tracking-tight">
                            "{t.quote}"
                          </p>
                          
                          <Avatar className="w-20 h-20 border-2 border-primary/20 mb-6 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                            <AvatarImage src={avatarImg?.imageUrl} className="object-cover" />
                            <AvatarFallback>{t.name[0]}</AvatarFallback>
                          </Avatar>
                          
                          <div className="text-2xl font-bold font-headline mb-1 tracking-tight">{t.name}</div>
                          <div className="text-sm text-primary font-bold uppercase tracking-[0.2em]">{t.role}</div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex glass-card border-white/10 text-white hover:bg-primary/20 w-12 h-12 -left-20" />
            <CarouselNext className="hidden md:flex glass-card border-white/10 text-white hover:bg-primary/20 w-12 h-12 -right-20" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}