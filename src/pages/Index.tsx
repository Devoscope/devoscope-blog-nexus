
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BLOG_POSTS } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';
import BlogCard from '@/components/blog/BlogCard';
import { ChevronRight } from 'lucide-react';

const Index: React.FC = () => {
  // Get featured blog posts
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Devoscope Consultants | Technology Solutions Provider</title>
        <meta 
          name="description" 
          content="Devoscope Consultants offers website development, CRM integration, e-commerce solutions, mobile app development, and more. Transform your business with our technology solutions."
        />
        <meta 
          name="keywords" 
          content="website development, CRM integration, e-commerce solutions, mobile app development, Vicidial integration, database structuring, AWS, DevOps"
        />
        <link rel="canonical" href="https://devoscopeconsultants.com" />
      </Helmet>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transforming Businesses with Innovative Technology Solutions
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Custom web development, CRM integration, and technology solutions tailored for your business growth
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions to help your business thrive in the digital age
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Website Development */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Website Development</h3>
                <p className="text-gray-600 mb-4">
                  Custom website design & development with responsive layouts and SEO optimization.
                </p>
                <Link to="/services/website-development" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>

              {/* CRM Development */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">CRM Development & Integration</h3>
                <p className="text-gray-600 mb-4">
                  Custom-built CRM solutions and integrations with existing systems to streamline operations.
                </p>
                <Link to="/services/crm-development" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>

              {/* E-commerce Solutions */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">E-commerce Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Full-featured online stores with inventory management and payment gateway integration.
                </p>
                <Link to="/services/ecommerce-solutions" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>

              {/* Mobile Applications */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Mobile Applications</h3>
                <p className="text-gray-600 mb-4">
                  Native and cross-platform mobile apps for Android and iOS with seamless user experience.
                </p>
                <Link to="/services/mobile-applications" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>

              {/* Vicidial Integration */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Vicidial Integration & Support</h3>
                <p className="text-gray-600 mb-4">
                  Setup, configuration, and customization of Vicidial for efficient call center operations.
                </p>
                <Link to="/services/vicidial-integration" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>

              {/* AWS & DevOps */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">AWS & DevOps Support</h3>
                <p className="text-gray-600 mb-4">
                  Cloud infrastructure setup, CI/CD pipelines, and infrastructure automation.
                </p>
                <Link to="/services/aws-devops" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Blog Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
              <h2 className="text-3xl font-bold">Latest Insights</h2>
              <Link to="/blog" className="text-blue-700 font-medium hover:text-blue-900 inline-flex items-center">
                View all articles <ChevronRight size={20} className="ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Let's discuss how our technology solutions can help your business grow and thrive in the digital landscape.
            </p>
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
