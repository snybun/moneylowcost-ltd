import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ShieldCheck, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';
import { ParallaxFloat, ParallaxGlow } from '../components/Parallax';

export default function CtaSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.94, 1, 0.98]);
  const y = useTransform(smoothProgress, [0, 1], [40, -40]);

  return (
    <section 
      id="cta" 
      ref={sectionRef} 
      className="relative py-28 md:py-44 bg-[#FFFFFF] overflow-hidden border-b border-[#E5E5E7]"
    >
      {/* Background Parallax Ambient Glow Orbs */}
      <ParallaxGlow
        color="from-[#0071E3]/15 via-[#34C759]/10 to-transparent"
        size="w-[700px] h-[700px]"
        speed={0.2}
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <ParallaxGlow
        color="from-[#34C759]/10 to-transparent"
        size="w-[450px] h-[450px]"
        speed={-0.25}
        className="bottom-10 -right-20"
      />

      <Container className="relative z-10">
        {/* Floating Reassurance Badge 1 (Left) */}
        <ParallaxFloat
          speed={-0.3}
          floatDuration={5}
          floatDistance={8}
          className="absolute top-12 left-4 sm:left-12 z-20 hidden md:block"
        >
          <div className="bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E5E5E7] px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#34C759]" />
            <span className="text-xs font-bold text-[#1D1D1F]">$0 Transfer Fee</span>
          </div>
        </ParallaxFloat>

        {/* Floating Reassurance Badge 2 (Right) */}
        <ParallaxFloat
          speed={0.25}
          floatDuration={6}
          floatDistance={8}
          floatDelay={0.5}
          className="absolute bottom-16 right-4 sm:right-12 z-20 hidden md:block"
        >
          <div className="bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E5E5E7] px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0071E3]" />
            <span className="text-xs font-bold text-[#1D1D1F]">256-Bit SSL Encrypted</span>
          </div>
        </ParallaxFloat>

        <motion.div
          style={{ scale, y }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          {/* Top Tag Pill */}
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F5F7] border border-[#E5E5E7] text-xs font-bold tracking-widest text-[#0071E3] uppercase mb-5">
            <Zap className="w-3.5 h-3.5 fill-[#0071E3]" />
            <span>START TODAY • ZERO EXTRA COST</span>
          </span>

          {/* Huge Apple Closing Headline */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1D1D1F] leading-[1.08] mb-6">
            Ready to send money home?
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl text-[#6E6E73] font-normal leading-relaxed max-w-2xl mb-10">
            Join thousands of satisfied customers who experience faster, simpler, and more affordable remittances every single day.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button variant="primary" className="w-full sm:w-auto px-8 py-4 text-base shadow-md">
              Get Started Free
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-base group">
              <span>Explore Benefits</span>
              <ArrowRight className="w-4 h-4 ml-1 inline-block transition-transform duration-200 group-hover:translate-x-0.5" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
