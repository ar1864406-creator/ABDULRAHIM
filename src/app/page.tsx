import { Header } from '@/components/landing/Header'
import { Hero } from '@/components/landing/Hero'
import { Benefits } from '@/components/landing/Benefits'
import { ChatDemo } from '@/components/landing/ChatDemo'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { Testimonials } from '@/components/landing/Testimonials'
import { Footer } from '@/components/landing/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Benefits />
      <ChatDemo />
      <HowItWorks />
      <Testimonials />
      
      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-headline">Ready to flow <span className="text-primary">higher?</span></h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Experience the future of productivity today. Start your free trial with NeuroFlow AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="h-16 px-10 text-lg rounded-xl bg-primary text-white font-bold neon-glow-primary hover:bg-primary/90 transition-all">
              Create Free Account
            </button>
            <button className="h-16 px-10 text-lg rounded-xl border border-border/50 text-foreground font-bold hover:bg-muted transition-all">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
