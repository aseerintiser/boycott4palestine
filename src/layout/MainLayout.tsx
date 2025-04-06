
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import PageTransition from '@/components/PageTransition';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PageTransition />
      <Header />
      <main className="flex-1 animate-fade-in">
        <Outlet />
      </main>
      <footer className="py-6 bg-palestinian-gray bg-opacity-30 mt-auto border-t border-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-palestinian-black">
          <div>
            © {new Date().getFullYear()} Boycott4Palestine. Information provided for educational purposes.
          </div>
          <div className="mt-3 md:mt-0 flex gap-4">
            <a href="/about" className="hover:text-palestinian-red transition-colors hover:underline">About</a>
            <a href="/suggest" className="hover:text-palestinian-red transition-colors hover:underline">Suggest a Brand</a>
            <a href="/about#contact" className="hover:text-palestinian-red transition-colors hover:underline">Contact</a>
          </div>
        </div>
      </footer>
      <ScrollToTopButton />
    </div>
  );
};

export default MainLayout;
