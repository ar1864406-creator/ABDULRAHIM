"use client"

import { useEffect } from "react"
import { useToast } from "@/hooks/use-toast"

export function WelcomeNotification() {
  const { toast } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      toast({
        title: "✨ Neural Link Established",
        description: "Welcome back, Pioneer. NeuroFlow AI v2.5 is synchronized and ready for deployment.",
      })
    }, 1500)

    return () => clearTimeout(timer)
  }, [toast])

  return null
}
