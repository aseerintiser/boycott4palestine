
import React from 'react';
import { Link } from 'react-router-dom';
import { Flag } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Flag className="h-7 w-7 text-red-600" strokeWidth={2.5} />
          <span className="font-bold text-xl tracking-tight">Boycott4Palestine</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="font-medium text-foreground hover:text-red-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="font-medium text-foreground hover:text-red-600 transition-colors">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
