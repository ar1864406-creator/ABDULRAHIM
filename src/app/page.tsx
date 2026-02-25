import { Header } from '@/components/landing/Header'
import { Hero } from '@/components/landing/Hero'
import { Benefits } from '@/components/landing/Benefits'
import { ChatDemo } from '@/components/landing/ChatDemo'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { Testimonials } from '@/components/landing/Testimonials'
import { Footer } from '@/components/landing/Footer'
import { WelcomeNotification } from '@/components/landing/WelcomeNotification'
import { Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground mesh-gradient relative">
      <WelcomeNotification />
      
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <Header />
      
      <div className="relative z-10">
        <Hero />
        <Benefits />
        <ChatDemo />
        <HowItWorks />
        <Testimonials />
        
        {/* Final CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6 relative">
            <div className="max-w-5xl mx-auto glass-card rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism text-foreground text-xs font-bold uppercase tracking-widest mb-8">
                  <Sparkles className="w-4 h-4" />
                  <span>Join the elite 1%</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-bold mb-8 font-headline leading-tight">
                  Ready to flow <span className="gradient-text">higher?</span>
                </h2>
                
                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                  Experience the pinnacle of AI productivity. NeuroFlow is more than a tool; it's your cognitive edge.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button className="h-16 px-12 text-lg rounded-2xl bg-primary text-white font-bold neon-glow-primary hover:scale-105 transition-all duration-300">
                    Get Early Access
                  </button>
                  <button className="h-16 px-12 text-lg rounded-2xl glass-morphism text-foreground font-bold hover:bg-white/10 transition-all duration-300">
                    Watch Keynote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
