import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-saas-black text-white">
      <Navbar />
      <main className="section-container py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          
          <div className="bg-saas-darkGray rounded-xl p-8 border border-gray-800">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 mb-6">Last updated: June 5, 2023</p>
              
              <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
              <p className="text-gray-400 mb-6">
                Sassland ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              
              <h2 className="text-2xl font-bold mb-4 text-white">2. Information We Collect</h2>
              <p className="text-gray-400 mb-4">We may collect the following types of information:</p>
              <ul className="text-gray-400 mb-6 list-disc pl-6 space-y-2">
                <li>Personal Information: Name, email address, phone number, etc.</li>
                <li>Payment Information: When you purchase our services</li>
                <li>Usage Data: How you interact with our website and services</li>
                <li>Cookies and Tracking Technologies</li>
              </ul>
              
              <h2 className="text-2xl font-bold mb-4 text-white">3. How We Use Your Information</h2>
              <p className="text-gray-400 mb-4">We use the information we collect for various purposes:</p>
              <ul className="text-gray-400 mb-6 list-disc pl-6 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To notify you about changes to our services</li>
                <li>To allow you to participate in interactive features</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information</li>
                <li>To monitor usage of our services</li>
                <li>To detect and prevent technical issues</li>
              </ul>
              
              <h2 className="text-2xl font-bold mb-4 text-white">4. Data Security</h2>
              <p className="text-gray-400 mb-6">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <h2 className="text-2xl font-bold mb-4 text-white">5. Your Data Protection Rights</h2>
              <p className="text-gray-400 mb-6">
                Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, delete, or restrict processing of your data.
              </p>
              
              <h2 className="text-2xl font-bold mb-4 text-white">6. Changes to This Policy</h2>
              <p className="text-gray-400 mb-6">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
              
              <h2 className="text-2xl font-bold mb-4 text-white">7. Contact Us</h2>
              <p className="text-gray-400">
                If you have any questions about this Privacy Policy, please contact us at privacy@sassland.com.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;