
import React, { useRef, useEffect, useState } from 'react';
import { Category, getCategories } from '@/data/brands/index';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: Category | 'all';
  onSelectCategory: (category: Category | 'all') => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategory, 
  onSelectCategory 
}) => {
  const categories = getCategories();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftScroll(scrollLeft > 10);
      setShowRightScroll(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      checkScrollButtons();
      scrollContainer.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      
      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, []);
  
  return (
    <div className="relative my-6">
      <div className="flex items-center">
        {showLeftScroll && (
          <button 
            onClick={scrollLeft}
            className="absolute left-0 z-10 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-md border border-gray-200 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-palestinian-red focus:ring-opacity-50 hidden md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 text-palestinian-black" />
          </button>
        )}
        
        <div 
          ref={scrollContainerRef}
          className="w-full overflow-x-auto pb-3 pt-1 px-1 scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent md:px-8"
        >
          <div className="flex space-x-2 min-w-max">
            <button
              onClick={() => onSelectCategory('all')}
              className={cn(
                "px-4 py-2.5 text-sm font-medium rounded-full whitespace-nowrap transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-palestinian-red",
                selectedCategory === 'all'
                  ? "bg-palestinian-red text-white shadow-md transform scale-105 border-0"
                  : "bg-white border border-gray-200 text-palestinian-black hover:bg-palestinian-gray hover:border-palestinian-green"
              )}
            >
              All Categories
            </button>
            
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={cn(
                  "px-4 py-2.5 text-sm font-medium rounded-full whitespace-nowrap transition-all focus:outline-none focus:ring-2 focus:ring-offset-1",
                  selectedCategory === category
                    ? "bg-palestinian-red text-white shadow-md transform scale-105 border-0 focus:ring-palestinian-red"
                    : "bg-white border border-gray-200 text-palestinian-black hover:bg-palestinian-gray hover:border-palestinian-green focus:ring-palestinian-green"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {showRightScroll && (
          <button 
            onClick={scrollRight}
            className="absolute right-0 z-10 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-md border border-gray-200 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-palestinian-red focus:ring-opacity-50 hidden md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 text-palestinian-black" />
          </button>
        )}
      </div>
      
      <div className="mt-2 text-xs text-muted-foreground text-center md:hidden">
        <span>← Scroll to see more categories →</span>
      </div>
    </div>
  );
};

export default CategoryFilter;
