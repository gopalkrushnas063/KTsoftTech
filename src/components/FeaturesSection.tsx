import React from "react";
import { motion } from "framer-motion";
import { Check, Search, Settings, User, Home, Calendar } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const features = [
  {
    icon: <Search className="h-6 w-6 text-saas-orange" />,
    title: "Smart Analytics",
    description:
      "Gain valuable insights with our advanced analytics, helping you make data-driven decisions.",
  },
  {
    icon: <Settings className="h-6 w-6 text-saas-orange" />,
    title: "Easy Integration",
    description:
      "Seamlessly integrate with your existing tools and workflows. No disruption to your business.",
  },
  {
    icon: <User className="h-6 w-6 text-saas-orange" />,
    title: "User Management",
    description:
      "Powerful user management and permission controls to keep your data secure and accessible.",
  },
  {
    icon: <Home className="h-6 w-6 text-saas-orange" />,
    title: "Customizable Dashboard",
    description:
      "Create custom dashboards tailored to your specific needs and business goals.",
  },
  {
    icon: <Calendar className="h-6 w-6 text-saas-orange" />,
    title: "Task Scheduler",
    description:
      "Automate your workflows with our powerful task scheduling system.",
  },
  {
    icon: <Check className="h-6 w-6 text-saas-orange" />,
    title: "Progress Tracking",
    description:
      "Monitor your team's progress and achievements with real-time reporting.",
  },
];

const FeaturesSection = ({ id }) => {
  return (
    <section id={id}>
      <div className="bg-saas-black pt-16 md:pt-24">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-saas-orange/10 text-saas-orange px-4 py-2 rounded-full text-sm font-medium mb-4 border border-saas-orange/20">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful <span className="gradient-text">Features</span> to Boost
              Your Business
            </h2>
            <p className="text-gray-400">
              Our comprehensive suite of tools will help you streamline
              operations and achieve your business goals more efficiently.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="bg-saas-darkGray p-6 rounded-xl border border-gray-800 hover:border-saas-orange/50 transition-colors duration-300 card-shadow"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-saas-orange/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
