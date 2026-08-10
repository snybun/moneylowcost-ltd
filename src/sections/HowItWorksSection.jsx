import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Container from '../components/Container';

export default function HowItWorksSection() {
  const sectionRef = useRef(null);

  // Scroll progress for vertical timeline line
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 60%', 'end 80%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const steps = [
    {
      number: '01',
      title: 'Create your account',
      description: 'Set up your profile and prepare your transfer.',
    },
    {
      number: '02',
      title: 'Choose your recipient',
      description: 'Select the person and destination.',
    },
    {
      number: '03',
      title: 'Send your money',
      description: 'Choose your preferred transfer method.',
    },
    {
      number: '04',
      title: 'They receive it',
      description: 'Your recipient receives the transfer.',
    },
  ];

  return (
    <section 
      id="how-it-works" 
      ref={sectionRef}
      className="bg-[#FFFFFF] py-24 md:py-36 border-b border-[#E5E5E7] relative overflow-hidden"
    >
      <Container>
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
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-[#E5E5E7]" />
          
          {/* Desktop Scroll Progress Active Line */}
          <motion.div
            style={{ scaleY }}
            className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-[#0071E3] origin-top z-10"
          />

          {/* Mobile Left Vertical Timeline Line */}
          <div className="md:hidden absolute left-6 top-4 bottom-4 w-[2px] bg-[#E5E5E7]" />
          
          <motion.div
            style={{ scaleY }}
            className="md:hidden absolute left-6 top-4 bottom-4 w-[2px] bg-[#0071E3] origin-top z-10"
          />

          {/* 4 Steps Timeline Items */}
          <div className="space-y-16 md:space-y-28 relative z-20">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0; // Left on desktop for even index

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
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#FFFFFF] border-2 border-[#0071E3] z-30 shadow-xs"
                  />

                  {/* Desktop Alternating Left Content */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left md:ml-auto'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {/* Step Number */}
                      <motion.span
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="text-4xl sm:text-5xl font-extrabold text-[#0071E3]/20 block mb-2 font-mono"
                      >
                        {step.number}
                      </motion.span>

                      {/* Step Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] mb-3">
                        {step.title}
                      </h3>

                      {/* Step Description */}
                      <p className="text-base text-[#6E6E73] font-normal leading-relaxed max-w-md inline-block">
                        {step.description}
                      </p>
                    </motion.div>
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
