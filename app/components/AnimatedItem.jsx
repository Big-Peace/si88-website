"use client";

import { motion } from 'framer-motion';

const itemVariants = {
  initial: {
    opacity: 0,
    y: 15,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AnimatedItem({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      variants={itemVariants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}