import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, Globe, Server, Database, Cpu, BarChart2 } from "lucide-react";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online shopping platform with payment integration and inventory management.",
      category: "web",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=600&h=400&q=80",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      id: 2,
      title: "Healthcare Analytics Dashboard",
      description: "Data visualization tool for healthcare providers to track patient outcomes and operational metrics.",
      category: "data",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&h=400&q=80",
      tags: ["Python", "D3.js", "PostgreSQL"],
      link: "#",
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure banking application with biometric authentication and money transfer features.",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&h=400&q=80",
      tags: ["React Native", "Firebase", "Redux"],
      link: "#",
    },
    {
      id: 4,
      title: "IoT Smart Home System",
      description: "Connected home automation system with energy monitoring and remote control capabilities.",
      category: "iot",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&h=400&q=80",
      tags: ["Raspberry Pi", "MQTT", "AWS IoT"],
      link: "#",
    },
    {
      id: 5,
      title: "AI Content Moderation",
      description: "Machine learning system for automatically detecting and filtering inappropriate content.",
      category: "ai",
      image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=600&h=400&q=80",
      tags: ["TensorFlow", "Python", "Flask"],
      link: "#",
    },
    {
      id: 6,
      title: "Cloud Migration Solution",
      description: "Enterprise-grade platform for migrating legacy systems to cloud infrastructure.",
      category: "cloud",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400&q=80",
      tags: ["AWS", "Kubernetes", "Terraform"],
      link: "#",
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const categoryIcons = {
    web: <Globe className="h-5 w-5" />,
    data: <BarChart2 className="h-5 w-5" />,
    mobile: <Code className="h-5 w-5" />,
    iot: <Cpu className="h-5 w-5" />,
    ai: <Database className="h-5 w-5" />,
    cloud: <Server className="h-5 w-5" />,
  };

  return (
    <div className="min-h-screen bg-saas-black text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of innovative solutions that have helped businesses transform their operations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === "all"
                ? "bg-saas-orange text-white"
                : "bg-saas-darkGray text-gray-300 hover:bg-gray-800"
            }`}
          >
            All Projects
          </button>
          {Object.entries({
            web: "Web Development",
            mobile: "Mobile Apps",
            data: "Data Analytics",
            ai: "AI Solutions",
            iot: "IoT Systems",
            cloud: "Cloud Services",
          }).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                activeFilter === key
                  ? "bg-saas-orange text-white"
                  : "bg-saas-darkGray text-gray-300 hover:bg-gray-800"
              }`}
            >
              {categoryIcons[key]}
              {label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-saas-darkGray rounded-xl p-4 h-80 animate-pulse">
                <div className="bg-gray-700 rounded-lg h-40 w-full mb-4"></div>
                <div className="h-6 bg-gray-700 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6 mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-saas-darkGray rounded-xl overflow-hidden border border-gray-800 hover:border-saas-orange/50 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <button className="bg-saas-orange text-white px-4 py-2 rounded-lg text-sm font-medium">
                      View Case Study
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {categoryIcons[project.category]}
                    <span className="text-xs font-medium text-saas-orange uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-saas-orange/20 to-amber-600/20 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help bring your vision to life with our expertise and innovative solutions.
          </p>
          <button className="bg-saas-orange hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 inline-flex items-center">
            Get in Touch
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;