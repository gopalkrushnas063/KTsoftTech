import React from "react";
import { motion } from "framer-motion";
import TechStackGlobe from "./TechStackGlobe";

const TechStackAnimationSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#1c160c] to-saas-black py-12 md:py-16">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          {/* Left Side: Text */}
          <motion.div
            className="w-full lg:w-1/2 lg:pr-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block bg-saas-orange/10 text-saas-orange px-4 py-2 rounded-full text-sm font-medium mb-4 border border-saas-orange/20">
              Our Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              <span className="gradient-text">Technologies</span>{" "}
              <span className="text-white">We Use</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Our experts leverage the latest tools and frameworks to deliver
              innovative and robust solutions for your business.
            </p>
          </motion.div>

          {/* Right Side: Globe */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <div className="w-full h-[250px] sm:h-[300px] md:h-[350px]">
              <TechStackGlobe />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStackAnimationSection;
