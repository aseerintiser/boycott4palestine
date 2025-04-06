
import React from 'react';
import { Category, getCategories } from '@/data/brands/index';
import { cn } from '@/lib/utils';
import { Check, Tag } from 'lucide-react';

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
    <div className="w-full mb-6">
      <div className="overflow-x-auto pb-2 scrollbar-thin">
        <div className="flex space-x-2 min-w-max pb-1">
          <button
            onClick={() => onSelectCategory('all')}
            className={cn(
              "px-3 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-palestinian-red flex items-center gap-1.5",
              selectedCategory === 'all'
                ? "bg-palestinian-red text-white shadow-sm transform scale-105"
                : "bg-white border border-gray-200 text-palestinian-black hover:bg-palestinian-gray hover:border-palestinian-green"
            )}
          >
            <Check className={cn("h-4 w-4", selectedCategory === 'all' ? "opacity-100" : "opacity-0")} />
            All
          </button>
          
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 flex items-center gap-1.5",
                selectedCategory === category
                  ? "bg-palestinian-red text-white shadow-sm transform scale-105 focus:ring-palestinian-red"
                  : "bg-white border border-gray-200 text-palestinian-black hover:bg-palestinian-gray hover:border-palestinian-green focus:ring-palestinian-green"
              )}
            >
              <Check className={cn("h-4 w-4", selectedCategory === category ? "opacity-100" : "opacity-0")} />
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="mt-1 text-xs text-muted-foreground text-center md:text-left">
        <span className="md:hidden">← Scroll to see more categories →</span>
      </div>
    </div>
  );
};

export default CategoryFilter;
