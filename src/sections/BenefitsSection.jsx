import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Smartphone, Eye, Compass, ArrowUpRight } from 'lucide-react';
import Container from '../components/Container';

export default function BenefitsSection() {
  const benefits = [
    {
      id: 'health',
      badge: 'HEALTHCARE',
      title: 'Health Insurance',
      description: 'We offer a cost effective health care policy specifically designed for the foreign worker.',
      icon: HeartPulse,
      accentColor: 'text-[#0071E3]',
      iconBg: 'bg-[#0071E3]/10',
      colSpan: 'lg:col-span-7', // Asymmetric Bento Span
    },
    {
      id: 'comms',
      badge: 'CONNECTIVITY',
      title: 'Communications Deal',
      description: 'Obtain an attractive local communications deal, at an attractive price.',
      icon: Smartphone,
      accentColor: 'text-[#34C759]',
      iconBg: 'bg-[#34C759]/10',
      colSpan: 'lg:col-span-5',
    },
    {
      id: 'vision',
      badge: 'OPTICAL CARE',
      title: 'Eyeglasses',
      description: 'Obtain eyeglasses and vision care packages at an attractive price.',
      icon: Eye,
      accentColor: 'text-[#0071E3]',
      iconBg: 'bg-[#0071E3]/10',
      colSpan: 'lg:col-span-5',
    },
    {
      id: 'tours',
      badge: 'LEISURE & TRAVEL',
      title: 'Tour Across the Country',
      description: 'Money-Low-Cost company will organize tours throughout Israel state at competitive prices.',
      icon: Compass,
      accentColor: 'text-[#34C759]',
      iconBg: 'bg-[#34C759]/10',
      colSpan: 'lg:col-span-7',
    },
  ];

  return (
    <section id="benefits" className="bg-[#FFFFFF] py-20 md:py-32 border-b border-[#E5E5E7]">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <span className="text-xs font-bold tracking-widest text-[#0071E3] uppercase block mb-3">
            Member Perks
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1D1D1F] mb-4">
            More than a money transfer.
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] font-normal leading-relaxed">
            Simple tools and useful services designed around everyday life.
          </p>
        </motion.div>

        {/* Apple Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6 }}
                className={`${item.colSpan} bg-[#F5F5F7] border border-[#E5E5E7] rounded-[28px] sm:rounded-[32px] p-7 sm:p-9 flex flex-col justify-between group transition-all duration-300 hover:shadow-lg hover:shadow-black/5 hover:border-[#E5E5E7]/80`}
              >
                <div>
                  {/* Top Badge & Icon Row */}
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className={`w-6 h-6 ${item.accentColor}`} />
                    </div>

                    <span className="text-[10px] font-bold tracking-widest text-[#6E6E73] uppercase bg-[#FFFFFF] px-3 py-1 rounded-full border border-[#E5E5E7]/80">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold tracking-tight text-[#1D1D1F] mb-3 group-hover:text-[#0071E3] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#6E6E73] leading-relaxed max-w-lg mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Subtle Apple Action Link Indicator */}
                <div className="pt-4 border-t border-[#E5E5E7]/60 flex items-center justify-between text-xs font-semibold text-[#6E6E73] group-hover:text-[#0071E3] transition-colors">
                  <span>Learn more</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
