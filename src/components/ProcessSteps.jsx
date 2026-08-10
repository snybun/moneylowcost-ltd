import React from 'react';
import { UserCheck, CreditCard, Send, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ProcessSteps({ onOpenAuth }) {
  const steps = [
    {
      num: '01',
      title: 'REGISTER & ASSIGN BENEFICIARY',
      desc: 'Quick registration in our portal or company office. Assign your trusted beneficiary in your home country.',
      icon: UserCheck,
      color: 'from-cyan-500 to-blue-500',
      badge: 'Step 1'
    },
    {
      num: '02',
      title: 'LOCAL BANK & CARD LINKING',
      desc: 'Your beneficiary receives a formal invitation from a top local bank to receive a debit card linked to your deposits.',
      icon: CreditCard,
      color: 'from-blue-500 to-purple-500',
      badge: 'Step 2'
    },
    {
      num: '03',
      title: 'CHOICE OF AUTOMATED TRANSFER',
      desc: 'Select your preferred transfer channel—online portal, branch deposit, or automatic recurring transfers.',
      icon: Send,
      color: 'from-purple-500 to-pink-500',
      badge: 'Step 3'
    },
    {
      num: '04',
      title: 'INSTANT PURCHASES & ATM CASH',
      desc: 'Once deposited, your beneficiary can instantly shop, withdraw cash, or use their new card anywhere worldwide.',
      icon: ShoppingBag,
      color: 'from-emerald-500 to-teal-500',
      badge: 'Step 4'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative z-10">
      <div className="apple-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="apple-spec-tag inline-block mb-3">Simple & Seamless</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Send Money in 4 Simple Steps
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Our automated bank linkage technology ensures funds reach your family safely, directly into their account and debit card.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.num}
                className="apple-glass-card p-7 relative flex flex-col justify-between group"
              >
                {/* Step Number Backdrop */}
                <div className="text-5xl font-black text-slate-800/40 absolute top-5 right-6 group-hover:text-cyan-500/20 transition-colors pointer-events-none">
                  {step.num}
                </div>

                <div>
                  {/* Icon Circle */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${step.color} p-[1px] mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <span className="text-[11px] font-bold tracking-widest text-cyan-400 uppercase block mb-2">
                    {step.badge}
                  </span>

                  <h3 className="text-base font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-semibold text-slate-400 group-hover:text-white transition-colors">
                  <span>Automated System</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 max-w-3xl mx-auto p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
            <div>
              <div className="text-sm font-bold text-white">Need help registering?</div>
              <div className="text-xs text-slate-400">Our office team will guide you through beneficiary setup in minutes.</div>
            </div>
          </div>

          <button 
            onClick={() => onOpenAuth('signup')}
            className="apple-btn-secondary text-xs shrink-0"
          >
            Get Registered Today
          </button>
        </div>

      </div>
    </section>
  );
}
