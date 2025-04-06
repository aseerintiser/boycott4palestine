
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="py-5 bg-palestinian-gray bg-opacity-30 mt-auto border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-sm font-medium text-palestinian-black">
          © {new Date().getFullYear()} Boycott4Palestine. Information provided for educational purposes.
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
