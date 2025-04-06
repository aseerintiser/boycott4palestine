
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';

const PageTransition: React.FC = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Reset and start loading
    setIsLoading(true);
    setProgress(0);

    // Simulate progress
    const timer1 = setTimeout(() => setProgress(30), 100);
    const timer2 = setTimeout(() => setProgress(60), 200);
    const timer3 = setTimeout(() => setProgress(80), 300);
    const timer4 = setTimeout(() => {
      setProgress(100);
      // Hide the loader after transition completes
      const hideTimer = setTimeout(() => {
        setIsLoading(false);
      }, 300); // Delay to allow the animation to complete
      return () => clearTimeout(hideTimer);
    }, 400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [location.pathname]); // Trigger on route change

  if (!isLoading) return null;

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-300 ${progress === 100 ? 'opacity-0' : 'opacity-100'}`}>
      <Progress 
        value={progress}
        className="h-1 w-full bg-gray-100"
        indicatorClassName="bg-palestinian-red" 
      />
    </div>
  );
};

export default PageTransition;
