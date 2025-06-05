import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-saas-black text-white">
      <Navbar />
      <main>
        <HeroSection id="home" />
        <FeaturesSection id="features" />
        <PricingSection id="pricing" />
        <TestimonialsSection id="testimonials" />
        <FaqSection id="faq" />
        <CtaSection id="contact" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
