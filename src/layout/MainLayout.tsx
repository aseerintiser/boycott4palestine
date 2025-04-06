
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
        <div className="container mx-auto px-4 text-sm text-palestinian-black text-center">
          © {new Date().getFullYear()} Boycott4Palestine. Information provided for educational purposes.
        </div>
      </footer>
      <ScrollToTopButton />
    </div>
  );
};

export default MainLayout;
