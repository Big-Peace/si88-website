"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: '01',
      name: 'International Importation',
      icon: '📦',
      description: 'Facilitating the import of quality products across international borders with efficiency and full regulatory compliance.',
      category: 'Trade'
    },
    {
      id: '02',
      name: 'International Exportation',
      icon: '🚢',
      description: 'Connecting African products to global markets through reliable export channels and strategic partnerships.',
      category: 'Trade'
    },
    {
      id: '03',
      name: 'General Trading',
      icon: '🤝',
      description: 'Comprehensive trading services across multiple sectors, industries, and international markets.',
      category: 'Trade'
    },
    {
      id: '04',
      name: 'Strategic Procurement',
      icon: '🎯',
      description: 'Strategic sourcing and procurement solutions designed to optimize supply chains and reduce costs.',
      category: 'Procurement'
    },
    {
      id: '05',
      name: 'Global Product Sourcing',
      icon: '🌍',
      description: 'Finding and sourcing quality products from vetted, trusted suppliers across global markets.',
      category: 'Procurement'
    },
    {
      id: '06',
      name: 'Supply Chain Coordination',
      icon: '🔗',
      description: 'End-to-end supply chain management, logistics coordination, and operational optimization.',
      category: 'Operations'
    },
    {
      id: '07',
      name: 'Consumer Products',
      icon: '🛍️',
      description: 'Premium consumer goods and products for retail, distribution, and e-commerce channels.',
      category: 'Products'
    },
    {
      id: '08',
      name: 'Medical Equipment Supply',
      icon: '🏥',
      description: 'Supply of quality medical equipment, healthcare solutions, and pharmaceutical products.',
      category: 'Products'
    },
    {
      id: '09',
      name: 'Agricultural Commodities',
      icon: '🌾',
      description: 'Trading and distribution of agricultural products, commodities, and farm inputs.',
      category: 'Products'
    },
    {
      id: '10',
      name: 'Energy & Natural Resources',
      icon: '⚡',
      description: 'Strategic trading in energy products, natural resources, and industrial materials.',
      category: 'Products'
    },
    {
      id: '11',
      name: 'Industrial Supplies',
      icon: '🏭',
      description: 'Supply of industrial materials, equipment, and manufacturing solutions.',
      category: 'Products'
    },
    {
      id: '12',
      name: 'Business Development Partnerships',
      icon: '💼',
      description: 'Building strategic partnerships, joint ventures, and business development opportunities.',
      category: 'Partnerships'
    }
  ];

  return (
    <main className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative bg-black py-24 border-b border-gold/10">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gold"></div>
              <span className="text-gold text-sm font-semibold tracking-wider uppercase">Our Expertise</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              Comprehensive <br />
              <span className="font-bold text-gold">Trading &amp; Development</span> Services
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
              Twelve integrated services spanning international trade, strategic procurement, 
              supply chain management, and business development across global markets.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-2 h-2 bg-gold rounded-full"></span>
                Global Reach
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-2 h-2 bg-gold rounded-full"></span>
                Trusted Network
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-2 h-2 bg-gold rounded-full"></span>
                Enduring Value
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-black-2 py-20">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-light text-white mt-2">
              Our <span className="font-bold text-gold">Service Categories</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Structured solutions designed to meet the diverse needs of international business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="group relative bg-black border border-gold/10 rounded-sm p-8 hover:border-gold hover:shadow-gold/10 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-medium text-gray-500 bg-black-2 px-3 py-1 rounded-full border border-gold/10">
                    {service.category}
                  </span>
                </div>

                <div className="text-5xl font-light text-gray-800 group-hover:text-gold/20 transition-colors duration-300">
                  {service.id}
                </div>

                <div className="text-3xl mb-4 mt-2">{service.icon}</div>

                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.name}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-black py-20 border-y border-gold/10">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-14">
              <span className="text-gold text-sm font-semibold tracking-wider uppercase">Why SI88 Limited</span>
              <h2 className="text-3xl md:text-4xl font-light text-white mt-2">
                The <span className="font-bold text-gold">SI88 Advantage</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black-2 p-8 rounded-sm border-l-4 border-gold shadow-sm hover:shadow-gold/10 hover:shadow-xl transition-shadow">
                <div className="text-gold text-3xl mb-4">🌐</div>
                <h4 className="text-lg font-semibold text-white mb-3">Global Network</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Extensive network of trusted suppliers, manufacturers, distributors, and strategic partners across international markets.
                </p>
              </div>

              <div className="bg-black-2 p-8 rounded-sm border-l-4 border-gold shadow-sm hover:shadow-gold/10 hover:shadow-xl transition-shadow">
                <div className="text-gold text-3xl mb-4">🤝</div>
                <h4 className="text-lg font-semibold text-white mb-3">Trusted Partnerships</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Built on integrity, professionalism, and a commitment to long-term relationships that create enduring value.
                </p>
              </div>

              <div className="bg-black-2 p-8 rounded-sm border-l-4 border-gold shadow-sm hover:shadow-gold/10 hover:shadow-xl transition-shadow">
                <div className="text-gold text-3xl mb-4">⭐</div>
                <h4 className="text-lg font-semibold text-white mb-3">Excellence &amp; Innovation</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Pursuing excellence relentlessly while embracing innovation to create lasting value for our partners and clients.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black-2 text-white py-20">
        <div className="container-premium text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-light mt-3 mb-4 text-white">
              Ready to <span className="font-bold text-gold">Partner</span> With Us?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Let&apos;s discuss how our comprehensive services can support your business objectives.
            </p>
            <Link href="/contact">
              <button className="px-12 py-4 bg-gold text-black font-semibold rounded-sm hover:bg-gold/90 transition-all tracking-wide">
                Contact Our Team
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}