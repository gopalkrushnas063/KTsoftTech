import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-saas-black text-white">
      <Navbar />
      <main className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Our <span className="gradient-text">Blog</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-saas-darkGray rounded-xl overflow-hidden border border-gray-800 hover:border-saas-orange/50 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=300&q=80" 
                alt="SaaS Trends" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-saas-orange/10 text-saas-orange text-xs font-medium px-3 py-1 rounded-full mb-3">
                  Trends
                </span>
                <h2 className="text-xl font-bold mb-2">Top SaaS Trends in 2023</h2>
                <p className="text-gray-400 mb-4">Discover the latest trends shaping the SaaS industry this year.</p>
                <a href="#" className="text-saas-orange hover:underline">Read More →</a>
              </div>
            </div>
            
            {/* Blog Post 2 */}
            <div className="bg-saas-darkGray rounded-xl overflow-hidden border border-gray-800 hover:border-saas-orange/50 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=300&q=80" 
                alt="Productivity Tips" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-saas-orange/10 text-saas-orange text-xs font-medium px-3 py-1 rounded-full mb-3">
                  Productivity
                </span>
                <h2 className="text-xl font-bold mb-2">10 Ways to Boost Team Productivity</h2>
                <p className="text-gray-400 mb-4">Learn how to maximize your team's output with these proven strategies.</p>
                <a href="#" className="text-saas-orange hover:underline">Read More →</a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-saas-orange hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
              View All Articles
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;