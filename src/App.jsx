import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import Header from './components/Header';
import Container from './components/Container';
import Card from './components/Card';
import Button from './components/Button';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1D1D1F] font-sans antialiased">
      {/* Navigation Header */}
      <Header />

      {/* Project Foundation Shell */}
      <main className="py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F5F7] border border-[#E5E5E7] text-xs font-medium text-[#6E6E73] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#0071E3]" />
              <span>Money Low Cost — Frontend Redesign Foundation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1D1D1F] mb-4">
              Apple-Inspired Design System
            </h1>

            <p className="text-lg text-[#6E6E73] font-normal leading-relaxed">
              Phase 1 project foundation initialized with React, Vite, Tailwind CSS, Framer Motion, and Lucide React.
            </p>
          </motion.div>

          {/* Design Token Preview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            
            <Card>
              <div className="w-8 h-8 rounded-full bg-[#0071E3]/10 text-[#0071E3] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#1D1D1F] mb-2">
                Color System
              </h3>
              <p className="text-xs text-[#6E6E73] leading-relaxed mb-4">
                Configured white (#FFFFFF), Apple gray (#F5F5F7), dark (#1D1D1F), blue (#0071E3), green (#34C759), and secondary text (#6E6E73).
              </p>
              <div className="flex gap-2">
                <span className="w-5 h-5 rounded-full bg-[#FFFFFF] border border-[#E5E5E7]" title="White" />
                <span className="w-5 h-5 rounded-full bg-[#F5F5F7] border border-[#E5E5E7]" title="Apple Gray" />
                <span className="w-5 h-5 rounded-full bg-[#1D1D1F]" title="Dark" />
                <span className="w-5 h-5 rounded-full bg-[#6E6E73]" title="Secondary Text" />
                <span className="w-5 h-5 rounded-full bg-[#0071E3]" title="Blue" />
                <span className="w-5 h-5 rounded-full bg-[#34C759]" title="Green" />
              </div>
            </Card>

            <Card>
              <div className="w-8 h-8 rounded-full bg-[#34C759]/10 text-[#34C759] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#1D1D1F] mb-2">
                SF Pro Typography
              </h3>
              <p className="text-xs text-[#6E6E73] leading-relaxed mb-4">
                Configured Apple system font stack (-apple-system, SF Pro Display, SF Pro Text, Inter).
              </p>
              <div className="text-xs font-medium text-[#1D1D1F]">
                SF Pro Display • Regular & Bold
              </div>
            </Card>

            <Card>
              <div className="w-8 h-8 rounded-full bg-[#0071E3]/10 text-[#0071E3] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#1D1D1F] mb-2">
                Framer Motion
              </h3>
              <p className="text-xs text-[#6E6E73] leading-relaxed mb-4">
                Fluid spring animations, component motion states, and hover elevation effects ready.
              </p>
              <div className="pt-1">
                <ButtonComponent variant="primary" icon={ArrowRight}>
                  Action Component
                </ButtonComponent>
              </div>
            </Card>

          </div>

          <div className="text-center text-xs text-[#6E6E73]">
            Ready for Phase 2 section components.
          </div>

        </Container>
      </main>
    </div>
  );
}
