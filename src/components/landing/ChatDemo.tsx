"use client"

import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Send, Bot, User, Loader2 } from 'lucide-react'
import { interactiveAIDemoChat } from '@/ai/flows/interactive-ai-demo-chat'

type Message = {
  role: 'user' | 'ai'
  text: string
}

export function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: "Hello! I'm Abdul's AI assistant. Want to know about his design process, tech stack, or availability for your next project?" }
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
      setMessages(prev => [...prev, { role: 'ai', text: "Systems currently recalibrating. Please reach out to Abdul directly via email." }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickPrompt = (prompt: string) => {
    setInput(prompt)
  }

  return (
    <section id="assistant" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-headline tracking-tight">The <span className="text-primary">Portfolio Assistant.</span></h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light">
            Have questions? Interview my neural twin. It knows my skills, project history, and design philosophy.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="clay-card border-none rounded-[3rem] overflow-hidden">
            <CardHeader className="border-b border-white/5 bg-white/5 px-8 py-6 flex flex-row items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse">
                  <Bot className="w-7 h-7 text-white" />
                </div>
                <div>
                  <CardTitle className="text-lg font-bold font-headline">Abdul's Neural Twin</CardTitle>
                  <CardDescription className="text-xs text-emerald-500 font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    Secure Link Established
                  </CardDescription>
                </div>
              </div>
              <div className="flex gap-3">
                {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-white/10" />)}
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div 
                ref={scrollRef}
                className="h-[500px] overflow-y-auto p-10 space-y-8 scrollbar-hide"
              >
                {messages.map((msg, i) => (
                  <div 
                    key={i} 
                    className={`flex gap-6 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} animate-fade-in-up`}
                  >
                    <Avatar className={`w-10 h-10 rounded-2xl ${msg.role === 'ai' ? 'bg-primary' : 'bg-secondary'}`}>
                      <AvatarFallback className="text-white">
                        {msg.role === 'ai' ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`max-w-[75%] rounded-[2rem] p-6 text-base leading-relaxed ${
                      msg.role === 'ai' 
                        ? 'bg-white/5 border border-white/10 text-foreground rounded-tl-none' 
                        : 'clay-card-primary text-white rounded-tr-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-6 flex-row animate-fade-in-up">
                    <Avatar className="w-10 h-10 rounded-2xl bg-primary">
                      <AvatarFallback><Bot className="w-5 h-5 text-white" /></AvatarFallback>
                    </Avatar>
                    <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 rounded-tl-none">
                      <Loader2 className="w-6 h-6 animate-spin text-primary" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-8 border-t border-white/5 space-y-6 bg-white/5">
                <div className="flex flex-wrap gap-3">
                  <span className="text-xs font-bold text-muted-foreground mr-2 self-center uppercase tracking-widest">Inquire:</span>
                  {["Tech Stack", "Design Process", "Availability"].map(q => (
                    <button 
                      key={q} 
                      onClick={() => handleQuickPrompt(q)}
                      className="text-xs px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Input 
                    placeholder="Ask me anything..." 
                    className="flex-1 bg-black/20 border-white/10 h-14 rounded-2xl focus-visible:ring-primary px-6 text-[#FFF0C4]"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  />
                  <Button 
                    className="h-14 w-14 rounded-2xl bg-primary hover:bg-[#FFF0C4] hover:text-[#1a0301] transition-all duration-300 clay-button p-0 flex-shrink-0"
                    onClick={handleSend}
                    disabled={isLoading}
                  >
                    <Send className="w-6 h-6" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
