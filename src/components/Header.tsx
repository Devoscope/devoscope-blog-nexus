
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MenuIcon, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-blue-800">Devoscope</span>
            <span className="text-xl font-semibold text-gray-700">Consultants</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-700 font-medium">Home</Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-700 font-medium">Services</Link>
            <Link to="/blog" className="text-gray-600 hover:text-blue-700 font-medium">Blog</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-700 font-medium">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-700 font-medium">Contact</Link>
            <Button variant="default" className="bg-blue-700 hover:bg-blue-800">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-blue-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-3 space-y-3">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-md"
            >
              Home
            </Link>
            <Link 
              to="/services" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-md"
            >
              Services
            </Link>
            <Link 
              to="/blog" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-md"
            >
              Blog
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-md"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 px-4 text-gray-600 hover:bg-gray-50 rounded-md"
            >
              Contact
            </Link>
            <div className="pt-2">
              <Button className="w-full bg-blue-700 hover:bg-blue-800" size="lg">
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
