import React from 'react';
import { ShieldCheck, Lock, Landmark, PhoneCall, CheckCircle, FileText } from 'lucide-react';

export default function SecurityTrust() {
  const specs = [
    {
      icon: Lock,
      title: '256-Bit Financial Encryption',
      desc: 'All user data and online transactions are secured using military-grade SSL/TLS 256-bit encryption protocols.'
    },
    {
      icon: Landmark,
      title: 'Licensed Financial Operator',
      desc: 'Money Low Cost LTD operates under strict financial regulatory licenses and central banking standards.'
    },
    {
      icon: FileText,
      title: 'Instant SMS & Digital Receipts',
      desc: 'Receive immediate SMS confirmation and downloadable PDF receipts for every completed transaction.'
    },
    {
      icon: PhoneCall,
      title: '24/7 Multi-Language Support',
      desc: 'Our customer support team assists you directly in English, Tagalog, Hebrew, and Spanish at 054-2025386.'
    }
  ];

  return (
    <section id="security" className="py-24 relative z-10 border-t border-slate-900">
      <div className="apple-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="apple-spec-tag inline-block mb-3">Security & Compliance</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Built Like Bank Vaults.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Your hard-earned money is guarded with industry-leading encryption and direct bank integration.
          </p>
        </div>

        {/* 4 Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {specs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="apple-glass-card p-8 flex items-start gap-5 hover:border-cyan-500/40 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* License Callout Banner */}
        <div className="mt-12 max-w-4xl mx-auto p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Money Low Cost LTD — Official Registration #51549802</span>
          </div>
          <div className="hidden sm:block text-slate-700">|</div>
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Direct Local Bank Partner Linkage</span>
          </div>
        </div>

      </div>
    </section>
  );
}
