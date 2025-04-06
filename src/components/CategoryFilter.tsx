
import React from 'react';
import { Category, getCategories } from '@/data/brands/index';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  selectedCategory: Category | 'all';
  onSelectCategory: (category: Category | 'all') => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategory, 
  onSelectCategory 
}) => {
  const categories = getCategories();
  
  return (
    <div className="w-full overflow-x-auto pb-2 mb-4 scrollbar-thin">
      <div className="flex space-x-2 min-w-max pb-1">
        <button
          onClick={() => onSelectCategory('all')}
          className={cn(
            "px-3 py-1.5 text-sm font-medium rounded-full whitespace-nowrap transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-palestinian-red",
            selectedCategory === 'all'
              ? "bg-palestinian-red text-white shadow-sm"
              : "bg-white border border-gray-200 text-palestinian-black hover:bg-palestinian-gray hover:border-palestinian-green"
          )}
        >
          All
        </button>
        
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={cn(
              "px-3 py-1.5 text-sm font-medium rounded-full whitespace-nowrap transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1",
              selectedCategory === category
                ? "bg-palestinian-red text-white shadow-sm focus:ring-palestinian-red"
                : "bg-white border border-gray-200 text-palestinian-black hover:bg-palestinian-gray hover:border-palestinian-green focus:ring-palestinian-green"
            )}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="mt-1 text-xs text-muted-foreground text-center md:text-left">
        <span className="md:hidden">← Scroll to see more categories →</span>
      </div>
    </div>
  );
};

export default CategoryFilter;
