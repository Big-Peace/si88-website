"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold/15 py-12">
      <div className="container-premium">
        <div className="flex flex-wrap justify-between gap-7 pb-8 border-b border-gold/10">
          <div>
            <span className="font-['Fraunces',serif] text-[1.3rem] text-white">
              SI<span className="text-gold">88</span>
              <span className="font-['Inter'] text-[0.62rem] tracking-[0.25em] text-dim ml-1">LIMITED</span>
            </span>
            <p className="text-dim text-[0.85rem] max-w-[280px] mt-4 leading-relaxed">
              An international trading and brand development company connecting Africa, Asia, and the global marketplace.
            </p>
          </div>
          <div className="flex flex-wrap gap-14">
            <div>
              <h4 className="text-[0.7rem] tracking-[0.18em] text-gold uppercase mb-3.5">Company</h4>
              <Link href="/about" className="block text-dim text-[0.87rem] mb-2 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/about#leadership" className="block text-dim text-[0.87rem] mb-2 hover:text-white transition-colors">
                Leadership
              </Link>
              <Link href="/brands" className="block text-dim text-[0.87rem] mb-2 hover:text-white transition-colors">
                Our Brands
              </Link>
            </div>
            <div>
              <h4 className="text-[0.7rem] tracking-[0.18em] text-gold uppercase mb-3.5">Business</h4>
              <Link href="/services" className="block text-dim text-[0.87rem] mb-2 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/contact" className="block text-dim text-[0.87rem] mb-2 hover:text-white transition-colors">
                Partnerships
              </Link>
            </div>
            <div>
              <h4 className="text-[0.7rem] tracking-[0.18em] text-gold uppercase mb-3.5">Contact</h4>
              <a href="mailto:info@si88limited.com" className="block text-dim text-[0.87rem] mb-2 hover:text-white transition-colors">
                info@si88limited.com
              </a>
              <span className="block text-dim text-[0.87rem]">Awka, Nigeria</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center pt-6 gap-3">
          <p className="text-[0.76rem] text-dim-dark">© {new Date().getFullYear()} SI88 Limited. All rights reserved.</p>
          <p className="text-[0.76rem] text-dim-dark">Built with precision</p>
        </div>
      </div>
    </footer>
  );
}