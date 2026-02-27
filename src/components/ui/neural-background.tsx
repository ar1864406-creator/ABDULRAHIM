
'use client';

import React, { useState, useEffect } from 'react';

/**
 * @fileOverview A high-fidelity cinematic background component featuring floating particles, 
 * bokeh glow nodes, and multi-layered drift movement.
 * Optimized for performance by using CSS animations for constant motion.
 */

type Particle = {
  id: number;
  size: number;
  left: string;
  top: string;
  duration: number;
  delay: number;
  opacity: number;
  pulseDelay: number;
};

type BokehNode = {
  id: number;
  size: number;
  left: string;
  top: string;
  duration: number;
  delay: number;
  opacity: number;
};

export function NeuralBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [bokehNodes, setBokehNodes] = useState<BokehNode[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Generate particles on client side only to avoid hydration mismatch
    const generatedParticles = Array.from({ length: 300 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2.5 + 0.5,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 15 + 25,
      delay: Math.random() * -40,
      opacity: Math.random() * 0.5 + 0.1,
      pulseDelay: Math.random() * 5,
    }));

    const generatedBokehNodes = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      size: Math.random() * 250 + 150,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 40 + 50,
      delay: Math.random() * -60,
      opacity: Math.random() * 0.08 + 0.02,
    }));

    setParticles(generatedParticles);
    setBokehNodes(generatedBokehNodes);
  }, []);

  // Avoid rendering dynamic content until after hydration
  if (!isMounted) {
    return <div className="absolute inset-0 bg-background pointer-events-none z-0" />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Deep Background Glow Blobs (Static layers for foundation) */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 blur-[180px] rounded-full animate-float opacity-40 will-change-transform" />
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-primary/15 blur-[200px] rounded-full animate-float [animation-delay:-10s] opacity-30 will-change-transform" />
      
      {/* Bokeh Layers (Non-interactive) */}
      <div className="absolute inset-0">
        {bokehNodes.map((node) => (
          <div
            key={`bokeh-${node.id}`}
            className="absolute rounded-full bg-primary/20 blur-[100px]"
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

      {/* Main Neural Particle System (Non-interactive) */}
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

      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
