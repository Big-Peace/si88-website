"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Brands', href: '/brands' },
    { name: 'Leadership', href: '/about#leadership' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled ? 'bg-black/86 backdrop-blur-[14px] border-b border-gold/18 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-premium">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-['Fraunces',serif] text-[1.6rem] tracking-[0.02em] text-white">
              SI<span className="text-gold">88</span>
            </span>
            <span className="text-[0.58rem] tracking-[0.32em] text-dim uppercase mt-1">Limited</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-10 list-none">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-[0.82rem] tracking-[0.04em] text-dim relative pb-1 transition-colors duration-300 hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-gold after:transition-all after:duration-350 hover:after:w-full"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link href="/contact" className="hidden md:block border border-gold text-gold px-5 py-2.5 text-[0.78rem] tracking-[0.08em] transition-all duration-300 hover:bg-gold hover:text-black">
            Partner With Us
          </Link>

          {/* Burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-0 z-50"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-[1px] bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-[1px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-[1px] bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <ul className="flex flex-col items-center gap-6 py-10 list-none">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white text-[1.3rem] tracking-[0.04em] hover:text-gold transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    className="border border-gold text-gold px-6 py-3 text-[0.85rem] tracking-[0.08em] hover:bg-gold hover:text-black transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    Partner With Us
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}