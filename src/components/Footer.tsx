
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, PhoneCall, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Devoscope Consultants</h3>
            <p className="mb-4 text-gray-300">
              Technology solutions provider specializing in web development, CRM integration,
              e-commerce solutions, and more.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-300 hover:text-blue-400">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-gray-300 hover:text-blue-400">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-300 hover:text-blue-400">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-300 hover:text-blue-400">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/website-development" className="text-gray-300 hover:text-white">Website Development</Link></li>
              <li><Link to="/services/crm-development" className="text-gray-300 hover:text-white">CRM Development & Integration</Link></li>
              <li><Link to="/services/ecommerce-solutions" className="text-gray-300 hover:text-white">E-commerce Solutions</Link></li>
              <li><Link to="/services/mobile-applications" className="text-gray-300 hover:text-white">Mobile Applications</Link></li>
              <li><Link to="/services/vicidial-integration" className="text-gray-300 hover:text-white">Vicidial Integration</Link></li>
              <li><Link to="/services/database-structuring" className="text-gray-300 hover:text-white">Database Structuring</Link></li>
              <li><Link to="/services/aws-devops" className="text-gray-300 hover:text-white">AWS & DevOps Support</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-white">Case Studies</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0 text-blue-400" />
                <span className="text-gray-300">123 Tech Park, Silicon Valley, CA 94043, USA</span>
              </div>
              <div className="flex items-center">
                <PhoneCall size={20} className="mr-2 flex-shrink-0 text-blue-400" />
                <a href="tel:+18005551234" className="text-gray-300 hover:text-white">+1 (800) 555-1234</a>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0 text-blue-400" />
                <a href="mailto:info@devoscopeconsultants.com" className="text-gray-300 hover:text-white">info@devoscopeconsultants.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Devoscope Consultants Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
