"use client";

import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <div
      ref={ref}
      className={`reveal ${isInView ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}