import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { UserPlus, UserCheck, Send, CheckCircle2 } from 'lucide-react';
import Container from '../components/Container';
import { Parallax, ParallaxGlow, ParallaxTilt } from '../components/Parallax';

export default function HowItWorksSection() {
  const sectionRef = useRef(null);

  // Scroll progress for vertical timeline line
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 70%', 'end 85%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  const steps = [
    {
      number: '01',
      title: 'Create your account',
      description: 'Set up your profile in under 2 minutes with simple ID verification.',
      icon: UserPlus,
      iconColor: 'text-[#0071E3]',
      iconBg: 'bg-[#0071E3]/10',
    },
    {
      number: '02',
      title: 'Choose your recipient',
      description: 'Select the beneficiary and add their debit card or account details.',
      icon: UserCheck,
      iconColor: 'text-[#34C759]',
      iconBg: 'bg-[#34C759]/10',
    },
    {
      number: '03',
      title: 'Send your money',
      description: 'Review transparent live exchange rates and confirm with $0 hidden fee.',
      icon: Send,
      iconColor: 'text-[#0071E3]',
      iconBg: 'bg-[#0071E3]/10',
    },
    {
      number: '04',
      title: 'They receive it',
      description: 'Funds are delivered automatically to your recipient within minutes.',
      icon: CheckCircle2,
      iconColor: 'text-[#34C759]',
      iconBg: 'bg-[#34C759]/10',
    },
  ];

  return (
    <section 
      id="how-it-works" 
      ref={sectionRef}
      className="bg-[#FFFFFF] py-24 md:py-36 border-b border-[#E5E5E7] relative overflow-hidden"
    >
      {/* Background Ambient Glow Orbs with Parallax */}
      <ParallaxGlow
        color="from-[#0071E3]/10 via-transparent to-[#34C759]/8"
        size="w-[550px] h-[550px]"
        speed={-0.18}
        className="-top-20 -right-20"
      />
      <ParallaxGlow
        color="from-[#34C759]/10 via-transparent to-[#0071E3]/8"
        size="w-[500px] h-[500px]"
        speed={0.2}
        className="bottom-10 -left-20"
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20 md:mb-32"
        >
          <span className="text-xs font-bold tracking-widest text-[#0071E3] uppercase block mb-3">
            Simple Process
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1D1D1F] leading-[1.08] mb-4">
            Everything you need.<br />
            <span className="text-[#6E6E73]">Nothing you don't.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] font-normal">
            Sending money takes just four simple steps.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Desktop Central Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-[2px] -translate-x-1/2 bg-[#E5E5E7]" />
          
          {/* Desktop Scroll Progress Active Line */}
          <motion.div
            style={{ scaleY }}
            className="hidden md:block absolute left-1/2 top-6 bottom-6 w-[2.5px] -translate-x-1/2 bg-gradient-to-b from-[#0071E3] to-[#34C759] origin-top z-10 shadow-sm shadow-[#0071E3]/30"
          />

          {/* Mobile Left Vertical Timeline Line */}
          <div className="md:hidden absolute left-6 top-6 bottom-6 w-[2px] bg-[#E5E5E7]" />
          
          <motion.div
            style={{ scaleY }}
            className="md:hidden absolute left-6 top-6 bottom-6 w-[2.5px] bg-gradient-to-b from-[#0071E3] to-[#34C759] origin-top z-10"
          />

          {/* 4 Steps Timeline Items */}
          <div className="space-y-16 md:space-y-28 relative z-20">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0; // Left on desktop for even index
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* Timeline Dot (Center Desktop / Left Mobile) */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#FFFFFF] border-2 border-[#0071E3] z-30 shadow-md flex items-center justify-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3]" />
                  </motion.div>

                  {/* Desktop Alternating Left Content */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left md:ml-auto'}`}>
                    <Parallax
                      speed={isEven ? 0.1 : -0.1}
                      className="relative"
                    >
                      <ParallaxTilt maxTilt={4}>
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: '-50px' }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className={`relative p-6 sm:p-8 rounded-3xl bg-[#F5F5F7]/80 hover:bg-[#F5F5F7] border border-[#E5E5E7] transition-all duration-300 hover:shadow-lg hover:shadow-black/5 overflow-hidden group ${
                            isEven ? 'md:ml-auto' : ''
                          }`}
                        >
                          {/* Giant Background Parallax Step Number */}
                          <span
                            className={`absolute -bottom-4 ${
                              isEven ? 'left-4' : 'right-4'
                            } text-7xl sm:text-8xl font-black text-[#0071E3]/5 select-none font-mono pointer-events-none transition-transform duration-500 group-hover:scale-110`}
                          >
                            {step.number}
                          </span>

                          <div className={`flex items-center gap-3 mb-4 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                            <div className={`w-10 h-10 rounded-xl ${step.iconBg} flex items-center justify-center`}>
                              <Icon className={`w-5 h-5 ${step.iconColor}`} />
                            </div>
                            <span className="text-xs font-bold text-[#0071E3] tracking-wider uppercase font-mono">
                              Step {step.number}
                            </span>
                          </div>

                          {/* Step Title */}
                          <h3 className="text-2xl font-bold tracking-tight text-[#1D1D1F] mb-2">
                            {step.title}
                          </h3>

                          {/* Step Description */}
                          <p className="text-sm text-[#6E6E73] font-normal leading-relaxed max-w-md">
                            {step.description}
                          </p>
                        </motion.div>
                      </ParallaxTilt>
                    </Parallax>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}
