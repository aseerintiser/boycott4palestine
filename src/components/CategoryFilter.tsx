
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
    <div className="w-full overflow-x-auto pb-2 mb-4">
      <div className="flex space-x-2 min-w-max">
        <button
          onClick={() => onSelectCategory('all')}
          className={cn(
            "px-3 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors",
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
              "px-3 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors",
              selectedCategory === category
                ? "bg-palestinian-red text-white shadow-sm"
                : "bg-white border border-gray-200 text-palestinian-black hover:bg-palestinian-gray hover:border-palestinian-green"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
