import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import TechStackAnimationSection from "@/components/TechStackAnimationSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";

const Reveal = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-saas-black text-white">
      <Navbar />
      <main>
        <HeroSection id="home" />
        <Reveal>
          <FeaturesSection id="features" />
        </Reveal>
        <TechStackAnimationSection />
        <Reveal>
          <WhoWeAreSection />
        </Reveal>
        <Reveal>
          <TestimonialsSection id="testimonials" />
        </Reveal>
        <Reveal>
          <FaqSection id="faq" />
        </Reveal>
        <Reveal>
          <CtaSection id="contact" />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
