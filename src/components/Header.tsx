
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flag, Ban, Shield } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="flex items-center p-1.5 transition-all">
            <div className="relative flex items-center justify-center">
              <Ban className="h-7 w-7 text-palestinian-red" strokeWidth={2.5} />
              <Shield className="h-5 w-5 text-palestinian-green absolute" strokeWidth={2.5} />
            </div>
            <div className="ml-2 flex flex-col items-start">
              <span className="font-heading font-bold text-lg leading-tight text-palestinian-black">Boycott4</span>
              <span className="font-heading font-bold text-lg leading-tight text-palestinian-green">Palestine</span>
            </div>
          </div>
        </Link>
        <nav>
          <ul className="flex space-x-8">
            <li className="relative">
              <Link 
                to="/about" 
                className={`font-medium px-2 py-1 transition-colors ${
                  isActive('/about') 
                    ? 'text-palestinian-red' 
                    : 'text-palestinian-black hover:text-palestinian-red'
                }`}
              >
                About
                {isActive('/about') && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-palestinian-red rounded-full"></span>
                )}
              </Link>
            </li>
            <li className="relative">
              <Link 
                to="/suggest" 
                className={`font-medium px-2 py-1 transition-colors ${
                  isActive('/suggest') 
                    ? 'text-palestinian-green' 
                    : 'text-palestinian-black hover:text-palestinian-green'
                }`}
              >
                Suggest a Brand
                {isActive('/suggest') && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-palestinian-green rounded-full"></span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
