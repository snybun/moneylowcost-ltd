import React from 'react';
import Navbar from './components/Navbar';
import { HeroSection } from './sections';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1D1D1F] font-sans antialiased">
      {/* Sticky Apple Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main>
        {/* Apple-Inspired Fintech Hero Section */}
        <HeroSection />
      </main>
    </div>
  );
}
