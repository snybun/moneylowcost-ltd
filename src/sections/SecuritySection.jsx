import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';
import Container from '../components/Container';

export default function SecuritySection() {
  return (
    <section id="security" className="bg-[#FFFFFF] py-28 md:py-44 border-b border-[#E5E5E7] relative overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Status Indicator Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#F5F5F7] border border-[#E5E5E7] shadow-2xs mb-10"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34C759] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#34C759]" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-[#1D1D1F]">
              Secure transfer experience
            </span>
          </motion.div>

          {/* Centered Large Security Visual with Radial Glow */}
          <div className="relative mb-12 flex items-center justify-center">
            
            {/* Ambient Animated Radial Glow (Blue / Green Tint) */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-[#0071E3]/20 via-[#34C759]/20 to-transparent blur-3xl pointer-events-none"
            />

            {/* Icon Container with Subtle Glassmorphism Pill */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 rounded-3xl sm:rounded-[36px] bg-[#FFFFFF] border border-[#E5E5E7] shadow-xl shadow-black/5 flex items-center justify-center group"
            >
              <ShieldCheck className="w-14 h-14 sm:w-18 sm:h-18 text-[#0071E3] transition-transform duration-300 group-hover:scale-105" />
            </motion.div>
          </div>

          {/* Large Apple Typography Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2 mb-6"
          >
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1D1D1F] leading-[1.06]">
              Your money.<br />
              Your trust.<br />
              <span className="text-[#0071E3]">Our responsibility.</span>
            </h2>
          </motion.div>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-[#6E6E73] font-normal leading-relaxed max-w-xl"
          >
            Designed with security and simplicity in mind.
          </motion.p>

          {/* Subtle Security Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-[#6E6E73]"
          >
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#0071E3]" />
              <span>Bank-Grade 256-Bit Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#34C759]" />
              <span>Fully Regulated & Compliant</span>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
