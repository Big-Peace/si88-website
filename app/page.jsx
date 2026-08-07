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

  const industries = [
    'Healthcare & Medical Equipment',
    'Consumer Goods & Fashion',
    'Agriculture & Commodities',
    'Energy & Natural Resources',
    'Industrial Supply & Manufacturing',
    'Government & Infrastructure',
  ];

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

      {/* ============================================================ */}
      {/* HERO SECTION */}
      {/* ============================================================ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* 3D Globe - positioned in background */}
        <div className="absolute top-0 right-0 w-2/3 h-full z-1 pointer-events-none opacity-0 transition-opacity duration-1600 ease-[cubic-bezier(.22,.68,0,1)] delay-1000 [&.ready]:opacity-100">
          <Globe />
        </div>

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-1"></div>

        <div className="container-premium relative z-2">
          <div className="max-w-[640px]">
            {/* Eyebrow */}
            <span className="eyebrow block mb-5 opacity-0 animate-[riseIn_0.9s_var(--ease)_0.2s_forwards]">
              Global Trade & Brand Development
            </span>

            {/* Headline */}
            <h1 className="text-[clamp(2.4rem,5.2vw,4.1rem)] leading-[1.08] font-['Fraunces',serif] font-light tracking-[-0.01em] opacity-0 animate-[riseIn_1s_var(--ease)_0.4s_forwards] text-white">
              Building Value Across Industries.
              <br />
              <span className="text-gold font-bold">Excellence. Innovation. Long-Term Growth.</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[460px] text-dim text-[1.02rem] leading-relaxed opacity-0 animate-[riseIn_1s_var(--ease)_0.65s_forwards]">
              SI88 Limited is an international trading and brand development group connecting businesses across Africa, Asia, and global markets. We build enduring value through trusted partnerships and world-class brands.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-10 opacity-0 animate-[riseIn_1s_var(--ease)_0.85s_forwards]">
              <Link href="/services" className="btn-primary">Explore Our Businesses</Link>
              <Link href="/contact" className="btn-ghost">Schedule a Consultation</Link>
            </div>
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="absolute bottom-8 left-8 flex items-center gap-3 text-dim-dark text-[0.7rem] tracking-[0.2em] z-2">
          SCROLL
          <span className="w-[1px] h-8 bg-gradient-to-b from-gold to-transparent animate-[pulseLine_2.4s_ease-in-out_infinite]"></span>
        </div>
      </section>

      {/* ============================================================ */}
      {/* STATS - Animated Counters */}
      {/* ============================================================ */}
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

      {/* ============================================================ */}
      {/* COMPANY OVERVIEW */}
      {/* ============================================================ */}
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
                  {
                    title: 'Vision',
                    desc: "To become one of Africa's most respected international trading and brand development companies.",
                  },
                  {
                    title: 'Mission',
                    desc: 'To connect global markets through trusted trade, professional service, strategic partnerships, and the development of world-class brands.',
                  },
                  {
                    title: 'Expansion',
                    desc: 'Strategically growing into healthcare, medical equipment, agriculture, energy, industrial supplies, and premium consumer products.',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`py-5 border-b ${i === 0 ? 'border-t border-gold/20' : ''} border-gold/20`}
                  >
                    <h3 className="text-[1rem] font-medium font-['Inter'] text-gold-light mb-1.5 tracking-[0.02em]">
                      {item.title}
                    </h3>
                    <p className="text-dim text-[0.92rem] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* BUSINESS DIVISIONS */}
      {/* ============================================================ */}
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
                  <div className="text-4xl mb-3">{division.icon}</div>
                  <h4 className="text-sm font-semibold text-dark group-hover:text-gold transition-colors">
                    {division.name}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">{division.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/brands">
              <span className="text-sm text-gold font-medium hover:underline cursor-pointer">
                Explore All Divisions →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* INDUSTRIES SERVED - Marquee */}
      {/* ============================================================ */}
      <section className="bg-black-2 py-20 border-y border-gold/15 overflow-hidden">
        <span className="eyebrow block text-center mb-8">Industries We Serve</span>
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex gap-14 w-max animate-marquee-slow">
            {[
              'Healthcare',
              'Medical Equipment',
              'Consumer Goods',
              'Fashion & Lifestyle',
              'Agriculture',
              'Energy',
              'Industrial Supply',
              'Manufacturing',
              'Government Procurement',
              'Infrastructure',
            ]
              .concat([
                'Healthcare',
                'Medical Equipment',
                'Consumer Goods',
                'Fashion & Lifestyle',
                'Agriculture',
                'Energy',
                'Industrial Supply',
                'Manufacturing',
                'Government Procurement',
                'Infrastructure',
              ])
              .map((item, i) => (
                <span
                  key={i}
                  className="font-['Fraunces',serif] text-[1.5rem] text-dim-dark whitespace-nowrap flex items-center gap-14 after:content-['—'] after:text-gold"
                >
                  {item}
                </span>
              ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* LEADERSHIP / VALUES */}
      {/* ============================================================ */}
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
                  <div className="w-8 h-0.5 bg-gold mb-4"></div>
                  <h4 className="text-lg font-semibold text-white">{value.name}</h4>
                  <p className="text-dim text-sm mt-2">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CEO / FOUNDER */}
      {/* ============================================================ */}
      <section className="section-dark py-[130px]">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-16 items-center">
            <div className="aspect-[3/4] border border-gold relative bg-gradient-to-br from-[#171512] to-black/90">
              <span className="absolute inset-0 flex items-center justify-center font-['Fraunces',serif] text-[3.2rem] text-gold/50">
                SI
              </span>
              <span className="absolute inset-[14px] border border-gold/35"></span>
            </div>
            <AnimatedSection>
              <span className="eyebrow">Founder & Chief Executive Officer</span>
              <p className="font-['Fraunces',serif] italic text-[clamp(1.4rem,2.6vw,2rem)] leading-[1.5] text-white font-light mt-5">
                &quot;Great companies are not built by chasing opportunities — they are built by earning trust, solving meaningful problems, and creating value that outlives their founders.&quot;
              </p>
              <div className="mt-6">
                <div className="font-['Fraunces',serif] text-[1.1rem] text-gold-light">Founder &amp; CEO</div>
                <div className="text-[0.8rem] text-dim tracking-[0.04em] mt-0.5">SI88 Limited</div>
              </div>
              <div className="grid grid-cols-2 gap-3 gap-x-8 mt-8">
                {[
                  'Integrity above everything',
                  'Think globally, act responsibly',
                  'Build lasting partnerships',
                  'Pursue excellence relentlessly',
                  'Create value before seeking profit',
                  'Never stop innovating',
                ].map((p, i) => (
                  <div
                    key={i}
                    className="text-[0.86rem] text-dim pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-[1px] before:bg-gold"
                  >
                    {p}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA */}
      {/* ============================================================ */}
      <section className="section-dark-alt py-20 md:py-28 border-t border-gold/10">
        <div className="container-premium text-center">
          <AnimatedSection>
            <span className="eyebrow">Get Started</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mt-3">
              Ready to <span className="font-bold text-gold">Partner</span> With Us?
            </h2>
            <p className="text-dim max-w-2xl mx-auto mt-4">
              Let's discuss how SI88 Limited can support your business objectives
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