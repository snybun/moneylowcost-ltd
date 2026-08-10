import React from 'react';
import { Phone, Mail, ShieldCheck, ArrowUpRight, Heart, Share2 } from 'lucide-react';

export default function Footer({ onOpenAuth }) {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 relative z-10 text-slate-400 text-xs">
      <div className="apple-container">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Col (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                  <span className="font-extrabold text-cyan-400 text-sm">M</span>
                </div>
              </div>
              <span className="font-extrabold text-base tracking-tight text-white">
                MONEY<span className="text-cyan-400 font-normal">LOW</span>COST
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Money Low Cost LTD provides fully automated, fast, and transparent money transfer solutions for foreign workers and international customers.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.facebook.com/mlcisrael/" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a 
                href="mailto:moneylowcost@gmail.com" 
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a 
                href="tel:0542025386" 
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-bold text-white text-xs uppercase tracking-wider mb-1">
              Navigation
            </span>
            <a href="#calculator" className="hover:text-cyan-400 transition-colors">Transfer Calculator</a>
            <a href="#how-it-works" className="hover:text-cyan-400 transition-colors">4 Step Transfer Guide</a>
            <a href="#benefits" className="hover:text-cyan-400 transition-colors">Member Perks & Benefits</a>
            <a href="#branches" className="hover:text-cyan-400 transition-colors">Branch Locations</a>
            <a href="#security" className="hover:text-cyan-400 transition-colors">Security & Licensing</a>
          </div>

          {/* Member Benefits (3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-bold text-white text-xs uppercase tracking-wider mb-1">
              Customer Services
            </span>
            <span className="text-slate-400">Health Insurance Policies</span>
            <span className="text-slate-400">Local SIM & Mobile Deals</span>
            <span className="text-slate-400">Eyeglasses & Vision Vouchers</span>
            <span className="text-slate-400">Guided Tours & Excursions</span>
          </div>

          {/* Hotlines (2 cols) */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <span className="font-bold text-white text-xs uppercase tracking-wider mb-1">
              Support Hotline
            </span>
            <a href="tel:0542025386" className="text-cyan-400 font-bold text-sm hover:underline">
              054-2025386
            </a>
            <span className="text-[11px] text-slate-500">Available Sun - Thu 08:30 - 19:30</span>
            <span className="text-[11px] text-slate-500">Fri 08:30 - 14:00</span>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Money Low Cost LTD. All rights reserved. With us, it’s totally different.
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => onOpenAuth('login')} className="hover:text-slate-300">
              Terms & Conditions
            </button>
            <span>•</span>
            <button onClick={() => onOpenAuth('login')} className="hover:text-slate-300">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => onOpenAuth('login')} className="hover:text-slate-300">
              Customer Portal Login
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
