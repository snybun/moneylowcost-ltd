import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TransferCalculator from './components/TransferCalculator';
import ProcessSteps from './components/ProcessSteps';
import BentoPerks from './components/BentoPerks';
import BranchLocator from './components/BranchLocator';
import SecurityTrust from './components/SecurityTrust';
import Footer from './components/Footer';
import TransferModal from './components/TransferModal';

export default function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authTab, setAuthTab] = useState('signup');

  const handleOpenAuth = (tab = 'signup') => {
    setAuthTab(tab);
    setAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans relative">
      
      {/* Top Navbar */}
      <Navbar onOpenAuth={handleOpenAuth} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenAuth={handleOpenAuth} />

        {/* Live Transfer Calculator */}
        <TransferCalculator onOpenAuth={handleOpenAuth} />

        {/* 4 Step Process */}
        <ProcessSteps onOpenAuth={handleOpenAuth} />

        {/* Member Bento Benefits */}
        <BentoPerks onOpenAuth={handleOpenAuth} />

        {/* Branch Finder Directory */}
        <BranchLocator />

        {/* Security & Regulatory Specs */}
        <SecurityTrust />
      </main>

      {/* Footer */}
      <Footer onOpenAuth={handleOpenAuth} />

      {/* Interactive Auth / Registration Modal */}
      <TransferModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
        initialTab={authTab}
      />

    </div>
  );
}
