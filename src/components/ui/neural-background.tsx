'use client';

import React, { useMemo } from 'react';

/**
 * @fileOverview A cinematic background component featuring floating particles and blurred glow nodes.
 */

export function NeuralBackground() {
  // Memoize particles to prevent re-generation on every render
  const particles = useMemo(() => {
    return Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 25 + 15,
      delay: Math.random() * -30,
      opacity: Math.random() * 0.4 + 0.1,
      blur: Math.random() > 0.8 ? 'blur(1px)' : 'none',
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Deep Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[160px] rounded-full animate-drift opacity-60" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 blur-[160px] rounded-full animate-drift [animation-delay:-7s] opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[180px] rounded-full animate-float opacity-30" />
      
      {/* Particle Layers */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-primary/40"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: p.left,
              top: p.top,
              opacity: p.opacity,
              filter: p.blur,
              animation: `drift ${p.duration}s infinite alternate ease-in-out`,
              animationDelay: `${p.delay}s`,
              boxShadow: p.size > 2 ? '0 0 12px rgba(16, 185, 129, 0.5)' : 'none',
            }}
          />
        ))}
      </div>

      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
