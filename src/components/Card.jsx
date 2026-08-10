import React from 'react';
import { motion } from 'framer-motion';

export default function Card({ children, className = '', hover = true }) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : {}}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`bg-[#FFFFFF] border border-[#E5E5E7] rounded-3xl p-6 shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}
