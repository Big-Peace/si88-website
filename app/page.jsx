"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Globe from './components/Globe';

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="w-20 h-0.5 bg-gold"></div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-dark">
                Connecting Global Markets.
                <br />
                <span className="font-semibold text-gold">Building Trusted Partnerships.</span>
                <br />
                Creating Enduring Brands.
              </h1>
              <p className="text-gray-600 text-lg max-w-lg leading-relaxed">
                SI88 Limited is an international trading and brand development company 
                connecting businesses across Africa, Asia, and the wider global marketplace.
              </p>
              
              {/* CTA Buttons - NOW WITH WORKING LINKS */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/services">
                  <button className="px-8 py-3 bg-gold text-white font-semibold rounded-sm hover:bg-opacity-80 transition-all">
                    Explore Our Services
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-8 py-3 border-2 border-gold text-dark font-semibold rounded-sm hover:bg-gold hover:text-white transition-all">
                    Contact Us
                  </button>
                </Link>
              </div>
              
              {/* Trust Badge */}
              <div className="flex items-center gap-6 pt-6 text-sm text-gray-500">
                <span>✓ Trusted Partner</span>
                <span>✓ Global Network</span>
                <span>✓ Premium Brands</span>
              </div>
            </motion.div>
            
            {/* Right Side: 3D Globe */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex justify-center items-center"
            >
              <Globe />
            </motion.div>
            
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="bg-lightGray border-t border-gray-200 py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-gold text-4xl font-bold">5+</div>
              <div className="text-gray-600 text-sm mt-1">Global Markets</div>
            </div>
            <div>
              <div className="text-gold text-4xl font-bold">10+</div>
              <div className="text-gray-600 text-sm mt-1">Industry Sectors</div>
            </div>
            <div>
              <div className="text-gold text-4xl font-bold">100+</div>
              <div className="text-gray-600 text-sm mt-1">Trusted Partners</div>
            </div>
            <div>
              <div className="text-gold text-4xl font-bold">1</div>
              <div className="text-gray-600 text-sm mt-1">Premium Brand</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-dark text-white py-8">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 SI88 Limited. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}