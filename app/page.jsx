"use client";

import Link from 'next/link';
import Globe from './components/Globe';
import AnimatedCounter from './components/AnimatedCounter';
import AnimatedSection from './components/AnimatedSection';

export default function Home() {
  const divisions = [
    { name: 'SI88 Trade', icon: '📦', description: 'International trading and procurement' },
    { name: 'SI88 Medical', icon: '🏥', description: 'Healthcare and medical equipment' },
    { name: 'SI88 Energy', icon: '⚡', description: 'Energy and natural resources' },
    { name: 'SI88 Logistics', icon: '🚚', description: 'Supply chain and logistics' },
    { name: 'Si Confidenci', icon: '👓', description: 'Luxury eyewear brand' },
  ];

  // const industries = [ ... ] // <-- REMOVED or COMMENTED OUT

  const values = [
    { name: 'Integrity', description: 'We operate with honesty and transparency in everything we do.' },
    { name: 'Professionalism', description: 'We maintain the highest standards of professional conduct.' },
    { name: 'Excellence', description: 'We pursue excellence relentlessly in all our endeavors.' },
    { name: 'Innovation', description: 'We embrace innovation to create lasting value for our partners.' },
    { name: 'Reliability', description: 'We build trust through consistent, dependable service.' },
    { name: 'Long-Term Relationships', description: 'We focus on building partnerships that endure for generations.' },
  ];

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute top-0 right-0 w-2/3 h-full z-1 pointer-events-none opacity-0 transition-opacity duration-1600 ease-[cubic-bezier(.22,.68,0,1)] delay-1000 [&.ready]:opacity-100">
          <Globe />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-1"></div>
        <div className="container-premium relative z-2">
          <div className="max-w-[640px]">
            <span className="eyebrow block mb-5 opacity-0 animate-[riseIn_0.9s_var(--ease)_0.2s_forwards]">
              Global Trade & Brand Development
            </span>
            <h1 className="text-[clamp(2.4rem,5.2vw,4.1rem)] leading-[1.08] font-['Fraunces',serif] font-light tracking-[-0.01em] opacity-0 animate-[riseIn_1s_var(--ease)_0.4s_forwards] text-white">
              Building Value Across Industries.
              <br />
              <span className="text-gold font-bold">Excellence. Innovation. Long-Term Growth.</span>
            </h1>
            <p className="mt-6 max-w-[460px] text-dim text-[1.02rem] leading-relaxed opacity-0 animate-[riseIn_1s_var(--ease)_0.65s_forwards]">
              SI88 Limited is an international trading and brand development group connecting businesses across Africa, Asia, and global markets. We build enduring value through trusted partnerships and world-class brands.
            </p>
            <div className="flex flex-wrap gap-4 mt-10 opacity-0 animate-[riseIn_1s_var(--ease)_0.85s_forwards]">
              <Link href="/services" className="btn-primary">Explore Our Businesses</Link>
              <Link href="/contact" className="btn-ghost">Schedule a Consultation</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-8 flex items-center gap-3 text-dim-dark text-[0.7rem] tracking-[0.2em] z-2">
          SCROLL
          <span className="w-[1px] h-8 bg-gradient-to-b from-gold to-transparent animate-[pulseLine_2.4s_ease-in-out_infinite]"></span>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-dark-alt py-20 border-t border-gold/10">
        <div className="container-premium">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <AnimatedCounter target={12} suffix="+" />
              <p className="text-dim text-sm mt-2 font-medium">Industry Sectors</p>
            </div>
            <div>
              <AnimatedCounter target={15} suffix="+" />
              <p className="text-dim text-sm mt-2 font-medium">Global Markets</p>
            </div>
            <div>
              <AnimatedCounter target={100} suffix="+" />
              <p className="text-dim text-sm mt-2 font-medium">Trusted Partners</p>
            </div>
            <div>
              <AnimatedCounter target={5} />
              <p className="text-dim text-sm mt-2 font-medium">Business Divisions</p>
            </div>
          </div>
        </div>
      </section>

      {/* ... rest of your page ... */}

      {/* Final CTA - where the apostrophe fix is needed */}
      <section className="section-dark-alt py-20 md:py-28 border-t border-gold/10">
        <div className="container-premium text-center">
          <AnimatedSection>
            <span className="eyebrow">Get Started</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mt-3">
              Ready to <span className="font-bold text-gold">Partner</span> With Us?
            </h2>
            <p className="text-dim max-w-2xl mx-auto mt-4">
              Let&apos;s discuss how SI88 Limited can support your business objectives
              and create enduring value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/contact">
                <button className="w-full sm:w-auto px-10 py-4 btn-primary">Contact SI88</button>
              </Link>
              <Link href="/services">
                <button className="w-full sm:w-auto px-10 py-4 btn-ghost">Explore Our Businesses</button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}