"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const Icons = {
  Import: () => (
    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 17l3 3m0 0l3-3m-3 3V7m6 7h9m-9 4h9m-9-8h9M3 7h9" />
    </svg>
  ),
  Export: () => (
    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7l-3-3m0 0l-3 3m3-3v10m-6 7H7m0 0l-3-3m3 3v-10" />
    </svg>
  ),
  Trade: () => (
    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11.005a1 1 0 001.37.372L4.5 11.5m0 0l2.5-1.5m-2.5 1.5v4.5m0-4.5l-2.5 1.5m4.5-4.5l2.5-1.5m0 0l2.5 1.5m-2.5-1.5v4.5m0-4.5l2.5 1.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Procurement: () => (
    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  Sourcing: () => (
    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  SupplyChain: () => (
    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Consumer: () => (
    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  ),
  Medical: () => (
    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  Agriculture: () => (
    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  Energy: () => (
    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Industrial: () => (
    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  Partnership: () => (
    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  Global: () => (
    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11.005a1 1 0 001.37.372L4.5 11.5m0 0l2.5-1.5m-2.5 1.5v4.5m0-4.5l-2.5 1.5m4.5-4.5l2.5-1.5m0 0l2.5 1.5m-2.5-1.5v4.5m0-4.5l2.5 1.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Trust: () => (
    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Star: () => (
    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
};

export default function ServicesPage() {
  const services = [
    { id: '01', name: 'International Importation', icon: Icons.Import, description: 'Facilitating the import of quality products across international borders with efficiency and full regulatory compliance.', category: 'Trade' },
    { id: '02', name: 'International Exportation', icon: Icons.Export, description: 'Connecting African products to global markets through reliable export channels and strategic partnerships.', category: 'Trade' },
    { id: '03', name: 'General Trading', icon: Icons.Trade, description: 'Comprehensive trading services across multiple sectors, industries, and international markets.', category: 'Trade' },
    { id: '04', name: 'Strategic Procurement', icon: Icons.Procurement, description: 'Strategic sourcing and procurement solutions designed to optimize supply chains and reduce costs.', category: 'Procurement' },
    { id: '05', name: 'Global Product Sourcing', icon: Icons.Sourcing, description: 'Finding and sourcing quality products from vetted, trusted suppliers across global markets.', category: 'Procurement' },
    { id: '06', name: 'Supply Chain Coordination', icon: Icons.SupplyChain, description: 'End-to-end supply chain management, logistics coordination, and operational optimization.', category: 'Operations' },
    { id: '07', name: 'Consumer Products', icon: Icons.Consumer, description: 'Premium consumer goods and products for retail, distribution, and e-commerce channels.', category: 'Products' },
    { id: '08', name: 'Medical Equipment Supply', icon: Icons.Medical, description: 'Supply of quality medical equipment, healthcare solutions, and pharmaceutical products.', category: 'Products' },
    { id: '09', name: 'Agricultural Commodities', icon: Icons.Agriculture, description: 'Trading and distribution of agricultural products, commodities, and farm inputs.', category: 'Products' },
    { id: '10', name: 'Energy & Natural Resources', icon: Icons.Energy, description: 'Strategic trading in energy products, natural resources, and industrial materials.', category: 'Products' },
    { id: '11', name: 'Industrial Supplies', icon: Icons.Industrial, description: 'Supply of industrial materials, equipment, and manufacturing solutions.', category: 'Products' },
    { id: '12', name: 'Business Development Partnerships', icon: Icons.Partnership, description: 'Building strategic partnerships, joint ventures, and business development opportunities.', category: 'Partnerships' },
  ];

  return (
    <main className="min-h-screen bg-black pt-20">
      {/* Hero */}
      <section className="relative bg-black py-24 border-b border-gold/10">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gold"></div>
              <span className="text-gold text-sm font-semibold tracking-wider uppercase">Our Expertise</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              Comprehensive <br /><span className="font-bold text-gold">Trading &amp; Development</span> Services
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
              Twelve integrated services spanning international trade, strategic procurement, supply chain management, and business development across global markets.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2 text-sm text-gray-500"><span className="w-2 h-2 bg-gold rounded-full"></span>Global Reach</div>
              <div className="flex items-center gap-2 text-sm text-gray-500"><span className="w-2 h-2 bg-gold rounded-full"></span>Trusted Network</div>
              <div className="flex items-center gap-2 text-sm text-gray-500"><span className="w-2 h-2 bg-gold rounded-full"></span>Enduring Value</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-black-2 py-20">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-light text-white mt-2">Our <span className="font-bold text-gold">Service Categories</span></h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Structured solutions designed to meet the diverse needs of international business.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div key={service.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.04 }} className="group relative bg-black border border-gold/10 rounded-sm p-8 hover:border-gold hover:shadow-gold/10 hover:shadow-xl transition-all duration-300">
                <div className="absolute top-4 right-4"><span className="text-xs font-medium text-gray-500 bg-black-2 px-3 py-1 rounded-full border border-gold/10">{service.category}</span></div>
                <div className="text-5xl font-light text-gray-800 group-hover:text-gold/20 transition-colors duration-300">{service.id}</div>
                <div className="mb-4 mt-2">{service.icon()}</div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-gold transition-colors duration-300">{service.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-black py-20 border-y border-gold/10">
        <div className="container-premium">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-gold text-sm font-semibold tracking-wider uppercase">Why SI88 Limited</span>
              <h2 className="text-3xl md:text-4xl font-light text-white mt-2">The <span className="font-bold text-gold">SI88 Advantage</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black-2 p-8 rounded-sm border-l-4 border-gold shadow-sm hover:shadow-gold/10 hover:shadow-xl transition-shadow">
                <div className="mb-4">{Icons.Global()}</div>
                <h4 className="text-lg font-semibold text-white mb-3">Global Network</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Extensive network of trusted suppliers, manufacturers, distributors, and strategic partners across international markets.</p>
              </div>
              <div className="bg-black-2 p-8 rounded-sm border-l-4 border-gold shadow-sm hover:shadow-gold/10 hover:shadow-xl transition-shadow">
                <div className="mb-4">{Icons.Trust()}</div>
                <h4 className="text-lg font-semibold text-white mb-3">Trusted Partnerships</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Built on integrity, professionalism, and a commitment to long-term relationships that create enduring value.</p>
              </div>
              <div className="bg-black-2 p-8 rounded-sm border-l-4 border-gold shadow-sm hover:shadow-gold/10 hover:shadow-xl transition-shadow">
                <div className="mb-4">{Icons.Star()}</div>
                <h4 className="text-lg font-semibold text-white mb-3">Excellence &amp; Innovation</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Pursuing excellence relentlessly while embracing innovation to create lasting value for our partners and clients.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black-2 text-white py-20">
        <div className="container-premium text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-light mt-3 mb-4 text-white">Ready to <span className="font-bold text-gold">Partner</span> With Us?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">Let&apos;s discuss how our comprehensive services can support your business objectives.</p>
            <Link href="/contact"><button className="px-12 py-4 bg-gold text-black font-semibold rounded-sm hover:bg-gold/90 transition-all tracking-wide">Contact Our Team</button></Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}