import React from 'react';
import Navbar from './components/Navbar';
import Container from './components/Container';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1D1D1F] font-sans antialiased">
      {/* Sticky Apple Navbar Component */}
      <Navbar />

      {/* Placeholder main area for future sections */}
      <main className="py-24">
        <Container className="text-center max-w-xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#6E6E73] block mb-2">
            Phase 2 Setup
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-[#1D1D1F] mb-3">
            Money Low Cost Navbar
          </h1>
          <p className="text-sm text-[#6E6E73]">
            Navbar component is ready. Scroll down to test the sticky translucency effect and test responsive mobile menu layout.
          </p>

          {/* Spacer content to enable scrolling test */}
          <div className="h-[120vh]" />
        </Container>
      </main>
    </div>
  );
}
