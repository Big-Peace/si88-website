"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  const values = [
    { name: 'Integrity', icon: '🤝', description: 'We operate with honesty and transparency in everything we do.' },
    { name: 'Professionalism', icon: '💼', description: 'We maintain the highest standards of professional conduct.' },
    { name: 'Excellence', icon: '⭐', description: 'We pursue excellence relentlessly in all our endeavors.' },
    { name: 'Innovation', icon: '💡', description: 'We embrace innovation to create lasting value for our partners.' },
    { name: 'Reliability', icon: '🔒', description: 'We build trust through consistent, dependable service.' },
    { name: 'Long-Term Relationships', icon: '🌱', description: 'We focus on building partnerships that endure for generations.' },
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

      {/* Company Story Section */}
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
              <p>
                SI88 Limited was established with a clear vision: to become a respected 
                international enterprise that connects markets, creates opportunities, 
                and develops brands that stand the test of time.
              </p>
              <p>
                Our operations span international importation, exportation, general trading, 
                strategic procurement, and brand development. We believe successful business 
                is built on trust, consistency, and mutually beneficial partnerships.
              </p>
              <p>
                As we continue to grow, SI88 Limited is strategically expanding into sectors 
                including international trade, healthcare, medical equipment, agriculture, 
                energy, industrial supplies, and premium consumer products.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-black py-16 md:py-20">
        <div className="container-premium">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-black-2 p-8 md:p-10 rounded-sm border border-gold/10"
            >
              <div className="text-gold text-4xl mb-4">👁️</div>
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
              <div className="text-gold text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To connect global markets through trusted trade, professional service, 
                strategic partnerships, and the development of world-class brands.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
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
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
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
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO & Founder Section */}
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
                  <p>
                    The Founder and Chief Executive Officer of SI88 Limited is an entrepreneur 
                    driven by a long-term vision: to build an internationally respected enterprise 
                    that connects businesses, creates enduring brands, and contributes meaningfully 
                    to economic development across Africa and beyond.
                  </p>
                  <p>
                    His leadership philosophy is founded on the belief that trust is the most 
                    valuable asset in business. Rather than pursuing short-term gains, he is 
                    committed to building institutions that endure for generations through integrity, 
                    disciplined execution, innovation, and strategic partnerships.
                  </p>
                  <p className="text-gold font-medium italic">
                    &quot;Great companies are not built by chasing opportunities—they are built by 
                    earning trust, solving meaningful problems, and creating value that outlives 
                    their founders.&quot;
                  </p>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {[
                    'Integrity above everything',
                    'Think globally, act responsibly',
                    'Build lasting partnerships',
                    'Pursue excellence relentlessly',
                    'Create value before seeking profit',
                    'Never stop innovating'
                  ].map((principle, i) => (
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

      {/* Call to Action Section */}
      <section className="bg-black-2 text-white py-16 md:py-20 border-t border-gold/10">
        <div className="container-premium text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
              Ready to Partner With Us?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Let&apos;s connect and explore how SI88 Limited can help your business grow.
            </p>
            <Link href="/contact">
              <button className="px-10 py-4 bg-gold text-black font-semibold rounded-sm hover:bg-gold/90 transition-all">
                Get In Touch
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}