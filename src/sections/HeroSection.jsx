import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Lock, Check } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';
import womanImg from '../assets/woman.png';

export default function HeroSection() {
  // Easing & Animation Settings
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
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitionConfig,
    },
  };

  const cardScaleUp = {
    hidden: { opacity: 0, scale: 0.96, y: 16 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 },
    },
  };

  return (
    <section className="relative bg-[#FFFFFF] py-12 md:py-20 lg:py-28 overflow-hidden">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Hero Text & Buttons (6 cols on lg) */}
          <div className="lg:col-span-6 flex flex-col text-left max-w-2xl mx-auto lg:mx-0">
            
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
              className="text-base sm:text-lg lg:text-xl text-[#6E6E73] font-normal leading-relaxed mb-8 sm:mb-10 max-w-lg"
            >
              Fast, secure and simple money transfers designed around the people you care about.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
            >
              <Button variant="primary" className="!py-3.5 !px-7 text-sm sm:text-base">
                Start a Transfer
              </Button>

              <Button variant="secondary" className="!py-3.5 !px-7 text-sm sm:text-base group">
                <span>How it works</span>
                <span className="inline-block ml-1 transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </Button>
            </motion.div>

          </div>

          {/* Right Column: Premium Transfer Card Composition (6 cols on lg) */}
          <div className="lg:col-span-6 relative flex justify-center items-center mt-4 lg:mt-0">
            
            {/* Subtle Ambient Background Layer (Behind Transfer Visual Only) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0071E3]/4 via-transparent to-[#34C759]/4 rounded-[40px] blur-2xl pointer-events-none" />

            {/* Visual Composition Container */}
            <div className="relative w-full max-w-md sm:max-w-lg">
              
              {/* Woman Image Asset (Subtly peeking behind transfer card) */}
              <div className="absolute -top-12 -right-4 sm:-right-8 w-44 sm:w-60 lg:w-64 opacity-90 pointer-events-none z-0 hidden sm:block">
                <img
                  src={womanImg}
                  alt="Happy woman with debit card"
                  className="w-full h-auto drop-shadow-md object-contain"
                />
              </div>

              {/* Main Transfer Card */}
              <motion.div
                variants={cardScaleUp}
                className="relative z-10 bg-[#FFFFFF] border border-[#E5E5E7] rounded-[28px] sm:rounded-[32px] p-5 sm:p-7 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)]"
              >
                {/* Header Row */}
                <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[#E5E5E7]/70">
                  <span className="text-[11px] font-bold tracking-widest text-[#6E6E73] uppercase">
                    SEND MONEY
                  </span>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F5F5F7] border border-[#E5E5E7] text-[11px] font-semibold text-[#34C759]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Ready to send</span>
                  </div>
                </div>

                {/* You Send Input Card */}
                <div className="bg-[#F5F5F7] p-4 sm:p-4.5 rounded-2xl mb-3.5 border border-[#E5E5E7]/60">
                  <span className="text-[11px] font-semibold text-[#6E6E73] block mb-1">
                    You send
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F] tracking-tight">
                      $1,000.00
                    </span>
                    <span className="text-xs font-semibold text-[#1D1D1F] bg-[#FFFFFF] px-2.5 py-1 rounded-full border border-[#E5E5E7] shadow-2xs">
                      USD 🇺🇸
                    </span>
                  </div>
                </div>

                {/* Recipient Gets Card */}
                <div className="bg-[#F5F5F7] p-4 sm:p-4.5 rounded-2xl mb-5 border border-[#E5E5E7]/60">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[11px] font-semibold text-[#6E6E73]">
                      Recipient gets
                    </span>
                    <span className="text-xs font-semibold text-[#1D1D1F]">
                      Philippines 🇵🇭
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl sm:text-3xl font-semibold text-[#0071E3] tracking-tight">
                      ₱58,420.00
                    </span>
                    <span className="text-xs font-semibold text-[#1D1D1F] bg-[#FFFFFF] px-2.5 py-1 rounded-full border border-[#E5E5E7] shadow-2xs">
                      PHP 🇵🇭
                    </span>
                  </div>
                </div>

                {/* Rates & Breakdown */}
                <div className="space-y-2 text-xs text-[#6E6E73] mb-5 px-1">
                  <div className="flex justify-between items-center">
                    <span>Transfer fee</span>
                    <span className="font-semibold text-[#34C759]">$0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Exchange rate</span>
                    <span className="font-semibold text-[#1D1D1F]">58.42</span>
                  </div>
                </div>

                {/* Continue Button */}
                <Button variant="primary" className="w-full justify-center text-sm font-semibold !py-3.5 shadow-sm">
                  Continue
                </Button>
              </motion.div>

              {/* Floating Micro-Card 1: Transfer Completed (Top Left) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-3 sm:-top-5 sm:-left-6 z-20 bg-[#FFFFFF] border border-[#E5E5E7] rounded-2xl p-3 shadow-md hidden sm:flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-full bg-[#34C759]/15 flex items-center justify-center text-[#34C759] shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-medium text-[#6E6E73]">
                    Transfer completed
                  </span>
                  <span className="text-xs font-bold text-[#1D1D1F]">
                    + ₱58,420
                  </span>
                </div>
              </motion.div>

              {/* Floating Micro-Card 2: Secure Transfer (Bottom Right) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -right-3 sm:-bottom-5 sm:-right-6 z-20 bg-[#FFFFFF] border border-[#E5E5E7] rounded-2xl p-3 shadow-md hidden sm:flex items-center gap-2.5"
              >
                <div className="w-7 h-7 rounded-full bg-[#0071E3]/15 flex items-center justify-center text-[#0071E3] shrink-0">
                  <Lock className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-semibold text-[#1D1D1F]">
                    Secure transfer
                  </span>
                  <span className="text-[10px] font-medium text-[#6E6E73]">
                    Protected information
                  </span>
                </div>
              </motion.div>

            </div>

          </div>

        </motion.div>
      </Container>
    </section>
  );
}
