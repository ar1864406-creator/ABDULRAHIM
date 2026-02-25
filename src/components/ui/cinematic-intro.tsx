'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function CinematicIntro() {
  const [phase, setPhase] = useState<'idle' | 'line' | 'pulse' | 'text' | 'exit' | 'done'>('idle');

  useEffect(() => {
    // Check session storage to play only once per session
    if (sessionStorage.getItem('portfolio-intro-played')) {
      setPhase('done');
      return;
    }

    const sequence = async () => {
      setPhase('line');
      await new Promise(r => setTimeout(r, 1000));
      setPhase('pulse');
      await new Promise(r => setTimeout(r, 600));
      setPhase('text');
      await new Promise(r => setTimeout(r, 2800));
      setPhase('exit');
      await new Promise(r => setTimeout(r, 1200));
      setPhase('done');
      sessionStorage.setItem('portfolio-intro-played', 'true');
    };

    sequence();
  }, []);

  if (phase === 'done') return null;

  return (
    <div className={cn(
      "fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center overflow-hidden transition-all duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)]",
      phase === 'exit' ? "opacity-0 scale-110 pointer-events-none" : "opacity-100 scale-100"
    )}>
      {/* Background Mesh (Dynamic reveal) */}
      <div className={cn(
        "absolute inset-0 mesh-gradient opacity-0 transition-opacity duration-[2000ms]",
        phase === 'text' && "opacity-30"
      )} />

      {/* The Central Line / Waveform */}
      <div className="relative w-full max-w-lg h-px flex items-center justify-center">
        <div className={cn(
          "absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-[1000ms] ease-[cubic-bezier(0.23,1,0.32,1)]",
          phase === 'idle' ? "w-0 opacity-0" : "w-full opacity-100",
          phase === 'pulse' && "animate-pulse"
        )} />
        
        {/* Glow point */}
        <div className={cn(
          "absolute h-1 w-1 bg-primary rounded-full blur-[2px] transition-opacity duration-500",
          phase !== 'idle' ? "opacity-100" : "opacity-0"
        )} />
        
        {/* Subtle horizontal glow */}
        <div className={cn(
          "absolute h-10 w-full bg-primary/5 blur-3xl transition-opacity duration-[1000ms]",
          phase === 'pulse' ? "opacity-100" : "opacity-0"
        )} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center mt-16">
        <div className="relative">
          <h1 className={cn(
            "text-5xl md:text-7xl font-bold font-headline tracking-tighter transition-all duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)]",
            phase === 'text' ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <span className="relative inline-block overflow-hidden">
              Abdul Rahim
              {/* Light sweep overlay */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-r from-transparent via-[#FFF0C4]/30 to-transparent -translate-x-full",
                phase === 'text' && "animate-light-sweep"
              )} />
            </span>
          </h1>
          
          {/* Accent glow on name */}
          <div className={cn(
            "absolute inset-0 bg-primary/20 blur-[60px] rounded-full transition-opacity duration-[2000ms]",
            phase === 'text' ? "opacity-30" : "opacity-0"
          )} />
        </div>

        <div className={cn(
          "mt-6 text-primary font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs transition-all duration-[1000ms] delay-300",
          phase === 'text' ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <div className="overflow-hidden inline-block align-bottom">
            <span className={cn(
              "inline-block whitespace-nowrap overflow-hidden border-r border-primary/50",
              phase === 'text' && "animate-typewriter"
            )}>
              Sculpting Digital Value.
            </span>
          </div>
        </div>
      </div>
      
      {/* Decorative corner accents appearing at phase 3 */}
      <div className={cn(
        "absolute top-12 left-12 w-12 h-12 border-t border-l border-white/5 transition-all duration-[1500ms]",
        phase === 'text' ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 -translate-x-4 -translate-y-4"
      )} />
      <div className={cn(
        "absolute bottom-12 right-12 w-12 h-12 border-b border-r border-white/5 transition-all duration-[1500ms]",
        phase === 'text' ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 translate-x-4 translate-y-4"
      )} />
    </div>
  );
}
