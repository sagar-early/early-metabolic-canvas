
import React from 'react';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-light">
      <Header />
      <Banner />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Index;
