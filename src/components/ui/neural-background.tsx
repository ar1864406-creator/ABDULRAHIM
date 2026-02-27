
'use client';

import React, { useState, useEffect } from 'react';

/**
 * @fileOverview Optimized cinematic background.
 * Reduced particle count and added hardware acceleration hints for smoother performance.
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
    
    // Reduced particle count for significantly better performance (120 vs 300)
    const generatedParticles = Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 0.5,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 20 + 30,
      delay: Math.random() * -40,
      opacity: Math.random() * 0.4 + 0.1,
      pulseDelay: Math.random() * 5,
    }));

    const generatedBokehNodes = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: Math.random() * 200 + 100,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 50 + 60,
      delay: Math.random() * -60,
      opacity: Math.random() * 0.05 + 0.01,
    }));

    setParticles(generatedParticles);
    setBokehNodes(generatedBokehNodes);
  }, []);

  if (!isMounted) {
    return <div className="absolute inset-0 bg-background pointer-events-none z-0" />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Foundation Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full animate-float opacity-30 will-change-transform" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 blur-[180px] rounded-full animate-float [animation-delay:-10s] opacity-20 will-change-transform" />
      
      {/* Bokeh Layers */}
      <div className="absolute inset-0">
        {bokehNodes.map((node) => (
          <div
            key={`bokeh-${node.id}`}
            className="absolute rounded-full bg-primary/15 blur-[80px] will-change-transform"
            style={{
              width: `${node.size}px`,
              height: `${node.size}px`,
              left: node.left,
              top: node.top,
              opacity: node.opacity,
              animation: `drift ${node.duration}s infinite linear`,
              animationDelay: `${node.delay}s`,
              transform: 'translateZ(0)',
            }}
          />
        ))}
      </div>

      {/* Neural Particles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <div
            key={`particle-${p.id}`}
            className="absolute rounded-full bg-primary/50 will-change-transform"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: p.left,
              top: p.top,
              opacity: p.opacity,
              animation: `drift ${p.duration}s infinite linear, blink 4s infinite ease-in-out`,
              animationDelay: `${p.delay}s, ${p.pulseDelay}s`,
              transform: 'translateZ(0)',
              boxShadow: p.size > 1.8 ? `0 0 8px rgba(16, 185, 129, ${p.opacity})` : 'none',
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
