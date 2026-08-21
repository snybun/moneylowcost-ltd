import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Heart } from 'lucide-react';
import Container from '../components/Container';
import { Parallax, ParallaxGlow, ParallaxTilt } from '../components/Parallax';

export default function FeaturesSection() {
  const sectionRef = useRef(null);

  const features = [
    {
      badge: 'FAST',
      title: 'Transfers designed to move quickly.',
      description: 'Instant verification and automatic payouts directly to recipient debit cards.',
      icon: Zap,
      iconColor: 'text-[#0071E3]',
      bgColor: 'bg-[#0071E3]/10',
      parallaxSpeed: 0.12,
    },
    {
      badge: 'SECURE',
      title: 'Your information is handled with care.',
      description: 'End-to-end encrypted compliance architecture adhering to international standards.',
      icon: ShieldCheck,
      iconColor: 'text-[#34C759]',
      bgColor: 'bg-[#34C759]/10',
      parallaxSpeed: -0.08,
    },
    {
      badge: 'SIMPLE',
      title: 'A straightforward experience from start to finish.',
      description: 'No complicated paperwork, hidden spreads, or long counter queues.',
      icon: Heart,
      iconColor: 'text-[#0071E3]',
      bgColor: 'bg-[#F5F5F7]',
      parallaxSpeed: 0.15,
    },
  ];

  return (
    <section ref={sectionRef} className="relative bg-[#FFFFFF] py-20 md:py-32 border-b border-[#E5E5E7]/50 overflow-hidden">
      {/* Ambient Parallax Glow */}
      <ParallaxGlow
        color="from-[#0071E3]/8 via-transparent to-[#34C759]/6"
        size="w-[600px] h-[600px]"
        speed={0.15}
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <Container className="relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <span className="text-xs font-bold tracking-widest text-[#0071E3] uppercase block mb-3">
            Core Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1D1D1F]">
            Simple by design. Built around you.
          </h2>
        </motion.div>

        {/* 3 Columns Desktop / 1 Column Mobile Grid with Staggered Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 items-stretch">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Parallax
                key={feature.badge}
                speed={feature.parallaxSpeed}
                className="h-full"
              >
                <ParallaxTilt maxTilt={5} className="h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{
                      duration: 0.6,
                      delay: idx * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="h-full flex flex-col text-left items-start p-7 sm:p-8 rounded-3xl bg-[#F5F5F7]/80 hover:bg-[#F5F5F7] border border-[#E5E5E7] transition-all duration-300 hover:shadow-lg hover:shadow-black/5 group"
                  >
                    {/* Subtle Icon Background */}
                    <div
                      className={`w-12 h-12 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                    </div>

                    {/* Feature Tag */}
                    <span className="text-[11px] font-bold tracking-widest text-[#6E6E73] uppercase mb-2">
                      {feature.badge}
                    </span>

                    {/* Feature Title / Description */}
                    <h3 className="text-xl font-bold text-[#1D1D1F] leading-snug tracking-tight mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed font-normal">
                      {feature.description}
                    </p>
                  </motion.div>
                </ParallaxTilt>
              </Parallax>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
