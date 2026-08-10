import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import Container from './Container';
import Button from './Button';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-[#FFFFFF]/80 backdrop-blur-md border-b border-[#E5E5E7]"
    >
      <Container className="h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#0071E3] flex items-center justify-center text-white font-bold text-sm">
            M
          </div>
          <span className="font-semibold text-lg text-[#1D1D1F] tracking-tight">
            Money Low Cost
          </span>
        </div>

        {/* Status Badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F5F7] border border-[#E5E5E7] text-xs text-[#6E6E73]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#34C759]" />
          <span>Automated Transfer Network</span>
        </div>

        {/* Header Action Button */}
        <Button variant="primary" icon={ArrowRight}>
          Get Started
        </Button>
      </Container>
    </motion.header>
  );
}
