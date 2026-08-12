import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { 
  HeroSection, 
  FeaturesSection, 
  HowItWorksSection, 
  AboutSection,
  TermsSection,
  BenefitsSection, 
  ContactSection,
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

        {/* Apple Bento Grid Customer Benefits Section (#benefits) */}
        <BenefitsSection />

        {/* Official Terms & Conditions Section (#terms) */}
        <TermsSection />

        {/* Apple UI Contact Us Section (#contact) */}
        <ContactSection />

        {/* Apple-Designed About Us Section (#about) */}
        <AboutSection />

        {/* Apple Product Closing CTA Section (#cta) */}
        <CtaSection />
      </main>

      {/* Minimalist Apple Footer */}
      <Footer />
    </div>
  );
}
