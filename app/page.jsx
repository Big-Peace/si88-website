"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Globe from './components/Globe';

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] md:min-h-screen flex items-center py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Left Side: Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6 order-2 lg:order-1"
            >
              <div className="w-12 sm:w-16 md:w-20 h-0.5 bg-gold"></div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-dark">
                Connecting Global Markets.
                <br />
                <span className="font-semibold text-gold">Building Trusted Partnerships.</span>
                <br />
                Creating Enduring Brands.
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-lg leading-relaxed">
                SI88 Limited is an international trading and brand development company 
                connecting businesses across Africa, Asia, and the wider global marketplace.
              </p>
              
              {/* CTA Buttons - Stack on mobile */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2">
                <Link href="/services" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gold text-white font-semibold rounded-sm hover:bg-opacity-80 transition-all text-sm sm:text-base">
                    Explore Our Services
                  </button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-gold text-dark font-semibold rounded-sm hover:bg-gold hover:text-white transition-all text-sm sm:text-base">
                    Contact Us
                  </button>
                </Link>
              </div>
              
              {/* Trust Badge - Responsive grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 text-xs sm:text-sm text-gray-500">
                <span className="text-center sm:text-left">✓ Trusted Partner</span>
                <span className="text-center sm:text-left">✓ Global Network</span>
                <span className="text-center sm:text-left">✓ Premium Brands</span>
              </div>
            </motion.div>
            
            {/* Right Side: 3D Globe - Smaller on mobile */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex justify-center items-center order-1 lg:order-2"
            >
              <div className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-full">
                <Globe />
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
      
      {/* Stats Section - Responsive grid */}
      <section className="bg-lightGray border-t border-gray-200 py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl text-gold font-bold">5+</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Global Markets</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl text-gold font-bold">10+</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Industry Sectors</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl text-gold font-bold">100+</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Trusted Partners</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl text-gold font-bold">1</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Premium Brand</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-dark text-white py-6 md:py-8">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2026 SI88 Limited. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}