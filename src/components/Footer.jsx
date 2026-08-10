import React from 'react';
import Container from './Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F5F5F7] border-t border-[#E5E5E7] py-16 md:py-20 text-[#6E6E73]">
      <Container>
        {/* Main Footer Layout: Top Info + 3 Nav Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-12">
          
          {/* Top Brand Info Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-2 group text-decoration-none inline-flex">
              <div className="w-8 h-8 rounded-full bg-[#0071E3] flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:scale-105 transition-transform duration-200">
                M
              </div>
              <span className="font-bold text-lg text-[#1D1D1F] tracking-tight">
                Money Low Cost
              </span>
            </a>
            <p className="text-xs sm:text-sm text-[#6E6E73] font-normal leading-relaxed max-w-sm">
              Simple money transfers for the people who matter.
            </p>
          </div>

          {/* Nav Columns Grid (7 cols) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* SERVICES Column */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-bold tracking-widest text-[#1D1D1F] uppercase">
                SERVICES
              </h4>
              <ul className="space-y-2.5 text-xs font-medium">
                <li>
                  <a href="#how-it-works" className="hover:text-[#0071E3] transition-colors duration-200">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#benefits" className="hover:text-[#0071E3] transition-colors duration-200">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#0071E3] transition-colors duration-200">
                    Security
                  </a>
                </li>
              </ul>
            </div>

            {/* COMPANY Column */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-bold tracking-widest text-[#1D1D1F] uppercase">
                COMPANY
              </h4>
              <ul className="space-y-2.5 text-xs font-medium">
                <li>
                  <a href="#contact" className="hover:text-[#0071E3] transition-colors duration-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#0071E3] transition-colors duration-200">
                    Branches
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#0071E3] transition-colors duration-200">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* LEGAL Column */}
            <div className="space-y-3 col-span-2 sm:col-span-1">
              <h4 className="text-[11px] font-bold tracking-widest text-[#1D1D1F] uppercase">
                LEGAL
              </h4>
              <ul className="space-y-2.5 text-xs font-medium">
                <li>
                  <a href="#terms" className="hover:text-[#0071E3] transition-colors duration-200">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-[#0071E3] transition-colors duration-200">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Fine Print Bar */}
        <div className="pt-8 border-t border-[#E5E5E7] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-normal">
          <p>© {currentYear} Money Low Cost. All rights reserved.</p>
          <p className="text-[11px] text-[#6E6E73]/80">
            Fully automatic system • Fast, secure money transfers
          </p>
        </div>
      </Container>
    </footer>
  );
}
