import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import Button from '../components/Button';

export default function CtaSection() {
  return (
    <section id="cta" className="relative py-28 md:py-44 bg-[#FFFFFF] overflow-hidden border-b border-[#E5E5E7]">
      {/* Subtle Apple Blue Radial Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0071E3]/8 via-[#FFFFFF]/80 to-[#FFFFFF] pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          {/* Top Tag Pill */}
          <span className="text-xs font-bold tracking-widest text-[#0071E3] uppercase block mb-4">
            Start Today
          </span>

          {/* Huge Apple Closing Headline */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1D1D1F] leading-[1.08] mb-6">
            Ready to send money home?
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl text-[#6E6E73] font-normal leading-relaxed max-w-2xl mb-10">
            Start with a simpler way to transfer money.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button variant="primary" className="w-full sm:w-auto px-8 py-4 text-base">
              Get Started
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-base">
              Learn More →
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
