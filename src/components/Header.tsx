
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flag, Ban, Shield, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  return (
    <header className={`bg-white sticky top-0 z-50 transition-shadow ${isScrolled ? 'shadow-md' : 'shadow-sm border-b border-gray-100'}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex items-center p-1.5 transition-all relative">
              <div className="relative flex items-center justify-center group-hover:scale-105 transition-transform">
                <Ban className="h-7 w-7 text-palestinian-red" strokeWidth={2.5} />
                <Shield className="h-5 w-5 text-palestinian-green absolute" strokeWidth={2.5} />
              </div>
              <div className="ml-2 flex flex-col items-start">
                <span className="font-heading font-bold text-lg leading-tight text-palestinian-black">Boycott4</span>
                <span className="font-heading font-bold text-lg leading-tight text-palestinian-green">Palestine</span>
              </div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  to="/about" 
                  className={`font-medium px-3 py-2 rounded-md transition-colors ${
                    isActive('/about') 
                      ? 'bg-gray-100 text-palestinian-red' 
                      : 'text-palestinian-black hover:bg-gray-50 hover:text-palestinian-red'
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/suggest" 
                  className={`font-medium px-3 py-2 rounded-md transition-colors ${
                    isActive('/suggest') 
                      ? 'bg-gray-100 text-palestinian-green' 
                      : 'text-palestinian-black hover:bg-gray-50 hover:text-palestinian-green'
                  }`}
                >
                  Suggest a Brand
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-palestinian-red"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-palestinian-black" />
            ) : (
              <Menu className="h-6 w-6 text-palestinian-black" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-3 mt-2 border-t border-gray-100">
            <ul className="space-y-1">
              <li>
                <Link 
                  to="/about" 
                  className={`block font-medium px-3 py-3 rounded-md transition-colors ${
                    isActive('/about') 
                      ? 'bg-gray-100 text-palestinian-red' 
                      : 'text-palestinian-black hover:bg-gray-50 hover:text-palestinian-red'
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/suggest" 
                  className={`block font-medium px-3 py-3 rounded-md transition-colors ${
                    isActive('/suggest') 
                      ? 'bg-gray-100 text-palestinian-green' 
                      : 'text-palestinian-black hover:bg-gray-50 hover:text-palestinian-green'
                  }`}
                >
                  Suggest a Brand
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
