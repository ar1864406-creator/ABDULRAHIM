'use client';

import React, { useMemo } from 'react';

/**
 * @fileOverview A high-fidelity cinematic background component featuring floating particles, 
 * bokeh glow nodes, and multi-layered parallax movement.
 */

export function NeuralBackground() {
  // Memoize particles to prevent re-generation on every render
  const particles = useMemo(() => {
    return Array.from({ length: 250 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2.5 + 0.5,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 20 + 20, // Faster than before
      delay: Math.random() * -40,
      opacity: Math.random() * 0.5 + 0.1,
      pulseDelay: Math.random() * 5,
    }));
  }, []);

  // Soft bokeh layers for depth
  const bokehNodes = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: Math.random() * 200 + 100,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 40 + 40,
      delay: Math.random() * -60,
      opacity: Math.random() * 0.08 + 0.02,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Deep Background Glow Blobs (Static layers for foundation) */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 blur-[180px] rounded-full animate-float opacity-40" />
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-primary/15 blur-[200px] rounded-full animate-float [animation-delay:-10s] opacity-30" />
      
      {/* Bokeh Layers (Depth layer 1) */}
      <div className="absolute inset-0">
        {bokehNodes.map((node) => (
          <div
            key={`bokeh-${node.id}`}
            className="absolute rounded-full bg-primary/20 blur-[80px]"
            style={{
              width: `${node.size}px`,
              height: `${node.size}px`,
              left: node.left,
              top: node.top,
              opacity: node.opacity,
              animation: `drift ${node.duration}s infinite linear`,
              animationDelay: `${node.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Main Neural Particle System (Depth layer 2) */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <div
            key={`particle-${p.id}`}
            className="absolute rounded-full bg-primary/60"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: p.left,
              top: p.top,
              opacity: p.opacity,
              animation: `drift ${p.duration}s infinite linear, blink 4s infinite ease-in-out`,
              animationDelay: `${p.delay}s, ${p.pulseDelay}s`,
              boxShadow: p.size > 2 ? `0 0 10px rgba(16, 185, 129, ${p.opacity})` : 'none',
            }}
          />
        ))}
      </div>

      {/* Subtle Noise Texture Overlay for high-end cinematic feel */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
