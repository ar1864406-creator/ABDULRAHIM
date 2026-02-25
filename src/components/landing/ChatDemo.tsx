"use client"

import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react'
import { interactiveAIDemoChat } from '@/ai/flows/interactive-ai-demo-chat'

type Message = {
  role: 'user' | 'ai'
  text: string
}

export function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: "Hello! I'm NeuroFlow AI. How can I help you today?" }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return
    
    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: userMessage }])
    setIsLoading(true)

    try {
      const result = await interactiveAIDemoChat({ message: userMessage })
      setMessages(prev => [...prev, { role: 'ai', text: result.response }])
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Sorry, I'm having trouble connecting right now. Please try again." }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickPrompt = (prompt: string) => {
    setInput(prompt)
  }

  return (
    <section id="demo" className="py-24 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-headline">Experience the <span className="text-primary">Difference</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Interact with our core engine below. See how NeuroFlow understands nuance and context.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border/50 shadow-2xl bg-background/50 overflow-hidden neon-glow-primary">
            <CardHeader className="border-b border-border/50 bg-muted/20 px-6 py-4 flex flex-row items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center pulse-primary">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-base font-bold">NeuroFlow Assistant</CardTitle>
                  <CardDescription className="text-xs text-primary font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Online & Thinking
                  </CardDescription>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-border" />
                <div className="w-3 h-3 rounded-full bg-border" />
                <div className="w-3 h-3 rounded-full bg-border" />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div 
                ref={scrollRef}
                className="h-[400px] overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-primary/20"
              >
                {messages.map((msg, i) => (
                  <div 
                    key={i} 
                    className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} animate-fade-in-up`}
                  >
                    <Avatar className={`w-8 h-8 ${msg.role === 'ai' ? 'bg-primary' : 'bg-secondary'}`}>
                      <AvatarFallback className="text-white">
                        {msg.role === 'ai' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`max-w-[80%] rounded-2xl p-4 text-sm ${
                      msg.role === 'ai' 
                        ? 'bg-muted/50 text-foreground rounded-tl-none border border-border/50' 
                        : 'bg-primary text-white rounded-tr-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-4 flex-row animate-fade-in-up">
                    <Avatar className="w-8 h-8 bg-primary">
                      <AvatarFallback><Bot className="w-4 h-4 text-white" /></AvatarFallback>
                    </Avatar>
                    <div className="bg-muted/50 rounded-2xl p-4 rounded-tl-none border border-border/50">
                      <Loader2 className="w-5 h-5 animate-spin text-primary" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-4 border-t border-border/50 space-y-4 bg-muted/5">
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs text-muted-foreground mr-2 self-center">Try:</span>
                  {["Analyze this trend", "Explain quantum physics", "Write a haiku"].map(q => (
                    <button 
                      key={q} 
                      onClick={() => handleQuickPrompt(q)}
                      className="text-xs px-3 py-1.5 rounded-full bg-muted border border-border/50 hover:bg-primary/10 hover:border-primary/50 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Input 
                    placeholder="Message NeuroFlow..." 
                    className="flex-1 bg-background border-border/50 h-12 rounded-xl focus-visible:ring-primary"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  />
                  <Button 
                    className="h-12 w-12 rounded-xl bg-primary hover:bg-primary/90 neon-glow-primary p-0"
                    onClick={handleSend}
                    disabled={isLoading}
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest font-bold">
                  Powered by NeuroFlow Neural Engine V2.5
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
