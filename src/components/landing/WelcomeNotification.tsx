"use client"

import { useEffect } from "react"
import { useToast } from "@/hooks/use-toast"

export function WelcomeNotification() {
  const { toast } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      toast({
        title: "✨ Neural Portfolio Loaded",
        description: "Welcome. You are now exploring Abdul Rahim's creative ecosystem.",
      })
    }, 1500)

    return () => clearTimeout(timer)
  }, [toast])

  return null
}
