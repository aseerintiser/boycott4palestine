
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
      </div>
    </header>
  );
};

export default Header;
