"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Brands', href: '/brands' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'International Importation',
    'International Exportation',
    'Strategic Procurement',
    'Supply Chain Coordination',
    'Consumer Products',
    'Medical Equipment Supply',
  ];

  return (
    <footer className="bg-dark text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container-premium">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-light text-white mb-4">
              <span className="text-gold">SI88</span> Limited
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              An international trading and brand development group connecting businesses 
              across Africa, Asia, and the wider global marketplace.
            </p>
            <div className="mt-4">
              <div className="w-12 h-0.5 bg-gold"></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Key Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    href="/services"
                    className="text-gray-400 text-sm hover:text-gold transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>Road 8, House 16<br />Udoka Housing Estate<br />Awka, Anambra State<br />Nigeria</p>
              <p>
                <a href="mailto:info@si88limited.com" className="hover:text-gold transition-colors">
                  info@si88limited.com
                </a>
              </p>
              <p>
                <a href="mailto:ceo@si88limited.com" className="hover:text-gold transition-colors">
                  ceo@si88limited.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} SI88 Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-gray-500 text-xs hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 text-xs hover:text-gold transition-colors">
              Terms of Service
            </Link>
            <span className="text-gray-700 text-xs">|</span>
            <span className="text-gray-600 text-xs">Built with precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}