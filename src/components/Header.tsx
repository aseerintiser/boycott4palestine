
import React from 'react';
import { Link } from 'react-router-dom';
import { Flag, Ban, Shield } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b-2 border-palestinian-red">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="flex items-center bg-palestinian-gray rounded-md p-1.5 transition-all group-hover:bg-palestinian-gray/80">
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
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="font-medium text-palestinian-black hover:text-palestinian-red transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="font-medium text-palestinian-black hover:text-palestinian-red transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/suggest" className="font-medium text-palestinian-black hover:text-palestinian-green transition-colors">
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
