
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="py-4 bg-white shadow-sm mt-auto">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Boycott4Palestine. Information provided for educational purposes.
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
