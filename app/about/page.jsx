"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

// SVG Icons
const Icons = {
  Vision: () => (
    <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  Mission: () => (
    <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
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

export default function AboutPage() {
  const values = [
    { name: 'Integrity', icon: Icons.Integrity, description: 'We operate with honesty and transparency in everything we do.' },
    { name: 'Professionalism', icon: Icons.Professionalism, description: 'We maintain the highest standards of professional conduct.' },
    { name: 'Excellence', icon: Icons.Excellence, description: 'We pursue excellence relentlessly in all our endeavors.' },
    { name: 'Innovation', icon: Icons.Innovation, description: 'We embrace innovation to create lasting value for our partners.' },
    { name: 'Reliability', icon: Icons.Reliability, description: 'We build trust through consistent, dependable service.' },
    { name: 'Long-Term Relationships', icon: Icons.Relationships, description: 'We focus on building partnerships that endure for generations.' },
  ];

  return (
    <main className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative bg-black py-20 md:py-28 border-b border-gold/10">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="w-20 h-0.5 bg-gold mb-6"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              About <span className="font-semibold text-gold">SI88 Limited</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
              An international trading and brand development company connecting markets, 
              creating opportunities, and building brands that stand the test of time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-black-2 py-16 md:py-20 border-b border-gold/10">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8 text-center">
              Our <span className="font-semibold text-gold">Story</span>
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>SI88 Limited was established with a clear vision: to become a respected international enterprise that connects markets, creates opportunities, and develops brands that stand the test of time.</p>
              <p>Our operations span international importation, exportation, general trading, strategic procurement, and brand development. We believe successful business is built on trust, consistency, and mutually beneficial partnerships.</p>
              <p>As we continue to grow, SI88 Limited is strategically expanding into sectors including international trade, healthcare, medical equipment, agriculture, energy, industrial supplies, and premium consumer products.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-black py-16 md:py-20">
        <div className="container-premium">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-black-2 p-8 md:p-10 rounded-sm border border-gold/10"
            >
              <div className="mb-4">{Icons.Vision()}</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To become one of Africa&apos;s most respected international trading and brand 
                development companies, recognized for integrity, innovation, and enduring 
                partnerships.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gold/10 p-8 md:p-10 rounded-sm border border-gold/20"
            >
              <div className="mb-4">{Icons.Mission()}</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To connect global markets through trusted trade, professional service, 
                strategic partnerships, and the development of world-class brands.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-black-2 py-16 md:py-20 border-y border-gold/10">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-white">
              Our <span className="font-semibold text-gold">Core Values</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">The principles that guide everything we do.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black p-8 rounded-sm border border-gold/10 hover:border-gold transition-all hover:shadow-gold/10 hover:shadow-xl"
              >
                <div className="mb-4">{value.icon()}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="bg-black py-16 md:py-20">
        <div className="container-premium">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start"
            >
              <div className="md:col-span-1">
                <div className="bg-black-2 w-full aspect-square rounded-sm border-2 border-gold/30 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="text-6xl mb-2">👤</div>
                    <p className="text-sm">Founder Photo</p>
                    <p className="text-xs text-gray-600">(Coming Soon)</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="w-20 h-0.5 bg-gold mb-6"></div>
                <h2 className="text-3xl md:text-4xl font-light text-white mb-2">
                  Founder & <span className="font-semibold text-gold">Chief Executive Officer</span>
                </h2>
                <div className="space-y-6 text-gray-300 leading-relaxed mt-6">
                  <p>The Founder and Chief Executive Officer of SI88 Limited is an entrepreneur driven by a long-term vision: to build an internationally respected enterprise that connects businesses, creates enduring brands, and contributes meaningfully to economic development across Africa and beyond.</p>
                  <p>His leadership philosophy is founded on the belief that trust is the most valuable asset in business. Rather than pursuing short-term gains, he is committed to building institutions that endure for generations through integrity, disciplined execution, innovation, and strategic partnerships.</p>
                  <p className="text-gold font-medium italic">&quot;Great companies are not built by chasing opportunities—they are built by earning trust, solving meaningful problems, and creating value that outlives their founders.&quot;</p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {['Integrity above everything','Think globally, act responsibly','Build lasting partnerships','Pursue excellence relentlessly','Create value before seeking profit','Never stop innovating'].map((principle, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="text-gold">✓</span>
                      <span>{principle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black-2 text-white py-16 md:py-20 border-t border-gold/10">
        <div className="container-premium text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">Ready to Partner With Us?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">Let&apos;s connect and explore how SI88 Limited can help your business grow.</p>
            <Link href="/contact"><button className="px-10 py-4 bg-gold text-black font-semibold rounded-sm hover:bg-gold/90 transition-all">Get In Touch</button></Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}