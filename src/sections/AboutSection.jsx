import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CreditCard, 
  Smartphone, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  DollarSign, 
  Heart, 
  CheckCircle2, 
  ArrowRight, 
  UserCheck, 
  Users, 
  Award,
  Wallet,
  Gift
} from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';
import { Parallax, ParallaxGlow, ParallaxTilt } from '../components/Parallax';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('you');
  const sectionRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const reasonsSender = [
    {
      title: 'Flexible Deposit Options',
      desc: 'No need to physically deposit cash — choose from several convenient digital and bank deposit options.',
      icon: Wallet,
    },
    {
      title: 'Guaranteed Best Rates',
      desc: 'No need to convert currency manually — enjoy the industry’s most competitive exchange rates automatically.',
      icon: DollarSign,
    },
    {
      title: 'Cashless & Safe',
      desc: 'No need to walk around with dangerous bundles of cash in your pocket.',
      icon: ShieldCheck,
    },
    {
      title: 'Instant Online Access',
      desc: 'No need to waste hours of your valuable time whenever you need to send money to loved ones.',
      icon: Clock,
    },
  ];

  const reasonsBeneficiary = [
    {
      title: 'Direct Card Delivery',
      desc: 'No need to visit a bank branch or agent location to withdraw cash — funds load directly to their Debit-Card.',
      icon: CreditCard,
    },
    {
      title: 'Automatic FX Conversion',
      desc: 'No need to convert money — they receive funds at the absolute best conversion rates without hidden commissions.',
      icon: DollarSign,
    },
    {
      title: 'Pocket Safety',
      desc: 'No need to carry physical bundles of cash around, eliminating loss and theft risks.',
      icon: ShieldCheck,
    },
    {
      title: 'Expenditure Control',
      desc: 'Eliminate fear of uncontrolled waste of money while ensuring financial peace of mind for your family.',
      icon: Heart,
    },
  ];

  const corePillars = [
    {
      badge: 'COMFORT',
      title: 'Seamless Experience',
      desc: 'An effortless money delivery procedure designed thoughtfully for both you and your beneficiary.',
      icon: Zap,
      accent: 'text-[#0071E3]',
      bg: 'bg-[#0071E3]/10',
      parallaxSpeed: 0.1,
    },
    {
      badge: 'AFFORDABILITY',
      title: 'Attractive Prices',
      desc: 'Unmatched remittance rates making every transfer the most cost-effective solution available.',
      icon: DollarSign,
      accent: 'text-[#34C759]',
      bg: 'bg-[#34C759]/10',
      parallaxSpeed: -0.06,
    },
    {
      badge: 'VALUE',
      title: 'Low-Cost Services',
      desc: 'Access exclusive discounted goods and essential everyday services at special member prices.',
      icon: Gift,
      accent: 'text-[#5856D6]',
      bg: 'bg-[#5856D6]/10',
      parallaxSpeed: 0.08,
    },
    {
      badge: 'CARE',
      title: 'Family Comfort',
      desc: 'Dedicated to doing our absolute best to make your and your family’s daily life much more comfortable.',
      icon: Heart,
      accent: 'text-[#FF2D55]',
      bg: 'bg-[#FF2D55]/10',
      parallaxSpeed: -0.08,
    },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative bg-[#F5F5F7] py-20 md:py-32 border-b border-[#E5E5E7] overflow-hidden"
    >
      {/* Background Parallax Ambient Glow Orbs */}
      <ParallaxGlow
        color="from-[#0071E3]/10 via-transparent to-[#34C759]/8"
        size="w-[600px] h-[600px]"
        speed={-0.18}
        className="top-1/4 -right-40"
      />
      <ParallaxGlow
        color="from-[#34C759]/10 via-transparent to-[#5856D6]/8"
        size="w-[550px] h-[550px]"
        speed={0.2}
        className="bottom-1/4 -left-40"
      />

      <Container className="relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E5E5E7] text-xs font-bold tracking-widest text-[#0071E3] uppercase shadow-xs mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>ESTABLISHED 2012 • ABOUT US</span>
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1D1D1F] mb-6 leading-tight">
            Make Your Life Easy.
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-[#6E6E73] font-normal leading-relaxed">
            Money-Low-Cost Ltd Company was established in 2012 with a clear mission: to upgrade and revolutionize the money-transfer procedure for foreign workers and their families worldwide.
          </p>
        </motion.div>

        {/* Hero Feature Highlight Card (Direct Debit-Card Online Remittance) */}
        <Parallax speed={0.06} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#FFFFFF] border border-[#E5E5E7] rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 shadow-sm relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0071E3]/10 text-[#0071E3] text-xs font-bold tracking-wide">
                  <Sparkles className="w-3.5 h-3.5" />
                  Computerized Online Transfer System
                </div>

                <h3 className="text-2xl sm:text-4xl font-bold text-[#1D1D1F] tracking-tight leading-snug">
                  Direct to your beneficiary’s Debit-Card. At prices you can’t find anywhere else.
                </h3>

                <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed">
                  You won’t find a computerized remittance system like this anywhere else. Transfer money online seamlessly from your computer or cell phone directly to your beneficiary’s Debit Card — issued directly through the bank.
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-[#1D1D1F] font-semibold bg-[#F5F5F7] px-4 py-2.5 rounded-2xl border border-[#E5E5E7]">
                    <CreditCard className="w-4 h-4 text-[#0071E3]" />
                    <span>Bank-Supplied Debit Card</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#1D1D1F] font-semibold bg-[#F5F5F7] px-4 py-2.5 rounded-2xl border border-[#E5E5E7]">
                    <Smartphone className="w-4 h-4 text-[#34C759]" />
                    <span>Computer & Cell Phone Online</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-gradient-to-br from-[#0071E3]/5 to-[#34C759]/10 rounded-[24px] p-6 sm:p-8 border border-[#E5E5E7]/60 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-bold tracking-widest text-[#0071E3] uppercase block">
                    EMERGENCY ZERO-FEE TOP-UPS
                  </span>
                  <h4 className="text-xl font-bold text-[#1D1D1F]">
                    Instant Funds When Needed Most
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
                    Even if your family runs out of money unexpectedly and needs support immediately, you can send them money again instantly through our ONLINE system — <strong>100% free of any additional charge</strong>, for both you and your beneficiary.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E5E7] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#6E6E73]">
                    No hidden fees • Instant delivery
                  </span>
                  <button
                    onClick={() => scrollToSection('cta')}
                    className="text-xs font-bold text-[#0071E3] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Register Free</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        </Parallax>

        {/* 4 Pillars Bento Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#0071E3] uppercase block mb-2">
              OUR GUIDING FACTORS
            </span>
            <h3 className="text-3xl font-bold text-[#1D1D1F]">
              Designed around your peace of mind.
            </h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
          >
            {corePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Parallax key={pillar.title} speed={pillar.parallaxSpeed} className="h-full">
                  <ParallaxTilt maxTilt={4} className="h-full">
                    <motion.div
                      variants={itemVariants}
                      className="h-full bg-[#FFFFFF] border border-[#E5E5E7] rounded-[24px] p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-[#0071E3]/40"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div className={`w-12 h-12 rounded-2xl ${pillar.bg} flex items-center justify-center`}>
                            <Icon className={`w-6 h-6 ${pillar.accent}`} />
                          </div>
                          <span className="text-[10px] font-bold tracking-widest text-[#6E6E73] uppercase bg-[#F5F5F7] px-2.5 py-1 rounded-full border border-[#E5E5E7]">
                            {pillar.badge}
                          </span>
                        </div>

                        <h4 className="text-lg font-bold text-[#1D1D1F] mb-2">
                          {pillar.title}
                        </h4>

                        <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </motion.div>
                  </ParallaxTilt>
                </Parallax>
              );
            })}
          </motion.div>
        </div>

        {/* The Reasons Section: YOU vs YOUR BENEFICIARY */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FFFFFF] border border-[#E5E5E7] rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 shadow-sm mb-16"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest text-[#0071E3] uppercase block mb-3">
              THE ADVANTAGES
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] mb-4">
              Why Money-Low-Cost makes sense for everyone.
            </h3>
            <p className="text-sm sm:text-base text-[#6E6E73]">
              By using our unique remittance system, both you and your family gain complete financial convenience and freedom.
            </p>

            {/* Apple Segmented Control Tabs */}
            <div className="inline-flex bg-[#F5F5F7] p-1.5 rounded-full border border-[#E5E5E7] mt-8">
              <button
                onClick={() => setActiveTab('you')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === 'you'
                    ? 'bg-[#FFFFFF] text-[#1D1D1F] shadow-xs'
                    : 'text-[#6E6E73] hover:text-[#1D1D1F]'
                }`}
              >
                <UserCheck className="w-4 h-4 text-[#0071E3]" />
                <span>For You (Sender)</span>
              </button>

              <button
                onClick={() => setActiveTab('beneficiary')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === 'beneficiary'
                    ? 'bg-[#FFFFFF] text-[#1D1D1F] shadow-xs'
                    : 'text-[#6E6E73] hover:text-[#1D1D1F]'
                }`}
              >
                <Users className="w-4 h-4 text-[#34C759]" />
                <span>For Your Beneficiary</span>
              </button>
            </div>
          </div>

          {/* Active Tab Grid Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {(activeTab === 'you' ? reasonsSender : reasonsBeneficiary).map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-[#F5F5F7]/80 border border-[#E5E5E7] rounded-[20px] p-6 space-y-4 hover:border-[#0071E3]/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] border border-[#E5E5E7] flex items-center justify-center text-[#0071E3] shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-[#1D1D1F]">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Benefits & Registration Call to Actions Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-gradient-to-r from-[#1D1D1F] to-[#2C2C2E] text-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#34C759]" />
                Join the Money-Low-Cost Family
              </span>

              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Enhance your quality of life. Register as a client free of charge.
              </h3>

              <p className="text-sm sm:text-base text-[#A1A1A6] leading-relaxed">
                As a Money-Low-Cost customer, you won’t just save money on remittance — you’ll unlock access to discounted goods, healthcare, telecom deals, and controlled family expenditure tools.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button 
                  variant="primary" 
                  className="!py-3.5 !px-7 text-sm sm:text-base !bg-[#0071E3] hover:!bg-[#0077ED]"
                  onClick={() => scrollToSection('cta')}
                >
                  Click Here to Register Now
                </Button>

                <Button 
                  variant="secondary" 
                  className="!py-3.5 !px-7 text-sm sm:text-base !bg-white/10 !text-white hover:!bg-white/20 !border-white/20"
                  onClick={() => scrollToSection('benefits')}
                >
                  View Member Benefits →
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-[24px] p-6 space-y-4 backdrop-blur-md">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#34C759]" />
                <span>What you get upon subscribing:</span>
              </h4>

              <ul className="space-y-3 text-xs sm:text-sm text-[#E5E5E7]">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3] mt-2 shrink-0" />
                  <span>Free registration & online client portal access.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34C759] mt-2 shrink-0" />
                  <span>Bank Debit-Card delivery for your beneficiary.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3] mt-2 shrink-0" />
                  <span>Instant, zero-fee emergency transfer options.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34C759] mt-2 shrink-0" />
                  <span>Exclusive member discounts on everyday goods & services.</span>
                </li>
              </ul>
            </div>

          </div>
        </motion.div>

      </Container>
    </section>
  );
}
