import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CtaSection = ({ id }) => {
  return (
    <section id={id}>
      <div className="bg-saas-darkGray py-16 md:py-20">
        <div className="section-container">
          <div className="bg-gradient-to-r from-saas-orange/20 to-amber-600/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Abstract glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-saas-orange opacity-20 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600 opacity-10 rounded-full blur-3xl animate-float-slower"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to transform your business?
                </h2>
                <p className="text-gray-300 mb-6 max-w-xl">
                  Join thousands of companies that are already streamlining
                  their operations and growing their business with KTsoftTech.
                  Start your free trial today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Button
                      asChild
                      className="bg-saas-orange hover:bg-orange-600 text-white font-semibold"
                    >
                      <Link to="/contact">Start Free Trial</Link>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Button
                      asChild
                      variant="outline"
                      className="border-background text-white hover:bg-white hover:text-saas-black hover:border-white"
                    >
                      <Link to="/contact">Schedule Demo</Link>
                    </Button>
                  </motion.div>
                </div>
              </div>

              <motion.div
                className="md:w-1/3"
                whileHover={{ scale: 1.04, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=300&h=300&q=80"
                  alt="Dashboard Preview"
                  className="rounded-lg w-full card-shadow"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
