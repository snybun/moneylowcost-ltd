import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Globe, Sparkles, CheckCircle2, Clock } from 'lucide-react';

export default function Hero({ onOpenAuth }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Background Glowing Ambient Halos (Apple Glass aesthetics) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="apple-container relative z-10 text-center">
        
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/60 border border-cyan-500/30 backdrop-blur-md mb-8 animate-float">
          <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400" />
          <span className="text-xs font-semibold tracking-wide text-cyan-300">
            FULL AUTOMATION • MONEY DELIVERED IN MINUTES
          </span>
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        </div>

        {/* Apple Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.1] mb-6">
          <span className="block text-white">Transfer Money.</span>
          <span className="block apple-gradient-cyan">With Us, It’s Totally Different.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          The most convenient and cost-effective way to transfer funds directly into the hands of your loved ones—fully automated, bank-guaranteed, and delivered within minutes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button 
            onClick={() => onOpenAuth('signup')}
            className="apple-btn-primary w-full sm:w-auto text-base !py-4 !px-8 shadow-cyan-500/25"
          >
            <span>Start Fast Transfer</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <a 
            href="#calculator" 
            className="apple-btn-secondary w-full sm:w-auto text-base !py-4 !px-8"
          >
            <span>Calculate Live Rates</span>
          </a>
        </div>

        {/* Feature Highlights Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-md flex flex-col items-center justify-center text-center">
            <div className="text-2xl font-extrabold text-cyan-400 mb-1">0%</div>
            <div className="text-xs text-slate-400 font-medium">Hidden Fees</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-md flex flex-col items-center justify-center text-center">
            <div className="text-2xl font-extrabold text-emerald-400 mb-1">&lt; 3 Mins</div>
            <div className="text-xs text-slate-400 font-medium">Instant Payout</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-md flex flex-col items-center justify-center text-center">
            <div className="text-2xl font-extrabold text-purple-400 mb-1">25+</div>
            <div className="text-xs text-slate-400 font-medium">Local Partner Banks</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-md flex flex-col items-center justify-center text-center">
            <div className="text-2xl font-extrabold text-blue-400 mb-1">256-Bit</div>
            <div className="text-xs text-slate-400 font-medium">Bank Encryption</div>
          </div>

        </div>

      </div>
    </section>
  );
}
