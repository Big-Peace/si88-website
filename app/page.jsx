"use client";

import Link from 'next/link';
import { Suspense } from 'react';
import Globe from './components/Globe';
import Scene3D from './components/Scene3D';
import AnimatedCounter from './components/AnimatedCounter';
import AnimatedSection from './components/AnimatedSection';
import AnimatedItem from './components/AnimatedItem';

// SVG Icons
const Icons = {
  Trade: () => (
    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11.005a1 1 0 001.37.372L4.5 11.5m0 0l2.5-1.5m-2.5 1.5v4.5m0-4.5l-2.5 1.5m4.5-4.5l2.5-1.5m0 0l2.5 1.5m-2.5-1.5v4.5m0-4.5l2.5 1.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Medical: () => (
    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  Energy: () => (
    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Logistics: () => (
    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 18.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm10 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-10 0h8M5 14.5h14M5 10.5h14M5 6.5h14" />
    </svg>
  ),
  Eyewear: () => (
    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0a3 3 0 11-6 0 3 3 0 016 0zm-18 0a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6" />
    </svg>
  ),
  Integrity: () => (
    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Professionalism: () => (
    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Excellence: () => (
    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  Innovation: () => (
    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  Reliability: () => (
    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  Relationships: () => (
    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
};

export default function Home() {
  const divisions = [
    { name: 'SI88 Trade', icon: Icons.Trade, description: 'International trading and procurement' },
    { name: 'SI88 Medical', icon: Icons.Medical, description: 'Healthcare and medical equipment' },
    { name: 'SI88 Energy', icon: Icons.Energy, description: 'Energy and natural resources' },
    { name: 'SI88 Logistics', icon: Icons.Logistics, description: 'Supply chain and logistics' },
    { name: 'Si Confidenci', icon: Icons.Eyewear, description: 'Luxury eyewear brand' },
  ];

  const values = [
    { name: 'Integrity', icon: Icons.Integrity, description: 'We operate with honesty and transparency in everything we do.' },
    { name: 'Professionalism', icon: Icons.Professionalism, description: 'We maintain the highest standards of professional conduct.' },
    { name: 'Excellence', icon: Icons.Excellence, description: 'We pursue excellence relentlessly in all our endeavors.' },
    { name: 'Innovation', icon: Icons.Innovation, description: 'We embrace innovation to create lasting value for our partners.' },
    { name: 'Reliability', icon: Icons.Reliability, description: 'We build trust through consistent, dependable service.' },
    { name: 'Long-Term Relationships', icon: Icons.Relationships, description: 'We focus on building partnerships that endure for generations.' },
  ];

  return (
    <main className="min-h-screen bg-black relative">
      <Scene3D />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute top-0 right-0 w-2/3 h-full z-1 pointer-events-none opacity-0 transition-opacity duration-1600 ease-[cubic-bezier(.22,.68,0,1)] delay-1000 [&.ready]:opacity-100">
          <Suspense fallback={<div className="text-gold text-center">Loading 3D Globe...</div>}>
            <Globe />
          </Suspense>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-1"></div>
        <div className="container-premium relative z-2">
          <div className="max-w-[640px]">
            <AnimatedItem>
              <span className="eyebrow block mb-5">Global Trade & Brand Development</span>
            </AnimatedItem>
            <AnimatedItem delay={0.1}>
              <h1 className="text-[clamp(2.4rem,5.2vw,4.1rem)] leading-[1.08] font-['Fraunces',serif] font-light tracking-[-0.01em] text-white">
                Building Value Across Industries.
                <br />
                <span className="text-gold font-bold">Excellence. Innovation. Long-Term Growth.</span>
              </h1>
            </AnimatedItem>
            <AnimatedItem delay={0.2}>
              <p className="mt-6 max-w-[460px] text-dim text-[1.02rem] leading-relaxed">
                SI88 Limited is an international trading and brand development group connecting businesses across Africa, Asia, and global markets. We build enduring value through trusted partnerships and world-class brands.
              </p>
            </AnimatedItem>
            <AnimatedItem delay={0.3}>
              <div className="flex flex-wrap gap-4 mt-10">
                <Link href="/services" className="btn-primary">Explore Our Businesses</Link>
                <Link href="/contact" className="btn-ghost">Schedule a Consultation</Link>
              </div>
            </AnimatedItem>
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

      {/* Company Overview */}
      <section className="section-dark py-[130px]">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-start">
            <AnimatedSection>
              <span className="eyebrow">About SI88 Limited</span>
              <h2 className="text-[clamp(1.9rem,3.4vw,2.7rem)] font-['Fraunces',serif] font-light leading-[1.2] mt-4 mb-6 text-white">
                A diversified enterprise, <br />built on trust.
              </h2>
              <p className="text-[1.2rem] leading-relaxed text-[#d8d5cd] font-light">
                SI88 Limited was established with a clear vision: to become a respected international enterprise that connects markets, creates opportunities, and develops brands that stand the test of time.{' '}
                <strong className="text-white font-medium">Our operations span international importation, exportation, general trading, strategic procurement, and brand development.</strong>
              </p>
              <div className="mt-8">
                <Link href="/about" className="btn-ghost">Learn More About SI88</Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <div className="flex flex-col">
                {[
                  { title: 'Vision', desc: "To become one of Africa's most respected international trading and brand development companies." },
                  { title: 'Mission', desc: 'To connect global markets through trusted trade, professional service, strategic partnerships, and the development of world-class brands.' },
                  { title: 'Expansion', desc: 'Strategically growing into healthcare, medical equipment, agriculture, energy, industrial supplies, and premium consumer products.' },
                ].map((item, i) => (
                  <div key={i} className={`py-5 border-b ${i === 0 ? 'border-t border-gold/20' : ''} border-gold/20`}>
                    <h3 className="text-[1rem] font-medium font-['Inter'] text-gold-light mb-1.5 tracking-[0.02em]">{item.title}</h3>
                    <p className="text-dim text-[0.92rem] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Business Divisions — WITH SVG ICONS */}
      <section className="section-light py-[130px]">
        <div className="container-premium">
          <div className="text-center mb-16">
            <span className="eyebrow text-gold-deep">Our Group</span>
            <h2 className="text-black mt-2">Business <span className="font-bold text-gold">Divisions</span></h2>
            <div className="gold-divider-center mt-4"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {divisions.map((division, index) => (
              <AnimatedSection key={division.name} delay={index * 100}>
                <div className="bg-white p-8 rounded-sm border border-gray-200 text-center hover:border-gold transition-all duration-300 group">
                  <div className="flex justify-center mb-3">{division.icon()}</div>
                  <h4 className="text-sm font-semibold text-dark group-hover:text-gold transition-colors">{division.name}</h4>
                  <p className="text-xs text-gray-500 mt-1">{division.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/brands"><span className="text-sm text-gold font-medium hover:underline cursor-pointer">Explore All Divisions →</span></Link>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="bg-black-2 py-20 border-y border-gold/15 overflow-hidden">
        <span className="eyebrow block text-center mb-8">Industries We Serve</span>
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex gap-14 w-max animate-marquee-slow">
            {['Healthcare', 'Medical Equipment', 'Consumer Goods', 'Fashion & Lifestyle', 'Agriculture', 'Energy', 'Industrial Supply', 'Manufacturing', 'Government Procurement', 'Infrastructure']
              .concat(['Healthcare', 'Medical Equipment', 'Consumer Goods', 'Fashion & Lifestyle', 'Agriculture', 'Energy', 'Industrial Supply', 'Manufacturing', 'Government Procurement', 'Infrastructure'])
              .map((item, i) => (
                <span key={i} className="font-['Fraunces',serif] text-[1.5rem] text-dim-dark whitespace-nowrap flex items-center gap-14 after:content-['—'] after:text-gold">{item}</span>
              ))}
          </div>
        </div>
      </section>

      {/* Core Values — WITH SVG ICONS */}
      <section className="section-dark-alt py-[130px]">
        <div className="container-premium">
          <div className="text-center mb-16">
            <span className="eyebrow">Leadership</span>
            <h2 className="text-white mt-2">Our <span className="text-gold font-bold">Core Values</span></h2>
            <div className="gold-divider-center mt-4"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <AnimatedSection key={value.name} delay={index * 100}>
                <div className="bg-black-2 p-8 rounded-sm border border-gold/10 hover:border-gold transition-all duration-300">
                  <div className="flex justify-start mb-4">{value.icon()}</div>
                  <h4 className="text-lg font-semibold text-white">{value.name}</h4>
                  <p className="text-dim text-sm mt-2">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-dark-alt py-20 md:py-28 border-t border-gold/10">
        <div className="container-premium text-center">
          <AnimatedSection>
            <span className="eyebrow">Get Started</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mt-3">
              Ready to <span className="font-bold text-gold">Partner</span> With Us?
            </h2>
            <p className="text-dim max-w-2xl mx-auto mt-4">
              Let&apos;s discuss how SI88 Limited can support your business objectives and create enduring value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/contact"><button className="w-full sm:w-auto px-10 py-4 btn-primary">Contact SI88</button></Link>
              <Link href="/services"><button className="w-full sm:w-auto px-10 py-4 btn-ghost">Explore Our Businesses</button></Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}