import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-saas-black text-white">
      <Navbar />
      <main className="section-container py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have questions or need assistance? Our team is here to help you with any inquiries about our products and services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-saas-darkGray rounded-xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-saas-orange/10 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-saas-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-400">support@sassland.com</p>
                    <p className="text-gray-400">sales@sassland.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-saas-orange/10 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-saas-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-400">Mon-Fri: 9am - 5pm EST</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="bg-saas-orange/10 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-saas-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p className="text-gray-400">123 SaaS Street</p>
                    <p className="text-gray-400">Tech City, TC 10001</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { name: 'Twitter', icon: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' },
                    { name: 'Facebook', icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
                    { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                    { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' }
                  ].map((social, index) => (
                    <a 
                      key={index} 
                      href="#" 
                      className="text-gray-400 hover:text-saas-orange transition-colors bg-saas-darkGray p-3 rounded-lg"
                      aria-label={social.name}
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-saas-darkGray rounded-xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold mb-8">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="first-name" 
                      className="w-full bg-saas-black border border-gray-700 rounded-lg px-4 py-3 focus:border-saas-orange focus:ring-saas-orange/50 focus:outline-none transition-colors" 
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="last-name" 
                      className="w-full bg-saas-black border border-gray-700 rounded-lg px-4 py-3 focus:border-saas-orange focus:ring-saas-orange/50 focus:outline-none transition-colors" 
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-saas-black border border-gray-700 rounded-lg px-4 py-3 focus:border-saas-orange focus:ring-saas-orange/50 focus:outline-none transition-colors" 
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <select 
                    id="subject" 
                    className="w-full bg-saas-black border border-gray-700 rounded-lg px-4 py-3 focus:border-saas-orange focus:ring-saas-orange/50 focus:outline-none transition-colors text-gray-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Product Feedback</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full bg-saas-black border border-gray-700 rounded-lg px-4 py-3 focus:border-saas-orange focus:ring-saas-orange/50 focus:outline-none transition-colors" 
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="consent" 
                    className="h-4 w-4 border border-gray-700 rounded bg-saas-black focus:ring-saas-orange/50 focus:ring-offset-saas-black text-saas-orange"
                  />
                  <label htmlFor="consent" className="ml-2 block text-sm text-gray-400">
                    I agree to the <a href="/privacy-policy" className="text-saas-orange hover:underline">Privacy Policy</a>
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-saas-orange hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 bg-saas-darkGray rounded-xl overflow-hidden border border-gray-800">
            <div className="h-96 w-full bg-gradient-to-r from-saas-orange/10 to-amber-600/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-saas-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Headquarters</h3>
                <p className="text-gray-400 max-w-md mx-auto">
                  123 SaaS Street, Tech City, TC 10001
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;