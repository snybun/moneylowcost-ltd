import React from 'react';
import { HeartPulse, Smartphone, Glasses, Compass, Sparkles, ChevronRight, Check } from 'lucide-react';

export default function BentoPerks({ onOpenAuth }) {
  return (
    <section id="benefits" className="py-24 relative z-10">
      <div className="apple-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="apple-spec-tag inline-block mb-3">Exclusive Customer Perks</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            More Than Just Money Transfer
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            As a Money Low Cost customer, you enjoy special healthcare, communications, vision, and leisure packages tailored specifically for foreign workers.
          </p>
        </div>

        {/* Bento Grid (2x2 & multi-span layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Health Insurance (Span 7) */}
          <div className="md:col-span-7 apple-glass-card p-8 relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute -right-10 -top-10 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl group-hover:bg-rose-500/20 transition-all pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center mb-6">
                <HeartPulse className="w-6 h-6 text-rose-400" />
              </div>

              <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wider block mb-2">
                Foreign Worker Protection
              </span>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-rose-300 transition-colors">
                Comprehensive Health Insurance
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                We offer a cost-effective healthcare policy specifically designed for foreign workers—including doctor visits, emergency hospital care, prescription discounts, and 24/7 tele-health support.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-slate-900 text-[11px] font-semibold text-slate-300 border border-slate-800">
                  ✓ Doctor Consultation
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-900 text-[11px] font-semibold text-slate-300 border border-slate-800">
                  ✓ Emergency Coverage
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-900 text-[11px] font-semibold text-slate-300 border border-slate-800">
                  ✓ Prescription Discount
                </span>
              </div>
            </div>

            <button 
              onClick={() => onOpenAuth('signup')}
              className="inline-flex items-center gap-2 text-xs font-bold text-rose-400 hover:text-rose-300 transition-colors"
            >
              <span>Enquire About Health Policy</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Communications Deal (Span 5) */}
          <div className="md:col-span-5 apple-glass-card p-8 relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute -right-10 -top-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-cyan-400" />
              </div>

              <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block mb-2">
                Mobile & Data Plans
              </span>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                Local Communications Package
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Obtain attractive local SIM card and mobile data packages at highly discounted member prices so you can call home anytime.
              </p>
            </div>

            <button 
              onClick={() => onOpenAuth('signup')}
              className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Get Mobile Discount SIM</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3: Eyeglasses & Optical (Span 5) */}
          <div className="md:col-span-5 apple-glass-card p-8 relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute -right-10 -top-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-6">
                <Glasses className="w-6 h-6 text-purple-400" />
              </div>

              <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider block mb-2">
                Vision & Optical
              </span>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                Eyeglasses & Optical Deals
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Receive special vouchers and optical discounts for prescription eyeglasses, frames, and eye examinations.
              </p>
            </div>

            <button 
              onClick={() => onOpenAuth('signup')}
              className="inline-flex items-center gap-2 text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span>Claim Optical Voucher</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 4: Country Tours & Excursions (Span 7) */}
          <div className="md:col-span-7 apple-glass-card p-8 relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute -right-10 -top-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-6">
                <Compass className="w-6 h-6 text-emerald-400" />
              </div>

              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-2">
                Weekend Excursions
              </span>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                Tours Across the Country
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Money Low Cost organizes affordable guided tours across Israel state—from Jerusalem holy landmarks to the Dead Sea and Galilee coast—at exclusive community rates.
              </p>
            </div>

            <button 
              onClick={() => onOpenAuth('signup')}
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>View Upcoming Tour Schedule</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
