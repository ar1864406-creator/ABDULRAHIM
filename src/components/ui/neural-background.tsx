'use client';

import React, { useState, useEffect, useMemo } from 'react';

/**
 * @fileOverview Optimized cinematic background.
 * Enhanced particle density for a more immersive atmosphere.
 * Memoized to prevent unnecessary re-renders.
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

export const NeuralBackground = React.memo(function NeuralBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [bokehNodes, setBokehNodes] = useState<BokehNode[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Increased particle count for a lush visual experience (400 particles)
    const generatedParticles = Array.from({ length: 400 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 0.3,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 25 + 35,
      delay: Math.random() * -50,
      opacity: Math.random() * 0.35 + 0.05,
      pulseDelay: Math.random() * 5,
    }));

    // Bokeh nodes for atmospheric depth
    const generatedBokehNodes = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      size: Math.random() * 250 + 150,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 60 + 70,
      delay: Math.random() * -70,
      opacity: Math.random() * 0.04 + 0.01,
    }));

    setParticles(generatedParticles);
    setBokehNodes(generatedBokehNodes);
  }, []);

  if (!isMounted) {
    return <div className="absolute inset-0 bg-background pointer-events-none z-0" />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 bg-background">
      {/* Foundation Glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 blur-[180px] rounded-full animate-float opacity-30 will-change-transform" />
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-primary/15 blur-[220px] rounded-full animate-float [animation-delay:-12s] opacity-25 will-change-transform" />
      
      {/* Bokeh Layers - Hardware Accelerated */}
      <div className="absolute inset-0">
        {bokehNodes.map((node) => (
          <div
            key={`bokeh-${node.id}`}
            className="absolute rounded-full bg-primary/15 blur-[100px] will-change-transform"
            style={{
              width: `${node.size}px`,
              height: `${node.size}px`,
              left: node.left,
              top: node.top,
              opacity: node.opacity,
              animation: `drift ${node.duration}s infinite linear`,
              animationDelay: `${node.delay}s`,
              transform: 'translate3d(0, 0, 0)',
            }}
          />
        ))}
      </div>

      {/* Neural Particles - Hardware Accelerated */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <div
            key={`particle-${p.id}`}
            className="absolute rounded-full bg-primary/60 will-change-transform"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: p.left,
              top: p.top,
              opacity: p.opacity,
              animation: `drift ${p.duration}s infinite linear, blink 5s infinite ease-in-out`,
              animationDelay: `${p.delay}s, ${p.pulseDelay}s`,
              transform: 'translate3d(0, 0, 0)',
              boxShadow: p.size > 1.8 ? `0 0 10px rgba(16, 185, 129, ${p.opacity})` : 'none',
            }}
          />
        ))}
      </div>

      {/* Optimized Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
});
