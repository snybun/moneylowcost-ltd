import React, { useState, useEffect } from 'react';
import { Shield, Globe, Menu, X, ArrowUpRight, Lock, User, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenAuth }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'EN', label: 'English' },
    { code: 'PH', label: 'Tagalog' },
    { code: 'HE', label: 'עברית' },
    { code: 'ES', label: 'Español' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-black/50' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="apple-container flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group text-decoration-none">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-lg">M</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              MONEY<span className="text-cyan-400 font-normal">LOW</span>COST
            </span>
            <span className="text-[10px] tracking-widest text-slate-400 font-semibold uppercase -mt-1">
              AUTOMATED TRANSFERS
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-800/80">
          <a href="#calculator" className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white rounded-full hover:bg-slate-800/60 transition-all">
            Calculator
          </a>
          <a href="#how-it-works" className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white rounded-full hover:bg-slate-800/60 transition-all">
            How It Works
          </a>
          <a href="#benefits" className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white rounded-full hover:bg-slate-800/60 transition-all">
            Member Benefits
          </a>
          <a href="#branches" className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white rounded-full hover:bg-slate-800/60 transition-all">
            Branches
          </a>
          <a href="#security" className="px-4 py-1.5 text-xs font-semibold text-slate-300 hover:text-white rounded-full hover:bg-slate-800/60 transition-all">
            Security
          </a>
        </nav>

        {/* Right Utility & CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Selector */}
          <div className="relative">
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-300 transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language}</span>
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden py-1 z-50">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLanguage(l.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between ${
                      language === l.code ? 'bg-cyan-500/10 text-cyan-400 font-semibold' : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span>{l.label}</span>
                    <span className="text-[10px] text-slate-500">{l.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Auth Actions */}
          <button 
            onClick={() => onOpenAuth('login')}
            className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            Log In
          </button>
          
          <button 
            onClick={() => onOpenAuth('signup')}
            className="apple-btn-primary text-xs !py-2 !px-5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sign Up</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 p-6 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <a 
            href="#calculator" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-300 hover:text-white py-2 border-b border-slate-800/50"
          >
            Calculator & Rates
          </a>
          <a 
            href="#how-it-works" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-300 hover:text-white py-2 border-b border-slate-800/50"
          >
            How It Works
          </a>
          <a 
            href="#benefits" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-300 hover:text-white py-2 border-b border-slate-800/50"
          >
            Member Benefits & Perks
          </a>
          <a 
            href="#branches" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-300 hover:text-white py-2 border-b border-slate-800/50"
          >
            Branch Locator
          </a>
          <a 
            href="#security" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-300 hover:text-white py-2 border-b border-slate-800/50"
          >
            Security & Licensing
          </a>

          <div className="flex flex-col gap-3 pt-4">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenAuth('login'); }}
              className="apple-btn-secondary w-full justify-center"
            >
              <Lock className="w-4 h-4" />
              <span>Log In to Portal</span>
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenAuth('signup'); }}
              className="apple-btn-primary w-full justify-center"
            >
              <User className="w-4 h-4" />
              <span>Create Account</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
