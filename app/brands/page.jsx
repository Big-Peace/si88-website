"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BrandsPage() {
  const brandValues = [
    {
      name: 'Timeless Elegance',
      icon: '⌚',
      description: 'Designs that transcend trends and fads, embodying sophistication that never goes out of style.'
    },
    {
      name: 'Exceptional Craftsmanship',
      icon: '🔧',
      description: 'Meticulously crafted with attention to every detail, using only the finest materials.'
    },
    {
      name: 'Refined Design',
      icon: '✨',
      description: 'Aesthetic precision that balances classic luxury with contemporary sophistication.'
    }
  ];

  const expansionPlans = [
    'Strategic international partnerships',
    'Authorized distributor networks',
    'Modern e-commerce channels',
    'Select premium retail locations'
  ];

  const futureDivisions = [
    { 
      name: 'SI88 Trade', 
      icon: '📦', 
      description: 'International trading division',
      status: 'Coming Soon'
    },
    { 
      name: 'SI88 Medical & Health Services', 
      icon: '🏥', 
      description: 'Healthcare & medical equipment division',
      status: 'Coming Soon'
    },
    { 
      name: 'SI88 Energy', 
      icon: '⚡', 
      description: 'Energy & natural resources division',
      status: 'Coming Soon'
    },
    { 
      name: 'SI88 Logistics', 
      icon: '🚚', 
      description: 'Supply chain & logistics division',
      status: 'Coming Soon'
    }
  ];

  return (
    <main className="min-h-screen bg-white pt-20">
      <section className="relative bg-white py-24 border-b border-gray-100 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gold"></div>
              <span className="text-gold text-sm font-semibold tracking-wider uppercase">Our Brand</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-dark leading-tight">
              <span className="font-bold text-gold">Si Confidenci</span>
              <br />
              Luxury Eyewear
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
              A flagship brand achievement developed by SI88 Limited in the Philippines, 
              representing our commitment to creating internationally competitive premium brands.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-gold/10 border border-gold/20 px-6 py-2 rounded-full">
                <span className="text-gold text-sm font-medium">🇵🇭 Philippines</span>
              </div>
              <div className="bg-gold/10 border border-gold/20 px-6 py-2 rounded-full">
                <span className="text-gold text-sm font-medium">✨ Luxury Collection</span>
              </div>
              <div className="bg-gold/10 border border-gold/20 px-6 py-2 rounded-full">
                <span className="text-gold text-sm font-medium">🌍 Global Expansion</span>
              </div>
              <div className="bg-gold/10 border border-gold/20 px-6 py-2 rounded-full">
                <span className="text-gold text-sm font-medium">🏢 SI88 Limited</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-lightGray py-12 border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-gold text-3xl">🏢</span>
              <span className="text-gray-400 text-sm font-medium tracking-wider uppercase">A Brand Built By</span>
              <span className="text-gold font-bold text-2xl">SI88 Limited</span>
            </div>
            <p className="text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
              Si Confidenci is one of SI88 Limited&apos;s flagship brand achievements, 
              developed in the Philippines as part of our commitment to creating 
              internationally competitive consumer brands. It represents our belief 
              that lasting value comes from creating brands that customers trust and admire.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-lightGray w-full aspect-[4/3] rounded-sm border-2 border-gold/30 flex items-center justify-center relative overflow-hidden">
                <div className="text-center text-gray-400">
                  <div className="text-7xl mb-4">👓</div>
                  <p className="text-lg font-medium text-dark">Si Confidenci</p>
                  <p className="text-sm text-gray-400">Luxury Eyewear Collection</p>
                  <p className="text-xs text-gray-300 mt-2">(Brand Visual Coming Soon)</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="w-16 h-0.5 bg-gold"></div>
              <h2 className="text-3xl md:text-4xl font-light text-dark">
                The <span className="font-bold text-gold">Story</span> Behind Si Confidenci
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Si Confidenci is SI88 Limited&apos;s flagship luxury eyewear brand, conceived and 
                developed in the Philippines with a vision of becoming an internationally 
                recognized premium fashion label.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Built around timeless elegance, exceptional craftsmanship, and refined design, 
                Si Confidenci reflects our commitment to creating products that inspire confidence 
                and sophistication.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As SI88 Limited expands globally, Si Confidenci will be introduced into 
                carefully selected international markets through strategic partnerships, 
                authorized distributors, and modern e-commerce channels.
              </p>
              <div className="pt-4">
                <div className="text-gold font-medium italic text-lg">
                  &quot;The brand represents our belief that lasting value comes not only from 
                  facilitating trade, but also from creating brands that customers trust and admire.&quot;
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-lightGray py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Our Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-light text-dark mt-2">
              The <span className="font-bold text-gold">Si Confidenci</span> Difference
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Three principles that define our approach to luxury eyewear.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {brandValues.map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-sm p-8 text-center hover:border-gold hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-dark mb-3">{value.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <span className="text-gold text-sm font-semibold tracking-wider uppercase">Global Vision</span>
              <h2 className="text-3xl md:text-4xl font-light text-dark mt-2">
                <span className="font-bold text-gold">Expansion</span> Strategy
              </h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                Bringing Si Confidenci to carefully selected international markets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expansionPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-lightGray p-6 rounded-sm border-l-4 border-gold shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
                >
                  <span className="text-gold text-2xl font-light">0{index + 1}</span>
                  <p className="text-gray-700 font-medium">{plan}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-lightGray py-20 border-t border-gray-200">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-14">
              <span className="text-gold text-sm font-semibold tracking-wider uppercase">The Vision</span>
              <h2 className="text-3xl md:text-4xl font-light text-dark mt-2">
                Building a <span className="font-bold text-gold">Global Group</span>
              </h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                SI88 Limited&apos;s vision is to become a diversified holding company 
                with specialized divisions across key industries.
              </p>
              <div className="mt-4 inline-block bg-gold/10 border border-gold/20 px-6 py-2 rounded-full">
                <span className="text-gold text-sm font-medium">🏢 SI88 Limited - Parent Company</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {futureDivisions.map((division, index) => (
                <motion.div
                  key={division.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-sm border border-gray-200 text-center hover:border-gold hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-4xl mb-3">{division.icon}</div>
                  <h4 className="text-lg font-semibold text-dark mb-2 group-hover:text-gold transition-colors">
                    {division.name}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{division.description}</p>
                  <div className="mt-4 inline-block text-xs font-medium text-gold bg-gold/10 px-4 py-1.5 rounded-full">
                    {division.status}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-dark text-white py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Partnership Opportunities</span>
            <h2 className="text-3xl md:text-4xl font-light mt-3 mb-4">
              Interested in <span className="font-bold text-gold">Collaborating</span> With Us?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Join us in bringing Si Confidenci to global markets or explore partnership 
              opportunities across our future divisions.
            </p>
            <Link href="/contact">
              <button className="px-12 py-4 bg-gold text-dark font-semibold rounded-sm hover:bg-gold/90 transition-all tracking-wide">
                Contact Our Brand Team
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <footer className="bg-dark/95 text-white py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 SI88 Limited. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}