import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, ArrowRight, Lock, Check } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';
import womanImg from '../assets/woman.png';

export default function HeroSection() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const cardScaleUp = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
    },
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 bg-[#FFFFFF] overflow-hidden">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          
          {/* Left Column: Large Apple Headline & CTAs (7 cols) */}
          <div className="lg:col-span-6 flex flex-col text-left">
            
            {/* Headline */}
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1D1D1F] leading-[1.08] mb-6"
            >
              Send money home.<br />
              <span className="text-[#6E6E73]">Without the complexity.</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl text-[#6E6E73] font-normal leading-relaxed max-w-xl mb-10"
            >
              Fast, secure and simple money transfers designed around the people you care about.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Button variant="primary" className="!py-4 !px-8 text-base">
                Start a Transfer
              </Button>

              <Button variant="secondary" className="!py-4 !px-8 text-base group">
                <span>How it works</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Button>
            </motion.div>

          </div>

          {/* Right Column: Premium Transfer UI & Woman Graphic (6 cols) */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Background Soft Glow Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0071E3]/5 to-[#34C759]/5 rounded-[40px] blur-3xl pointer-events-none" />

            {/* Main Composition Wrapper */}
            <div className="relative w-full max-w-lg">
              
              {/* Woman Image Overlay Background Accent */}
              <div className="absolute -top-16 -right-6 w-48 sm:w-64 opacity-90 pointer-events-none z-0 hidden sm:block">
                <img 
                  src={womanImg} 
                  alt="Happy customer holding card" 
                  className="w-full h-auto drop-shadow-xl"
                />
              </div>

              {/* Transfer Card */}
              <motion.div
                variants={cardScaleUp}
                className="relative z-10 bg-[#FFFFFF] border border-[#E5E5E7] rounded-[32px] p-6 sm:p-8 shadow-2xl shadow-slate-200/60 backdrop-blur-sm"
              >
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E5E5E7]/60">
                  <span className="text-xs font-bold tracking-widest text-[#6E6E73] uppercase">
                    SEND MONEY
                  </span>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F5F7] border border-[#E5E5E7] text-[11px] font-semibold text-[#34C759]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Ready to send</span>
                  </div>
                </div>

                {/* Sender Amount Block */}
                <div className="bg-[#F5F5F7] p-4 sm:p-5 rounded-2xl mb-4 border border-[#E5E5E7]/50">
                  <span className="text-xs font-semibold text-[#6E6E73] block mb-1">
                    You send
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight">
                      $1,000.00
                    </span>
                    <span className="text-xs font-bold text-[#1D1D1F] bg-[#FFFFFF] px-3 py-1.5 rounded-full border border-[#E5E5E7] shadow-2xs">
                      USD 🇺🇸
                    </span>
                  </div>
                </div>

                {/* Recipient Gets Block */}
                <div className="bg-[#F5F5F7] p-4 sm:p-5 rounded-2xl mb-6 border border-[#E5E5E7]/50">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-semibold text-[#6E6E73]">
                      Recipient gets
                    </span>
                    <span className="text-xs font-semibold text-[#1D1D1F]">
                      Philippines 🇵🇭
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#0071E3] tracking-tight">
                      ₱58,420.00
                    </span>
                    <span className="text-xs font-bold text-[#1D1D1F] bg-[#FFFFFF] px-3 py-1.5 rounded-full border border-[#E5E5E7] shadow-2xs">
                      PHP 🇵🇭
                    </span>
                  </div>
                </div>

                {/* Rates & Breakdown */}
                <div className="space-y-2.5 text-xs text-[#6E6E73] mb-6 px-1">
                  <div className="flex justify-between items-center">
                    <span>Transfer fee</span>
                    <span className="font-semibold text-[#34C759]">$0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Exchange rate</span>
                    <span className="font-semibold text-[#1D1D1F]">58.42</span>
                  </div>
                </div>

                {/* Continue Action Button */}
                <Button variant="primary" className="w-full justify-center text-base !py-4 shadow-md">
                  Continue
                </Button>
              </motion.div>

              {/* Floating Micro-Card 1: Transfer Completed (Top Left) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 z-20 bg-[#FFFFFF] border border-[#E5E5E7] rounded-2xl p-3.5 shadow-lg hidden sm:flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-[#34C759]/15 flex items-center justify-center text-[#34C759]">
                  <Check className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-semibold text-[#6E6E73]">
                    Transfer completed
                  </span>
                  <span className="text-xs font-extrabold text-[#1D1D1F]">
                    + ₱58,420
                  </span>
                </div>
              </motion.div>

              {/* Floating Micro-Card 2: Secure Transfer (Bottom Right) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-6 -right-6 z-20 bg-[#FFFFFF] border border-[#E5E5E7] rounded-2xl p-3.5 shadow-lg hidden sm:flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-[#0071E3]/15 flex items-center justify-center text-[#0071E3]">
                  <Lock className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-bold text-[#1D1D1F]">
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
