import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code, Smartphone, ShoppingCart, Monitor, Database, Cloud, Cpu, Shield } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Monitor className="h-8 w-8 text-saas-orange" />,
      title: 'Responsive Websites',
      description: 'We build fully responsive websites that look great on all devices, from desktops to mobile phones. Our websites are optimized for performance, SEO, and user experience.',
      features: [
        'Mobile-first design approach',
        'Cross-browser compatibility',
        'SEO optimized structure',
        'Fast loading times',
        'CMS integration options'
      ]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-saas-orange" />,
      title: 'Android Applications',
      description: 'Custom Android app development tailored to your business needs. We create high-performance, secure, and scalable mobile applications for the Android platform.',
      features: [
        'Native Android development (Kotlin/Java)',
        'Material Design guidelines',
        'Google Play Store deployment',
        'API integration',
        'Offline functionality'
      ]
    },
    {
      icon: <Cpu className="h-8 w-8 text-saas-orange" />,
      title: 'iOS Applications',
      description: 'Beautiful, intuitive iOS apps built with Swift that leverage the full potential of Apple devices. We follow Apple\'s Human Interface Guidelines for premium user experience.',
      features: [
        'Swift & SwiftUI development',
        'iPhone, iPad, and Apple Watch apps',
        'App Store submission',
        'ARKit for augmented reality',
        'CoreML for machine learning'
      ]
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-saas-orange" />,
      title: 'Ecommerce Solutions',
      description: 'Complete ecommerce solutions that drive sales and provide seamless shopping experiences. From small stores to enterprise marketplaces, we have you covered.',
      features: [
        'Custom ecommerce development',
        'Shopify/WordPress WooCommerce',
        'Payment gateway integration',
        'Inventory management',
        'Analytics and reporting'
      ]
    },
    {
      icon: <Code className="h-8 w-8 text-saas-orange" />,
      title: 'Hybrid Application Development',
      description: 'Cross-platform mobile apps that work on both iOS and Android with a single codebase. Faster development and lower costs without compromising quality.',
      features: [
        'React Native/Flutter development',
        '80-90% code reuse',
        'Native-like performance',
        'Faster time-to-market',
        'Cost-effective solution'
      ]
    },
    {
      icon: <Cloud className="h-8 w-8 text-saas-orange" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services to power your business applications. We help you leverage the cloud for better performance and reliability.',
      features: [
        'AWS/Azure/Google Cloud services',
        'Cloud migration',
        'Serverless architecture',
        'DevOps automation',
        'Cost optimization'
      ]
    },
    {
      icon: <Database className="h-8 w-8 text-saas-orange" />,
      title: 'Database Solutions',
      description: 'Custom database design, implementation, and optimization to handle your data needs efficiently and securely.',
      features: [
        'SQL/NoSQL database design',
        'Database optimization',
        'Data migration',
        'Backup solutions',
        'Security implementation'
      ]
    },
    {
      icon: <Shield className="h-8 w-8 text-saas-orange" />,
      title: 'Cybersecurity Services',
      description: 'Comprehensive security solutions to protect your digital assets from threats and vulnerabilities.',
      features: [
        'Security audits',
        'Penetration testing',
        'Data encryption',
        'Compliance consulting',
        'Security monitoring'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-saas-black text-white">
      <Navbar />
      <main className="section-container py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the digital landscape.
            From web to mobile, ecommerce to cloud - we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-saas-darkGray rounded-xl p-6 border border-gray-800 hover:border-saas-orange/50 transition-all duration-300 hover:-translate-y-1 card-shadow"
            >
              <div className="bg-saas-orange/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                {service.icon}
              </div>
              <h2 className="text-xl font-bold mb-3">{service.title}</h2>
              <p className="text-gray-400 mb-4">{service.description}</p>
              
              <h3 className="text-sm font-semibold text-saas-orange mb-2">Key Features:</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-saas-orange mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-saas-orange/20 to-amber-600/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-saas-orange opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600 opacity-10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
            <p className="text-gray-300 mb-8">
              Whether you need a website, mobile app, or complete digital transformation, our team of experts is ready to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-saas-orange hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                Get a Free Consultation
              </button>
              <button className="border border-saas-orange text-saas-orange hover:bg-saas-orange hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;