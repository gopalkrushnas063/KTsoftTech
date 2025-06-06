import React from "react";
import { Users, Rocket, Globe, Shield, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=faces",
    social: "@alexjohnson"
  },
  {
    name: "Sarah Williams",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=faces",
    social: "@sarahw"
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=faces",
    social: "@michaelc"
  },
  {
    name: "Emma Rodriguez",
    role: "UX Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=faces",
    social: "@emmar"
  }
];

const values = [
  {
    icon: <Rocket className="h-6 w-6 text-saas-orange" />,
    title: "Innovation",
    description: "We constantly push boundaries to deliver cutting-edge solutions."
  },
  {
    icon: <Globe className="h-6 w-6 text-saas-orange" />,
    title: "Global Impact",
    description: "Our solutions are designed to work across borders and cultures."
  },
  {
    icon: <Shield className="h-6 w-6 text-saas-orange" />,
    title: "Integrity",
    description: "We maintain the highest ethical standards in all we do."
  },
  {
    icon: <HeartHandshake className="h-6 w-6 text-saas-orange" />,
    title: "Collaboration",
    description: "We believe in the power of teamwork and partnerships."
  }
];

const WhoWeAreSection = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-saas-orange rounded-full blur-[80px]"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-saas-orange rounded-full blur-[100px]"></div>
      </div>
      
      <div className="bg-saas-darkGray py-20">
        <div className="section-container">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-block bg-saas-orange/10 text-saas-orange px-4 py-2 rounded-full text-sm font-medium mb-4 border border-saas-orange/20">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Who <span className="gradient-text">We Are</span>
            </h2>
            <p className="text-xl text-gray-400">
              KTsoftTech is a passionate team of innovators, creators, and problem-solvers dedicated to building software that makes a difference.
            </p>
          </div>

          {/* Company Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-saas-orange/30 rounded-xl z-0"></div>
              <div className="relative z-10 bg-saas-darkGray rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop" 
                  alt="Our Team" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <h3 className="text-white text-xl font-semibold">Since 2018</h3>
                  <p className="text-gray-300">Transforming businesses through technology</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Our Mission</h3>
              <p className="text-gray-400 mb-6">
                At KTsoftTech, we're on a mission to empower businesses of all sizes with intuitive, powerful software solutions that drive growth and efficiency.
              </p>
              <p className="text-gray-400 mb-8">
                Founded in 2018, we've grown from a small startup to a trusted partner for hundreds of businesses worldwide. Our team combines technical expertise with deep industry knowledge to deliver exceptional results.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-saas-darkGray p-4 rounded-lg border border-gray-800">
                  <div className="text-3xl font-bold text-saas-orange mb-2">250+</div>
                  <div className="text-gray-400 text-sm">Happy Clients</div>
                </div>
                <div className="bg-saas-darkGray p-4 rounded-lg border border-gray-800">
                  <div className="text-3xl font-bold text-saas-orange mb-2">98%</div>
                  <div className="text-gray-400 text-sm">Customer Satisfaction</div>
                </div>
              </div>
              
              <Button className="bg-saas-orange hover:bg-orange-600">
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center text-white">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-saas-darkGray p-6 rounded-xl border border-gray-800 hover:border-saas-orange/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="bg-saas-orange/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-white">{value.title}</h4>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Meet the Team */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-white">Meet The Team</h3>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
              Our talented team brings diverse expertise and a shared passion for innovation to every project we undertake.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="bg-saas-darkGray rounded-xl overflow-hidden border border-gray-800 hover:border-saas-orange/30 transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-gray-300">@{member.social}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-white">{member.name}</h4>
                    <p className="text-saas-orange mb-2">{member.role}</p>
                    <div className="flex space-x-3">
                      <a href="#" className="text-gray-400 hover:text-saas-orange transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-saas-orange transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-saas-orange transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;