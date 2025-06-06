import React from "react";
import TechStackGlobe from "./TechStackGlobe";

const TechStackAnimationSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#1c160c] to-saas-black py-12 md:py-16">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="gradient-text">Technologies</span>
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          {/* Left Side: Text */}
          <div className="w-full lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              <span className="gradient-text">Technologies</span>{" "}
              <span className="text-white">We Use</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Our experts leverage the latest tools and frameworks to deliver
              innovative and robust solutions for your business.
            </p>
          </div>

          {/* Right Side: Globe */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full h-[250px] sm:h-[300px] md:h-[350px]">
              <TechStackGlobe />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackAnimationSection;
