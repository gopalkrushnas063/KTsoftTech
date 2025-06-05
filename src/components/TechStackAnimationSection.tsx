import React from "react";
import TechStack3DSpinner from "./TechStack3DSpinner";
import TechStackSolarSystem from "./TechStackSolarSystem";
import TechStack2DSolarSystem from "./TechStack2DSolarSystem";

const TechStackAnimationSection = () => {
  return (
   <section className="bg-saas-black pt-8 md:pt-12 pb-16 md:pb-24">

      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side: Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Technologies</span>{" "}
              <span className="text-white">We Use</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Our experts leverage the latest tools and frameworks to deliver
              innovative and robust solutions for your business.
            </p>
          </div>

          {/* Right Side: Tech Circle Image */}
          {/* <TechStack3DSpinner /> */}
          {/* <TechStackSolarSystem /> */}
          <TechStack2DSolarSystem />
          {/* <div className="w-full md:w-1/2 flex justify-center">
            <picture>
              <source
                media="(prefers-color-scheme: dark)"
                srcSet="https://raw.githubusercontent.com/alo7lika/alo7lika/main/Skills_Animation_Dark.gif"
              />
              <source
                media="(prefers-color-scheme: light)"
                srcSet="https://raw.githubusercontent.com/alo7lika/alo7lika/main/Skills_Animation_White.gif"
              />
              <img
                src="https://raw.githubusercontent.com/alo7lika/alo7lika/main/Skills_Animation_White.gif"
                alt="Technology Icons Circle"
                className="max-w-full h-auto rounded-xl shadow-lg"
                width="500"
              />
            </picture>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default TechStackAnimationSection;
