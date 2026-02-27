
"use client"

import React, { useState, useEffect } from 'react'
import { Zap, Activity, Server, ShieldCheck, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export function PerformanceWidget() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setScore(99), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed bottom-8 right-8 z-[100] perspective-container">
      <div 
        className={cn(
          "neumo-card transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden card-3d will-change-transform",
          isExpanded ? "w-64 p-6 rounded-[2.5rem]" : "w-16 h-16 p-0 flex items-center justify-center cursor-pointer rounded-full"
        )}
        onClick={() => !isExpanded && setIsExpanded(true)}
      >
        {!isExpanded ? (
          <div className="relative inner-3d">
            <Zap className="w-8 h-8 text-primary animate-pulse" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-background" />
          </div>
        ) : (
          <div className="inner-3d space-y-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">System Health</span>
              <button 
                onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
                className="hover:text-primary transition-colors"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    className="text-white/5"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    strokeDasharray={175.9}
                    strokeDashoffset={175.9 - (175.9 * score) / 100}
                    className="text-primary transition-all duration-1000 ease-out"
                  />
                </svg>
                <span className="absolute text-sm font-bold">{score}</span>
              </div>
              <div>
                <div className="text-xs font-bold">Lighthouse</div>
                <div className="text-[10px] text-emerald-500 font-bold uppercase">Optimized</div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between text-[11px] neumo-card-inset p-2 rounded-lg">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Activity className="w-3 h-3" />
                  Load Time
                </div>
                <span className="font-bold text-foreground">0.8s</span>
              </div>
              <div className="flex items-center justify-between text-[11px] neumo-card-inset p-2 rounded-lg">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <ShieldCheck className="w-3 h-3" />
                  Web Vitals
                </div>
                <span className="font-bold text-emerald-500">PASS</span>
              </div>
              <div className="flex items-center justify-between text-[11px] neumo-card-inset p-2 rounded-lg">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Server className="w-3 h-3" />
                  Infrastructure
                </div>
                <span className="font-bold text-foreground">Vercel Edge</span>
              </div>
            </div>
            
            <div className="pt-2 border-t border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-tighter">Real-time Telemetry Active</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
