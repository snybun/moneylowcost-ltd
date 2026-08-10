import React, { useState } from 'react';
import { X, Lock, Mail, User, Phone, ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function TransferModal({ isOpen, onClose, initialTab = 'signup' }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [submitted, setSubmitted] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    beneficiaryName: '',
    country: 'Philippines'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 }
    });
  };

  const resetModal = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200">
      
      <div className="apple-glass-card max-w-md w-full p-8 relative overflow-hidden shadow-2xl border border-slate-700/80">
        
        {/* Close Button */}
        <button 
          onClick={resetModal}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <>
            {/* Modal Header & Tabs */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">
                  Money Low Cost Portal
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white">
                {activeTab === 'signup' ? 'Create Your Account' : 'Log In to Portal'}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {activeTab === 'signup' ? 'Start automated transfers in less than 2 minutes.' : 'Access your registered beneficiaries and transfers.'}
              </p>

              {/* Tab Switcher */}
              <div className="flex p-1 bg-slate-900 rounded-xl border border-slate-800 mt-4">
                <button
                  onClick={() => setActiveTab('signup')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                    activeTab === 'signup' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Sign Up
                </button>
                <button
                  onClick={() => setActiveTab('login')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                    activeTab === 'login' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Log In
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              {activeTab === 'signup' && (
                <div>
                  <label className="text-[11px] font-semibold text-slate-400 block mb-1">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maria Santos"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="text-[11px] font-semibold text-slate-400 block mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all"
                  />
                </div>
              </div>

              {activeTab === 'signup' && (
                <div>
                  <label className="text-[11px] font-semibold text-slate-400 block mb-1">Phone Number (Israel/Global)</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="054-0000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="text-[11px] font-semibold text-slate-400 block mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="apple-btn-primary w-full justify-center text-xs !py-3 mt-2 shadow-cyan-500/20"
              >
                <span>{activeTab === 'signup' ? 'Complete Fast Registration' : 'Log In to Account'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>

            <p className="text-[10px] text-center text-slate-500 mt-4">
              🔒 Protected by 256-bit encryption. By signing up, you agree to Money Low Cost Terms & Conditions.
            </p>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-2">
              Welcome to Money Low Cost!
            </h3>

            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
              Your account has been initialized. You can now assign beneficiaries, link bank cards, and transfer money instantly.
            </p>

            <button
              onClick={resetModal}
              className="apple-btn-primary w-full justify-center text-xs !py-3"
            >
              Go to Automated Dashboard
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
