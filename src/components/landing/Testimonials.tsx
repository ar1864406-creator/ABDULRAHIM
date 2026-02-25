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
    role: "Senior Product Designer",
    quote: "NeuroFlow has fundamentally changed how I approach creative brainstorming. The contextual awareness is miles ahead of anything else I've used.",
    avatar: "user-avatar-1"
  },
  {
    name: "Sarah Chen",
    role: "Fullstack Developer",
    quote: "The code generation and debugging capabilities are terrifyingly good. It doesn't just write snippets; it understands my entire architecture.",
    avatar: "user-avatar-2"
  },
  {
    name: "Marcus Thorne",
    role: "Marketing Director",
    quote: "We've seen a 40% increase in content output efficiency since integrating NeuroFlow. It's like having a team of brilliant researchers on demand.",
    avatar: "user-avatar-3"
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-headline">Trusted by <span className="text-primary">Visionaries</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of professionals who are redefining the boundaries of what's possible with AI.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-12">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((t, i) => {
                const avatarImg = PlaceHolderImages.find(img => img.id === t.avatar)
                return (
                  <CarouselItem key={i}>
                    <div className="p-1">
                      <Card className="bg-card border-border/50 overflow-hidden relative">
                        <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
                        <CardContent className="p-10 flex flex-col items-center text-center">
                          <div className="flex gap-1 mb-6">
                            {[1, 2, 3, 4, 5].map(star => (
                              <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                            ))}
                          </div>
                          <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-foreground italic">
                            "{t.quote}"
                          </p>
                          <Avatar className="w-16 h-16 border-2 border-primary/20 mb-4">
                            <AvatarImage src={avatarImg?.imageUrl} />
                            <AvatarFallback>{t.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="text-lg font-bold font-headline">{t.name}</div>
                          <div className="text-sm text-primary font-medium">{t.role}</div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious className="bg-card border-border/50 text-foreground hover:bg-primary/20" />
            <CarouselNext className="bg-card border-border/50 text-foreground hover:bg-primary/20" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
