"use client"

import React from 'react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
          © 2024 Abdul Rahim. All rights reserved.
        </div>
        <div className="flex gap-10">
          <Link href="#" className="text-[10px] font-bold text-muted-foreground hover:text-primary uppercase tracking-widest">Privacy Policy</Link>
          <Link href="#" className="text-[10px] font-bold text-muted-foreground hover:text-primary uppercase tracking-widest">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
