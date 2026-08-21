import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Smartphone, Eye, Compass, ArrowUpRight } from 'lucide-react';
import Container from '../components/Container';
import { Parallax, ParallaxGlow, ParallaxTilt } from '../components/Parallax';

export default function BenefitsSection() {
  const sectionRef = useRef(null);

  const benefits = [
    {
      id: 'health',
      badge: 'HEALTHCARE',
      title: 'Health Insurance',
      description: 'We offer a cost effective health care policy specifically designed for foreign workers and families.',
      icon: HeartPulse,
      accentColor: 'text-[#0071E3]',
      iconBg: 'bg-[#0071E3]/10',
      colSpan: 'lg:col-span-7',
      parallaxSpeed: 0.1,
    },
    {
      id: 'comms',
      badge: 'CONNECTIVITY',
      title: 'Communications Deal',
      description: 'Obtain an attractive local mobile and data communications deal at an exclusive member price.',
      icon: Smartphone,
      accentColor: 'text-[#34C759]',
      iconBg: 'bg-[#34C759]/10',
      colSpan: 'lg:col-span-5',
      parallaxSpeed: -0.08,
    },
    {
      id: 'vision',
      badge: 'OPTICAL CARE',
      title: 'Eyeglasses & Vision',
      description: 'Access premier optical care packages, eyewear discounts, and checkup benefits seamlessly.',
      icon: Eye,
      accentColor: 'text-[#0071E3]',
      iconBg: 'bg-[#0071E3]/10',
      colSpan: 'lg:col-span-5',
      parallaxSpeed: 0.08,
    },
    {
      id: 'tours',
      badge: 'LEISURE & TRAVEL',
      title: 'Tour Across the Country',
      description: 'Money Low Cost organizes curated community tours throughout Israel at competitive member rates.',
      icon: Compass,
      accentColor: 'text-[#34C759]',
      iconBg: 'bg-[#34C759]/10',
      colSpan: 'lg:col-span-7',
      parallaxSpeed: -0.1,
    },
  ];

  return (
    <section 
      id="benefits" 
      ref={sectionRef}
      className="relative bg-[#FFFFFF] py-20 md:py-32 border-b border-[#E5E5E7] overflow-hidden"
    >
      {/* Background Parallax Ambient Glow */}
      <ParallaxGlow
        color="from-[#34C759]/8 via-transparent to-[#0071E3]/8"
        size="w-[600px] h-[600px]"
        speed={0.16}
        className="top-1/4 -right-32"
      />
      <ParallaxGlow
        color="from-[#0071E3]/8 via-transparent to-[#34C759]/8"
        size="w-[500px] h-[500px]"
        speed={-0.12}
        className="bottom-10 -left-20"
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

        {/* Apple Bento Grid Container with Asymmetric Parallax */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {benefits.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div key={item.id} className={`${item.colSpan}`}>
                <Parallax speed={item.parallaxSpeed} className="h-full">
                  <ParallaxTilt maxTilt={4} className="h-full">
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{
                        duration: 0.6,
                        delay: idx * 0.12,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="h-full bg-[#F5F5F7] border border-[#E5E5E7] rounded-[28px] sm:rounded-[32px] p-7 sm:p-9 flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:border-[#E5E5E7]/80"
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
                  </ParallaxTilt>
                </Parallax>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
