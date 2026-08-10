import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Heart } from 'lucide-react';
import Container from '../components/Container';

export default function FeaturesSection() {
  const features = [
    {
      badge: 'FAST',
      title: 'Transfers designed to move quickly.',
      icon: Zap,
      iconColor: 'text-[#0071E3]',
      bgColor: 'bg-[#0071E3]/10',
    },
    {
      badge: 'SECURE',
      title: 'Your information is handled with care.',
      icon: ShieldCheck,
      iconColor: 'text-[#34C759]',
      bgColor: 'bg-[#34C759]/10',
    },
    {
      badge: 'SIMPLE',
      title: 'A straightforward experience from start to finish.',
      icon: Heart,
      iconColor: 'text-[#0071E3]',
      bgColor: 'bg-[#F5F5F7]',
    },
  ];

  return (
    <section className="bg-[#FFFFFF] py-20 md:py-32 border-b border-[#E5E5E7]/50">
      <Container>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1D1D1F]">
            Simple by design. Built around you.
          </h2>
        </motion.div>

        {/* 3 Columns Desktop / 1 Column Mobile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.badge}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col text-left items-start group"
              >
                {/* Subtle Icon Background */}
                <div
                  className={`w-12 h-12 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105`}
                >
                  <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>

                {/* Feature Tag */}
                <span className="text-[11px] font-bold tracking-widest text-[#6E6E73] uppercase mb-2">
                  {feature.badge}
                </span>

                {/* Feature Title / Description */}
                <h3 className="text-lg sm:text-xl font-semibold text-[#1D1D1F] leading-snug tracking-tight">
                  {feature.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
