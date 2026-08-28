import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Add real customer testimonials here as they come in — { text, author, position, image }.
// The section renders nothing until at least one is added, so no placeholder/fake
// content ever ships to the live site.
const testimonials: {
  text: string;
  author: string;
  position: string;
  image: string;
}[] = [];

const TestimonialsSection = ({ id }) => {
  if (testimonials.length === 0) return null;

  return (
    <section id={id}>
      <div className="bg-saas-black py-16 md:py-24 relative overflow-hidden">
        {/* Background glow, consistent with other sections */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-saas-orange opacity-5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-saas-orange opacity-5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="section-container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-saas-orange/10 text-saas-orange px-4 py-2 rounded-full text-sm font-medium mb-4 border border-saas-orange/20">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by <span className="gradient-text">Innovative</span>{" "}
              Companies
            </h2>
            <p className="text-gray-400">
              Don't just take our word for it. Here's what our customers have to
              say about KTsoftTech.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-gradient-to-b from-saas-darkGray to-saas-black border border-gray-800 hover:border-saas-orange/40 rounded-xl p-6 card-shadow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-saas-orange"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>

                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
