import React from 'react';
import Navbar from './components/Navbar';
import { 
  HeroSection, 
  FeaturesSection, 
  HowItWorksSection, 
  TermsSection,
  BenefitsSection, 
  SecuritySection,
  CtaSection
} from './sections';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1D1D1F] font-sans antialiased">
      {/* Sticky Apple Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Apple-Inspired Fintech Hero Section */}
        <HeroSection />

        {/* Minimal Apple Trust / Features Section */}
        <FeaturesSection />

        {/* Apple Timeline How It Works Section (#how-it-works) */}
        <HowItWorksSection />

        {/* Official Terms & Conditions Section (#terms) - Matched to Navbar Order */}
        <TermsSection />

        {/* Apple Bento Grid Customer Benefits Section (#benefits) */}
        <BenefitsSection />

        {/* Clean Apple Security Section (#security) */}
        <SecuritySection />

        {/* Apple Product Closing CTA Section (#cta) */}
        <CtaSection />
      </main>
    </div>
  );
}
