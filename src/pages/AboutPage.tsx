import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Rocket, Globe, Shield, BarChart2 } from "lucide-react";

const AboutPage = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);
  const scrollSpeed = 1;

  const companies = [
    {
      name: "TechCorp",
      logo: "https://www.techcorp.com.mx/wp-content/uploads/2021/07/Techcorp-Cuadrado.png",
    },
    {
      name: "InnovateX",
      logo: "https://innovatexglobal.com/wp-content/uploads/2023/02/Innovate-Logo-2048x570.png",
    },
    {
      name: "DigitalSphere",
      logo: "https://thedigital-sphere.com/wp-content/uploads/2024/08/Untitled-design-36.png",
    },
    {
      name: "WebWizards",
      logo: "https://webwizards.in/wp-content/uploads/2023/06/WebWizardsCropped.png",
    },
    {
      name: "CloudNine",
      logo: "https://images.seeklogo.com/logo-png/41/1/cloudnine-hospitals-logo-png_seeklogo-411256.png",
    },
    {
      name: "WebWizards",
      logo: "https://webwizards.in/wp-content/ùploads/2023/06/WebWizardsCropped.png",
    },
    {
      name: "CloudNine",
      logo: "https://images.seeklogo.com/logo-png/41/1/cloudnine-hospitals-logo-png_seeklogo-411256.png",
    },
  ];

  const duplicatedCompanies = [...companies, ...companies];

  const animateScroll = () => {
    if (isPaused || !scrollContainerRef.current) return;

    scrollContainerRef.current.scrollLeft += scrollSpeed;

    if (
      scrollContainerRef.current.scrollLeft >=
      scrollContainerRef.current.scrollWidth / 2
    ) {
      scrollContainerRef.current.scrollLeft = 0;
    }

    animationRef.current = requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animateScroll);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  return (
    <div className="min-h-screen bg-saas-black text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              KTsoftTech
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're revolutionizing the way businesses operate with our
            cutting-edge SaaS solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            {
              value: "500+",
              label: "Businesses",
              icon: <Users className="h-6 w-6 text-saas-orange" />,
            },
            {
              value: "40+",
              label: "Countries",
              icon: <Globe className="h-6 w-6 text-saas-orange" />,
            },
            {
              value: "99.9%",
              label: "Uptime",
              icon: <Shield className="h-6 w-6 text-saas-orange" />,
            },
            {
              value: "3x",
              label: "Growth",
              icon: <BarChart2 className="h-6 w-6 text-saas-orange" />,
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-saas-darkGray p-6 rounded-xl border border-gray-800 text-center"
            >
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Two-column content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-400 mb-4">
              Founded in 2020, KTsoftTech began as a small team of passionate
              developers who saw an opportunity to simplify complex business
              processes through technology.
            </p>
            <p className="text-gray-400 mb-4">
              What started as a simple dashboard tool has evolved into a
              comprehensive SaaS platform serving hundreds of businesses
              worldwide.
            </p>
            <p className="text-gray-400">
              Today, we're proud to be at the forefront of SaaS innovation,
              constantly pushing boundaries to deliver exceptional value to our
              customers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-400 mb-4">
              We believe that technology should empower businesses, not
              complicate them. Our mission is to create intuitive, powerful
              tools that help companies of all sizes thrive in the digital age.
            </p>
            <div className="bg-saas-darkGray p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-3 text-saas-orange">
                Core Values
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-saas-orange mr-2">✓</span>
                  <span className="text-gray-300">
                    Customer-centric innovation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-saas-orange mr-2">✓</span>
                  <span className="text-gray-300">
                    Transparency and integrity
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-saas-orange mr-2">✓</span>
                  <span className="text-gray-300">Continuous improvement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-saas-orange mr-2">✓</span>
                  <span className="text-gray-300">
                    Collaborative excellence
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-16 relative">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Trusted By{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Leading Companies
            </span>
          </h2>

          <div className="relative overflow-hidden">
            {/* Gradient fades */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-saas-black via-saas-black/90 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-saas-black via-saas-black/90 to-transparent z-10 pointer-events-none"></div>

            <div
              ref={scrollContainerRef}
              className="overflow-x-hidden py-6"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                className="flex items-center"
                style={{ width: "max-content" }}
              >
                {duplicatedCompanies.map((company, index) => (
                  <div
                    key={`${company.name}-${index}`}
                    className="flex-shrink-0 px-8 transition-all duration-300 hover:scale-110"
                  >
                    <div className="relative group">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100"
                      />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-saas-darkGray text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-gray-700">
                        {company.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Meet Our Team section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Alex Johnson",
                role: "CEO & Founder",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
                bio: "Visionary leader with 15+ years in SaaS technology",
              },
              {
                name: "Sarah Williams",
                role: "CTO",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80",
                bio: "Tech innovator specializing in scalable architectures",
              },
              {
                name: "Michael Chen",
                role: "Lead Developer",
                img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80",
                bio: "Full-stack wizard with a passion for clean code",
              },
              {
                name: "Emily Rodriguez",
                role: "Product Manager",
                img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
                bio: "User experience advocate and product strategist",
              },
            ].map((person, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 mx-auto w-32 h-32">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full rounded-full object-cover border-2 border-gray-700 group-hover:border-saas-orange transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-saas-orange opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
                </div>
                <h3 className="font-semibold text-lg">{person.name}</h3>
                <p className="text-saas-orange text-sm mb-2">{person.role}</p>
                <p className="text-gray-400 text-xs">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-saas-orange/20 to-amber-600/20 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of companies already using KTsoftTech to streamline
            their operations and accelerate growth.
          </p>
          <button className="bg-saas-orange hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 inline-flex items-center">
            Get Started Now
            <Rocket className="ml-2 h-5 w-5" />
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
