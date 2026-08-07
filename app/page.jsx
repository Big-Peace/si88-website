"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Globe from './components/Globe';
import AnimatedCounter from './components/AnimatedCounter';

// Section Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

export default function Home() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  const industries = [
    'Healthcare & Medical Equipment',
    'Consumer Goods & Fashion',
    'Agriculture & Commodities',
    'Energy & Natural Resources',
    'Industrial Supply & Manufacturing',
    'Government & Infrastructure'
  ];

  const divisions = [
    { name: 'SI88 Trade', icon: '📦', description: 'International trading and procurement' },
    { name: 'SI88 Medical', icon: '🏥', description: 'Healthcare and medical equipment' },
    { name: 'SI88 Energy', icon: '⚡', description: 'Energy and natural resources' },
    { name: 'SI88 Logistics', icon: '🚚', description: 'Supply chain and logistics' },
    { name: 'Si Confidenci', icon: '👓', description: 'Luxury eyewear brand' },
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* ============================================================ */}
      {/* HERO SECTION - Luxury Corporate */}
      {/* ============================================================ */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-16 md:pt-20">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gold/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container-premium relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="order-2 lg:order-1"
            >
              {/* Gold Divider */}
              <motion.div variants={fadeIn} className="w-16 h-0.5 bg-gold mb-6"></motion.div>

              {/* Badge */}
              <motion.div variants={fadeIn}>
                <span className="inline-block text-xs font-medium text-gold uppercase tracking-[0.2em] bg-gold/5 px-4 py-1.5 border border-gold/10">
                  Established • Global Group
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1 variants={fadeInUp} className="mt-4">
                <span className="block font-light text-dark">Building Value</span>
                <span className="block font-light text-dark">Across</span>
                <span className="block font-bold text-gold text-5xl md:text-6xl lg:text-7xl mt-1">Industries.</span>
                <span className="block text-dark font-light text-2xl md:text-3xl mt-4 tracking-wider">
                  Excellence. Innovation. Long-Term Growth.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p variants={fadeInUp} className="mt-6 text-gray-600 max-w-lg leading-relaxed">
                SI88 Limited is an international trading and brand development group 
                connecting businesses across Africa, Asia, and the wider global marketplace.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={fadeInUp} className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <button className="w-full sm:w-auto px-8 py-3 bg-dark text-white text-sm font-medium uppercase tracking-wider hover:bg-gold transition-colors duration-300">
                    Explore Our Businesses
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="w-full sm:w-auto px-8 py-3 border border-dark text-dark text-sm font-medium uppercase tracking-wider hover:bg-gold hover:border-gold hover:text-white transition-colors duration-300">
                    Schedule a Consultation
                  </button>
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div variants={fadeInUp} className="mt-8 flex items-center gap-6 text-xs text-gray-400 uppercase tracking-wider">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                  Trusted Partner
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                  Global Network
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                  Premium Brands
                </span>
              </motion.div>
            </motion.div>

            {/* Right: Globe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="w-full max-w-[450px] md:max-w-[550px]">
                <Globe />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* STATS SECTION - Animated Counters */}
      {/* ============================================================ */}
      <section ref={statsRef} className="section-gray py-20 border-t border-gray-200">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <AnimatedCounter target={12} suffix="+" />
              <p className="text-gray-600 text-sm mt-2 font-medium">Industry Sectors</p>
            </div>
            <div>
              <AnimatedCounter target={15} suffix="+" />
              <p className="text-gray-600 text-sm mt-2 font-medium">Global Markets</p>
            </div>
            <div>
              <AnimatedCounter target={100} suffix="+" />
              <p className="text-gray-600 text-sm mt-2 font-medium">Trusted Partners</p>
            </div>
            <div>
              <AnimatedCounter target={5} />
              <p className="text-gray-600 text-sm mt-2 font-medium">Business Divisions</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* COMPANY OVERVIEW - Credibility */}
      {/* ============================================================ */}
      <section className="section-light py-20 md:py-28">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl"
          >
            <div className="gold-divider mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-light text-dark">
              A Global Group Built on <br />
              <span className="font-bold text-gold">Trust, Integrity &amp; Innovation</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl">
              SI88 Limited was established with a clear vision: to become a respected 
              international enterprise that connects markets, creates opportunities, 
              and develops brands that stand the test of time.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
              Our operations span international importation, exportation, general trading, 
              strategic procurement, and brand development. We believe successful business 
              is built on trust, consistency, and mutually beneficial partnerships.
            </p>
            <Link href="/about">
              <button className="mt-8 px-8 py-3 border border-dark text-dark text-sm font-medium uppercase tracking-wider hover:bg-dark hover:text-white transition-colors duration-300">
                Learn More About SI88
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* BUSINESS DIVISIONS */}
      {/* ============================================================ */}
      <section className="section-gray py-20 md:py-28">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-medium text-gold uppercase tracking-[0.2em]">Our Group</span>
            <h2 className="text-3xl md:text-4xl font-light text-dark mt-2">
              Business <span className="font-bold text-gold">Divisions</span>
            </h2>
            <div className="gold-divider-center mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {divisions.map((division, index) => (
              <motion.div
                key={division.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white p-8 rounded-sm border border-gray-200 text-center hover:border-gold transition-all duration-300 group"
              >
                <div className="text-4xl mb-3">{division.icon}</div>
                <h4 className="text-sm font-semibold text-dark group-hover:text-gold transition-colors">
                  {division.name}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{division.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mt-10"
          >
            <Link href="/brands">
              <span className="text-sm text-gold font-medium hover:underline cursor-pointer">
                Explore All Divisions →
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* INDUSTRIES SERVED */}
      {/* ============================================================ */}
      <section className="section-light py-20 md:py-28">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <span className="text-xs font-medium text-gold uppercase tracking-[0.2em]">Sectors</span>
              <h2 className="text-3xl md:text-4xl font-light text-dark mt-2">
                Industries <span className="font-bold text-gold">We Serve</span>
              </h2>
              <div className="gold-divider mt-4"></div>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Our expertise spans multiple sectors, allowing us to provide comprehensive 
                solutions across the global marketplace.
              </p>
              <ul className="mt-6 space-y-3">
                {industries.map((industry, index) => (
                  <motion.li
                    key={industry}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0"></span>
                    <span>{industry}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gray-50 p-12 rounded-sm border border-gray-200"
            >
              <div className="text-center">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="text-xl font-light text-dark">Global Reach</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Connecting Africa, Asia, and markets worldwide.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    Africa • Asia • Europe • Americas
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* LEADERSHIP / VALUES */}
      {/* ============================================================ */}
      <section className="section-gray py-20 md:py-28">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-medium text-gold uppercase tracking-[0.2em]">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-light text-dark mt-2">
              Our <span className="font-bold text-gold">Core Values</span>
            </h2>
            <div className="gold-divider-center mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Integrity', description: 'We operate with honesty and transparency in everything we do.' },
              { name: 'Professionalism', description: 'We maintain the highest standards of professional conduct.' },
              { name: 'Excellence', description: 'We pursue excellence relentlessly in all our endeavors.' },
              { name: 'Innovation', description: 'We embrace innovation to create lasting value for our partners.' },
              { name: 'Reliability', description: 'We build trust through consistent, dependable service.' },
              { name: 'Long-Term Relationships', description: 'We focus on building partnerships that endure for generations.' },
            ].map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white p-8 rounded-sm border border-gray-200 hover:border-gold transition-all duration-300"
              >
                <div className="w-8 h-0.5 bg-gold mb-4"></div>
                <h4 className="text-lg font-semibold text-dark">{value.name}</h4>
                <p className="text-gray-500 text-sm mt-2">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CALL TO ACTION - Final */}
      {/* ============================================================ */}
      <section className="section-dark py-20 md:py-28">
        <div className="container-premium text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-xs font-medium text-gold uppercase tracking-[0.2em]">Get Started</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mt-3">
              Ready to <span className="font-bold text-gold">Partner</span> With Us?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              Let's discuss how SI88 Limited can support your business objectives 
              and create enduring value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/contact">
                <button className="w-full sm:w-auto px-10 py-4 bg-gold text-dark font-medium uppercase tracking-wider hover:bg-gold/90 transition-colors duration-300">
                  Contact SI88
                </button>
              </Link>
              <Link href="/services">
                <button className="w-full sm:w-auto px-10 py-4 border border-white/30 text-white font-medium uppercase tracking-wider hover:bg-white/10 transition-colors duration-300">
                  Explore Our Businesses
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}