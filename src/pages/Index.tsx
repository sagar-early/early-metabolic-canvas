
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PathToClaritySection from '@/components/PathToClaritySection';
import ProgramsSection from '@/components/ProgramsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PathToClaritySection />
      <ProgramsSection />
      <Footer />
    </div>
  );
};

export default Index;
