import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, ArrowRight, Lock, Check, Zap } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';
import womanImg from '../assets/woman.png';

export default function HeroSection() {
  const transitionConfig = { duration: 0.6, ease: [0.16, 1, 0.3, 1] };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitionConfig,
    },
  };

  const imageFadeIn = {
    hidden: { opacity: 0, scale: 0.96, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
    },
  };

  return (
    <section className="relative bg-[#FFFFFF] py-12 md:py-20 lg:py-24 overflow-hidden border-b border-[#E5E5E7]/50">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Hero Text & CTAs (6 cols on lg) */}
          <div className="lg:col-span-6 flex flex-col text-left max-w-2xl mx-auto lg:mx-0 z-10">
            
            {/* Status Pill */}
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F5F7] border border-[#E5E5E7] text-xs font-semibold text-[#1D1D1F]">
                <Zap className="w-3.5 h-3.5 text-[#0071E3] fill-[#0071E3]" />
                <span>Fully Automatic System • Within Minutes</span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#1D1D1F] leading-[1.06] mb-5 sm:mb-6"
            >
              Send money home.<br />
              <span className="text-[#6E6E73]">Without the complexity.</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg lg:text-xl text-[#6E6E73] font-normal leading-relaxed mb-8 sm:mb-10 max-w-xl"
            >
              Fast, secure and simple money transfers through a fully automatic system designed around the people you care about.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8"
            >
              <Button variant="primary" className="!py-3.5 !px-7 text-sm sm:text-base shadow-sm">
                Start a Transfer
              </Button>

              <Button variant="secondary" className="!py-3.5 !px-7 text-sm sm:text-base group">
                <span>How it works</span>
                <span className="inline-block ml-1 transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </Button>
            </motion.div>

            {/* Trust Spec Indicators */}
            <motion.div variants={fadeInUp} className="flex items-center gap-6 pt-4 border-t border-[#E5E5E7]/80 text-xs text-[#6E6E73]">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#34C759]" />
                <span>$0 Transfer Fee</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#0071E3]" />
                <span>Bank-Grade Encryption</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Unblocked Woman Visual & Feature Cards (6 cols on lg) */}
          <div className="lg:col-span-6 relative flex justify-center items-center mt-6 lg:mt-0">
            
            {/* Soft Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0071E3]/6 via-transparent to-[#34C759]/6 rounded-[40px] blur-3xl pointer-events-none" />

            {/* Relative Image & Floating Cards Composition */}
            <div className="relative w-full max-w-md sm:max-w-lg flex justify-center items-center">
              
              {/* Woman Image Asset - 100% PROMINENT & UNBLOCKED */}
              <motion.div
                variants={imageFadeIn}
                className="relative z-10 w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[440px] flex justify-center"
              >
                <img
                  src={womanImg}
                  alt="Money Low Cost Customer with Debit Card"
                  className="w-full h-auto drop-shadow-2xl object-contain"
                />
              </motion.div>

              {/* Floating Feature Card 1: Live Rate / Transfer Calculator Preview (Left) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-8 -left-2 sm:top-12 sm:-left-8 z-20 bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E5E5E7] rounded-2xl p-4 shadow-xl max-w-[210px] hidden sm:block"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-[#6E6E73] uppercase tracking-wider">INSTANT RATE</span>
                  <span className="w-2 h-2 rounded-full bg-[#34C759] animate-pulse" />
                </div>
                <div className="text-xs text-[#6E6E73] mb-0.5">You send $1,000 USD</div>
                <div className="text-base font-bold text-[#0071E3]">₱58,420.00 PHP 🇵🇭</div>
                <div className="text-[10px] text-[#34C759] font-medium mt-1">✓ $0 Transfer Fee</div>
              </motion.div>

              {/* Floating Feature Card 2: Transfer Completed (Top Right) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-4 -right-2 sm:top-6 sm:-right-6 z-20 bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E5E5E7] rounded-2xl p-3 shadow-lg hidden sm:flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-full bg-[#34C759]/15 flex items-center justify-center text-[#34C759] shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-medium text-[#6E6E73]">Transfer completed</span>
                  <span className="text-xs font-bold text-[#1D1D1F]">+ ₱58,420</span>
                </div>
              </motion.div>

              {/* Floating Feature Card 3: Secure Transfer (Bottom Right) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 z-20 bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E5E5E7] rounded-2xl p-3 shadow-lg hidden sm:flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-full bg-[#0071E3]/15 flex items-center justify-center text-[#0071E3] shrink-0">
                  <Lock className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-semibold text-[#1D1D1F]">Secure transfer</span>
                  <span className="text-[10px] font-medium text-[#6E6E73]">Protected information</span>
                </div>
              </motion.div>

            </div>

          </div>

        </motion.div>
      </Container>
    </section>
  );
}
