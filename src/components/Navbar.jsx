import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Container from './Container';
import Button from './Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Security', href: '#security' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-out ${
        scrolled
          ? 'bg-[#FFFFFF]/90 backdrop-blur-xl border-b border-[#E5E5E7] shadow-sm py-3'
          : 'bg-[#FFFFFF]/60 backdrop-blur-md border-b border-transparent py-4'
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Money Low Cost Logo */}
        <a href="#" className="flex items-center gap-2 group text-decoration-none">
          <div className="w-8 h-8 rounded-full bg-[#0071E3] flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:scale-105 transition-transform duration-200">
            M
          </div>
          <span className="font-semibold text-base sm:text-lg text-[#1D1D1F] tracking-tight">
            Money Low Cost
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-[#6E6E73] hover:text-[#0071E3] transition-colors duration-200 py-1 group"
            >
              {link.label}
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0071E3] rounded-full group-hover:w-full transition-all duration-200 ease-out"
              />
            </a>
          ))}
        </nav>

        {/* Desktop Get Started Button */}
        <div className="hidden md:block">
          <Button variant="primary">
            Get Started
          </Button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </Container>

      {/* Mobile Animated Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#FFFFFF]/95 backdrop-blur-2xl border-b border-[#E5E5E7]"
          >
            <Container className="py-6 flex flex-col gap-5">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-[#1D1D1F] hover:text-[#0071E3] transition-colors py-1"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="pt-2 border-t border-[#E5E5E7]">
                <Button 
                  variant="primary" 
                  className="w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
