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
      // Phase 1: Thin line appears
      setPhase('line');
      await new Promise(r => setTimeout(r, 800));
      
      // Phase 2: Energy pulse / Waveform
      setPhase('pulse');
      await new Promise(r => setTimeout(r, 600));
      
      // Phase 3: Text reveals
      setPhase('text');
      await new Promise(r => setTimeout(r, 3200));
      
      // Phase 4: Exit (Scaling and Fading)
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
      phase === 'exit' ? "opacity-0 scale-[0.95] blur-xl pointer-events-none" : "opacity-100 scale-100"
    )}>
      {/* Background Mesh (Dynamic reveal) */}
      <div className={cn(
        "absolute inset-0 mesh-gradient opacity-0 transition-opacity duration-[2500ms]",
        (phase === 'text' || phase === 'pulse') && "opacity-40"
      )} />

      {/* The Central Energy Line / Waveform */}
      <div className="relative w-full max-w-2xl h-px flex items-center justify-center">
        {/* Core Line */}
        <div className={cn(
          "absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-[800ms] ease-out",
          phase === 'idle' ? "w-0 opacity-0" : "w-full opacity-100",
        )} />
        
        {/* Energy Waveform Pulse Layers */}
        <div className={cn(
          "absolute h-[2px] w-full bg-primary/40 blur-[4px] transition-all duration-[600ms]",
          phase === 'pulse' ? "scale-y-[20] opacity-100" : "scale-y-1 opacity-0"
        )} />
        <div className={cn(
          "absolute h-[1px] w-1/2 bg-[#FFF0C4] blur-[2px] transition-all duration-[400ms]",
          phase === 'pulse' ? "scale-x-[1.5] opacity-80" : "scale-x-0 opacity-0"
        )} />
        
        {/* Glow point centers */}
        <div className={cn(
          "absolute h-1 w-1 bg-[#FFF0C4] rounded-full shadow-[0_0_15px_#8C1007] transition-opacity duration-500",
          phase !== 'idle' ? "opacity-100" : "opacity-0"
        )} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center mt-20">
        <div className="relative perspective-container">
          <h1 className={cn(
            "text-6xl md:text-8xl font-bold font-headline tracking-tighter transition-all duration-[1500ms] ease-[cubic-bezier(0.23,1,0.32,1)]",
            phase === 'text' ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-110"
          )}>
            <span className="relative inline-block overflow-hidden">
              <span className="relative z-10 text-foreground">Abdul Rahim</span>
              {/* Premium Light Sweep */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-r from-transparent via-[#FFF0C4]/40 to-transparent -translate-x-full z-20",
                phase === 'text' && "animate-light-sweep"
              )} />
            </span>
          </h1>
          
          {/* Accent glow behind name */}
          <div className={cn(
            "absolute inset-0 bg-primary/20 blur-[100px] rounded-full transition-opacity duration-[3000ms]",
            phase === 'text' ? "opacity-40" : "opacity-0"
          )} />
        </div>

        <div className={cn(
          "mt-8 text-primary font-bold tracking-[0.5em] uppercase text-[10px] md:text-sm transition-all duration-[1200ms] delay-500",
          phase === 'text' ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}>
          <div className="overflow-hidden inline-block align-bottom border-r-2 border-primary/50 pr-1">
            <span className={cn(
              "inline-block whitespace-nowrap overflow-hidden",
              phase === 'text' && "animate-typewriter"
            )}>
              Sculpting Digital Value.
            </span>
          </div>
        </div>
      </div>
      
      {/* HUD Elements / Corner Accents */}
      <div className={cn(
        "absolute top-16 left-16 w-16 h-16 border-t-2 border-l-2 border-primary/20 transition-all duration-[2000ms]",
        phase === 'text' ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 -translate-x-10 -translate-y-10"
      )} />
      <div className={cn(
        "absolute bottom-16 right-16 w-16 h-16 border-b-2 border-r-2 border-primary/20 transition-all duration-[2000ms]",
        phase === 'text' ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 translate-x-10 translate-y-10"
      )} />
      
      {/* Status Bar Mockup */}
      <div className={cn(
        "absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-8 transition-all duration-[1500ms] delay-700",
        phase === 'text' ? "opacity-40 translate-y-0" : "opacity-0 translate-y-4"
      )}>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          <span className="text-[8px] font-bold uppercase tracking-widest">System Boot</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-75" />
          <span className="text-[8px] font-bold uppercase tracking-widest">Neural Link Active</span>
        </div>
      </div>
    </div>
  );
}
